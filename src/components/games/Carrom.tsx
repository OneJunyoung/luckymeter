'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Play, Home } from 'lucide-react';
import Link from 'next/link';
import ScaledGame from '../ScaledGame';
import ScoreBoard from '../ScoreBoard';
import GameOver from '../GameOver';
import { soundManager } from '@/utils/soundManager';

// --- Physics Engine & Game Constants ---
const BOARD_SIZE = 400;
const STRIKER_RADIUS = 15;
const COIN_RADIUS = 12;
const QUEEN_RADIUS = 12;
const HOLE_RADIUS = 18;
const HOLE_POSITIONS = [
  { x: 30, y: 30 },
  { x: BOARD_SIZE - 30, y: 30 },
  { x: 30, y: BOARD_SIZE - 30 },
  { x: BOARD_SIZE - 30, y: BOARD_SIZE - 30 }
];
const FRICTION = 0.985;
const RESTITUTION = 0.8; // Bounciness

type CoinType = 'white' | 'black' | 'queen' | 'striker';

interface PhysicsBody {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
  type: CoinType;
  isActive: boolean; // if false, it's pocketed
}

type GameState = 'setup' | 'aiming' | 'moving' | 'gameover';
type Turn = 'bottom' | 'top';
type GameMode = 'vs-ai' | 'pvp';

export default function Carrom() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>('setup');
  const [gameMode, setGameMode] = useState<GameMode>('vs-ai');
  const [turn, setTurn] = useState<Turn>('bottom');
  const [score, setScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  
  const stateRef = useRef({
    gameState: 'setup' as GameState,
    gameMode: 'vs-ai' as GameMode,
    turn: 'bottom' as Turn,
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    dragCurrent: { x: 0, y: 0 }
  });

  const updateGameState = (s: GameState) => {
      stateRef.current.gameState = s;
      setGameState(s);
  };
  const updateGameMode = (m: GameMode) => {
      stateRef.current.gameMode = m;
      setGameMode(m);
  };
  const updateTurn = (t: Turn) => {
      stateRef.current.turn = t;
      setTurn(t);
  };

  // Game Entities refs (we use refs for physics loop to avoid react re-renders on 60fps)
  const bodiesRef = useRef<PhysicsBody[]>([]);
  const animationRef = useRef<number | null>(null);

  // Init Board setup
  const initGame = () => {
    soundManager.playSynth('pop');
    setScore(0);
    setAiScore(0);
    updateTurn('bottom');
    
    const newBodies: PhysicsBody[] = [];
    const cx = BOARD_SIZE / 2;
    const cy = BOARD_SIZE / 2;

    // Striker (Starts bottom, mass 3 = heavy)
    newBodies.push({
      id: 'striker', type: 'striker', x: cx, y: BOARD_SIZE - 80,
      vx: 0, vy: 0, radius: STRIKER_RADIUS, mass: 3, isActive: true
    });

    // Queen (Center)
    newBodies.push({
      id: 'queen', type: 'queen', x: cx, y: cy,
      vx: 0, vy: 0, radius: QUEEN_RADIUS, mass: 1, isActive: true
    });

    // Inner Circle (6 coins)
    const innerRadius = 25;
    let isWhite = true;
    for (let i = 0; i < 6; i++) {
        const Math_PI = Math.PI;
        // Start angle offset slightly so points line up like classic carrom
        const angle = (i * Math_PI) / 3 + (Math_PI / 6);
        newBodies.push({
            id: `coin-inner-${i}`, type: isWhite ? 'white' : 'black',
            x: cx + Math.cos(angle) * innerRadius, y: cy + Math.sin(angle) * innerRadius,
            vx: 0, vy: 0, radius: COIN_RADIUS, mass: 1, isActive: true
        });
        isWhite = !isWhite;
    }

    // Outer Circle (12 coins)
    const outerRadius = 50;
    // The outer circle has 12 coins, alternating 2 of one color, then 1 of the other to maintain 9 of each total
    // But a simple alternating pattern around 12 spots works because inner has 3w/3b and queen is red.
    // Total needed: 9w, 9b. We have 3w, 3b. Need 6w, 6b. Alternating 12 coins perfectly provides 6w, 6b.
    isWhite = false; // start opposite so they interleave nicely
    for (let i = 0; i < 12; i++) {
        const Math_PI = Math.PI;
        const angle = (i * Math_PI) / 6;
        newBodies.push({
            id: `coin-outer-${i}`, type: isWhite ? 'white' : 'black',
            x: cx + Math.cos(angle) * outerRadius, y: cy + Math.sin(angle) * outerRadius,
            vx: 0, vy: 0, radius: COIN_RADIUS, mass: 1, isActive: true
        });
        isWhite = !isWhite;
    }

    bodiesRef.current = newBodies;
    updateGameState('aiming');
    startPhysicsLoop();
  };

  const startPhysicsLoop = () => {
     if (animationRef.current) cancelAnimationFrame(animationRef.current);
     
     const loop = () => {
         updatePhysics();
         drawCanvas();
         animationRef.current = requestAnimationFrame(loop);
     };
     loop();
  };

  const stopPhysicsLoop = () => {
     if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  // --- Core Physics Engine ---
  const updatePhysics = () => {
     const bodies = bodiesRef.current;
     let isMoving = false;

     // 1. Move bodies & Apply Friction
     for (const b of bodies) {
         if (!b.isActive) continue;
         
         b.x += b.vx;
         b.y += b.vy;
         b.vx *= FRICTION;
         b.vy *= FRICTION;

         if (Math.abs(b.vx) < 0.05) b.vx = 0;
         if (Math.abs(b.vy) < 0.05) b.vy = 0;

         if (b.vx !== 0 || b.vy !== 0) isMoving = true;

         // Check Wall Collisions
         if (b.x - b.radius < 0) { b.x = b.radius; b.vx *= -RESTITUTION; }
         if (b.x + b.radius > BOARD_SIZE) { b.x = BOARD_SIZE - b.radius; b.vx *= -RESTITUTION; }
         if (b.y - b.radius < 0) { b.y = b.radius; b.vy *= -RESTITUTION; }
         if (b.y + b.radius > BOARD_SIZE) { b.y = BOARD_SIZE - b.radius; b.vy *= -RESTITUTION; }
     }

     // 2. Check Collisions (Circle-Circle resolution)
     for (let i = 0; i < bodies.length; i++) {
         for (let j = i + 1; j < bodies.length; j++) {
             const b1 = bodies[i];
             const b2 = bodies[j];
             if (!b1.isActive || !b2.isActive) continue;

             const dx = b2.x - b1.x;
             const dy = b2.y - b1.y;
             const dist = Math.sqrt(dx * dx + dy * dy);
             const minDist = b1.radius + b2.radius;

             if (dist < minDist && dist > 0) {
                 // Push apart to prevent sticking
                 const overlap = minDist - dist;
                 const nx = dx / dist;
                 const ny = dy / dist;
                 
                 // Move bodies out of intersection based on mass proportion (equal mass = equal push)
                 const totalMass = b1.mass + b2.mass;
                 const r1 = b2.mass / totalMass;
                 const r2 = b1.mass / totalMass;

                 b1.x -= nx * overlap * r1;
                 b1.y -= ny * overlap * r1;
                 b2.x += nx * overlap * r2;
                 b2.y += ny * overlap * r2;

                 // Conservation of momentum for velocities
                 const vRelativeX = b2.vx - b1.vx;
                 const vRelativeY = b2.vy - b1.vy;
                 const speed = vRelativeX * nx + vRelativeY * ny;

                 if (speed < 0) {
                     const impulse = -(1 + RESTITUTION) * speed / (1/b1.mass + 1/b2.mass);
                     const ix = impulse * nx;
                     const iy = impulse * ny;

                     b1.vx -= ix / b1.mass;
                     b1.vy -= iy / b1.mass;
                     b2.vx += ix / b2.mass;
                     b2.vy += iy / b2.mass;
                     
                     if(Math.abs(speed) > 2) soundManager.playSynth('pop');
                 }
             }
         }
     }

     // 3. Check Pockets
     let pocketedThisTurn = 0;
     for (const b of bodies) {
         if (!b.isActive) continue;
         for (const hole of HOLE_POSITIONS) {
             const dx = b.x - hole.x;
             const dy = b.y - hole.y;
             const dist = Math.sqrt(dx * dx + dy * dy);
             if (dist < HOLE_RADIUS) {
                 b.isActive = false;
                 
                 if (b.type === 'striker') {
                     // Foul!
                     soundManager.playSynth('gameover');
                     // Foul costs a point (subtracting pocketed coin and returning to board usually, but for arcade we just deduct score)
                     if (stateRef.current.turn === 'bottom') setScore(s => Math.max(0, s - 1));
                     else setAiScore(s => Math.max(0, s - 1));
                 } else {
                     soundManager.playSynth('success');
                     
                     // In official rules:
                     // Player 1 (Bottom) collects White coins
                     // Player 2 (Top/AI) collects Black coins
                     if (b.type === 'white') {
                         if (stateRef.current.turn === 'bottom') pocketedThisTurn++; // Earned a bonus turn
                         setScore(s => s + 1);
                     } else if (b.type === 'black') {
                         if (stateRef.current.turn === 'top') pocketedThisTurn++;    // Earned a bonus turn
                         setAiScore(s => s + 1);
                     } else if (b.type === 'queen') {
                         pocketedThisTurn++; // Queen gives an extra turn
                         // Queen is worth 3 points effectively, but handled differently in full match.
                         // Here we'll grant 3 points to the current player's tracker for simplicity in arcade
                         if (stateRef.current.turn === 'bottom') setScore(s => s + 3);
                         else setAiScore(s => s + 3);
                     }
                 }
                 break;
             }
         }
     }

     // 4. Update Game Flow State
     if (stateRef.current.gameState === 'moving' && !isMoving) {
         handleTurnEnd(pocketedThisTurn);
     }
  };

  const handleTurnEnd = (pocketed: number) => {
      const bodies = bodiesRef.current;
      const striker = bodies.find(b => b.type === 'striker')!;
      
      // Reset striker position
      striker.isActive = true;
      striker.vx = 0;
      striker.vy = 0;
      
      const coinsLeft = bodies.filter(b => (b.type === 'white' || b.type === 'black') && b.isActive).length;

      // Check if someone reached 9 points (collected all their coins)
      if (score >= 9 || aiScore >= 9 || coinsLeft === 0) {
          updateGameState('gameover');
          return;
      }

      updateGameState('aiming');
      
      if (pocketed === 0) {
          // Pass turn
          updateTurn(stateRef.current.turn === 'bottom' ? 'top' : 'bottom');
          
          if (stateRef.current.turn === 'top' && stateRef.current.gameMode === 'vs-ai') {
              striker.x = BOARD_SIZE / 2;
              striker.y = 80; // AI side
              setTimeout(executeAITurn, 1000);
          } else if (stateRef.current.turn === 'top') {
              striker.x = BOARD_SIZE / 2;
              striker.y = 80; // Top player side
          } else {
              striker.x = BOARD_SIZE / 2;
              striker.y = BOARD_SIZE - 80; // Bottom player side
          }
      } else {
          // Keep turn
          if (stateRef.current.turn === 'top' && stateRef.current.gameMode === 'vs-ai') {
              striker.x = BOARD_SIZE / 2;
              striker.y = 80;
              setTimeout(executeAITurn, 1000);
          } else if (stateRef.current.turn === 'top') {
              striker.x = BOARD_SIZE / 2;
              striker.y = 80;
          } else {
              striker.x = BOARD_SIZE / 2;
              striker.y = BOARD_SIZE - 80;
          }
      }
  };

  const executeAITurn = () => {
      if (stateRef.current.gameState === 'gameover') return;
      const bodies = bodiesRef.current;
      const striker = bodies.find(b => b.type === 'striker')!;
      
      // AI in official rules targets Black coins, or Queen
      const targets = bodies.filter(b => (b.type === 'black' || b.type === 'queen') && b.isActive);
      if (targets.length === 0) {
          // Fallback if no specific coins left (shouldn't happen before game over but just in case)
          updateGameState('moving');
          return;
      }
      
      let bestTarget = targets[0];
      let bestImpactX = bestTarget.x;
      let bestImpactY = bestTarget.y;
      let minDifficulty = Infinity;

      // Smart AI Calculation: Find easiest path from Striker -> Target -> Pocket
      for (const target of targets) {
          for (const hole of HOLE_POSITIONS) {
              const h_to_t_x = target.x - hole.x;
              const h_to_t_y = target.y - hole.y;
              const dist_h_t = Math.sqrt(h_to_t_x**2 + h_to_t_y**2);
              
              if (dist_h_t === 0) continue;

              // Normalized vector from hole through target (to find exactly where the striker should hit)
              const nx = h_to_t_x / dist_h_t;
              const ny = h_to_t_y / dist_h_t;
              
              const impact_x = target.x + nx * (COIN_RADIUS + STRIKER_RADIUS);
              const impact_y = target.y + ny * (COIN_RADIUS + STRIKER_RADIUS);

              const s_to_i_x = impact_x - striker.x;
              const s_to_i_y = impact_y - striker.y;
              const dist_s_i = Math.sqrt(s_to_i_x**2 + s_to_i_y**2);

              // Avoid shots where the striker travels directly opposite to the hole (backward shot impossible)
              // We check the dot product of the striker's approach and the hole's path
              const dot = (s_to_i_x * -nx) + (s_to_i_y * -ny);

              let difficulty = dist_h_t + dist_s_i;
              // If angle is highly unfavorable (striker behind token), severely penalize
              if (dot < 0) {
                 difficulty += 5000;
              }

              // Simple line-of-sight check to prevent shooting through other coins
              for (const obstacle of targets) {
                 if (obstacle.id === target.id) continue;
                 const o_to_s_x = obstacle.x - striker.x;
                 const o_to_s_y = obstacle.y - striker.y;
                 const dist_o_s = Math.sqrt(o_to_s_x**2 + o_to_s_y**2);
                 const ortho_dist = Math.abs((s_to_i_y * obstacle.x) - (s_to_i_x * obstacle.y) + impact_x * striker.y - impact_y * striker.x) / dist_s_i;
                 
                 // if strictly between striker and impact point within radius distance
                 if (ortho_dist < (COIN_RADIUS * 2) && dist_o_s < dist_s_i && ((o_to_s_x * s_to_i_x + o_to_s_y * s_to_i_y) > 0)) {
                      difficulty += 2000;
                 }
              }

              if (difficulty < minDifficulty) {
                  minDifficulty = difficulty;
                  bestTarget = target;
                  bestImpactX = impact_x;
                  bestImpactY = impact_y;
              }
          }
      }
      
      const dx = bestImpactX - striker.x;
      const dy = bestImpactY - striker.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      // Extremely slight noise to make AI occasionally miss
      const noise = (Math.random() - 0.5) * 1.5; 
      
      if (dist > 0) {
          striker.vx = ((dx / dist) * 18) + (noise * 0.1);
          striker.vy = ((dy / dist) * 18) + (noise * 0.1);
      }

      updateGameState('moving');
  };

  // --- Rendering ---
  const drawCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear
      ctx.clearRect(0,0, BOARD_SIZE, BOARD_SIZE);

      // Draw Board Lines
      ctx.strokeStyle = 'rgba(0,0,0,0.2)';
      ctx.lineWidth = 2;
      
      // Inner Square
      ctx.strokeRect(60, 60, BOARD_SIZE - 120, BOARD_SIZE - 120);
      
      // Center circle
      ctx.beginPath();
      ctx.arc(BOARD_SIZE/2, BOARD_SIZE/2, 40, 0, Math.PI * 2);
      ctx.stroke();

      // Pockets
      HOLE_POSITIONS.forEach(pos => {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, HOLE_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = '#1e293b'; 
          ctx.fill();
          ctx.strokeStyle = '#0f172a';
          ctx.lineWidth = 4;
          ctx.stroke();
      });

      // Drag line
      if (stateRef.current.isDragging && stateRef.current.gameState === 'aiming') {
          if (stateRef.current.gameMode === 'vs-ai' && stateRef.current.turn === 'top') return; // AI doesn't render drag line
          
          const dx = stateRef.current.dragStart.x - stateRef.current.dragCurrent.x;
          const dy = stateRef.current.dragStart.y - stateRef.current.dragCurrent.y;
          
          const striker = bodiesRef.current.find(b => b.type === 'striker');
          if (striker) {
            ctx.beginPath();
            ctx.moveTo(striker.x, striker.y);
            // Draw force indicator opposite to drag
            ctx.lineTo(striker.x + dx, striker.y + dy);
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
            ctx.lineWidth = 4;
            ctx.stroke();
          }
      }

      // Draw Bodies
      bodiesRef.current.forEach(b => {
          if (!b.isActive) return;

          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          
          if (b.type === 'white') {
              ctx.fillStyle = '#f8fafc';
              ctx.fill();
              ctx.strokeStyle = '#cbd5e1';
          } else if (b.type === 'black') {
              ctx.fillStyle = '#334155';
              ctx.fill();
              ctx.strokeStyle = '#0f172a';
          } else if (b.type === 'queen') {
              ctx.fillStyle = '#ef4444';
              ctx.fill();
              ctx.strokeStyle = '#7f1d1d';
          } else if (b.type === 'striker') {
              ctx.fillStyle = stateRef.current.turn === 'bottom' ? '#3b82f6' : '#ef4444';
              ctx.fill();
              ctx.strokeStyle = stateRef.current.turn === 'bottom' ? '#1e3a8a' : '#7f1d1d';
          }
          ctx.lineWidth = 2;
          ctx.stroke();

          // Highlight striker
          if (b.type === 'striker') {
             ctx.beginPath();
             ctx.arc(b.x, b.y, b.radius - 4, 0, Math.PI * 2);
             ctx.strokeStyle = 'rgba(255,255,255,0.5)';
             ctx.stroke();
          }
      });
  };

  // --- Input Handling ---
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      if (stateRef.current.gameState !== 'aiming') return;
      if (stateRef.current.gameMode === 'vs-ai' && stateRef.current.turn === 'top') return; // block human input for AI turn

      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Calculate logical coordinates relative to scaled canvas
      const scaleX = BOARD_SIZE / rect.width;
      const scaleY = BOARD_SIZE / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      stateRef.current.isDragging = true;
      stateRef.current.dragStart = { x, y };
      stateRef.current.dragCurrent = { x, y };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!stateRef.current.isDragging) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const scaleX = BOARD_SIZE / rect.width;
      const scaleY = BOARD_SIZE / rect.height;
      stateRef.current.dragCurrent = {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY
      };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
      try { e.currentTarget.releasePointerCapture(e.pointerId); } catch(err){}
      if (!stateRef.current.isDragging || stateRef.current.gameState !== 'aiming') return;
      if (stateRef.current.gameMode === 'vs-ai' && stateRef.current.turn === 'top') {
          stateRef.current.isDragging = false;
          return;
      }
      stateRef.current.isDragging = false;

      const dx = stateRef.current.dragStart.x - stateRef.current.dragCurrent.x;
      const dy = stateRef.current.dragStart.y - stateRef.current.dragCurrent.y;
      
      const distance = Math.sqrt(dx*dx + dy*dy);
      
      if (distance > 10) { // minimum drag threshold to register shoot
          const striker = bodiesRef.current.find(b => b.type === 'striker');
          if (striker) {
               // Apply velocity proportional to drag distance
               striker.vx = dx * 0.15;
               striker.vy = dy * 0.15;
               
               // Cap Speed
               const speed = Math.sqrt(striker.vx**2 + striker.vy**2);
               if (speed > 25) {
                   striker.vx *= 25/speed;
                   striker.vy *= 25/speed;
               }

               updateGameState('moving');
          }
      }
  };


  useEffect(() => {
     return () => stopPhysicsLoop(); // cleanup on unmount
  }, []);

  return (
    <ScaledGame logicalWidth={450} logicalHeight={700}>
      <div className="w-full max-w-[450px] w-[450px] flex flex-col items-center select-none touch-none pb-8 h-full bg-slate-50 rounded-3xl p-4 sm:p-6 shadow-2xl glass-card relative min-h-[500px]">
        
        {/* Simple Header */}
        <div className="w-full px-6 py-4 flex justify-between items-center text-slate-800 mb-2">
           <h1 className="text-3xl font-black italic tracking-wider text-slate-800 opacity-90">CARROM</h1>
           
           {(gameState === 'aiming' || gameState === 'moving') && (
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-end">
                       <span className={`text-[10px] font-bold uppercase ${turn === 'bottom' ? 'text-blue-600' : 'text-slate-500'}`}>You {gameMode === 'pvp' ? '(P1)' : ''}</span>
                       <span className="text-2xl font-black text-slate-800">{score}<span className="text-sm text-slate-500 font-bold">/9</span></span>
                    </div>
                    <div className="h-6 w-px bg-slate-300" />
                    <div className="flex flex-col items-start">
                       <span className={`text-[10px] font-bold uppercase ${turn === 'top' ? 'text-red-500' : 'text-slate-500'}`}>{gameMode === 'vs-ai' ? 'AI' : 'Friend (P2)'}</span>
                       <span className="text-2xl font-black text-slate-800">{aiScore}<span className="text-sm text-slate-500 font-bold">/9</span></span>
                    </div>
                </div>
            )}
        </div>

        <div className="bg-amber-100 p-3 rounded-3xl shadow-2xl relative w-full aspect-square border-b-8 border-r-8 border-amber-900/40">
           {/* Wooden Texture Background */}
           <div className="absolute inset-0 bg-[#e0b07a] rounded-3xl pointer-events-none overflow-hidden mix-blend-multiply opacity-50" style={{
               backgroundImage: `radial-gradient(#8f5c2b 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
           }}/>
           
           <canvas
               ref={canvasRef}
               width={BOARD_SIZE}
               height={BOARD_SIZE}
               style={{ width: '100%', height: '100%', touchAction: 'none' }}
               className="bg-[#f0d099] rounded-2xl relative z-10 block cursor-crosshair border border-amber-900/20 shadow-inner"
               onPointerDown={handlePointerDown}
               onPointerMove={handlePointerMove}
               onPointerUp={handlePointerUp}
               onPointerCancel={handlePointerUp}
           />

           {/* Overlays */}
           <AnimatePresence>
              {gameState === 'setup' && (
                  <motion.div 
                     initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                     className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 rounded-3xl backdrop-blur-sm"
                  >
                      <Trophy className="w-16 h-16 text-amber-400 mb-4" />
                      <h2 className="text-3xl text-white font-black mb-6">Carrom Board</h2>
                  <div className="flex gap-4 w-full mt-4 mb-2">
                      <button 
                         onClick={() => updateGameMode('vs-ai')}
                         className={`flex-1 py-3 rounded-xl font-bold transition-all ${gameMode === 'vs-ai' ? 'bg-amber-500 text-slate-900 ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                      >
                         vs AI
                      </button>
                      <button 
                         onClick={() => updateGameMode('pvp')}
                         className={`flex-1 py-3 rounded-xl font-bold transition-all ${gameMode === 'pvp' ? 'bg-amber-500 text-slate-900 ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                      >
                         vs Friend
                      </button>
                  </div>
                  <button 
                         onClick={initGame}
                         className="px-8 py-4 w-full bg-amber-500 hover:bg-amber-400 text-amber-950 font-black rounded-xl text-lg flex items-center justify-center gap-2 transform transition-transform hover:scale-105"
                      >
                         <Play className="fill-current w-5 h-5" /> Start Match
                      </button>
                  </motion.div>
              )}
           </AnimatePresence>
        </div>

        <div className="mt-6 w-full px-6 flex justify-between items-center text-slate-400">
           {gameState === 'aiming' && (
               <span className="text-sm font-bold bg-slate-800 px-4 py-2 rounded-full border border-white/10 uppercase tracking-wider">
                   {(gameMode === 'vs-ai' && turn === 'top') 
                      ? 'AI is thinking...' 
                      : (turn === 'top' ? 'P2 Drag to Aim & Shoot' : 'P1 Drag to Aim & Shoot')}
               </span>
           )}
           <Link href="/games" className="ml-auto inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-sm font-bold">
               <Home className="w-4 h-4" /> Exit
           </Link>
        </div>

         <AnimatePresence>
            {gameState === 'gameover' && (
              <GameOver 
                isOpen={true}
                score={score}
                gameId="carrom"
                title={score > aiScore ? "You Won!" : "AI Won!"}
                message={score > aiScore ? "Great shooting." : "Better luck next time."}
                onRestart={initGame} 
              />
            )}
          </AnimatePresence>
      </div>
    </ScaledGame>
  );
}

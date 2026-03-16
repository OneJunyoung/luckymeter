export const metadata = {
  title: "Terms of Service | LuckyMeter Arcade",
  description: "Terms of Service and User Agreement for LuckyMeter.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background flex justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-muted-foreground">Last Updated: March 2026</p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-muted-foreground leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">1. Agreement to Terms</h2>
            <p>
              By accessing our website and using the LuckyMeter Arcade games, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or software) on LuckyMeter's website for personal, non-commercial transitory viewing only.
            </p>
            <p>Under this license, you may not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on LuckyMeter's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">3. User Content and Conduct</h2>
            <p>
              You agree not to use the platform to generate or share content that is illegal, defamatory, or violates the rights of third parties. Harassment in multiplayer settings, cheating, or exploiting bugs will result in immediate termination of access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">4. Advertising and Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by LuckyMeter. LuckyMeter has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. We monetize our platform through Google AdSense, which displays third-party advertisements on our site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">5. Disclaimer and Limitations</h2>
            <p>
              The games and materials on LuckyMeter's website are provided on an 'as is' basis. LuckyMeter makes no warranties, expressed or implied. In no event shall LuckyMeter be liable for any damages arising out of the use or inability to use the games on our website.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">6. Modifications</h2>
            <p>
              LuckyMeter may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

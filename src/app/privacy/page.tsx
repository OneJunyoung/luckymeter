export const metadata = {
  title: "Privacy Policy | LuckyMeter Arcade",
  description: "Privacy Policy for LuckyMeter, explaining how we collect and use your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background flex justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            LuckyMeter Privacy Policy <span className="text-primary">(India)</span>
          </h1>
          <p className="text-muted-foreground">Effective Date: 2026.03.10 | Last Updated: 2026.03.10</p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-muted-foreground leading-relaxed">
          
          <section className="space-y-4">
            <p>
              This Privacy Policy explains how LuckyMeter ("LuckyMeter", "we", "us") collects, uses, shares, and protects your personal data when you use the LuckyMeter mobile application and related services (collectively, the "App"). By creating an account or using the App, you acknowledge that you have read and understood this Policy and that we will process your personal data as described here and in accordance with applicable Indian law.
            </p>
            <p>
              If you do not agree with this Policy, please do not use the App. You can withdraw your consent or request deletion of your account at any time using the options described in the <strong>Your Rights and Choices</strong> section.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Who We Are (Data Fiduciary)</h2>
            <p>LuckyMeter is operated by <strong>LuckyMeter</strong>, with its registered office at:</p>
            <p className="font-medium text-foreground">65, Gyeryong-ro 571beon-gil, Seo-gu, Daejeon, Republic of Korea (postal code: 35262)</p>
            <p>For the purposes of the Digital Personal Data Protection Act, 2023 ("DPDP Act"), LuckyMeter acts as the <strong>Data Fiduciary</strong>, deciding how and why your personal data is processed.</p>
            <p>For any questions about this Policy or our data practices, you can contact:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Grievance Officer:</strong> Jaden One</li>
              <li><strong>Email:</strong> oneyunt01@gmail.com</li>
              <li><strong>Postal Address:</strong> 65, Gyeryong-ro 571beon-gil, Seo-gu, Daejeon, Republic of Korea (postal code: 35262)</li>
            </ul>
            <p>You may also contact our <strong>Data Protection Officer (DPO)</strong> for escalations relating to data protection and compliance:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>DPO Email:</strong> oneyunt01@gmail.com</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Scope and Definitions</h2>
            <p>This Policy applies to all users of the LuckyMeter App in India, including drivers using Driver Mode, walkers using step-counting features, and users of community and gaming features.</p>
            <p>For this Policy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>"Personal data"</strong> means any data about an identifiable individual, such as name, contact details, device identifiers, and location.</li>
              <li><strong>"Processing"</strong> means any operation performed on personal data, including collection, storage, use, sharing, and deletion.</li>
              <li><strong>"Data Principal"</strong> means you, the individual whose personal data is processed.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. How We Obtain Consent and Our Legal Bases</h2>
            <p>We collect and process your personal data primarily based on your <strong>consent</strong>, which you provide when you register an account, enable certain features (such as Driver Mode or community features), or grant permissions on your device.</p>
            <p>We may also process your data for certain <strong>legitimate uses</strong> allowed under applicable law, such as complying with legal obligations, preventing fraud, or responding to law-enforcement or regulatory requests.</p>
            <p>Where data is <strong>optional</strong>, you can choose not to provide it or withdraw consent later. Where data is <strong>necessary</strong> to provide core services (such as basic account details needed to create and secure your account), we may not be able to provide those services if you do not provide the data.</p>
            <p>You can withdraw your consent at any time using in-app settings or by contacting the Grievance Officer. Withdrawal of consent will not affect processing already carried out before withdrawal, but may affect your ability to use certain features.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Data We Collect</h2>
            <p>We collect the following categories of personal data:</p>
            
            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">4.1 Account and Registration Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name</li>
              <li>Mobile phone number</li>
              <li>Backup email address</li>
              <li>Date of birth</li>
              <li>Gender (if provided)</li>
              <li>Login credentials or authentication tokens</li>
            </ul>
            
            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">4.2 Profile and Community Data (Optional)</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Profile photo and display name</li>
              <li>Bio or additional profile details you choose to share</li>
              <li>Posts, comments, messages, and reactions in community features</li>
              <li>Social or community preferences (e.g., visibility settings, block/mute lists)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">4.3 Location Data (Driver Mode Only)</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>GPS coordinates and route information when Driver Mode is enabled</li>
              <li>Distance traveled and trip/session metadata (e.g., start/end time, duration)</li>
            </ul>
            <p>Location tracking is <strong>only active</strong> when you explicitly enable Driver Mode and can be disabled at any time in your device or app settings. We do not collect location data for walking/step tracking features.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">4.4 Health and Fitness Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Step count (from device sensors or health APIs)</li>
              <li>Estimated walking distance</li>
              <li>Activity duration and patterns (e.g., time spent walking vs driving)</li>
            </ul>
            <p>We use this data solely to calculate rewards, achievements, and insights related to your physical activity.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">4.5 Gaming and Advertising Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Game progress, scores, levels, and achievements in LuckyMeter mini games</li>
              <li>Information about video ads you view (e.g., ad ID, time viewed, completion status)</li>
              <li>In-app interaction data (e.g., which game modes or reward offers you open)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">4.6 Technical and Usage Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Device identifiers (such as device ID, operating system, app version, language)</li>
              <li>Network information (e.g., IP address, connection type, signal quality)</li>
              <li>App logs, crash reports, and performance diagnostics</li>
              <li>General usage data (e.g., screens viewed, time spent in different sections)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">4.7 Transaction and Reward Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Points earned and redeemed</li>
              <li>Gift-card or voucher selections and redemption status</li>
              <li>Limited transaction information required to fulfil rewards (e.g., phone number or email for digital gift delivery)</li>
            </ul>
            <p>We do <strong>not</strong> store full payment card numbers on LuckyMeter's servers. Where payments are necessary, they are processed by third-party payment providers under their own security and compliance standards.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            
            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">5.1 To Provide and Maintain the App</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create and manage your LuckyMeter account</li>
              <li>Authenticate your login and secure access</li>
              <li>Calculate steps, driving distance, and other metrics to award points and rewards</li>
              <li>Process point redemptions for gift cards and other benefits</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">5.2 To Enable Optional Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide Driver Mode tracking and distance-based rewards</li>
              <li>Power community features, including profiles, posts, comments, and messaging</li>
              <li>Deliver mini games and track your achievements</li>
              <li>Show optional video ads in exchange for bonus rewards</li>
            </ul>
            <p>You can turn off Driver Mode, community features, or ad-based rewards at any time in the app settings. If you do so, related data collection will stop (subject to technical limitations and retention obligations described below).</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">5.3 To Improve Safety, Security, and Fraud Prevention</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Detect and prevent fake accounts, unauthorized access, or multiple-account abuse</li>
              <li>Validate location and activity data to prevent fraudulent rewards</li>
              <li>Monitor for suspicious or abusive behavior in community interactions</li>
              <li>Protect the security and integrity of our systems and users</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">5.4 To Analyze and Improve Our Services</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Understand how users engage with different features</li>
              <li>Measure performance of rewards, games, and ads</li>
              <li>Diagnose technical issues and improve app stability</li>
              <li>Develop new features and experiences</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">5.5 To Comply With Law and Enforce Our Terms</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comply with applicable laws, regulations, and lawful requests</li>
              <li>Respond to legal notices, investigations, or government inquiries</li>
              <li>Enforce our Terms of Use and other policies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Children's Data</h2>
            <p>The LuckyMeter App is intended for <strong>users aged 18 and above</strong>, such as professional drivers and adult walkers. We do not knowingly collect personal data from children under 18.</p>
            <p>We request your date of birth to confirm your age. If we discover that a child under 18 has registered or that we are processing personal data of a child without legally valid parental consent, we will take steps to delete the account and associated data as soon as reasonably practicable.</p>
            <p>Parents or guardians who believe that LuckyMeter may have collected personal data from their child can contact the Grievance Officer to request deletion.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Data Sharing and Third Parties</h2>
            <p>We do <strong>not</strong> sell your personal data. We share your data only in the limited circumstances below:</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">7.1 Service Providers (Processors)</h3>
            <p>We engage trusted third-party service providers to perform functions on our behalf, such as:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cloud hosting and data storage</li>
              <li>Analytics and crash reporting</li>
              <li>Advertising networks for video ads and sponsored content</li>
              <li>Customer support and communication tools</li>
              <li>Payment gateways and gift-card fulfillment partners</li>
            </ul>
            <p>These service providers may access your personal data only to perform their services for us and are contractually obligated to protect your data and use it solely for the specified purposes.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">7.2 Legal and Compliance Disclosures</h3>
            <p>We may disclose your data where required to do so by law or in response to valid legal processes or requests from government or law-enforcement authorities. We may also share data where we believe it is necessary to protect the rights, safety, or property of LuckyMeter, our users, or the public, or to enforce our terms, prevent fraud, or support investigations.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">7.3 Business Transfers</h3>
            <p>If LuckyMeter is involved in a merger, acquisition, reorganization, or sale of assets, your data may be transferred as part of that transaction subject to appropriate safeguards and continued protection under this Policy (or a policy that is no less protective).</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. International Transfers of Personal Data</h2>
            <p>LuckyMeter may store and process your personal data on servers located in India or in other countries, depending on our cloud infrastructure and service providers.</p>
            <p>Where your data is transferred outside India, we ensure that such transfers comply with applicable Indian law, including any government notifications restricting transfers to specific countries. We use contractual and technical safeguards to help ensure that your data receives a level of protection comparable to that in India.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Cookies, SDKs, and Similar Technologies</h2>
            <p>LuckyMeter itself does not use traditional web cookies inside the mobile app, but it may use <strong>software development kits (SDKs)</strong> and similar technologies provided by third parties for analytics, crash reporting, and advertising.</p>
            <p>These SDKs may collect device identifiers, app usage information, coarse location, and ad interaction data to help us understand app performance and show relevant offers. You can control certain tracking and ad preferences through your device settings (for example, limiting ad tracking on Android or iOS) and via in-app settings where available.</p>
            <p>If you use any LuckyMeter-related websites, they may use cookies and similar technologies; separate cookie notices or descriptions may apply.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes described in this Policy or as required by law. In general:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account data</strong> is retained for as long as your account is active and for a reasonable period after deletion to resolve disputes, prevent abuse, and meet legal obligations.</li>
              <li><strong>Activity and reward data</strong> (steps, driving distance, points, and redemption history) is retained for up to <strong>3 years</strong> after the relevant activity, unless a longer period is required by law or necessary for fraud prevention and dispute resolution.</li>
              <li><strong>Raw location route data</strong> collected in Driver Mode is retained for a short period (for example, up to 30 days) to calculate rewards and investigate potential fraud, after which it is deleted or irreversibly de-identified, while aggregated distance totals are retained.</li>
              <li><strong>Technical logs and crash reports</strong> are retained for limited periods necessary for security and diagnostics and in accordance with legal requirements.</li>
              <li><strong>Community content</strong> (posts, messages) is retained for as long as needed to provide the service or until you delete it, subject to backup and legal retention requirements.</li>
            </ul>
            <p>When data is no longer needed, it is deleted or anonymized in line with our internal policies and applicable law.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">11. Data Security and Breach Notification</h2>
            <p>We use reasonable technical and organizational measures to protect your personal data, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Encryption of data in transit (for example, using HTTPS/TLS)</li>
              <li>Access controls and authentication to limit access to authorized staff and systems</li>
              <li>Secure development and testing practices</li>
              <li>Regular monitoring, logging, and security updates</li>
            </ul>
            <p>Despite our efforts, no system is completely secure. If we become aware of a data breach that is likely to result in significant harm to you, we will notify you and, where required, the relevant authorities or the Data Protection Board of India, in accordance with applicable law.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">12. Your Rights and Choices</h2>
            <p>Depending on applicable law, you have the following rights in relation to your personal data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Right to Access:</strong> You can request confirmation of whether we process your personal data and obtain a copy of such data.</li>
              <li><strong>Right to Correction and Updating:</strong> You can request correction or updating of inaccurate or incomplete data.</li>
              <li><strong>Right to Deletion:</strong> You can request deletion of your personal data when it is no longer needed for the purposes for which it was collected or when you withdraw consent, subject to our legal obligations.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw your consent for optional processing at any time, using in-app settings or by contacting the Grievance Officer.</li>
              <li><strong>Right to Grievance Redressal:</strong> You can file a complaint with our Grievance Officer and, if unsatisfied, escalate to the Data Protection Board or other competent authority.</li>
              <li><strong>Right to Nominate:</strong> Where permitted by law, you may nominate another person to exercise your rights in the event of your incapacity or death.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">12.1 Using In-App Controls</h3>
            <p>Within the App, you can:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>View and update certain profile details</li>
              <li>Enable or disable Driver Mode</li>
              <li>Control community visibility and participation</li>
              <li>Opt out of certain notifications</li>
              <li>Request account deletion</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">12.2 Submitting Rights Requests or Complaints</h3>
            <p>To exercise your rights or submit a grievance, you can contact the Grievance Officer using the details in <strong>Section 1</strong>. Please describe your request in enough detail to allow us to identify your data.</p>
            <p>We will acknowledge your request and respond within timelines prescribed by applicable law and our internal policies. If you are not satisfied with our response, you may escalate your complaint to the Data Protection Board of India or other competent authority.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">13. Grievance Redressal Mechanism</h2>
            <p>Our Grievance Officer is responsible for addressing questions, concerns, and complaints related to this Policy and your personal data.</p>
            <p>You may contact the Grievance Officer via email or postal mail, as listed above. We will:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Acknowledge your complaint within a reasonable time</li>
              <li>Make best efforts to resolve your complaint within the timeframes required by law</li>
              <li>Inform you of the outcome and any steps taken</li>
            </ul>
            <p>If you remain dissatisfied, you may escalate to the Data Protection Board of India using channels notified by the Government of India.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">14. Platform-Specific Disclosures</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">14.1 Apple App Store (Privacy Labels)</h3>
            <p>On Apple platforms, LuckyMeter discloses the following categories of data as collected and linked to you, where applicable:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact info (such as name, phone number, email)</li>
              <li>Health and fitness data (steps, distance)</li>
              <li>Location data (Driver Mode only)</li>
              <li>Identifiers and usage data for analytics and app performance</li>
            </ul>
            <p>We do not use your data to track you across other companies' apps and websites for advertising purposes.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-2">14.2 Google Play (Data Safety)</h3>
            <p>On Google Play, we disclose that LuckyMeter:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Collects data such as location (optional), personal info, health and fitness, app activity, and device identifiers</li>
              <li>Shares limited data with service providers under strict contractual protections</li>
              <li>Encrypts data in transit and allows users to request data deletion</li>
            </ul>
            <p>For more details, please see the Data Safety section on our Google Play store listing.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">15. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal requirements.</p>
            <p>When we make material changes, we will notify you through the App, by email, or by updating the Policy on our website or app store listings, and we will indicate the "Last Updated" date at the top. Your continued use of the App after the effective date of an updated Policy constitutes your acceptance of the changes.</p>
            <p>If you do not agree with the updated Policy, you should stop using the App and request deletion of your account.</p>
            
            <p className="mt-8 italic">If you have any questions about this Policy or how we handle your personal data, please contact us using the details in <strong>Section 1</strong>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}

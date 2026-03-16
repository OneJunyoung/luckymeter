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
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground">Last Updated: March 2026</p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
            <p>
              Welcome to LuckyMeter. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share your data when you use the LuckyMeter platform and our Arcade website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Automatically Collected Data:</strong> When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, and the pages you visit.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our service. This includes cookies set by third-party advertising networks like Google AdSense.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">3. Google AdSense & Third-Party Advertising</h2>
            <p>
              We use Google AdSense to display advertisements on our site. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our website or other websites.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet.</li>
              <li>You may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Ads Settings</a>.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">4. How We Use Your Information</h2>
            <p>We use the information we collect or receive:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To deliver targeted advertising to you.</li>
              <li>To improve our website and ensure our games run smoothly on your device.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">5. GDPR and CCPA Privacy Rights</h2>
            <p>
              Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data. European Economic Area (EEA) and UK users will be presented with a cookie consent banner to manage their preferences regarding personalized advertising.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">6. Contact Us</h2>
            <p>
              If you have any questions or comments about this policy, you may email us at <a href="mailto:luckymeter@lucky-meter.com" className="text-primary hover:underline">luckymeter@lucky-meter.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

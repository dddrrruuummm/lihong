import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How this website handles information you enter in the local trade brief builder.",
  "/privacy-policy",
);

export default function PrivacyPage() {
  return (
    <div className="wrap interior">
      <header className="page-header">
        <h1>Privacy policy</h1>
        <p className="lede">How information is handled when you use the {company.name} website.</p>
      </header>

      <div className="legal-copy">
        <section aria-labelledby="brief-data">
          <h2 id="brief-data">Your inquiry brief</h2>
          <p>The brief builder prepares text in your browser. The website does not receive the details you enter. If you copy or download your brief, the text is copied to your device’s clipboard or saved as a file on your device.</p>
          <p>Include only information needed for the inquiry. Leave out passwords, payment details and other sensitive information.</p>
        </section>
        <section aria-labelledby="sharing-brief">
          <h2 id="sharing-brief">Sharing your brief</h2>
          <p>You decide if and where to send your brief. If an email option is available and you choose it, it opens a draft in your email app. The website does not send the email for you. Your email provider handles any message you choose to send.</p>
        </section>
        <section aria-labelledby="site-analytics">
          <h2 id="site-analytics">Site analytics</h2>
          <p>This website does not use analytics or advertising scripts.</p>
        </section>
        <Link className="action-link" href="/contact">Go to the inquiry page <Arrow /></Link>
      </div>
    </div>
  );
}

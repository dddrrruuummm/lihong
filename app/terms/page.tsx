import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Terms of Use",
  "Terms for browsing the Lihong Global Trading Limited website and preparing an inquiry brief.",
  "/terms",
);

export default function TermsPage() {
  return (
    <div className="wrap interior">
      <header className="page-header">
        <h1>Terms of use</h1>
        <p className="lede">Using the {company.name} website and inquiry tools.</p>
      </header>

      <div className="legal-copy">
        <section aria-labelledby="using-website">
          <h2 id="using-website">Using this website</h2>
          <p>The website provides company information and prompts to help you prepare a trade inquiry. Inquiry topics do not indicate that a product is in stock or that any price, supplier or delivery date has been confirmed.</p>
        </section>
        <section aria-labelledby="preparing-brief">
          <h2 id="preparing-brief">Preparing a brief</h2>
          <p>Review the information in your brief before sharing it. Include only information you have permission to share. Preparing, copying or downloading a brief does not send it to the company.</p>
        </section>
        <section aria-labelledby="commercial-terms">
          <h2 id="commercial-terms">Commercial terms</h2>
          <p>This website does not accept orders or payments. An inquiry is a request to discuss your requirements. Any order or other commercial arrangement would require a separate agreement.</p>
        </section>
        <Link className="action-link" href="/privacy-policy">Read the privacy policy <Arrow /></Link>
      </div>
    </div>
  );
}

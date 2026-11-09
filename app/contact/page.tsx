import { Suspense } from "react";
import { TradeBrief } from "@/components/trade-brief";
import { collections } from "@/lib/collections";
import { company, pageMetadata, temporaryPhone } from "@/lib/site";

export const metadata = pageMetadata(
  "Trade inquiries",
  "Prepare a gold jewelry, diamond, or fine jewelry trade inquiry for Lihong Global Trading Limited in Hong Kong.",
  "/contact",
);

export default function ContactPage() {
  const phoneNumber = company.phone.replace(/[^+\d]/g, "");
  const whatsappNumber = company.whatsapp.replace(/\D/g, "");
  const categories = collections.map(({ slug, title, specificationHint, pieces }) => ({
    slug,
    title,
    specificationHint,
    designs: pieces.map(({ id, title }) => ({ id, title })),
  }));

  return (
    <section className="wrap interior contact-page" aria-labelledby="contact-title">
      <header className="page-header">
        <h1 id="contact-title">Trade inquiries</h1>
        <p className="lede">Share the design, specifications, and quantities you’d like to discuss.</p>
      </header>
      <div className="split-section contact-layout">
        <section className="copy contact-details" aria-labelledby="contact-details-title">
          <h2 id="contact-details-title">Contact the trade desk</h2>
          <p>{company.location}</p>
          <ul className="contact-links">
            {company.email && <li><a className="action-link" href={`mailto:${company.email}`}>{company.email}</a></li>}
            <li>
              {phoneNumber
                ? <a className="action-link" href={`tel:${phoneNumber}`}>{company.phone}</a>
                : <span className="contact-phone">{temporaryPhone}</span>}
            </li>
            {whatsappNumber && <li><a className="action-link" href={`https://wa.me/${whatsappNumber}`}>WhatsApp</a></li>}
          </ul>
        </section>
        <section className="brief-section" id="inquiry" aria-labelledby="inquiry-title">
          <h2 id="inquiry-title">Prepare a trade brief</h2>
          <p className="brief-note" id="brief-instructions">
            Category and specifications are required. {company.email
              ? "Create your draft, then open it in your email app to send."
              : "Create your draft, then copy or download it to share."}
          </p>
          <Suspense fallback={<p className="brief-note">Have your specifications, quantity, destination, and timing ready.</p>}>
            <TradeBrief companyName={company.name} email={company.email} categories={categories} />
          </Suspense>
          <noscript><p className="brief-note">With JavaScript turned off, use these details to prepare your brief in a document or email.</p></noscript>
        </section>
      </div>
    </section>
  );
}

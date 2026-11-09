import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Jewelry Trade",
  "Explore gold jewelry, diamonds and fine jewelry and prepare a business inquiry with your specifications.",
  "/services",
);

const topics = [
  {
    title: "Gold jewelry",
    body: "Describe the pieces you are looking for. Include preferred styles, dimensions, estimated quantities and any metal specifications your team requires.",
  },
  {
    title: "Diamonds",
    body: "Share any preferences for shape, size range and quantity. If you have documentation requirements, include them in the brief so they can be discussed separately.",
  },
  {
    title: "Fine jewelry",
    body: "Share the types of pieces you are looking for and any requirements for materials, stone settings or finish. Note the intended assortment and any packaging or presentation needs.",
  },
];

const textLink = "font-semibold text-[var(--link)] underline underline-offset-4";

const inquirySteps = [
  {
    title: "Choose a reference",
    body: <><Link className={textLink} href="/showcase">Browse the collections</Link> for a design to reference, or start with your own specifications. See the <Link className={textLink} href="/craft-and-packaging#gift-packaging">gift packaging concepts</Link> if presentation is part of your brief.</>,
  },
  {
    title: "Prepare your brief",
    body: <>Add your specifications in the <Link className={textLink} href="/contact#inquiry">inquiry builder</Link>, plus the quantity, destination, and timing if you know them. Review the draft and copy or download it if you prefer to share it separately.</>,
  },
  {
    title: "Send your inquiry",
    body: <>Check the <Link className={textLink} href="/contact">contact page</Link> for email options. If you open an email draft, review and send it from your own email app. Availability, pricing, and delivery terms are discussed separately.</>,
  },
];

export default function ServicesPage() {
  return (
    <div className="wrap interior">
      <header className="page-header">
        <h1>Jewelry trade.</h1>
        <p className="lede">Gold jewelry, diamonds and fine jewelry. Tell us what you are looking for and which specifications matter to your business.</p>
      </header>

      <section className="split-section" aria-labelledby="inquiry-process">
        <div className="copy">
          <h2 id="inquiry-process">How inquiries work</h2>
          <p>The inquiry builder prepares a draft in your browser. You decide when to send it.</p>
        </div>
        <ol className="info-table" role="list">
          {inquirySteps.map((step, index) => (
            <li key={step.title}>
              <h3><span aria-hidden="true" className="mr-3 align-middle font-sans text-sm font-semibold text-[var(--link)]">0{index + 1}</span>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="split-section mt-12 sm:mt-16 lg:mt-24" aria-labelledby="inquiry-topics">
        <div className="copy">
          <h2 id="inquiry-topics">What to include</h2>
          <p>Use these prompts to identify the specifications that matter for each category.</p>
          <Link className="action-link" href="/contact#inquiry">Build your brief <Arrow /></Link>
        </div>
        <ol className="info-table">
          {topics.map((topic) => (
            <li key={topic.title}>
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

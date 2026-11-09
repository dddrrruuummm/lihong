import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { company, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  "Lihong Global Trading Limited is a Hong Kong company focused on gold jewelry, diamonds and fine jewelry.",
  "/about",
);

export default function AboutPage() {
  return (
    <div className="wrap interior">
      <header className="page-header">
        <h1>{company.name}</h1>
        <p className="lede" lang="zh-Hant">{company.chineseName}</p>
        <p className="lede">A Hong Kong trading company focused on gold jewelry, diamonds and fine jewelry.</p>
      </header>

      <section className="split-section" aria-labelledby="company-details">
        <div className="copy">
          <h2 id="company-details">Incorporated in Hong Kong</h2>
          <p>{company.name} is a private company limited by shares, incorporated in {company.location} on <time dateTime={company.incorporatedIso}>{company.incorporated}</time>.</p>
          <p>Business buyers can use this website to explore these areas and prepare an inquiry with their product requirements.</p>
          <Link className="action-link" href="/contact#inquiry">Prepare an inquiry <Arrow /></Link>
        </div>

        <dl className="info-table" aria-label="Company details">
          <div><dt>Company name</dt><dd>{company.name}</dd></div>
          <div><dt>Chinese name</dt><dd lang="zh-Hant">{company.chineseName}</dd></div>
          <div><dt>Jurisdiction</dt><dd>{company.location}</dd></div>
          <div><dt>Company type</dt><dd>Private company limited by shares</dd></div>
          <div><dt>Date of incorporation</dt><dd><time dateTime={company.incorporatedIso}>{company.incorporated}</time></dd></div>
        </dl>
      </section>
    </div>
  );
}

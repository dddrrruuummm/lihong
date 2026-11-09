import Link from "next/link";
import { company } from "@/lib/site";

const navigation = [
  { href: "/showcase", title: "Collections" },
  { href: "/craft-and-packaging", title: "Craft" },
  { href: "/services", title: "Trade" },
  { href: "/about", title: "About" },
];

export function FacetMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M27.9 4.5 47.7 16v23.8L27.9 51.5 8.3 39.8V16L27.9 4.5Z" stroke="currentColor" strokeWidth="2.3" />
      <path d="M8.3 16 28 27.8 47.7 16M28 27.8v23.7M18 10.5l10 5.8 10-5.8M18 45.6V22.1M38 45.6V22.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="m28 20 3.4 2-3.4 2-3.4-2 3.4-2Z" fill="currentColor" />
    </svg>
  );
}

export function Arrow() {
  return <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" /></svg>;
}

function Brand() {
  return <Link className="brand" href="/" aria-label={`${company.name} home`}><FacetMark /><span>Lihong<small>Global Trading</small></span></Link>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Brand />
        <nav aria-label="Main">
          {navigation.map(({href,title}) => <Link key={href} href={href}>{title}</Link>)}
          <Link className="nav-inquiry" href="/contact">Inquiries <Arrow /></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-wrap">
        <div className="footer-main">
          <div><Brand /><p className="footer-cn" lang="zh-Hant">{company.chineseName}</p></div>
          <p>Gold jewelry, diamonds, and fine jewelry.<br />{company.location}</p>
          <nav aria-label="Footer">
            {navigation.map(({href,title}) => <Link key={href} href={href}>{title}</Link>)}
            <Link href="/contact">Inquiries</Link>
          </nav>
        </div>
        <div className="footer-base">
          <p>© {company.name}</p>
          <nav aria-label="Legal"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></nav>
        </div>
      </div>
    </footer>
  );
}

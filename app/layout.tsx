import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { allowIndex, company, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: company.name, template: `%s | ${company.name}` },
  description: company.description,
  robots: { index: allowIndex, follow: allowIndex },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.chineseName,
  description: company.description,
  foundingDate: company.incorporatedIso,
  foundingLocation: { "@type": "Place", name: company.location },
  ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/mark.svg` } : {}),
  ...(company.email ? { email: company.email } : {}),
  ...(company.phone ? { telephone: company.phone } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body className="min-h-screen">
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}

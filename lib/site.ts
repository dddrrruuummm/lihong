import type { Metadata } from "next";

function configuredOrigin(value: string | undefined) {
  if (!value) return undefined;
  try {
    const url = new URL(value.trim());
    if (url.protocol === "https:" && url.pathname === "/" && !url.username && !url.password && !url.search && !url.hash) return url.origin;
  } catch {
    return undefined;
  }
}

const email = process.env.CONTACT_EMAIL?.trim() ?? "contact@lihongjewelry.com";
const phone = process.env.CONTACT_PHONE?.trim() ?? "";
const whatsapp = process.env.CONTACT_WHATSAPP?.trim().replace(/^\+/, "") ?? "";

// OFCA's reserved 5555 range is display-only until the company configures its number.
export const temporaryPhone = "+852 5555 4086";

export const company = {
  name: "Lihong Global Trading Limited",
  chineseName: "立洪環球貿易有限公司",
  location: "Hong Kong",
  incorporated: "November 6, 2026",
  incorporatedIso: "2026-11-06",
  description: "Lihong Global Trading Limited is a Hong Kong trading company focused on gold jewelry, diamonds, and fine jewelry.",
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "",
  phone: /^\+[\d ()-]{8,21}$/.test(phone) ? phone : "",
  whatsapp: /^\d{8,15}$/.test(whatsapp) ? whatsapp : "",
};

export const siteUrl = configuredOrigin(process.env.SITE_URL ?? "https://lihongjewelry.com");
export const allowIndex = Boolean(siteUrl && process.env.NODE_ENV === "production" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production"));
export const publicRoutes = ["/", "/about", "/services", "/showcase", "/craft-and-packaging", "/contact", "/privacy-policy", "/terms"];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${company.name}`;
  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: siteUrl ? { canonical: path } : undefined,
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      siteName: company.name,
      locale: "en_US",
      url: siteUrl ? path : undefined,
      images: siteUrl ? [{ url: "/images/lihong-social.jpg", width: 1200, height: 630, alt: "High jewelry necklace and gold cuff on wine velvet" }] : undefined,
    },
  };
}

import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { company, pageMetadata } from "@/lib/site";
import styles from "./plates.module.css";

export const metadata = pageMetadata(
  "Craft & Packaging",
  "Explore Lihong Global Trading Limited's branded gift-box concepts and illustrated jewelry-making techniques.",
  "/craft-and-packaging",
);

const giftPlates = [
  {
    title: "Velvet ring box",
    src: "/images/gift-ring.webp",
    alt: `Open plum velvet ring box branded ${company.name}.`,
    description: "A compact ring case with plum velvet and the company name inside the lid.",
  },
  {
    title: "Necklace presentation case",
    src: "/images/gift-necklace.webp",
    alt: `Open cream-lined necklace case branded ${company.name}.`,
    description: "A wide, cream-lined case that leaves room for a necklace to be displayed at its full width.",
  },
  {
    title: "Coordinated gift set",
    src: "/images/gift-boxes.webp",
    alt: `A burgundy case stamped ${company.name} beside an ivory drawer box.`,
    description: "A gold-stamped burgundy case paired with an ivory drawer box.",
  },
];

const craftPlates = [
  {
    title: "Wax carving",
    src: "/images/craft-wax.webp",
    alt: "A fine carving tool shaping a wax jewelry model at a workbench.",
    description: "A jeweler shapes a wax model that can be used to cast the piece in metal.",
  },
  {
    title: "Gemstone setting",
    src: "/images/craft-setting.webp",
    alt: "A jeweler using a small hand tool to set a gemstone.",
    description: "A jeweler seats the stone in its mount and adjusts the metal that holds it in place.",
  },
  {
    title: "Fine polishing",
    src: "/images/craft-polish.webp",
    alt: "Close-up of a jeweler polishing the surface of a metal piece.",
    description: "A jeweler buffs the metal to smooth small tool marks and bring out the intended finish.",
  },
];

type Plate = (typeof giftPlates)[number];

function EditorialPlate({ plate, featured = false }: { plate: Plate; featured?: boolean }) {
  return (
    <figure className={featured ? styles.featuredPlate : styles.plate}>
      <div className={styles.image}>
        <Image
          src={plate.src}
          alt={plate.alt}
          fill
          sizes={featured ? "(max-width: 740px) 100vw, 64vw" : "(max-width: 620px) 100vw, (max-width: 960px) 50vw, 42vw"}
        />
      </div>
      <figcaption className={styles.caption}>
        <h3>{plate.title}</h3>
        <p>{plate.description}</p>
      </figcaption>
    </figure>
  );
}

export default function CraftAndPackagingPage() {
  return (
    <article className={`wrap interior ${styles.page}`}>
      <header className="page-header">
        <h1>Craft &amp; packaging.</h1>
        <p className="lede">Explore gift-box concepts bearing the {company.name} name, then take a closer look at three jewelry-making techniques.</p>
        <nav className="collection-index" aria-label="On this page">
          <a href="#gift-packaging">Gift packaging</a>
          <a href="#jewelry-making">Jewelry making</a>
        </nav>
      </header>

      <section className={styles.chapter} id="gift-packaging" aria-labelledby="gift-packaging-title">
        <header className={styles.chapterHeader}>
          <div>
            <p className={styles.kicker}>01 / Presentation</p>
            <h2 id="gift-packaging-title">Gift packaging</h2>
          </div>
          <p>Three packaging concepts for a single ring, a necklace, or a coordinated gift set.</p>
        </header>
        <div className={styles.packagingGrid}>
          {giftPlates.map((plate, index) => <EditorialPlate key={plate.src} plate={plate} featured={index === 0} />)}
        </div>
      </section>

      <section className={styles.chapter} id="jewelry-making" aria-labelledby="jewelry-making-title">
        <header className={styles.chapterHeader}>
          <div>
            <p className={styles.kicker}>02 / Technique</p>
            <h2 id="jewelry-making-title">Jewelry making</h2>
          </div>
          <p>Generated workshop illustrations show how jewelers shape a wax model, set a stone, and polish metal.</p>
        </header>
        <div className={styles.craftGrid}>
          {craftPlates.map((plate) => <EditorialPlate key={plate.src} plate={plate} />)}
        </div>
      </section>

      <section className={styles.close} aria-labelledby="presentation-inquiry">
        <div>
          <h2 id="presentation-inquiry">Planning a gift presentation?</h2>
          <p>Include your preferred box format, lining, and branding placement in your trade brief.</p>
        </div>
        <Link className="button button-light" href="/contact#inquiry">Prepare an inquiry <Arrow /></Link>
      </section>
    </article>
  );
}

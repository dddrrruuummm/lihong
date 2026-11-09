import Image from "next/image";
import Link from "next/link";
import { Arrow, FacetMark } from "@/components/site-shell";
import { collections } from "@/lib/collections";
import { company, pageMetadata } from "@/lib/site";
import styles from "./home-actions.module.css";

export const metadata = pageMetadata("Gold, Diamonds & Fine Jewelry", company.description, "/");

export default function Home() {
  return (
    <>
      <section className="cover" aria-labelledby="cover-title">
        <div className="cover-masthead">
          <div className="wrap cover-heading">
            <h1 id="cover-title">Gold, diamonds <span>&amp; fine jewelry.</span></h1>
            <div className="cover-intro">
              <p>Hong Kong jewelry trade for retailers and sourcing teams.</p>
              <div className={styles.actions}>
                <Link className={`button button-light ${styles.primary}`} href="/showcase">Explore collections <Arrow /></Link>
                <Link className={`action-link ${styles.inquiry}`} href="/contact#inquiry">Start a trade inquiry</Link>
              </div>
            </div>
          </div>
        </div>
        <figure className="wrap cover-figure">
          <div className="cover-picture">
            <Image src="/images/hero.webp" fill sizes="100vw" alt="Ornate gold necklace with a large golden pear-cut centerpiece beside a cuff on wine velvet" preload />
          </div>
          <figcaption className="cover-caption"><span>High jewelry design study</span><span>Hong Kong</span></figcaption>
        </figure>
      </section>

      <section className="wrap feature" aria-labelledby="collection-title">
        <header className="section-heading">
          <h2 id="collection-title">The collections.</h2>
          <p>Explore three areas of trade through a series of illustrative jewelry designs.</p>
        </header>
        <div className="showcase-spread">
          {collections.map(({ slug, title, pieces }) => (
            <Link key={slug} className="feature-plate" href={`/showcase#${slug}`}>
              <div className="plate-image">
                <Image src={pieces[0].image} fill sizes="(max-width: 740px) 100vw, 52vw" alt={pieces[0].alt} />
              </div>
              <span>{title} <Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap feature craft-feature" aria-labelledby="craft-title">
        <div className="craft-feature-copy">
          <h2 id="craft-title">Craft &amp; packaging.</h2>
          <p>See foil-stamped gift-box concepts and the workshop techniques behind fine jewelry.</p>
          <Link className="action-link" href="/craft-and-packaging">Explore craft &amp; packaging <Arrow /></Link>
        </div>
        <div className="craft-feature-picture">
          <Image src="/images/gift-necklace.webp" fill sizes="(max-width: 740px) 100vw, 56vw" alt={`A necklace in a cream-lined burgundy case stamped ${company.name} in gold`} />
        </div>
      </section>

      <section className="inquiry-band" aria-labelledby="start-title">
        <div className="wrap inquiry-wrap">
          <FacetMark className="inquiry-mark" />
          <div>
            <h2 id="start-title">Bring the details.</h2>
            <p>Set out your design, material, quantity, and destination in a brief you can save and share.</p>
            <Link className="button button-light" href="/contact#inquiry">Prepare an inquiry <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

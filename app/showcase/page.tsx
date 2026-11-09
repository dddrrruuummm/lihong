import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/site-shell";
import { collections } from "@/lib/collections";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Collections", "Explore design studies in gold jewelry, diamonds, and fine jewelry from Lihong Global Trading Limited.", "/showcase");

export default function Showcase() {
  return (
    <article className="wrap interior collection-page">
      <header className="page-header">
        <h1>Jewelry collections.</h1>
        <p className="lede">Use these illustrative designs as a starting point for a trade inquiry. Each design has a reference you can include when discussing specifications and availability.</p>
        <nav className="collection-index" aria-label="Collection categories">
          {collections.map(({slug,title}) => <a key={slug} href={`#${slug}`}>{title}</a>)}
        </nav>
      </header>
      {collections.map(({slug,title,description,pieces}) => (
        <section className="collection-section" key={slug} id={slug} aria-labelledby={`title-${slug}`}>
          <header className="section-heading">
            <div><h2 id={`title-${slug}`}>{title}</h2><p>{description}</p></div>
            <Link className="action-link" href={`/contact?category=${slug}#inquiry`}>Prepare an inquiry <Arrow /></Link>
          </header>
          <div className="collection-grid">
            {pieces.map((piece) => (
              <figure key={piece.id}>
                <div className="collection-image"><Image src={piece.image} alt={piece.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 34vw" /></div>
                <figcaption>
                  <div className="collection-piece-label">
                    <span>{piece.title}</span>
                    <span className="collection-reference">Ref. {piece.id}</span>
                  </div>
                  <Link
                    className="action-link collection-inquiry"
                    href={`/contact?category=${slug}&design=${piece.id}#inquiry`}
                    aria-label={`Inquire about this design, ${piece.title}`}
                  >
                    Inquire about this design <Arrow />
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}

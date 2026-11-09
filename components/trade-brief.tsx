"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";

type TradeBriefProps = {
  companyName: string;
  email: string;
  categories: readonly {
    slug: string;
    title: string;
    specificationHint: string;
    designs: readonly { id: string; title: string }[];
  }[];
};

const subscribe = () => () => {};
const browserReady = () => true;
const serverReady = () => false;

export function TradeBrief(props: TradeBriefProps) {
  const searchParams = useSearchParams();
  const category = props.categories.find(({ slug }) => slug === searchParams.get("category"));
  const initialCategory = category?.slug ?? "";
  const initialDesign = category?.designs.find(({ id }) => id === searchParams.get("design"))?.id ?? "";

  return <BriefForm key={`${initialCategory}:${initialDesign}`} {...props} initialCategory={initialCategory} initialDesign={initialDesign} />;
}

function BriefForm({
  companyName,
  email,
  categories,
  initialCategory,
  initialDesign,
}: TradeBriefProps & { initialCategory: string; initialDesign: string }) {
  const [categorySlug, setCategorySlug] = useState(initialCategory);
  const [designId, setDesignId] = useState(initialDesign);
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const [status, setStatus] = useState("");
  const ready = useSyncExternalStore(subscribe, browserReady, serverReady);
  const output = useRef<HTMLTextAreaElement>(null);
  const draftHeading = useRef<HTMLHeadingElement>(null);
  const category = categories.find(({ slug }) => slug === categorySlug);
  const design = category?.designs.find(({ id }) => id === designId);

  useEffect(() => {
    if (draft) draftHeading.current?.focus();
  }, [draft]);

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const value = (name: string) => String(fields.get(name) ?? "").trim();
    const specifications = value("specifications");

    if (!category || !specifications) {
      setStatus("Choose a category and add your specifications to create a draft.");
      return;
    }

    const subject = `${category.title} trade inquiry${design ? ` (${design.id})` : ""}`;
    const details = [
      ["Category", category.title],
      ["Design reference", design ? `${design.id} · ${design.title}` : ""],
      ["Specifications", specifications],
      ["Quantity", value("quantity")],
      ["Destination", value("destination")],
      ["Requested timing", value("timing")],
      ["Additional message", value("message")],
    ].filter(([, detail]) => detail);
    const body = [
      `Trade inquiry for ${companyName}`,
      ...details.map(([label, detail]) => `${label}\n${detail}`),
    ].join("\n\n").replace(/\r?\n/g, "\r\n");

    setDraft({ subject, body });
    setStatus("Draft ready. Review it before sharing.");
  }

  function clearDraft() {
    setDraft(null);
    setStatus("");
  }

  async function copyDraft(body: string) {
    try {
      await navigator.clipboard.writeText(body);
      setStatus("Draft copied.");
    } catch {
      output.current?.focus();
      output.current?.select();
      setStatus("Copy the selected text manually or download the draft.");
    }
  }

  return (
    <div className="trade-brief">
      <form className="brief-form" onSubmit={prepareDraft} onChange={clearDraft} aria-describedby="brief-instructions">
        <fieldset className="brief-fields" disabled={!ready}>
          <label>
            Category
            <select
              name="category"
              value={categorySlug}
              onChange={(event) => {
                setCategorySlug(event.target.value);
                setDesignId("");
              }}
              required
            >
              <option value="" disabled>Choose a category</option>
              {categories.map(({ slug, title }) => <option key={slug} value={slug}>{title}</option>)}
            </select>
          </label>
          {category && (
            <label>
              Design reference (optional)
              <select name="design" value={designId} onChange={(event) => setDesignId(event.target.value)}>
                <option value="">No design selected</option>
                {category.designs.map(({ id, title }) => <option key={id} value={id}>{id} · {title}</option>)}
              </select>
            </label>
          )}
          <div className="brief-specifications">
            <label htmlFor="brief-specifications">Specifications</label>
            <p id="brief-specification-hint" className="brief-hint">
              {category?.specificationHint ?? "Choose a category to see which details to include."}
            </p>
            <textarea id="brief-specifications" name="specifications" required rows={3} maxLength={800} aria-describedby="brief-specification-hint" />
          </div>
          <div className="brief-row">
            <label>
              Quantity
              <input name="quantity" maxLength={80} placeholder="e.g. 12 pieces" />
            </label>
            <label>
              Destination
              <input name="destination" maxLength={120} placeholder="City or country" />
            </label>
          </div>
          <label>
            Requested timing
            <input name="timing" maxLength={100} placeholder="Date or timeframe" />
          </label>
          <label>
            Additional message
            <textarea name="message" rows={3} maxLength={1000} placeholder="Other details you would like to share" />
          </label>
          <div className="brief-actions">
            <button className="button" type="submit">Create draft</button>
          </div>
        </fieldset>
      </form>
      <p className="brief-status" role="status">{status}</p>
      {draft && (
        <section className="brief-preview" aria-labelledby="draft-title">
          <h3 id="draft-title" ref={draftHeading} tabIndex={-1}>Your draft</h3>
          <div className="brief-actions">
            {email && <a className="button" href={`mailto:${email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email draft</a>}
            <button className={email ? "action-link" : "button"} type="button" onClick={() => void copyDraft(draft.body)}>Copy draft</button>
            <a className="action-link" href={`data:text/plain;charset=utf-8,${encodeURIComponent(draft.body)}`} download="lihong-trade-inquiry.txt">Download TXT</a>
          </div>
          <textarea className="brief-output" aria-labelledby="draft-title" ref={output} value={draft.body} rows={8} readOnly />
        </section>
      )}
    </div>
  );
}

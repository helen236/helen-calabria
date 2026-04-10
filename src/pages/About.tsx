import { useState } from "react";
import { usePhoto } from "../context/PhotoContext";
import type { AboutLayout } from "../context/PhotoContext";
import { about } from "../content";
import { showControls } from "../utils/showControls";

const { credentials, topics, faqs } = about;

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ borderBottom: "1px solid var(--hc-border)" }}
      className="py-5"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left gap-4 group"
      >
        <span
          style={{ color: "var(--hc-primary-dark)" }}
          className="font-serif text-lg font-medium group-hover:opacity-80 transition-opacity"
        >
          {q}
        </span>
        <span
          className="text-xl flex-shrink-0"
          style={{
            color: "var(--hc-primary)",
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.2s",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="leading-relaxed pt-3 text-sm" style={{ color: "var(--hc-text-body)" }}>{a}</p>
      </div>
    </div>
  );
}

const aboutLayouts: { value: AboutLayout; label: string }[] = [
  { value: "circle", label: "Circle" },
  { value: "beside", label: "Beside" },
  { value: "card",   label: "Card"   },
];

function CredentialTags() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-2">
      {credentials.map((c) => (
        <span
          key={c}
          style={{ backgroundColor: "var(--hc-bg)", border: "1px solid var(--hc-border)", color: "var(--hc-primary-mid)" }}
          className="px-3 py-1.5 rounded-full text-xs font-medium"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

export default function About() {
  const { photo, setPhoto, aboutLayout, setAboutLayout, photoSide, setPhotoSide } = usePhoto();
  const src       = `/headshot-2.jpg`;
  const photoLeft = photoSide === "left";

  function CtrlBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: active ? "var(--hc-primary)" : "transparent",
          color:           active ? "white" : "var(--hc-primary-mid)",
          border:          `1px solid ${active ? "var(--hc-primary)" : "var(--hc-border)"}`,
        }}
        className="text-xs px-3 py-1 rounded-full transition-colors"
      >{children}</button>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--hc-bg)" }}>
      {/* Controls bar */}
      {showControls && <div
        style={{ backgroundColor: "var(--hc-surface)", borderBottom: "1px solid var(--hc-border)" }}
        className="px-6 py-2.5 flex flex-wrap items-center gap-x-6 gap-y-2"
      >
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--hc-text-muted)" }} className="text-xs">Photo</span>
          {([1, 2] as const).map((p) => (
            <CtrlBtn key={p} active={photo === p} onClick={() => setPhoto(p)}>{p}</CtrlBtn>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--hc-text-muted)" }} className="text-xs">Layout</span>
          {aboutLayouts.map(({ value, label }) => (
            <CtrlBtn key={value} active={aboutLayout === value} onClick={() => setAboutLayout(value)}>{label}</CtrlBtn>
          ))}
        </div>
        {aboutLayout === "beside" && (
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--hc-text-muted)" }} className="text-xs">Photo side</span>
            <CtrlBtn active={photoLeft}  onClick={() => setPhotoSide("left")}>Left</CtrlBtn>
            <CtrlBtn active={!photoLeft} onClick={() => setPhotoSide("right")}>Right</CtrlBtn>
          </div>
        )}
      </div>}

      {/* ── Circle ── */}
      {aboutLayout === "circle" && (
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--hc-surface)" }}>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
            <div
              className="w-32 h-32 rounded-full flex-shrink-0"
              style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "top center", boxShadow: "0 8px 28px rgba(0,0,0,0.12)" }}
              role="img" aria-label="Helen Calabria"
            />
            <div>
              <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-4xl font-normal mb-1">{about.name}</h1>
              <p style={{ color: "var(--hc-primary-mid)" }} className="text-sm">{about.title}</p>
            </div>
            <CredentialTags />
          </div>
        </section>
      )}

      {/* ── Beside ── */}
      {aboutLayout === "beside" && (
        <section className="py-16 px-6" style={{ backgroundColor: "var(--hc-surface)" }}>
          <div className={`max-w-3xl mx-auto flex items-center gap-8 flex-wrap sm:flex-nowrap ${photoLeft ? "" : "sm:flex-row-reverse"}`}>
            <div
              className="w-36 h-36 rounded-full flex-shrink-0"
              style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "top center", boxShadow: "0 8px 28px rgba(0,0,0,0.12)" }}
              role="img" aria-label="Helen Calabria"
            />
            <div>
              <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-4xl font-normal mb-1">{about.name}</h1>
              <p style={{ color: "var(--hc-primary-mid)" }} className="text-sm mb-4">{about.title}</p>
              <div className="flex flex-wrap gap-2">
                {credentials.map((c) => (
                  <span key={c} style={{ backgroundColor: "var(--hc-bg)", border: "1px solid var(--hc-border)", color: "var(--hc-primary-mid)" }} className="px-3 py-1.5 rounded-full text-xs font-medium">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Card ── */}
      {aboutLayout === "card" && (
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--hc-surface)" }}>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
            <div
              className="w-48 rounded-2xl flex-shrink-0"
              style={{ height: "280px", backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "top center", boxShadow: "0 12px 40px rgba(0,0,0,0.14)" }}
              role="img" aria-label="Helen Calabria"
            />
            <div>
              <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-4xl font-normal mb-1">{about.name}</h1>
              <p style={{ color: "var(--hc-primary-mid)" }} className="text-sm">{about.title}</p>
            </div>
            <CredentialTags />
          </div>
        </section>
      )}

      {/* Bio */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-12 items-start">
          <div>
            <p
              style={{ color: "var(--hc-primary-light)" }}
              className="text-xs font-medium tracking-widest uppercase mb-5"
            >
              My story
            </p>
            <div className="flex flex-col gap-4 leading-relaxed text-sm" style={{ color: "var(--hc-text-body)" }}>
              {about.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div>
            <p
              style={{ color: "var(--hc-primary-light)" }}
              className="text-xs font-medium tracking-widest uppercase mb-5"
            >
              What I help with
            </p>
            <ul className="flex flex-col gap-2.5">
              {topics.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span
                    style={{ backgroundColor: "var(--hc-accent)" }}
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  />
                  <span className="text-sm" style={{ color: "var(--hc-text-body)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "var(--hc-surface)" }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            style={{ color: "var(--hc-primary-light)" }}
            className="text-xs font-medium tracking-widest uppercase text-center mb-10"
          >
            Common questions
          </p>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

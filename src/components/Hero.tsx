import { useNavigate } from "react-router-dom";
import { usePhoto } from "../context/PhotoContext";
import type { HeroLayout } from "../context/PhotoContext";

const TAGLINE = "Parent Coach · Co-Parenting Support";
const HEADING = "A gentler path through parenting and co-parenting";
const COPY    = "I provide co-parenting support and parent coaching to help families navigate separation, reduce conflict, and raise children across two households — including neurodivergent kids. With 15 years of experience and a background in education, I bring practical tools and real compassion to every session.";

const layouts: { value: HeroLayout; label: string }[] = [
  { value: "centered", label: "Centered" },
  { value: "split",    label: "Split"    },
  { value: "portrait", label: "Portrait" },
];

export default function Hero() {
  const navigate = useNavigate();
  const { photo, setPhoto, heroLayout, setHeroLayout, photoSide, setPhotoSide } = usePhoto();
  const src       = `/headshot-${photo}.jpg`;
  const photoLeft = photoSide === "left";

  function Btns({ dark = false, center = false }: { dark?: boolean; center?: boolean }) {
    return (
      <div className={`flex flex-wrap gap-3 mt-2 ${center ? "justify-center" : ""}`}>
        <button
          onClick={() => navigate("/book")}
          style={dark
            ? { backgroundColor: "white", color: "var(--hc-primary-dark)" }
            : { backgroundColor: "var(--hc-primary)", color: "white" }}
          className="px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Start with a free call
        </button>
        <button
          onClick={() => navigate("/sessions")}
          style={dark
            ? { border: "1.5px solid rgba(255,255,255,0.45)", color: "white", backgroundColor: "transparent" }
            : { border: "1.5px solid var(--hc-border)", color: "var(--hc-primary-mid)", backgroundColor: "transparent" }}
          className="px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity"
        >
          How sessions work
        </button>
      </div>
    );
  }

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
    <>
      {/* Controls bar */}
      <div
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
          {layouts.map(({ value, label }) => (
            <CtrlBtn key={value} active={heroLayout === value} onClick={() => setHeroLayout(value)}>{label}</CtrlBtn>
          ))}
        </div>
        {heroLayout !== "centered" && (
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--hc-text-muted)" }} className="text-xs">Photo side</span>
            <CtrlBtn active={photoLeft}  onClick={() => setPhotoSide("left")}>Left</CtrlBtn>
            <CtrlBtn active={!photoLeft} onClick={() => setPhotoSide("right")}>Right</CtrlBtn>
          </div>
        )}
      </div>

      {/* ── Centered ── */}
      {heroLayout === "centered" && (
        <section
          style={{ background: "linear-gradient(160deg, var(--hc-surface) 0%, var(--hc-bg) 100%)", borderBottom: "1px solid var(--hc-border)" }}
          className="py-24 px-6 text-center"
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div
              className="w-36 h-36 rounded-full flex-shrink-0"
              style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "top center", boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
              role="img" aria-label="Helen Calabria"
            />
            <p style={{ color: "var(--hc-primary-light)" }} className="text-xs font-medium tracking-widest uppercase">{TAGLINE}</p>
            <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-4xl sm:text-5xl font-normal leading-snug">{HEADING}</h1>
            <p style={{ color: "var(--hc-text-body)" }} className="text-lg leading-relaxed max-w-lg">{COPY}</p>
            <Btns center />
          </div>
        </section>
      )}

      {/* ── Split ── */}
      {heroLayout === "split" && (
        <section
          style={{ background: "linear-gradient(160deg, var(--hc-surface) 0%, var(--hc-bg) 100%)", borderBottom: "1px solid var(--hc-border)" }}
          className="overflow-hidden"
        >
          <div className={`max-w-5xl mx-auto flex min-h-[540px] ${photoLeft ? "sm:flex-row-reverse" : ""}`}>
            <div className="flex flex-col justify-center py-20 px-8 gap-5 flex-1">
              <p style={{ color: "var(--hc-primary-light)" }} className="text-xs font-medium tracking-widest uppercase">{TAGLINE}</p>
              <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-4xl font-normal leading-snug">{HEADING}</h1>
              <p style={{ color: "var(--hc-text-body)" }} className="leading-relaxed">{COPY}</p>
              <Btns />
            </div>
            <div
              className="hidden sm:block w-[45%] flex-shrink-0"
              style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "top center" }}
              role="img" aria-label="Helen Calabria"
            />
          </div>
        </section>
      )}

      {/* ── Portrait ── */}
      {heroLayout === "portrait" && (
        <section
          style={{ background: "linear-gradient(160deg, var(--hc-surface) 0%, var(--hc-bg) 100%)", borderBottom: "1px solid var(--hc-border)" }}
          className="py-20 px-6"
        >
          <div className={`max-w-5xl mx-auto flex items-center gap-12 ${photoLeft ? "sm:flex-row-reverse" : ""}`}>
            <div className="flex flex-col gap-5 flex-1 min-w-0">
              <p style={{ color: "var(--hc-primary-light)" }} className="text-xs font-medium tracking-widest uppercase">{TAGLINE}</p>
              <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-4xl font-normal leading-snug">{HEADING}</h1>
              <p style={{ color: "var(--hc-text-body)" }} className="leading-relaxed">{COPY}</p>
              <Btns />
            </div>
            <div
              className="hidden sm:block flex-shrink-0 w-56 rounded-2xl"
              style={{ height: "420px", backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "top center", boxShadow: "0 12px 40px rgba(0,0,0,0.13)" }}
              role="img" aria-label="Helen Calabria"
            />
          </div>
        </section>
      )}
    </>
  );
}

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background: "linear-gradient(160deg, var(--hc-surface) 0%, var(--hc-bg) 100%)",
        borderBottom: "1px solid var(--hc-border)",
      }}
      className="py-24 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <div
          style={{ backgroundColor: "var(--hc-primary)", color: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-serif font-medium"
        >
          HC
        </div>
        <p style={{ color: "var(--hc-primary-light)" }} className="text-xs font-medium tracking-widest uppercase">
          Parent Coach · Co-Parenting Support
        </p>
        <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-4xl sm:text-5xl font-normal leading-snug">
          A gentler path through parenting and co-parenting
        </h1>
        <p style={{ color: "var(--hc-text-body)" }} className="text-lg leading-relaxed max-w-lg">
          I provide co-parenting support and parent coaching to help families
          navigate separation, reduce conflict, and raise children across two
          households — including neurodivergent kids. With 15 years of experience
          and a background in education, I bring practical tools and real
          compassion to every session.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <button
            onClick={() => navigate("/book")}
            style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
            className="px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Start with a free call
          </button>
          <button
            onClick={() => navigate("/sessions")}
            style={{ border: "1.5px solid var(--hc-border)", color: "var(--hc-primary-mid)", backgroundColor: "transparent" }}
            className="px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity"
          >
            How sessions work
          </button>
        </div>
      </div>
    </section>
  );
}

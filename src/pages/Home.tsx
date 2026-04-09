import { useNavigate } from "react-router-dom";
import { IconLeaf, IconTwoHearts, IconCompass } from "../components/SessionIcons";
import Hero from "../components/Hero";
import { homeSessionCards, testimonials, homeContact, site, showTestimonials } from "../content";

const icons = [IconLeaf, IconTwoHearts, IconCompass];
const sessions = homeSessionCards.map((s, i) => ({ ...s, Icon: icons[i] }));

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />

      {/* Sessions */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--hc-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <p
            style={{ color: "var(--hc-primary-light)" }}
            className="text-xs font-medium tracking-widest uppercase text-center mb-10"
          >
            Ways to work together
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {sessions.map((s) => (
              <div
                key={s.title}
                style={{
                  backgroundColor: "var(--hc-surface)",
                  border: "1px solid var(--hc-border)",
                }}
                className="rounded-2xl p-7 flex flex-col gap-4"
              >
                <div
                  style={{ backgroundColor: "var(--hc-accent)", color: "var(--hc-primary-dark)" }}
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                >
                  <s.Icon size={20} color="currentColor" />
                </div>
                <div>
                  <h3
                    style={{ color: "var(--hc-primary-dark)" }}
                    className="font-serif text-xl font-medium"
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{ color: "var(--hc-primary-light)" }}
                    className="text-xs font-medium tracking-wider uppercase mt-0.5"
                  >
                    {s.subtitle}
                  </p>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--hc-text-body)" }}>
                  {s.description}
                </p>
                <p style={{ color: "var(--hc-primary-light)" }} className="text-xs">
                  {s.price}
                </p>
                <button
                  onClick={() => navigate("/book")}
                  style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
                  className="mt-auto py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {s.bookLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — set showTestimonials to true in content.ts to enable */}
      {showTestimonials && (
        <section
          id="testimonials"
          className="py-20 px-6"
          style={{ backgroundColor: "var(--hc-surface)" }}
        >
          <div className="max-w-5xl mx-auto">
            <p
              style={{ color: "var(--hc-primary-light)" }}
              className="text-xs font-medium tracking-widest uppercase text-center mb-10"
            >
              Kind words
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "var(--hc-bg)",
                    border: "1px solid var(--hc-border)",
                  }}
                  className="rounded-2xl p-8"
                >
                  <p
                    style={{ color: "var(--hc-primary-dark)" }}
                    className="font-serif italic text-lg leading-relaxed mb-4"
                  >
                    "{t.quote}"
                  </p>
                  <p style={{ color: "var(--hc-primary-light)" }} className="text-sm">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "var(--hc-bg)" }}
      >
        <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
          <p
            style={{ color: "var(--hc-primary-light)" }}
            className="text-xs font-medium tracking-widest uppercase"
          >
            {homeContact.sectionLabel}
          </p>
          <h2
            style={{ color: "var(--hc-primary-dark)" }}
            className="font-serif text-3xl font-normal"
          >
            {homeContact.heading}
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--hc-text-body)" }}>
            {homeContact.body}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => navigate("/book")}
              style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
              className="px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {homeContact.ctaPrimary}
            </button>
            <a
              href={`mailto:${site.email}`}
              style={{ color: "var(--hc-primary)" }}
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

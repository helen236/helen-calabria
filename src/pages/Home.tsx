import { useNavigate } from "react-router-dom";
import { IconLeaf, IconTwoHearts, IconCompass } from "../components/SessionIcons";
import Hero from "../components/Hero";

const sessions = [
  {
    Icon: IconLeaf,
    title: "Just for you",
    subtitle: "Individual · 50 min",
    description:
      "For one parent navigating co-parenting dynamics, everyday parenting challenges, or raising a neurodivergent child.",
    price: "Book a free intro call to discuss",
  },
  {
    Icon: IconTwoHearts,
    title: "Both of you",
    subtitle: "Joint · 50 min",
    description:
      "Both co-parents on the call, working together to build alignment, reduce conflict, and create consistency across households.",
    price: "Book a free intro call to discuss",
  },
  {
    Icon: IconCompass,
    title: "Ongoing support",
    subtitle: "Package · 4 sessions",
    description:
      "Sustained progress over a month — building routines, strengthening communication, and reducing family reactivity step by step.",
    price: "Book a free intro call to discuss",
  },
];

const testimonials = [
  {
    quote:
      "Helen helped us go from constant conflict to actually co-parenting. Our kids feel it. We feel it. I wish we'd found her sooner.",
    name: "— A grateful parent",
  },
  {
    quote:
      "I came to Helen completely overwhelmed. She gave me practical tools and, more than that, she made me feel like I could do this.",
    name: "— A parent, after 3 sessions",
  },
];

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
                <p
                  style={{ color: "var(--hc-primary-light)" }}
                  className="text-xs"
                >
                  {s.price}
                </p>
                <button
                  onClick={() => navigate("/book")}
                  style={{
                    backgroundColor: "var(--hc-primary)",
                    color: "white",
                  }}
                  className="mt-auto py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                <p
                  style={{ color: "var(--hc-primary-light)" }}
                  className="text-sm"
                >
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Get in touch
          </p>
          <h2
            style={{ color: "var(--hc-primary-dark)" }}
            className="font-serif text-3xl font-normal"
          >
            Not sure where to start?
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--hc-text-body)" }}>
            A free 20-minute intro call is the best first step. We'll talk about
            what's going on and whether working together makes sense.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => navigate("/book")}
              style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
              className="px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a free intro call
            </button>
            <a
              href="mailto:helen@helencalabria.com"
              style={{ color: "var(--hc-primary)" }}
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              helen@helencalabria.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

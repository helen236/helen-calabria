import { useNavigate } from "react-router-dom";
import { IconLeaf, IconTwoHearts, IconCompass } from "../components/SessionIcons";

const services = [
  {
    Icon: IconLeaf,
    title: "Just for you",
    label: "Individual Session · 50 min",
    whoFor:
      "One parent looking for support — whether you're navigating co-parenting dynamics, everyday parenting challenges, or raising a neurodivergent child.",
    expect:
      "We'll explore what's feeling hard, identify patterns in what's happening at home or across households, and develop practical strategies you can use right away.",
    price: "Reach out to discuss pricing",
  },
  {
    Icon: IconTwoHearts,
    title: "Both of you",
    label: "Joint Session · 50 min",
    whoFor:
      "Both co-parents, together — whether you're newly separated or long-divorced and looking to improve how you support each other and your children.",
    expect:
      "A structured, guided conversation focused on building communication, reducing conflict, and creating consistency across households. Helen holds a calm, neutral space for both of you.",
    price: "Reach out to discuss pricing",
  },
  {
    Icon: IconCompass,
    title: "Ongoing support",
    label: "4-Session Package · Over a month",
    whoFor:
      "Parents who want sustained progress — not just one conversation, but real, lasting change in how your family functions.",
    expect:
      "Four sessions with reflection between each one. We set goals, track progress, and adjust as life changes. Most families see meaningful shifts within the first month.",
    price: "Reach out to discuss pricing",
  },
];

export default function Sessions() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "var(--hc-bg)" }}>
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              style={{ color: "var(--hc-primary-light)" }}
              className="text-xs font-medium tracking-widest uppercase mb-4"
            >
              Sessions & pricing
            </p>
            <h1
              style={{ color: "var(--hc-primary-dark)" }}
              className="font-serif text-4xl font-normal"
            >
              Ways to work together
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  backgroundColor: "var(--hc-surface)",
                  border: "1px solid var(--hc-border)",
                }}
                className="rounded-2xl p-8 sm:p-10"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <div className="flex-shrink-0">
                    <div
                      style={{ backgroundColor: "var(--hc-accent)", color: "var(--hc-primary-dark)" }}
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                    >
                      <s.Icon size={26} color="currentColor" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div>
                      <h2
                        style={{ color: "var(--hc-primary-dark)" }}
                        className="font-serif text-2xl font-medium"
                      >
                        {s.title}
                      </h2>
                      <p
                        style={{ color: "var(--hc-primary-light)" }}
                        className="text-xs font-medium tracking-wider uppercase mt-0.5"
                      >
                        {s.label}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p
                          style={{ color: "var(--hc-primary-mid)" }}
                          className="text-xs font-medium uppercase tracking-wider mb-1"
                        >
                          Who it's for
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--hc-text-body)" }}>
                          {s.whoFor}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{ color: "var(--hc-primary-mid)" }}
                          className="text-xs font-medium uppercase tracking-wider mb-1"
                        >
                          What to expect
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--hc-text-body)" }}>
                          {s.expect}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                      <p
                        style={{ color: "var(--hc-primary-light)" }}
                        className="text-sm"
                      >
                        {s.price}
                      </p>
                      <button
                        onClick={() => navigate("/book")}
                        style={{
                          backgroundColor: "var(--hc-primary)",
                          color: "white",
                        }}
                        className="px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Not sure CTA */}
          <div
            className="mt-10 text-center py-12 px-8 rounded-2xl"
            style={{
              backgroundColor: "var(--hc-surface)",
              border: "1px solid var(--hc-border)",
            }}
          >
            <h3
              style={{ color: "var(--hc-primary-dark)" }}
              className="font-serif text-2xl font-normal mb-3"
            >
              Not sure which is right for you?
            </h3>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--hc-text-body)" }}>
              A free 20-minute intro call is the best way to figure it out. No
              commitment, no pressure — just a conversation about what you need.
            </p>
            <button
              onClick={() => navigate("/book")}
              style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
              className="px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a free intro call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

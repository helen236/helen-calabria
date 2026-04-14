import { useNavigate } from "react-router-dom";
import { IconLeaf, IconTwoHearts, IconCompass } from "../components/SessionIcons";
import { sessionDetails, sessionsCta } from "../content";

const icons = [IconLeaf, IconTwoHearts, IconCompass];
const services = sessionDetails.map((s, i) => ({ ...s, Icon: icons[i] }));

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
                      <button
                        onClick={() => navigate("/book")}
                        style={{
                          backgroundColor: "var(--hc-primary)",
                          color: "white",
                        }}
                        className="px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        {s.bookLabel}
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
              {sessionsCta.heading}
            </h3>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--hc-text-body)" }}>
              {sessionsCta.body}
            </p>
            <button
              onClick={() => navigate("/book")}
              style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
              className="px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {sessionsCta.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

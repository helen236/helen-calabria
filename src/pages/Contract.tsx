import { site, about } from "../content";

export default function Contract() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-page { box-shadow: none !important; border: none !important; padding: 0 !important; }
          body { background: white !important; }
        }
      `}</style>

      <div style={{ backgroundColor: "var(--hc-bg)" }} className="min-h-screen py-16 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-10 no-print">
            <p style={{ color: "var(--hc-primary-light)" }} className="text-xs font-medium tracking-widest uppercase mb-3">
              New clients
            </p>
            <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-3xl font-normal mb-3">
              Coaching Agreement
            </h1>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--hc-text-body)" }}>
              Please review and sign this agreement before our first session. Feel free to reach out with any questions.
            </p>
            <button
              onClick={() => window.print()}
              style={{ border: "1.5px solid var(--hc-border)", color: "var(--hc-primary-mid)", backgroundColor: "transparent" }}
              className="px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Save as PDF / Print
            </button>
          </div>

          {/* Contract body */}
          <div
            className="print-page rounded-2xl p-10"
            style={{ backgroundColor: "var(--hc-surface)", border: "1px solid var(--hc-border)" }}
          >
            {/* Title */}
            <div className="mb-8 text-center">
              <h2 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-2xl font-normal mb-1">
                Parent Coaching Agreement
              </h2>
              <p style={{ color: "var(--hc-primary-light)" }} className="text-sm">{site.domain}</p>
            </div>

            {/* Section 1 — Coach info */}
            <section className="mb-6">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-3">
                1. Parent Coach
              </h3>
              <div style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4">
                <p>{about.name}</p>
                <p>{about.title}</p>
                <p>{site.email}</p>
                <p>{site.domain}</p>
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Section 2 — Client info */}
            <section className="mb-6">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-3">
                2. Client
              </h3>
              <div className="pl-4 flex flex-col gap-3">
                {["Name", "Address", "Phone", "Email"].map((field) => (
                  <div key={field} className="flex items-end gap-3">
                    <span style={{ color: "var(--hc-primary-dark)" }} className="text-sm w-16 flex-shrink-0">{field}</span>
                    <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="flex-1" />
                  </div>
                ))}
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Section 3 — Coach agrees */}
            <section className="mb-6">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-3">
                3. The Parent Coach Agrees To
              </h3>
              <ul style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4 flex flex-col gap-3 list-disc list-inside">
                <li>Provide coaching sessions as agreed — individual (50 min), joint (90 min), or a 4-session package — at the scheduled time;</li>
                <li>Respond to client emails and messages in a timely and appropriate manner;</li>
                <li>Maintain confidentiality as described below;</li>
                <li>Refer the client to another professional (e.g. therapist, mediator) if coaching is not the most appropriate support; and</li>
                <li>Abide by the Coaching Ethics set forth by the International Coaching Federation (ICF).</li>
              </ul>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Section 4 — Client agrees */}
            <section className="mb-6">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-3">
                4. The Client Agrees To
              </h3>
              <ul style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4 flex flex-col gap-3 list-disc list-inside">
                <li>Attend sessions as scheduled and provide at least 24 hours notice if cancellation is necessary;</li>
                <li>Approach the coaching relationship with honesty, openness, and a willingness to explore new approaches;</li>
                <li>Maintain confidentiality as described below; and</li>
                <li>Make timely payment for sessions at the agreed rate:<br />
                  <span className="pl-4 block mt-1">Individual Session (50 min) — $175</span>
                  <span className="pl-4 block">Joint Session (90 min) — $250</span>
                  <span className="pl-4 block">4-Session Package — $650</span>
                </li>
              </ul>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Section 5 — Confidentiality */}
            <section className="mb-6">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-3">
                5. Confidentiality
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4">
                All information shared within the coaching relationship is confidential. Helen Calabria will not disclose any client information to a third party without written consent, except where required by law (e.g. risk of harm to self or others). Clients are equally asked to keep the content of sessions private.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Section 6 — Nature of coaching */}
            <section className="mb-6">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-3">
                6. Nature of Coaching
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4">
                Parent coaching is a forward-focused, practical, and collaborative process. It is not therapy, counseling, or legal advice. Coaching does not diagnose or treat mental health conditions. If therapeutic or legal support is needed, the coach will make an appropriate referral.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Section 7 — Cancellation */}
            <section className="mb-6">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-3">
                7. Cancellation Policy
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4">
                Please provide at least 24 hours notice to cancel or reschedule a session. Late cancellations or no-shows may be charged the full session fee at the coach's discretion.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Signatures */}
            <section className="mb-2">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-medium text-sm uppercase tracking-wider mb-6">
                8. Agreement &amp; Signatures
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed mb-8">
                By signing below, both parties agree to the terms outlined in this coaching agreement.
              </p>

              <div className="flex flex-col gap-8">
                {/* Coach signature */}
                <div>
                  <p style={{ color: "var(--hc-primary-dark)" }} className="text-sm font-medium mb-4">Parent Coach</p>
                  <div className="flex flex-col gap-4">
                    {["Signature", "Date"].map((f) => (
                      <div key={f} className="flex items-end gap-3">
                        <span style={{ color: "var(--hc-primary-light)" }} className="text-xs w-20 flex-shrink-0">{f}</span>
                        <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="flex-1" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client signature */}
                <div>
                  <p style={{ color: "var(--hc-primary-dark)" }} className="text-sm font-medium mb-4">Client</p>
                  <div className="flex flex-col gap-4">
                    {["Signature", "Date"].map((f) => (
                      <div key={f} className="flex items-end gap-3">
                        <span style={{ color: "var(--hc-primary-light)" }} className="text-xs w-20 flex-shrink-0">{f}</span>
                        <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="flex-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--hc-border)" }}>
              <p style={{ color: "var(--hc-primary-light)" }} className="text-xs">{about.name} · {site.email} · {site.domain}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

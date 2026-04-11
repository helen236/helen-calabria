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

          {/* Page header */}
          <div className="mb-10 no-print">
            <p style={{ color: "var(--hc-primary-light)" }} className="text-xs font-medium tracking-widest uppercase mb-3">
              New clients
            </p>
            <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-3xl font-normal mb-3">
              Coaching Agreement
            </h1>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--hc-text-body)" }}>
              Please review this agreement carefully and sign before our first session. Reach out with any questions at{" "}
              <a href={`mailto:${site.email}`} style={{ color: "var(--hc-primary)" }}>{site.email}</a>.
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
            <div className="mb-10 text-center">
              <h2 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-2xl font-normal mb-1">
                Parent Coaching Agreement
              </h2>
              <p style={{ color: "var(--hc-primary-light)" }} className="text-sm">{site.domain}</p>
            </div>

            {/* 1. Coach */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-3">
                1. Parent Coach
              </h3>
              <div style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4 space-y-0.5">
                <p>{about.name}</p>
                <p>{about.title}</p>
                <p>{site.email}</p>
                <p>{site.domain}</p>
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* 2. Client */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-4">
                2. Client
              </h3>
              <div className="pl-4 flex flex-col gap-4">
                {["Name", "Address", "Phone", "Email"].map((field) => (
                  <div key={field} className="flex items-end gap-3">
                    <span style={{ color: "var(--hc-primary-dark)" }} className="text-sm w-16 flex-shrink-0">{field}</span>
                    <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="flex-1" />
                  </div>
                ))}
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* 3. Coach agrees */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-3">
                3. The Parent Coach Agrees To
              </h3>
              <ul style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4 space-y-3 list-disc list-inside">
                <li>Provide coaching sessions as agreed — individual (50 min), joint (90 min), or a 4-session package — at the scheduled time;</li>
                <li>Provide additional coaching as needed or requested by the Client beyond regular scheduled sessions;</li>
                <li>Respond to Client emails and messages in a timely and appropriate manner;</li>
                <li>Maintain confidentiality as described in greater detail below;</li>
                <li>Refer the Client to another professional (e.g. therapist, mediator, or attorney) if coaching is not the most appropriate support; and</li>
                <li>Abide by the Coaching Ethics set forth by the International Coaching Federation (ICF).</li>
              </ul>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* 4. Client agrees */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-3">
                4. The Client Agrees To
              </h3>
              <ul style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4 space-y-3 list-disc list-inside">
                <li>Attend sessions as scheduled and provide at least 24 hours notice if cancellation or rescheduling is necessary;</li>
                <li>Maintain confidentiality (as described in greater detail below), honesty, a willingness to change, and an attitude of collaboration;</li>
                <li>Make timely payment for sessions at the following rates:
                  <ul className="pl-6 mt-2 space-y-1 list-disc list-inside">
                    <li>Individual Session (50 min) — $175</li>
                    <li>Joint Session (90 min) — $250</li>
                    <li>4-Session Package — $650</li>
                  </ul>
                </li>
              </ul>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* 5. Confidentiality */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-3">
                5. Confidentiality
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4 mb-3">
                Information revealed by the Client during any communication with the Parent Coach is confidential and will not be shared with any outside party without written consent from the Client. Exceptions to this standard are:
              </p>
              <ul style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4 space-y-3 list-disc list-inside">
                <li>Suicidal statements, which the Parent Coach may share with family members and appropriate mental-health professionals, if needed;</li>
                <li>Statements of intent to harm others, which the Parent Coach may report to law enforcement personnel and to the potential victim(s);</li>
                <li>Evidence of child, spouse, or elder physical or sexual abuse, which the Parent Coach may report to the appropriate government agencies according to applicable law; and</li>
                <li>Where disclosure is required by subpoena, court order, or other valid legal mandate.</li>
              </ul>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* 6. Nature of coaching */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-3">
                6. Nature of Coaching
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4">
                Parent coaching is a forward-focused, practical, and collaborative process. It is not therapy, counseling, or legal advice, and does not involve diagnosis or treatment of mental health conditions. If the Coach believes therapeutic, medical, or legal support would better serve the Client, an appropriate referral will be made.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* 7. Cancellation */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-3">
                7. Cancellation Policy
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4">
                Please provide at least 24 hours notice to cancel or reschedule a session. Late cancellations or no-shows may be charged the full session fee at the Coach's discretion.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* 8. Governing law */}
            <section className="mb-8">
              <h3 style={{ color: "var(--hc-primary-dark)" }} className="font-semibold text-sm mb-3">
                8. Governing Law
              </h3>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed pl-4">
                This agreement is to be governed by the laws of the State of Washington.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--hc-border)" }} className="my-6" />

            {/* Signature block */}
            <section>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed mb-6">
                In signing below, both the Parent Coach and the Client certify that they have read, understand, and agree to abide by this agreement, and that the Client has had the opportunity to ask questions before signing.
              </p>

              <div className="flex items-end gap-2 mb-8">
                <span style={{ color: "var(--hc-text-body)" }} className="text-sm">Dated this</span>
                <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="w-12" />
                <span style={{ color: "var(--hc-text-body)" }} className="text-sm">day of</span>
                <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="w-32" />
                <span style={{ color: "var(--hc-text-body)" }} className="text-sm">, 202</span>
                <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="w-8" />
              </div>

              <div className="grid grid-cols-2 gap-10">
                {/* Coach */}
                <div>
                  <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="mb-2 pb-8" />
                  <p style={{ color: "var(--hc-primary-dark)" }} className="text-sm font-medium">{about.name}</p>
                  <p style={{ color: "var(--hc-primary-light)" }} className="text-xs">Parent Coach</p>
                </div>
                {/* Client */}
                <div>
                  <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="mb-2 pb-8" />
                  <p style={{ color: "var(--hc-primary-dark)" }} className="text-sm font-medium">Client Signature</p>
                  <div style={{ borderBottom: "1px solid var(--hc-border)" }} className="mt-4 w-full" />
                  <p style={{ color: "var(--hc-primary-light)" }} className="text-xs mt-1">Print name</p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--hc-border)" }}>
              <p style={{ color: "var(--hc-primary-light)" }} className="text-xs">
                {about.name} · {site.email} · {site.domain}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

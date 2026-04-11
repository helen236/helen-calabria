import { site, about } from "../content";

const questions = [
  { id: 1, label: "Why are you seeking coaching?" },
  { id: 2, label: "What would you like to have accomplished or gained through coaching?" },
  { id: 3, label: "What are the current roadblocks getting in the way?" },
  { id: 4, label: "Tell me what you most appreciate about your current situation." },
  { id: 5, label: "List your family's strengths:" },
  { id: 6, label: "List the strengths of your child(ren) / the people you are parenting or co-parenting:" },
  { id: 7, label: "List your own strengths:" },
  { id: 8, label: "Who are your best supporters? How do you take care of yourself so you can show up well for your family?" },
  { id: 9, label: "Is there anything else you'd like me to know before we begin?" },
  { id: 10, label: "In a perfect world, my life would look like…" },
];

export default function Intake() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-page { box-shadow: none !important; border: none !important; }
          body { background: white !important; }
        }
      `}</style>

      <div style={{ backgroundColor: "var(--hc-bg)" }} className="min-h-screen py-16 px-6 no-print-bg">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-10 no-print">
            <p style={{ color: "var(--hc-primary-light)" }} className="text-xs font-medium tracking-widest uppercase mb-3">
              New clients
            </p>
            <h1 style={{ color: "var(--hc-primary-dark)" }} className="font-serif text-3xl font-normal mb-3">
              Client Intake Form
            </h1>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--hc-text-body)" }}>
              Please complete this form before our first session. Your answers help me understand your situation and make our time together as useful as possible.
            </p>
            <button
              onClick={() => window.print()}
              style={{ border: "1.5px solid var(--hc-border)", color: "var(--hc-primary-mid)", backgroundColor: "transparent" }}
              className="px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Save as PDF / Print
            </button>
          </div>

          {/* Printable form */}
          <div
            className="print-page rounded-2xl p-10"
            style={{ backgroundColor: "var(--hc-surface)", border: "1px solid var(--hc-border)" }}
          >
            {/* Print header — visible only when printing */}
            <div className="hidden print:block mb-8">
              <h1 className="text-2xl font-bold mb-1">{about.name}</h1>
              <p className="text-sm">{about.title}</p>
              <p className="text-sm">{site.email} · {site.domain}</p>
              <hr className="my-4" />
              <h2 className="text-xl font-bold">Client Intake Form</h2>
            </div>

            {/* Date & name fields */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label style={{ color: "var(--hc-primary-dark)" }} className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="w-full border-b py-2 bg-transparent text-sm outline-none"
                  style={{ borderColor: "var(--hc-border)", color: "var(--hc-text-body)" }}
                />
              </div>
              <div>
                <label style={{ color: "var(--hc-primary-dark)" }} className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border-b py-2 bg-transparent text-sm outline-none"
                  style={{ borderColor: "var(--hc-border)", color: "var(--hc-text-body)" }}
                />
              </div>
              <div>
                <label style={{ color: "var(--hc-primary-dark)" }} className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border-b py-2 bg-transparent text-sm outline-none"
                  style={{ borderColor: "var(--hc-border)", color: "var(--hc-text-body)" }}
                />
              </div>
              <div>
                <label style={{ color: "var(--hc-primary-dark)" }} className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full border-b py-2 bg-transparent text-sm outline-none"
                  style={{ borderColor: "var(--hc-border)", color: "var(--hc-text-body)" }}
                />
              </div>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-8">
              {questions.map((q) => (
                <div key={q.id}>
                  <label style={{ color: "var(--hc-primary-dark)" }} className="block text-sm font-medium mb-2">
                    {q.id}. {q.label}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border rounded-lg p-3 bg-transparent text-sm outline-none resize-none"
                    style={{ borderColor: "var(--hc-border)", color: "var(--hc-text-body)" }}
                  />
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--hc-border)" }}>
              <p style={{ color: "var(--hc-text-body)" }} className="text-sm leading-relaxed">
                Thank you for taking the time to complete this form. I look forward to connecting with you.
              </p>
              <p style={{ color: "var(--hc-primary-dark)" }} className="text-sm font-medium mt-3">{about.name}</p>
              <p style={{ color: "var(--hc-primary-light)" }} className="text-xs">{site.email} · {site.domain}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

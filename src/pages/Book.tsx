import { useState } from "react";

type SessionType = "individual" | "joint" | null;

function getWeekDays() {
  const days = [];
  const today = new Date();
  let d = new Date(today);
  // Start from next Monday
  d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7 || 7));
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  for (let i = 0; i < 5; i++) {
    const date = new Date(d);
    date.setDate(d.getDate() + i);
    days.push({
      label: dayNames[i],
      date: date.getDate(),
      month: date.toLocaleString("default", { month: "short" }),
      fullyBooked: i === 1 || i === 3, // mock: Tue and Thu booked
    });
  }
  return days;
}

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

function CheckmarkSVG() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      style={{ overflow: "visible" }}
    >
      <circle
        cx="36"
        cy="36"
        r="32"
        stroke="var(--hc-primary)"
        strokeWidth="3"
        fill="var(--hc-surface)"
      />
      <path
        d="M22 36 L31 46 L50 26"
        stroke="var(--hc-primary)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="0"
        style={{
          animation: "drawCheck 0.5s ease forwards",
        }}
      />
      <style>{`
        @keyframes drawCheck {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}

export default function Book() {
  const [step, setStep] = useState(1);
  const [sessionType, setSessionType] = useState<SessionType>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coParentEmail: "",
    focus: "",
    terms: false,
  });
  const [confirmed, setConfirmed] = useState(false);

  const weekDays = getWeekDays();

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div
        style={{ backgroundColor: "var(--hc-bg)" }}
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center flex flex-col items-center gap-6 max-w-md">
          <CheckmarkSVG />
          <h1
            style={{ color: "var(--hc-primary-dark)" }}
            className="font-serif text-3xl font-normal"
          >
            You're booked, {form.firstName || "friend"}!
          </h1>
          <div
            style={{
              backgroundColor: "var(--hc-surface)",
              border: "1px solid var(--hc-border)",
            }}
            className="rounded-2xl p-6 w-full text-left"
          >
            <p
              style={{ color: "var(--hc-primary-light)" }}
              className="text-xs uppercase tracking-widest mb-3"
            >
              Session summary
            </p>
            <p className="text-sm" style={{ color: "var(--hc-text-body)" }}>
              <strong>Type:</strong>{" "}
              {sessionType === "individual" ? "Individual · 50 min" : "Joint · 50 min"}
            </p>
            {selectedDay !== null && (
              <p className="text-sm mt-1" style={{ color: "var(--hc-text-body)" }}>
                <strong>Day:</strong> {weekDays[selectedDay].label},{" "}
                {weekDays[selectedDay].month} {weekDays[selectedDay].date}
              </p>
            )}
            {selectedTime && (
              <p className="text-sm mt-1" style={{ color: "var(--hc-text-body)" }}>
                <strong>Time:</strong> {selectedTime}
              </p>
            )}
            <p className="text-sm text-gray-700 mt-1">
              <strong>Email:</strong> {form.email}
            </p>
          </div>
          <a
            href="#"
            style={{ color: "var(--hc-primary)" }}
            className="text-sm font-medium underline underline-offset-2"
          >
            Add to calendar
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--hc-bg)" }} className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                style={{
                  backgroundColor: step >= s ? "var(--hc-primary)" : "var(--hc-border)",
                  color: step >= s ? "white" : "var(--hc-primary-light)",
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium"
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  style={{
                    backgroundColor: step > s ? "var(--hc-primary)" : "var(--hc-border)",
                  }}
                  className="h-0.5 w-8"
                />
              )}
            </div>
          ))}
          <p
            style={{ color: "var(--hc-primary-light)" }}
            className="text-xs ml-3"
          >
            Step {step} of 3
          </p>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h1
              style={{ color: "var(--hc-primary-dark)" }}
              className="font-serif text-3xl font-normal mb-2"
            >
              Choose your session
            </h1>
            <p className="text-sm mb-8" style={{ color: "var(--hc-text-muted)" }}>
              Pick the format that works best for you.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {(["individual", "joint"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSessionType(type)}
                  style={{
                    border:
                      sessionType === type
                        ? "2px solid var(--hc-primary)"
                        : "2px solid var(--hc-border)",
                    backgroundColor:
                      sessionType === type
                        ? "var(--hc-surface)"
                        : "var(--hc-bg)",
                  }}
                  className="p-6 rounded-2xl text-left transition-all"
                >
                  <p
                    style={{ color: "var(--hc-primary-dark)" }}
                    className="font-serif text-xl font-medium mb-1"
                  >
                    {type === "individual" ? "Individual" : "Joint"}
                  </p>
                  <p className="text-xs" style={{ color: "var(--hc-text-muted)" }}>
                    {type === "individual"
                      ? "Just you · 50 min"
                      : "Both co-parents · 50 min"}
                  </p>
                </button>
              ))}
            </div>
            <button
              onClick={() => sessionType && setStep(2)}
              disabled={!sessionType}
              style={{
                backgroundColor: sessionType ? "var(--hc-primary)" : "var(--hc-border)",
                color: sessionType ? "white" : "var(--hc-primary-light)",
              }}
              className="mt-8 px-7 py-3 rounded-full font-medium transition-colors w-full"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h1
              style={{ color: "var(--hc-primary-dark)" }}
              className="font-serif text-3xl font-normal mb-2"
            >
              Pick a time
            </h1>
            <p className="text-sm mb-8" style={{ color: "var(--hc-text-muted)" }}>
              Select a day and time that works for you.
            </p>
            <div className="grid grid-cols-5 gap-2 mb-6">
              {weekDays.map((day, i) => (
                <button
                  key={i}
                  disabled={day.fullyBooked}
                  onClick={() => {
                    setSelectedDay(i);
                    setSelectedTime(null);
                  }}
                  style={{
                    border:
                      selectedDay === i
                        ? "2px solid var(--hc-primary)"
                        : "2px solid var(--hc-border)",
                    backgroundColor: day.fullyBooked
                      ? "var(--hc-border)"
                      : selectedDay === i
                      ? "var(--hc-surface)"
                      : "var(--hc-bg)",
                    opacity: day.fullyBooked ? 0.5 : 1,
                  }}
                  className="p-3 rounded-xl text-center transition-all"
                >
                  <p
                    style={{ color: "var(--hc-primary-light)" }}
                    className="text-xs font-medium mb-1"
                  >
                    {day.label}
                  </p>
                  <p
                    style={{ color: "var(--hc-primary-dark)" }}
                    className="text-lg font-serif font-medium"
                  >
                    {day.date}
                  </p>
                  {day.fullyBooked && (
                    <p className="text-xs mt-0.5" style={{ color: "var(--hc-text-muted)" }}>Booked</p>
                  )}
                </button>
              ))}
            </div>
            {selectedDay !== null && !weekDays[selectedDay].fullyBooked && (
              <div className="flex flex-wrap gap-2 mb-8">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    style={{
                      border:
                        selectedTime === t
                          ? "2px solid var(--hc-primary)"
                          : "2px solid var(--hc-border)",
                      backgroundColor:
                        selectedTime === t ? "var(--hc-surface)" : "var(--hc-bg)",
                      color:
                        selectedTime === t
                          ? "var(--hc-primary)"
                          : "var(--hc-primary-mid)",
                    }}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                style={{ border: "1.5px solid var(--hc-border)", color: "var(--hc-primary-mid)" }}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
              >
                Back
              </button>
              <button
                onClick={() => selectedDay !== null && selectedTime && setStep(3)}
                disabled={selectedDay === null || !selectedTime}
                style={{
                  backgroundColor:
                    selectedDay !== null && selectedTime
                      ? "var(--hc-primary)"
                      : "var(--hc-border)",
                  color:
                    selectedDay !== null && selectedTime
                      ? "white"
                      : "var(--hc-primary-light)",
                }}
                className="flex-1 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <form onSubmit={handleConfirm}>
            <h1
              style={{ color: "var(--hc-primary-dark)" }}
              className="font-serif text-3xl font-normal mb-2"
            >
              Your details
            </h1>
            <p className="text-sm mb-8" style={{ color: "var(--hc-text-muted)" }}>
              Almost done — just a few details to confirm your booking.
            </p>
            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--hc-text-muted)" }}>
                    First name *
                  </label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    style={{ border: "1.5px solid var(--hc-border)", outline: "none", backgroundColor: "var(--hc-surface)", color: "var(--hc-text-body)" }}
                    className="px-4 py-2.5 rounded-xl text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--hc-text-muted)" }}>
                    Last name *
                  </label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    style={{ border: "1.5px solid var(--hc-border)", outline: "none", backgroundColor: "var(--hc-surface)", color: "var(--hc-text-body)" }}
                    className="px-4 py-2.5 rounded-xl text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--hc-text-muted)" }}>
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  style={{ border: "1.5px solid var(--hc-border)", outline: "none", backgroundColor: "var(--hc-surface)", color: "var(--hc-text-body)" }}
                  className="px-4 py-2.5 rounded-xl text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--hc-text-muted)" }}>
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  style={{ border: "1.5px solid var(--hc-border)", outline: "none", backgroundColor: "var(--hc-surface)", color: "var(--hc-text-body)" }}
                  className="px-4 py-2.5 rounded-xl text-sm"
                />
              </div>
              {sessionType === "joint" && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--hc-text-muted)" }}>
                    Co-parent's email
                  </label>
                  <input
                    type="email"
                    value={form.coParentEmail}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, coParentEmail: e.target.value }))
                    }
                    placeholder="+ Add co-parent's email"
                    style={{ border: "1.5px solid var(--hc-border)", outline: "none", backgroundColor: "var(--hc-surface)", color: "var(--hc-text-body)" }}
                    className="px-4 py-2.5 rounded-xl text-sm"
                  />
                </div>
              )}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--hc-text-muted)" }}>
                  What would you like to focus on? (optional)
                </label>
                <textarea
                  value={form.focus}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, focus: e.target.value }))
                  }
                  rows={3}
                  style={{ border: "1.5px solid var(--hc-border)", outline: "none", backgroundColor: "var(--hc-surface)", color: "var(--hc-text-body)" }}
                  className="px-4 py-2.5 rounded-xl text-sm resize-none"
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.terms}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, terms: e.target.checked }))
                  }
                  className="mt-0.5"
                />
                <span className="text-sm" style={{ color: "var(--hc-text-muted)" }}>
                  I agree to the{" "}
                  <a
                    href="#"
                    style={{ color: "var(--hc-primary)" }}
                    className="underline underline-offset-2"
                  >
                    terms and conditions
                  </a>
                </span>
              </label>
            </div>
            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                style={{ border: "1.5px solid var(--hc-border)", color: "var(--hc-primary-mid)" }}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
                className="flex-1 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Confirm booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Book() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "var(--hc-bg)" }} className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p
          style={{ color: "var(--hc-primary-light)" }}
          className="text-xs font-medium tracking-widest uppercase mb-3"
        >
          Get started
        </p>
        <h1
          style={{ color: "var(--hc-primary-dark)" }}
          className="font-serif text-3xl font-normal mb-3"
        >
          Book a free intro call
        </h1>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--hc-text-body)" }}>
          A free 20-minute call to talk about what's going on and whether working together makes sense. No commitment.
        </p>
        <p className="text-sm mb-10" style={{ color: "var(--hc-text-body)" }}>
          After booking, your{" "}
          <Link to="/contract" style={{ color: "var(--hc-primary)" }} className="font-medium hover:opacity-80 transition-opacity">
            coaching agreement
          </Link>
          {" "}and{" "}
          <Link to="/intake" style={{ color: "var(--hc-primary)" }} className="font-medium hover:opacity-80 transition-opacity">
            intake form
          </Link>
          {" "}will be available here to complete and send to me before our first session.
        </p>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/helen-helencalabria/free-intro-call?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "900px" }}
        />
      </div>
    </div>
  );
}

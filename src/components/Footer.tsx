import { Link } from "react-router-dom";
import { site } from "../content";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--hc-border)",
        backgroundColor: "var(--hc-surface)",
      }}
      className="mt-auto"
    >
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          style={{ color: "var(--hc-primary-dark)" }}
          className="font-serif italic text-lg"
        >
          {site.domain}
        </span>
        <div className="flex items-center gap-5">
          {[
            { label: "About", to: "/about" },
            { label: "Sessions", to: "/sessions" },
            { label: "Book", to: "/book" },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              style={{ color: "var(--hc-primary-mid)" }}
              className="text-sm hover:opacity-80 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-end gap-1">
          <a
            href={`mailto:${site.email}`}
            style={{ color: "var(--hc-primary-mid)" }}
            className="text-sm hover:opacity-80 transition-opacity"
          >
            {site.email}
          </a>
          <p style={{ color: "var(--hc-primary-light)" }} className="text-xs">
            {site.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useNavigate, useLocation } from "react-router-dom";
import { site } from "../content";

const links = [
  { label: "About",    to: "/about",    hash: null      },
  { label: "Sessions", to: "/sessions", hash: null      },
  { label: "Contact",  to: "/",         hash: "contact" },
  { label: "Book",     to: "/book",     hash: null      },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLink(to: string, hash: string | null) {
    if (hash) {
      if (location.pathname === "/") {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 150);
      }
    } else {
      navigate(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer
      style={{
        borderTop: "1px solid var(--hc-border)",
        backgroundColor: "var(--hc-surface)",
      }}
      className="mt-auto"
    >
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ color: "var(--hc-primary-dark)" }}
          className="font-serif italic text-lg hover:opacity-80 transition-opacity"
        >
          {site.domain}
        </button>
        <div className="flex items-center gap-5">
          {links.map(({ label, to, hash }) => (
            <button
              key={label}
              onClick={() => handleLink(to, hash)}
              style={{ color: "var(--hc-primary-mid)" }}
              className="text-sm hover:opacity-80 transition-opacity"
            >
              {label}
            </button>
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

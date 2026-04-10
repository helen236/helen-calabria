import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { showTestimonials } from "../content";

const allLinks = [
  { label: "About",      to: "/about",    hash: null,          always: true  },
  { label: "Sessions",   to: "/sessions", hash: null,          always: true  },
  { label: "Kind Words", to: "/",         hash: "testimonials", always: false },
  { label: "Contact",    to: "/",         hash: "contact",     always: true  },
];

const links = allLinks.filter(l => l.always || showTestimonials);

export default function Nav() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [open, setOpen] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleLink(to: string, hash: string | null) {
    setOpen(false);
    if (hash) {
      if (location.pathname === "/") {
        scrollTo(hash);
      } else {
        navigate("/");
        setTimeout(() => scrollTo(hash), 150);
      }
    } else {
      navigate(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleHome() {
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <nav
        style={{
          backgroundColor: "var(--hc-bg)",
          borderBottom: "1px solid var(--hc-border)",
        }}
        className="sticky top-0 z-40 w-full"
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={handleHome}
            style={{ color: "var(--hc-primary-dark)" }}
            className="font-serif italic text-xl font-normal tracking-tight hover:opacity-80 transition-opacity"
          >
            Helen Calabria, MA
          </button>

          <div className="flex items-center gap-4">
            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-6">
              {links.map(({ label, to, hash }) => (
                <button
                  key={label}
                  onClick={() => handleLink(to, hash)}
                  style={{ color: "var(--hc-primary-mid)" }}
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => { setOpen(false); navigate("/book"); }}
              style={{ backgroundColor: "var(--hc-primary)", color: "white" }}
              className="text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a session
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                style={{ backgroundColor: "var(--hc-primary-dark)" }}
                className={`block h-0.5 w-5 rounded transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                style={{ backgroundColor: "var(--hc-primary-dark)" }}
                className={`block h-0.5 w-5 rounded transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                style={{ backgroundColor: "var(--hc-primary-dark)" }}
                className={`block h-0.5 w-5 rounded transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            backgroundColor: "var(--hc-bg)",
            borderBottom: "1px solid var(--hc-border)",
          }}
          className="sm:hidden sticky top-16 z-30 w-full px-6 py-4 flex flex-col gap-4"
        >
          {links.map(({ label, to, hash }) => (
            <button
              key={label}
              onClick={() => handleLink(to, hash)}
              style={{ color: "var(--hc-primary-mid)" }}
              className="text-sm font-medium text-left hover:opacity-80 transition-opacity"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

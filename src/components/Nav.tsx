import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Sessions", to: "/sessions" },
  { label: "Kind Words", to: "/#testimonials" },
  { label: "Contact", to: "/#contact" },
];

export default function Nav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleNav(to: string) {
    setOpen(false);
    navigate(to);
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
          <Link
            to="/"
            style={{ color: "var(--hc-primary-dark)" }}
            className="font-serif italic text-xl font-normal tracking-tight"
            onClick={() => setOpen(false)}
          >
            Helen Calabria
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-6">
              {links.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  style={{ color: "var(--hc-primary-mid)" }}
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => navigate("/book")}
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
          {links.map(({ label, to }) => (
            <button
              key={label}
              onClick={() => handleNav(to)}
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

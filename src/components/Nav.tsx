import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
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
        >
          Helen Calabria
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {[
              { label: "About", to: "/about" },
              { label: "Sessions", to: "/sessions" },
              { label: "Kind Words", to: "/#testimonials" },
              { label: "Contact", to: "/#contact" },
            ].map(({ label, to }) => (
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
            style={{
              backgroundColor: "var(--hc-primary)",
              color: "white",
            }}
            className="text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a session
          </button>
        </div>
      </div>
    </nav>
  );
}

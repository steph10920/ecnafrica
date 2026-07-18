import { Link } from "react-router-dom";

const THEME_VARS = {
  "--ink": "#1B2A22",
  "--paper": "#F1EDD9",
  "--chalk": "#1F3A2E",
  "--clay": "#B8462F",
  "--gold": "#E3A73B",
  "--font-body": "'Work Sans', ui-sans-serif, system-ui, sans-serif",
  "--font-hand": "'Caveat', cursive",
};

export default function Footer() {
  return (
    <footer
      style={THEME_VARS}
      className="relative bg-[var(--chalk)] text-[var(--paper)] py-6 mt-auto"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
      />

      <div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-3 md:space-y-0"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 text-[var(--paper)]/80">
          <span>© {new Date().getFullYear()} ECN Africa.</span>
          <Link
            to="/privacy-policy"
            className="text-[var(--gold)] hover:text-[var(--paper)] underline underline-offset-2 transition"
          >
            Privacy Policy
          </Link>
        </div>

        {/* CENTER */}
        <span
          className="text-center text-[var(--paper)]/60"
          style={{ fontFamily: "var(--font-hand)", fontSize: "1.05rem" }}
        >
          — handwritten in Kenya, developed by ECN Africa
        </span>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <a
            href="https://share.google/AAnf7YeukphQ5GaHa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--paper)]/80 hover:text-[var(--gold)] transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

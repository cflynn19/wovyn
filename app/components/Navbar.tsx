import Image from "next/image";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Join the beta", href: "#beta" },
];

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        backgroundColor: "rgba(250,248,243,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(45,30,10,0.08)",
      }}
    >
      <a href="#" className="flex items-center gap-2">
        <Image
          src="/wovyn_icon.svg"
          alt=""
          width={22}
          height={22}
          priority
        />
        <span className="text-sm font-semibold tracking-tight" style={{ color: "#1C1915" }}>
          Wovyn
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm transition-opacity duration-150 hover:opacity-100"
            style={{ color: "#7A7060" }}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        href="https://testflight.apple.com/join/ZqyGzZQX"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:opacity-90"
        style={{ backgroundColor: "#2D5016", color: "#FAF8F3" }}
      >
        <ExternalLink size={13} />
        Get the app
      </a>
    </header>
  );
}

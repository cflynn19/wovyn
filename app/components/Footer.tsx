import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer
      className="px-6 py-12 border-t"
      style={{ borderColor: "rgba(45,30,10,0.1)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-sm font-semibold" style={{ color: "#1C1915" }}>Wovyn</span>
          <span className="text-xs" style={{ color: "#7A7060" }}>Built independently · 2026</span>
        </div>

        <div className="flex items-center gap-5">
          <FooterLink href="https://www.linkedin.com/in/connorflynn-dev/" label="LinkedIn">
            <LinkedinIcon size={18} />
          </FooterLink>
          <FooterLink href="mailto:hello@wovyn.app" label="Email">
            <Mail size={18} />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="transition-opacity duration-200 hover:opacity-100"
      style={{ color: "#7A7060" }}
    >
      {children}
    </a>
  );
}

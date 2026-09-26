import { SectionLabel } from "./Overview";
import { ExternalLink, Users, IterationCcw } from "lucide-react";

export function Beta() {
  return (
    <section id="beta" className="px-6 py-24 max-w-6xl mx-auto">
      <div
        className="rounded-2xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        style={{
          backgroundColor: "#E8E6DF",
          border: "1px solid rgba(45,30,10,0.1)",
          boxShadow: "0 2px 12px rgba(45,30,10,0.05)",
        }}
      >
        <div className="flex flex-col gap-5 max-w-lg">
          <SectionLabel>Join the beta</SectionLabel>
          <h2
            className="text-[clamp(1.5rem,3.5vw,2.25rem)] tracking-tight"
            style={{ color: "#1C1915", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Get in early, free
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#7A7060" }}>
            Wovyn is free while it is in beta. Join through TestFlight, start tracking your
            reading today, and tell us what is missing — early readers shape what ships next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(45,80,22,0.1)" }}
              >
                <Users size={15} style={{ color: "#2D5016" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#1C1915" }}>30+ readers</p>
                <p className="text-xs" style={{ color: "#7A7060" }}>A small, friendly group</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(45,80,22,0.1)" }}
              >
                <IterationCcw size={15} style={{ color: "#2D5016" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#1C1915" }}>New builds often</p>
                <p className="text-xs" style={{ color: "#7A7060" }}>Your feedback ships</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://testflight.apple.com/join/ZqyGzZQX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: "#2D5016", color: "#FAF8F3" }}
        >
          <ExternalLink size={16} />
          Join the free beta
        </a>
      </div>
    </section>
  );
}

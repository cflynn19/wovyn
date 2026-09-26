import Image from "next/image";
import { ExternalLink, ArrowDown } from "lucide-react";

import readingSession from "./screens/reading_session.jpg";
import statsScreen from "./screens/stats.png";
import socialFeed from "./screens/social_feed.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7AB348 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center gap-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm"
          style={{
            borderColor: "rgba(45,80,22,0.25)",
            backgroundColor: "rgba(45,80,22,0.07)",
            color: "#2D5016",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#2D5016" }} />
          Now in beta — free to join
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2">
            <Image src="/wovyn_icon.svg" alt="" width={26} height={26} priority />
            <span className="text-base font-semibold tracking-tight" style={{ color: "#1C1915" }}>
              Wovyn
            </span>
          </div>

          <h1
            className="text-[clamp(2.5rem,6.5vw,4.75rem)] tracking-tight max-w-4xl"
            style={{ color: "#1C1915", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Finally finish the books you start.
          </h1>
        </div>

        <p
          className="max-w-2xl text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed"
          style={{ color: "#7A7060" }}
        >
          Wovyn turns reading into a habit you can actually see. Track every session, watch your
          streak build, and find your next book through people who really read.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="https://testflight.apple.com/join/ZqyGzZQX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#2D5016", color: "#FAF8F3" }}
          >
            <ExternalLink size={16} />
            Join the free beta
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-200 hover:opacity-80"
            style={{ borderColor: "rgba(45,30,10,0.16)", color: "#1C1915" }}
          >
            See how it works
          </a>
        </div>

        <p className="text-sm" style={{ color: "#7A7060" }}>
          Free on iPhone while in beta&nbsp;&nbsp;•&nbsp;&nbsp;30+ readers already tracking
        </p>

        <div className="mt-10 relative flex items-end justify-center gap-4">
          <PhoneCard
            image={statsScreen}
            alt="Reading stats"
            className="hidden sm:block w-44 h-80 -mr-6 mb-4 opacity-70"
            style={{
              border: "1px solid rgba(45,30,10,0.1)",
              transform: "rotate(-4deg) translateY(20px)",
              boxShadow: "0 4px 20px rgba(45,30,10,0.07)",
            }}
          />

          <div
            className="w-52 h-96 rounded-3xl overflow-hidden relative z-10"
            style={{
              border: "1px solid rgba(45,80,22,0.2)",
              backgroundColor: "#F5F1E8",
              boxShadow: "0 20px 50px rgba(45,30,10,0.15), 0 0 0 1px rgba(45,80,22,0.08)",
            }}
          >
            <Image
              src={readingSession}
              alt="Wovyn reading session"
              fill
              sizes="208px"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-4"
              style={{ background: "linear-gradient(to top, rgba(28,25,21,0.82) 0%, transparent 55%)" }}
            >
              <p className="text-xs font-medium" style={{ color: "#F5F1E8" }}>Currently reading</p>
              <p className="text-xs mt-0.5" style={{ color: "#C4BFB4" }}>82% · 24 min left</p>
            </div>
          </div>

          <PhoneCard
            image={socialFeed}
            alt="Social feed"
            className="hidden sm:block w-44 h-80 -ml-6 mb-4 opacity-70"
            style={{
              border: "1px solid rgba(45,30,10,0.1)",
              transform: "rotate(4deg) translateY(20px)",
              boxShadow: "0 4px 20px rgba(45,30,10,0.07)",
            }}
          />
        </div>
      </div>

      <a href="#overview" className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-35 hover:opacity-60 transition-opacity">
        <ArrowDown size={20} style={{ color: "#7A7060" }} />
      </a>
    </section>
  );
}

function PhoneCard({
  image,
  alt,
  className,
  style,
}: {
  image: Parameters<typeof Image>[0]["src"];
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-3xl overflow-hidden relative ${className ?? ""}`}
      style={{ backgroundColor: "#F5F1E8", ...style }}
    >
      <Image src={image} alt={alt} fill sizes="176px" className="object-cover" />
    </div>
  );
}

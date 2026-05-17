import Image from "next/image";
import myBooks from "./screens/my_books.png";

export function Overview() {
  return (
    <section id="overview" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <SectionLabel>Overview</SectionLabel>
          <h2
            className="text-[clamp(1.75rem,4vw,2.75rem)] tracking-tight"
            style={{ color: "#1C1915", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            A reading platform that works the way you do
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#7A7060" }}>
            Wovyn is a mobile reading platform that helps users track reading progress, discover
            books through a personalized feed, and engage with reading insights and activity
            over time. Every detail — from session recovery to real-time sync — is built for
            readers who take their habits seriously.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {["Flutter", "Firebase", "Cloud Functions", "TestFlight"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-medium"
                style={{
                  backgroundColor: "rgba(45,80,22,0.08)",
                  color: "#2D5016",
                  border: "1px solid rgba(45,80,22,0.18)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(45,30,10,0.1)",
            backgroundColor: "#F5F1E8",
            boxShadow: "0 4px 20px rgba(45,30,10,0.06)",
          }}
        >
          <div className="relative w-full h-64 lg:h-80">
            <Image
              src={myBooks}
              alt="My books screen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium" style={{ color: "#1C1915" }}>Currently Reading</p>
              <span className="text-xs font-medium" style={{ color: "#2D5016" }}>82%</span>
            </div>
            <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: "rgba(45,30,10,0.1)" }}>
              <div className="h-full w-4/5 rounded-full" style={{ backgroundColor: "#2D5016" }} />
            </div>
            <p className="text-xs" style={{ color: "#7A7060" }}>24 minutes remaining · Session active</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs font-medium uppercase tracking-widest"
      style={{ color: "#2D5016" }}
    >
      {children}
    </span>
  );
}

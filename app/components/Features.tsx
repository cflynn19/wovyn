import { SectionLabel } from "./Overview";
import { Zap, BookOpen, Compass, RefreshCw, User, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Sessions that remember",
    description:
      "Hit start and read. Close the app, take a call, come back tomorrow — your session and your page are exactly where you left them.",
  },
  {
    icon: Compass,
    title: "A feed worth scrolling",
    description:
      "Books surfaced from what you actually read and who you read with, instead of whatever a bestseller list says this week.",
  },
  {
    icon: Zap,
    title: "Your next book, found",
    description:
      "Fresh picks every week, plus trending and top-rated shelves from the whole community.",
  },
  {
    icon: User,
    title: "Stats that keep you honest",
    description:
      "Pages, minutes, streaks, and a year of reading at a glance — see the habit build instead of guessing at it.",
  },
  {
    icon: Users,
    title: "Read with people",
    description:
      "Follow friends, pair up with an accountability partner, and see what everyone is actually finishing.",
  },
  {
    icon: RefreshCw,
    title: "Always in sync",
    description:
      "Your library and progress follow you across devices, and keep working when the signal does not.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <SectionLabel>Features</SectionLabel>
        <h2
          className="text-[clamp(1.75rem,4vw,2.75rem)] tracking-tight"
          style={{ color: "#1C1915", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Built for people who want to read more
        </h2>
        <p className="max-w-xl text-base" style={{ color: "#7A7060" }}>
          Every feature earns its place by getting you back into a book.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:scale-[1.02]"
            style={{
              backgroundColor: "#F5F1E8",
              border: "1px solid rgba(45,30,10,0.09)",
              boxShadow: "0 2px 8px rgba(45,30,10,0.05)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(45,80,22,0.1)" }}
            >
              <Icon size={18} style={{ color: "#2D5016" }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold" style={{ color: "#1C1915" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7A7060" }}>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

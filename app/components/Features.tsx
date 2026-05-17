import { SectionLabel } from "./Overview";
import { Zap, BookOpen, Compass, RefreshCw, User, Users } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Personalized Feed",
    description:
      "Ranking system based on reading behavior, engagement, and content quality signals.",
  },
  {
    icon: BookOpen,
    title: "Reading Tracking",
    description:
      "Persistent session tracking with progress history and session recovery across restarts.",
  },
  {
    icon: Zap,
    title: "Book Discovery",
    description:
      "Dynamic recommendations based on user taste profiles and collaborative signals.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    description: "Live sync across devices using Firebase backend infrastructure.",
  },
  {
    icon: User,
    title: "User Profiles",
    description:
      "Reading stats, history, and engagement analytics presented cleanly.",
  },
  {
    icon: Users,
    title: "Social Layer",
    description:
      "Interaction features and activity-based signals that surface what people are reading.",
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
          Everything you need to read well
        </h2>
        <p className="max-w-xl text-base" style={{ color: "#7A7060" }}>
          Built to feel native, perform reliably, and improve with every session.
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

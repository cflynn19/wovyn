import { SectionLabel } from "./Overview";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "MVVM-based architecture with strict separation of concerns",
  "Custom feed ranking system using multi-factor scoring",
  "Reactive state management with repository-level caching",
  "Cloud Functions powering recommendations and backend workflows",
  "Persistent session system with state recovery across app restarts",
];

const codeLines = [
  { indent: 0, text: "class FeedRepository {", color: "#E8E4DC" },
  { indent: 1, text: "final _cache = <String, List<Book>>{};", color: "#8C8070" },
  { indent: 0, text: "", color: "" },
  { indent: 1, text: "Future<List<Book>> getFeed(", color: "#E8E4DC" },
  { indent: 2, text: "String userId, {bool refresh = false}", color: "#8C8070" },
  { indent: 1, text: ") async {", color: "#E8E4DC" },
  { indent: 2, text: "if (!refresh && _cache.containsKey(userId))", color: "#7AB348" },
  { indent: 3, text: "return _cache[userId]!;", color: "#8C8070" },
  { indent: 0, text: "", color: "" },
  { indent: 2, text: "final ranked = await _rankingService", color: "#E8E4DC" },
  { indent: 3, text: ".score(userId, signals);", color: "#8C8070" },
  { indent: 2, text: "_cache[userId] = ranked;", color: "#8C8070" },
  { indent: 2, text: "return ranked;", color: "#E8E4DC" },
  { indent: 1, text: "}", color: "#E8E4DC" },
  { indent: 0, text: "}", color: "#E8E4DC" },
];

export function Engineering() {
  return (
    <section id="engineering" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <SectionLabel>Engineering</SectionLabel>
          <h2
            className="text-[clamp(1.75rem,4vw,2.75rem)] tracking-tight"
            style={{ color: "#1C1915", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Built as a full-stack system
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#7A7060" }}>
            Flutter and Firebase with a modular architecture separating services, repositories, and
            UI layers. Every layer is independently testable and purpose-built for production.
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#2D5016" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#7A7060" }}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#1E1C18",
            border: "1px solid rgba(45,30,10,0.3)",
            boxShadow: "0 8px 32px rgba(45,30,10,0.12)",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
            <span className="ml-3 text-xs font-mono" style={{ color: "#8C8070" }}>
              feed_repository.dart
            </span>
          </div>

          <div className="p-5 overflow-x-auto">
            <pre className="text-xs leading-6 font-mono">
              {codeLines.map((line, i) => (
                <div key={i}>
                  <span
                    style={{
                      color: "#5A5040",
                      userSelect: "none",
                      display: "inline-block",
                      width: "1.5rem",
                      textAlign: "right",
                      marginRight: "1rem",
                    }}
                  >
                    {line.text ? i + 1 : ""}
                  </span>
                  <span style={{ color: line.color }}>
                    {"  ".repeat(line.indent)}
                    {line.text}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

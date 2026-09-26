const highlights = [
  { value: "Free", label: "While in beta", sub: "No card, no catch" },
  { value: "30+", label: "Readers in the beta", sub: "Growing every week" },
  { value: "1 tap", label: "To start reading", sub: "No setup, no friction" },
  { value: "Auto", label: "Progress saved", sub: "Even if you close the app" },
];

export function Stats() {
  return (
    <section id="highlights" className="px-6 py-16 max-w-6xl mx-auto">
      <div
        className="rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
        style={{
          border: "1px solid rgba(45,80,22,0.18)",
          background: "linear-gradient(135deg, rgba(45,80,22,0.06) 0%, #F5F1E8 55%)",
          boxShadow: "0 2px 12px rgba(45,30,10,0.06)",
        }}
      >
        {highlights.map(({ value, label, sub }) => (
          <div key={label} className="flex flex-col gap-1">
            <span
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight"
              style={{ color: "#2D5016", letterSpacing: "-0.03em" }}
            >
              {value}
            </span>
            <span className="text-sm font-medium" style={{ color: "#1C1915" }}>
              {label}
            </span>
            <span className="text-xs" style={{ color: "#7A7060" }}>
              {sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

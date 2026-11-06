import { stats } from "@/data/sdg17";

export default function StatsBar() {
  return (
    <section className="relative -mt-12 z-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white shadow-lift ring-1 ring-emerald-900/5 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-emerald-900/5">
          {stats.map((s, i) => (
            <div key={s.label} className="p-7 sm:p-9 text-center group hover:bg-amber-50/40 transition-colors" style={{ animationDelay: `${i * 0.1}s` }}>
              <p className={`font-serif-display text-4xl sm:text-5xl font-semibold tabular-nums ${i % 2 === 0 ? "text-emerald-700" : "text-amber-600"}`}>
                {s.value}
              </p>
              <p className="mt-2 text-sm font-bold text-emerald-950">{s.label}</p>
              <p className="mt-0.5 text-xs text-emerald-700/60">{s.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

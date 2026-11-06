import { partnerTiers, campusBreakdown } from "@/data/sdg17";
import { MapPin } from "lucide-react";

export default function Partnerships() {
  const maxPartners = Math.max(...campusBreakdown.map((c) => c.partners));

  return (
    <section id="partnerships" className="py-24 sm:py-32 px-5 sm:px-8 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-800/60 ring-1 ring-emerald-400/30 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            The Partnership Network
          </span>
          <h2 className="mt-5 font-serif-display text-3xl sm:text-5xl font-semibold text-white leading-[1.1] text-balance">
            192 alliances, geographically distributed across four tiers
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-emerald-100/70">
            From barangay-level collaborations to cross-border academic mobility, ESSU's partnership
            footprint spans the communities it serves and the world it learns from.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Partner tiers - radial style */}
          <div className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-7 sm:p-9 backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-200">
              Partners by Geographic Tier
            </h3>
            <div className="mt-7 space-y-5">
              {partnerTiers.map((t, i) => {
                const pct = (t.count / 192) * 100;
                return (
                  <div key={t.tier} style={{ animationDelay: `${i * 0.12}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white">{t.tier}</span>
                      <span className="text-sm font-extrabold text-emerald-300 tabular-nums">{t.count}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${t.color} animate-grow-bar`}
                        style={{ width: `${pct}%`, animationDelay: `${0.3 + i * 0.12}s` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200/60">Total Active</span>
              <span className="font-serif-display text-3xl font-semibold text-white">192</span>
            </div>
          </div>

          {/* Campus breakdown */}
          <div className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-7 sm:p-9 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-200">
              <MapPin className="w-4 h-4" />
              Partners by Campus
            </h3>
            <div className="mt-7 space-y-4">
              {campusBreakdown.map((c, i) => (
                <div key={c.campus} className="group" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-emerald-50">{c.campus}</span>
                    <span className="text-xs font-bold text-amber-300 tabular-nums">{c.partners}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all duration-700 group-hover:from-emerald-400 group-hover:to-emerald-600"
                      style={{ width: `${(c.partners / maxPartners) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

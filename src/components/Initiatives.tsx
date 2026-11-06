import { useState } from "react";
import partnershipReportPdf from "@/data/Partnership_CY_2025_spreadsheet_-_Sheet1.pdf";
import { initiativeGroups, groupAccent, type Initiative } from "@/data/sdg17";
import { ChevronDown, Network, FileBarChart, GraduationCap, FileText, ExternalLink, Newspaper } from "lucide-react";

const groupIcons = [Network, FileBarChart, GraduationCap];

function InitiativeCard({ item }: { item: Initiative }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.body.length > 320;
  const display = expanded || !isLong ? item.body : `${item.body.slice(0, 320).trimEnd()}…`;

  return (
    <article className="group rounded-2xl bg-white ring-1 ring-emerald-900/8 hover:ring-emerald-300/40 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <span className="font-serif-display text-sm font-bold text-amber-600 tabular-nums tracking-wide">
          {item.id}
        </span>
        <h4 className="mt-3 font-serif-display text-lg sm:text-xl font-semibold text-emerald-950 leading-snug">
          {item.title}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-emerald-900 flex-1">{display}</p>
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors self-start"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
        {item.id === "17.2.1" && (
          <div className="mt-6 space-y-3">
            <div className="rounded-xl bg-emerald-50/80 p-4 ring-1 ring-emerald-200/80">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-white p-2 text-emerald-700 ring-1 ring-emerald-200">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700/70">Evidence</p>
                  <p className="mt-1 text-sm font-bold leading-snug text-emerald-950">
                    Institutional linkages and partnerships development report
                  </p>
                  <a
                    href={partnershipReportPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-950 transition-colors"
                  >
                    Open attached PDF
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-amber-50/80 p-4 ring-1 ring-amber-200/80">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-white p-2 text-amber-700 ring-1 ring-amber-200">
                  <Newspaper className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700/70">Facebook post article</p>
                  <p className="mt-1 text-sm font-bold leading-snug text-emerald-950">
                    ESSU and SSS inks deal providing safety net for non-regular employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-1 bg-gradient-to-r from-amber-400 via-emerald-500 to-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </article>
  );
}

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-24 sm:py-32 px-5 sm:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Initiatives in Action
          </span>
          <h2 className="mt-5 font-serif-display text-3xl sm:text-5xl font-semibold text-emerald-950 leading-[1.1] text-balance">
            Driving partnership-led development across three pillars
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-emerald-900">
            Each initiative reflects ESSU's commitment to cross-sector collaboration — from regional
            policy partnerships and SDG reporting to meaningful education for sustainable development.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {initiativeGroups.map((group, gi) => {
            const Icon = groupIcons[gi] ?? Network;
            const accent = groupAccent[gi] ?? groupAccent[0];
            const totalInitiatives = group.subcategories.reduce((n, s) => n + s.initiatives.length, 0);

            return (
              <div key={group.name}>
                {/* Group header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-8 border-b border-emerald-900/10">
                  <div className={`w-14 h-14 rounded-2xl grid place-items-center ring-1 ${accent.ring} ${accent.badge}`}>
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      
                    </div>
                    <h3 className="mt-1.5 font-serif-display text-2xl sm:text-3xl font-semibold text-emerald-950 leading-tight">
                      {group.name}
                    </h3>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ring-1 ${accent.badge} ${accent.ring} self-start sm:self-center`}>
                    {totalInitiatives} {totalInitiatives === 1 ? "initiative" : "initiatives"}
                  </span>
                </div>

                {/* Subcategories */}
                <div className="mt-10 space-y-12">
                  {group.subcategories.map((sub) => (
                    <div key={sub.name}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`h-px w-8 bg-gradient-to-r ${accent.bar}`} />
                        <h4 className="text-sm sm:text-base font-bold text-emerald-800">{sub.name}</h4>
                      </div>
                      <div className={`grid gap-5 ${sub.initiatives.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}>
                        {sub.initiatives.map((item) => (
                          <InitiativeCard key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Globe2, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function AboutFooter() {
  return (
    <>
      <section id="about" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 text-white">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-amber-300/15 blur-3xl" />

            <div className="relative p-8 sm:p-14 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-emerald-50 text-xs font-bold uppercase tracking-wider">
                  About the Institution
                </span>
                <h2 className="mt-5 font-serif-display text-3xl sm:text-4xl font-semibold leading-tight text-balance">
                  Eastern Samar State University
                </h2>
                <p className="mt-5 text-emerald-100/80 leading-relaxed">
                  A multi-campus state university serving Eastern Samar through instruction, research,
                  and extension. ESSU partners with local government units, national agencies, academic
                  networks, civil society, and international institutions to build resilient communities
                  and advance the Sustainable Development Goals.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 ring-1 ring-white/15 text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-300" />
                    Borongan City, Eastern Samar
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 ring-1 ring-white/15 text-sm font-semibold">
                    <Globe2 className="w-4 h-4 text-emerald-300" />
                    6 Campuses
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2025–2030", label: "Development Plan ratified under BOR Res. 207" },
                  { value: "7-Point", label: "Agenda: green architecture, upskilling, innovation" },
                  { value: "RA 11199", label: "SSS safety net for COS & JO workers" },
                  { value: "RA 12009", label: "New Government Procurement Act operationalized" },
                ].map((f) => (
                  <div key={f.value} className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-5 hover:bg-white/[0.1] transition">
                    <p className="font-serif-display text-xl font-semibold text-amber-300">{f.value}</p>
                    <p className="mt-1.5 text-sm text-emerald-100/70 leading-snug">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 text-emerald-100/70">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 grid place-items-center">
                  <Globe2 className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white">ESSU</p>
                  <p className="text-[11px] text-emerald-200/60">SDG 17 Report · CY 2025</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed max-w-xs">
                Fostering global partnerships, strengthening local capacity, and driving sustainable
                impact across Eastern Samar and beyond.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300/70">Navigate</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {["Overview", "Partnerships", "Initiatives", "About ESSU"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-white transition-colors inline-flex items-center gap-1">
                      {l}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300/70">Sustainable Development Goals</p>
              <p className="mt-4 text-sm leading-relaxed">
                This page reports on the United Nations Sustainable Development Goal 17:
                Partnerships for the Goals — part of the 2030 Agenda for Sustainable Development.
              </p>
              <a
                href="https://sdgs.un.org/goals/goal17"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-300 hover:text-emerald-200"
              >
                Learn more at sdgs.un.org
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-emerald-200/50">
              © {new Date().getFullYear()} Eastern Samar State University. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-200/50">
              <Mail className="w-3.5 h-3.5" />
              <span>Partnerships for the Goals</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

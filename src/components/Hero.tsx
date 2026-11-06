import { ArrowDown, Handshake, Sprout, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden bg-emerald-950">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9301826/pexels-photo-9301826.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Partnership handshake"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/70 to-emerald-950" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 via-transparent to-emerald-900/30" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="absolute top-28 right-6 sm:right-12 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-amber-300/40 to-amber-600/10 blur-2xl animate-float-slow" />
      <div className="absolute bottom-32 left-6 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-emerald-400/20 blur-2xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-emerald-50 text-xs font-bold tracking-wider uppercase animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Sustainable Development Goal 17
          </div>

          <h1 className="mt-6 font-serif-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Partnerships <span className="italic text-amber-400">for</span> the Goals
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-semibold text-emerald-100 tracking-wide animate-fade-up" style={{ animationDelay: "0.2s" }}>
            FOSTERING GLOBAL PARTNERSHIPS · STRENGTHENING LOCAL CAPACITY · DRIVING SUSTAINABLE IMPACT
          </p>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-emerald-100/80 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Building strategic alliances across sectors to advance regional resilience, inclusive growth,
            and the Sustainable Development Goals across Eastern Samar and beyond.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#initiatives"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-400 text-emerald-950 text-sm font-bold hover:bg-amber-300 transition-colors shadow-lift"
            >
              Explore Initiatives
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 ring-1 ring-white/25 text-white text-sm font-bold hover:bg-white/20 transition-colors"
            >
              Read Overview
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: Handshake, label: "192 Partnerships" },
              { icon: Sprout, label: "Community-Driven" },
              { icon: GraduationCap, label: "6 Campuses" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-emerald-100/90">
                <Icon className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-emerald-950 to-transparent pointer-events-none" />
    </section>
  );
}

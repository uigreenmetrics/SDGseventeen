export default function Overview() {
  return (
    <section id="overview" className="py-24 sm:py-32 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              Overview
            </span>
            <h2 className="mt-5 font-serif-display text-3xl sm:text-5xl font-semibold text-emerald-950 leading-[1.1] text-balance">
              A university built on collective action &amp; shared accountability
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-emerald-800">
              Eastern Samar State University advances SDG 17 by cultivating strategic, multi-sectoral
              collaborations across local, national, and international domains.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-emerald-900/10" />
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest">CY 2025</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-none space-y-6 text-[15px] sm:text-base leading-[1.75] text-emerald-900">
              <p className="text-xl sm:text-2xl font-serif-display text-emerald-950 leading-relaxed">
                Eastern Samar State University (ESSU) is steadfast in its commitment to advancing
                SDG 17: Partnerships for the Goals by cultivating strategic, multi-sectoral
                collaborations across local, national, and international domains.
              </p>
              <p>
                Through institutional linkages, cross-sectoral dialogues, collaborative research,
                capacity-building programs, and community-driven extension projects, the University
                leverages collective action and resource sharing to address regional development
                challenges.
              </p>
              <p>
                Guided by principles of transparency, equity, and shared accountability, ESSU actively
                engages local government units, national line agencies, academic networks, civil
                society organizations, and international partners to foster sustainable growth,
                enhance educational equity, build community resilience, and contribute meaningfully
                to the realization of the United Nations Sustainable Development Goals across Eastern
                Samar and beyond.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { tag: "Transparency", desc: "Open governance and accountable resource sharing." },
                { tag: "Equity", desc: "Inclusive access across all partner communities." },
                { tag: "Shared Accountability", desc: "Collective ownership of development outcomes." },
              ].map((item) => (
                <div key={item.tag} className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-900/10 hover:ring-amber-400/50 transition">
                  <p className="text-sm font-extrabold text-emerald-800">{item.tag}</p>
                  <p className="mt-1.5 text-sm text-emerald-900 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

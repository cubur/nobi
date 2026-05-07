import Link from "next/link";
import { COMPANIES } from "@/data/index";
import NavBar from "@/components/NavBar";
import GoStone from "@/components/GoStone";

export default function Home() {
  const companies = Object.values(COMPANIES).filter((c) => !c.hidden);

  return (
    <div className="min-h-screen go-grid-bg">
      <NavBar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GoStone variant="neon" size={20} />
            <span className="font-mono text-neon text-xs tracking-widest uppercase">
              のび — extend your stone
            </span>
            <GoStone variant="white" size={20} />
          </div>
          <h1 className="font-display font-bold text-snow text-4xl sm:text-5xl tracking-tight mb-4 text-glow-neon">
            NOBI
          </h1>
          <p className="text-snow-dim text-base max-w-md mx-auto leading-relaxed">
            An interactive learning path from PM to AI PM.
            Pick a company module and start extending your stone.
          </p>
        </div>

        {/* Company modules */}
        <h2 className="font-display font-semibold text-snow-dim text-xs uppercase tracking-wider mb-4">
          Learning modules
        </h2>
        <div className="space-y-4">
          {companies.map((company) => {
            const totalLessons = company.units.reduce((s, u) => s + u.lessons.length, 0);
            const totalXP = company.units.reduce(
              (s, u) => s + u.lessons.reduce((ls, l) => ls + l.xp, 0),
              0
            );
            return (
              <Link
                key={company.slug}
                href={`/${company.slug}`}
                className="card-hover flex items-start gap-4 no-underline block"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-void-300 border border-gray-300 flex items-center justify-center">
                  <GoStone variant="neon" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                    <span className="font-display font-bold text-snow text-base">
                      {company.name}
                    </span>
                    <span className="badge-neon">{company.industry}</span>
                  </div>
                  <p className="text-snow-dim text-sm">{company.tagline}</p>
                  <p className="text-snow-faint text-xs mt-1">{company.why}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-mono text-snow-dim text-xs">{totalLessons} lessons</div>
                  <div className="font-mono text-golden text-xs">{totalXP} XP</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Go philosophy footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-void-200">
            <span className="text-snow-faint text-xs font-mono leading-relaxed max-w-xs">
              "The nobi is often the strongest move — not flashy, just solid." <br />
              <span className="text-gray-400">— Go proverb</span>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

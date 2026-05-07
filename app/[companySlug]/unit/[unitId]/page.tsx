import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPANIES, getCompany, getUnit } from "@/data/index";
import NavBar from "@/components/NavBar";
import GoStone from "@/components/GoStone";
import UnitQuizBlock from "@/components/UnitQuizBlock";

export async function generateStaticParams() {
  const params: { companySlug: string; unitId: string }[] = [];
  for (const company of Object.values(COMPANIES)) {
    for (const unit of company.units) {
      params.push({ companySlug: company.slug, unitId: unit.id });
    }
  }
  return params;
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ companySlug: string; unitId: string }>;
}) {
  const { companySlug, unitId } = await params;
  const company = getCompany(companySlug);
  const unit = getUnit(companySlug, unitId);
  if (!company || !unit) notFound();

  const unitIndex = company.units.findIndex((u) => u.id === unitId);
  const totalXP = unit.lessons.reduce((s, l) => s + l.xp, 0);

  return (
    <div className="min-h-screen">
      <NavBar
        companySlug={companySlug}
        breadcrumbs={[
          { label: "Nobi", href: "/" },
          { label: company.name, href: `/${companySlug}` },
          { label: unit.title },
        ]}
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Unit header */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-mono text-snow-dim text-xs">Unit {unitIndex + 1}</span>
            <span className="text-gray-400">·</span>
            <span className="font-display font-semibold text-neon text-sm">
              {unit.goTerm}
            </span>
            <span className="font-mono text-snow-faint text-xs">{unit.goReading}</span>
          </div>
          <h1 className="font-display font-bold text-snow text-2xl mb-2">{unit.title}</h1>
          <p className="text-snow-dim text-sm leading-relaxed mb-4">{unit.description}</p>

          {/* Go meaning */}
          <div className="go-callout">
            <div className="shrink-0">
              <div className="w-8 h-8 rounded-full bg-void-400 border border-gray-300 flex items-center justify-center">
                <span className="text-neon text-xs font-mono font-bold">囲</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-neon text-xs font-semibold mb-1">
                {unit.goTerm} — the Go analogy for this unit
              </div>
              <p className="text-snow-dim text-xs leading-relaxed">{unit.goMeaning}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span className="font-mono text-snow-dim text-xs">
              {unit.lessons.length} lessons
            </span>
            <span className="text-gray-400 text-xs">·</span>
            <span className="font-mono text-golden text-xs">{totalXP} XP total</span>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-3">
          {unit.lessons.map((lesson, i) => {
            const isStub = lesson.exercises.length === 0 && lesson.content.length <= 1;
            const href = `/${companySlug}/unit/${unitId}/lesson/${lesson.id}`;

            const inner = (
              <>
                <div className="shrink-0 mt-0.5">
                  <GoStone variant={isStub ? "black" : "white"} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-mono text-snow-dim text-xs">{i + 1}.</span>
                    <span className="font-display font-semibold text-snow text-sm">
                      {lesson.title}
                    </span>
                    {isStub && <span className="badge-snow text-[10px]">coming soon</span>}
                  </div>
                  <p className="text-snow-dim text-xs leading-relaxed">{lesson.tldr}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {lesson.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="badge-snow text-[10px]">{skill}</span>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-golden text-xs shrink-0">{lesson.xp} XP</span>
              </>
            );

            return isStub ? (
              <div key={lesson.id} className="card flex items-start gap-4 opacity-40 cursor-not-allowed">
                {inner}
              </div>
            ) : (
              <Link key={lesson.id} href={href} className="card-hover flex items-start gap-4 no-underline transition-all duration-150">
                {inner}
              </Link>
            );
          })}
        </div>

        {unit.quiz && unit.quiz.length > 0 && (
          <UnitQuizBlock
            questions={unit.quiz}
            companySlug={companySlug}
            unitId={unitId}
            unitTitle={unit.title}
            xp={unit.quizXp ?? 30}
          />
        )}

        <div className="mt-8">
          <Link href={`/${companySlug}`} className="btn-ghost text-xs">
            ← Back to curriculum
          </Link>
        </div>
      </main>
    </div>
  );
}

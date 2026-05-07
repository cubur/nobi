import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllLessons, getCompany, getLesson, getNextLesson, getPrevLesson, getUnit } from "@/data/index";
import NavBar from "@/components/NavBar";
import LessonHeader from "@/components/LessonHeader";
import ContentBlock from "@/components/ContentBlock";
import ExerciseBlock from "@/components/ExerciseBlock";
import ResourcePanel from "@/components/ResourcePanel";
import CurriculumPopover from "@/components/CurriculumPopover";
import SelectionExplainer from "@/components/SelectionExplainer";

export async function generateStaticParams() {
  return getAllLessons();
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ companySlug: string; unitId: string; lessonId: string }>;
}) {
  const { companySlug, unitId, lessonId } = await params;
  const company = getCompany(companySlug);
  const unit = getUnit(companySlug, unitId);
  const lesson = getLesson(companySlug, unitId, lessonId);
  if (!company || !unit || !lesson) notFound();

  const next = getNextLesson(companySlug, unitId, lessonId);
  const prev = getPrevLesson(companySlug, unitId, lessonId);
  const nextHref = next
    ? `/${next.companySlug}/unit/${next.unitId}/lesson/${next.lessonId}`
    : null;
  const prevHref = prev
    ? `/${prev.companySlug}/unit/${prev.unitId}/lesson/${prev.lessonId}`
    : null;

  // Resolved titles for prev/next buttons
  const nextLesson = next
    ? company.units.flatMap((u) => u.lessons).find((l) => l.id === next.lessonId)
    : null;
  const prevLesson = prev
    ? company.units.flatMap((u) => u.lessons).find((l) => l.id === prev.lessonId)
    : null;

  const lessonIndex = unit.lessons.findIndex((l) => l.id === lessonId);
  const unitIndex = company.units.findIndex((u) => u.id === unitId);

  return (
    <div className="min-h-screen">
      <NavBar
        companySlug={companySlug}
        breadcrumbs={[
          { label: "Nobi", href: "/" },
          { label: company.name, href: `/${companySlug}` },
          { label: `Unit ${unitIndex + 1}`, href: `/${companySlug}/unit/${unitId}` },
          { label: lesson.title },
        ]}
        company={company}
        currentUnitId={unitId}
        currentLessonId={lessonId}
      />

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Unit + lesson meta */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <span className="font-mono text-pencil-faint text-xs">Unit {unitIndex + 1}</span>
          <span className="text-pencil-ghost text-xs">/</span>
          <span className="font-mono text-pencil-faint text-xs">
            Lesson {lessonIndex + 1} of {unit.lessons.length}
          </span>
          <div className="ml-2 flex gap-1">
            {unit.lessons.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < lessonIndex ? "bg-bluepen" : i === lessonIndex ? "bg-redpen" : "bg-paper-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lesson title */}
        <h1 className="font-display font-bold text-redpen text-xl sm:text-3xl mb-4 sm:mb-6 leading-tight">
          {lesson.title}
        </h1>

        <LessonHeader lesson={lesson} />

        {/* Mobile Ask Nobi hint — shown above content on small screens */}
        <div className="xl:hidden mb-5">
          <div className="sticky-note p-3 inline-block max-w-full">
            <span className="font-handwritten text-sm text-bluepen-dim">
              ✏️ On desktop — select text to ask Nobi, save notes, or add thoughts
            </span>
          </div>
        </div>

        {/* Two-column layout: content + margin note */}
        <div className="relative">
          <SelectionExplainer lessonTitle={lesson.title} unitTitle={unit.title} unitId={unitId} lessonId={lessonId} companySlug={companySlug}>
            {lesson.referenceUrl ? (
              <div className="card-golden mb-8">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-golden-faint border border-golden-faint flex items-center justify-center">
                    <svg className="w-5 h-5 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-golden text-base mb-1">External course</div>
                    <p className="text-pencil-dim text-sm leading-relaxed mb-3">{lesson.content[0]?.body}</p>
                    <a href={lesson.referenceUrl} target="_blank" rel="noopener noreferrer" className="btn-golden text-sm">
                      Open course →
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <ContentBlock sections={lesson.content} />
            )}
          </SelectionExplainer>

          {/* Handwritten sticky note — visible on wide screens, floats in the right margin */}
          <div className="hidden xl:block absolute top-0 -right-52 w-44">
            <div className="sticky top-24 sticky-note p-3 text-sm leading-snug">
              <div className="font-handwritten text-base text-bluepen-dim leading-relaxed">
                ✏️ Select any text to ask Nobi to explain it, ask <em>why it matters</em>, save a note, or add your thoughts.
              </div>
              <div className="mt-2 font-handwritten text-xs text-pencil-faint">
                — try it!
              </div>
            </div>
          </div>
        </div>

        <ExerciseBlock
          exercises={lesson.exercises}
          lessonId={lessonId}
          companySlug={companySlug}
          xp={lesson.xp}
          nextHref={nextHref}
        />

        <ResourcePanel resources={lesson.resources} />

        {/* Notes & Thoughts links */}
        <div className="mt-6 flex gap-3">
          <Link href="/notes" className="flex items-center gap-1.5 text-pencil-dim hover:text-bluepen text-xs font-mono transition-colors no-underline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Bookmarks
          </Link>
          <span className="text-paper-400 text-xs">·</span>
          <Link href="/thoughts" className="flex items-center gap-1.5 text-pencil-dim hover:text-bluepen text-xs font-mono transition-colors no-underline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            My Thoughts
          </Link>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-8 divider" />
        <div className="flex items-stretch gap-3 mt-4">
          {prevHref ? (
            <Link href={prevHref} className="flex-1 card hover:border-paper-400 transition-all no-underline group">
              <div className="font-mono text-pencil-ghost text-[10px] uppercase tracking-wider mb-1">← Previous</div>
              <div className="font-display font-semibold text-pencil text-sm group-hover:text-bluepen transition-colors leading-snug">
                {prevLesson?.title ?? "Previous lesson"}
              </div>
            </Link>
          ) : (
            <Link href={`/${companySlug}/unit/${unitId}`} className="flex-1 card hover:border-paper-400 transition-all no-underline group">
              <div className="font-mono text-pencil-ghost text-[10px] uppercase tracking-wider mb-1">← Back</div>
              <div className="font-display font-semibold text-pencil text-sm group-hover:text-bluepen transition-colors">
                Unit overview
              </div>
            </Link>
          )}

          {nextHref ? (
            <Link href={nextHref} className="flex-1 card hover:border-bluepen transition-all no-underline group text-right">
              <div className="font-mono text-pencil-ghost text-[10px] uppercase tracking-wider mb-1">Next →</div>
              <div className="font-display font-semibold text-pencil text-sm group-hover:text-bluepen transition-colors leading-snug">
                {nextLesson?.title ?? "Next lesson"}
              </div>
            </Link>
          ) : (
            <Link href={`/${companySlug}`} className="flex-1 card hover:border-paper-400 transition-all no-underline group text-right">
              <div className="font-mono text-pencil-ghost text-[10px] uppercase tracking-wider mb-1">Done →</div>
              <div className="font-display font-semibold text-pencil text-sm group-hover:text-bluepen transition-colors">
                Back to modules
              </div>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

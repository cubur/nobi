import type { Lesson } from "@/data/types";
import GoStone from "./GoStone";

export default function LessonHeader({ lesson }: { lesson: Lesson }) {
  return (
    <div className="mb-8">
      {/* TL;DR */}
      <div className="card-neon mb-6">
        <div className="flex items-start gap-3">
          <span className="section-tag mt-0.5 shrink-0">TL;DR</span>
          <p className="text-snow font-body text-sm leading-relaxed">{lesson.tldr}</p>
        </div>
      </div>

      {/* Skills + XP row */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-mono text-snow-dim uppercase tracking-wider mr-1">
          Skills
        </span>
        {lesson.skills.map((skill) => (
          <span key={skill} className="badge-snow">
            {skill}
          </span>
        ))}
        <div className="ml-auto flex items-center gap-1.5">
          <GoStone variant="golden" size={14} />
          <span className="font-mono text-golden text-sm font-semibold">+{lesson.xp} XP</span>
        </div>
      </div>
    </div>
  );
}

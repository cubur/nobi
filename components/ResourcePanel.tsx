type Resource = { title: string; url: string; description: string };

export default function ResourcePanel({ resources }: { resources: Resource[] }) {
  if (!resources.length) return null;

  return (
    <div className="mt-8">
      <div className="divider" />
      <h3 className="font-display font-semibold text-snow-dim text-xs uppercase tracking-wider mb-4">
        Sharpen the skill
      </h3>
      <div className="space-y-3">
        {resources.map((r, i) => (
          <a
            key={i}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-neon-dim hover:bg-void-300 transition-all duration-150 group no-underline"
          >
            <div className="shrink-0 mt-0.5 w-6 h-6 rounded border border-gray-300 group-hover:border-neon flex items-center justify-center">
              <svg className="w-3 h-3 text-snow-dim group-hover:text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-snow text-sm group-hover:text-neon transition-colors">
                {r.title}
              </div>
              <div className="text-snow-dim text-xs mt-0.5 leading-relaxed">{r.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

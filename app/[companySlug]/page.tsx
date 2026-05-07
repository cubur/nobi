import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPANIES, getCompany } from "@/data/index";
import NavBar from "@/components/NavBar";
import CurriculumMap from "@/components/CurriculumMap";
import GoStone from "@/components/GoStone";

export async function generateStaticParams() {
  return Object.keys(COMPANIES).map((slug) => ({ companySlug: slug }));
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ companySlug: string }>;
}) {
  const { companySlug } = await params;
  const company = getCompany(companySlug);
  if (!company) notFound();

  return (
    <div className="min-h-screen">
      <NavBar
        companySlug={companySlug}
        breadcrumbs={[
          { label: "Nobi", href: "/" },
          { label: company.name },
        ]}
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Company header */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-void-300 border border-gray-300 flex items-center justify-center">
              <GoStone variant="neon" size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="font-display font-bold text-snow text-2xl">{company.name}</h1>
                <span className="badge-ice">{company.industry}</span>
              </div>
              <p className="text-snow-dim text-sm">{company.tagline}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {company.techStack.map((tech) => (
              <span key={tech} className="badge-snow">{tech}</span>
            ))}
          </div>

          <p className="mt-3 text-snow-dim text-sm leading-relaxed border-l-2 border-neon-faint pl-3">
            {company.why}
          </p>
        </div>

        <CurriculumMap company={company} />
      </main>
    </div>
  );
}

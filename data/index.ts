import type { CompanyModule, Lesson, Unit } from "@/data/types";
import { ghostdraft } from "@/data/companies/ghostdraft";
import { enginy } from "@/data/companies/enginy";
import { tightly } from "@/data/companies/tightly";
import { buzzboard } from "@/data/companies/buzzboard";
import { kestra } from "@/data/companies/kestra";
import { agencyfund } from "@/data/companies/agencyfund";

export const COMPANIES: Record<string, CompanyModule> = {
  ghostdraft,
  enginy,
  tightly,
  buzzboard,
  kestra,
  agencyfund,
};

export function getCompany(slug: string): CompanyModule | undefined {
  return COMPANIES[slug];
}

export function getUnit(companySlug: string, unitId: string): Unit | undefined {
  return COMPANIES[companySlug]?.units.find((u) => u.id === unitId);
}

export function getLesson(
  companySlug: string,
  unitId: string,
  lessonId: string
): Lesson | undefined {
  return getUnit(companySlug, unitId)?.lessons.find((l) => l.id === lessonId);
}

export function getAllLessons(): { companySlug: string; unitId: string; lessonId: string }[] {
  const params: { companySlug: string; unitId: string; lessonId: string }[] = [];
  for (const company of Object.values(COMPANIES)) {
    for (const unit of company.units) {
      for (const lesson of unit.lessons) {
        params.push({ companySlug: company.slug, unitId: unit.id, lessonId: lesson.id });
      }
    }
  }
  return params;
}

export function getNextLesson(
  companySlug: string,
  unitId: string,
  lessonId: string
): { companySlug: string; unitId: string; lessonId: string } | null {
  const company = COMPANIES[companySlug];
  if (!company) return null;

  const units = company.units;
  const unitIndex = units.findIndex((u) => u.id === unitId);
  if (unitIndex === -1) return null;

  const unit = units[unitIndex];
  const lessonIndex = unit.lessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex === -1) return null;

  if (lessonIndex < unit.lessons.length - 1) {
    return { companySlug, unitId, lessonId: unit.lessons[lessonIndex + 1].id };
  }

  if (unitIndex < units.length - 1) {
    const nextUnit = units[unitIndex + 1];
    return { companySlug, unitId: nextUnit.id, lessonId: nextUnit.lessons[0].id };
  }

  return null;
}

export function getPrevLesson(
  companySlug: string,
  unitId: string,
  lessonId: string
): { companySlug: string; unitId: string; lessonId: string } | null {
  const company = COMPANIES[companySlug];
  if (!company) return null;

  const units = company.units;
  const unitIndex = units.findIndex((u) => u.id === unitId);
  if (unitIndex === -1) return null;

  const unit = units[unitIndex];
  const lessonIndex = unit.lessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex === -1) return null;

  if (lessonIndex > 0) {
    return { companySlug, unitId, lessonId: unit.lessons[lessonIndex - 1].id };
  }

  if (unitIndex > 0) {
    const prevUnit = units[unitIndex - 1];
    return {
      companySlug,
      unitId: prevUnit.id,
      lessonId: prevUnit.lessons[prevUnit.lessons.length - 1].id,
    };
  }

  return null;
}

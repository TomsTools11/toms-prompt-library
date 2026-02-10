import skillsData from "@/data/skills.json";

export interface Skill {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  skill_body: string;
  char_count: number;
}

export const skills: Skill[] = skillsData as Skill[];

export const skillCategories = Array.from(
  new Set(skills.map((s) => s.category))
).sort();

export const allSkillTags = Array.from(
  new Set(skills.flatMap((s) => s.tags))
).sort();

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find((s) => s.slug === slug);
}

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((s) => s.category === category);
}

export const skillCategoryIcons: Record<string, string> = {
  "Research & Intelligence": "\uD83D\uDD0D",
  "Data & Analysis": "\uD83D\uDCCA",
  "Design & Frontend": "\uD83C\uDFA8",
  "AI & Prompt Engineering": "\uD83E\uDDE0",
};

export const skillCategoryCounts: Record<string, number> =
  skillCategories.reduce(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat).length;
      return acc;
    },
    {} as Record<string, number>
  );

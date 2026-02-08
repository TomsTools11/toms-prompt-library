import promptsData from "@/data/prompts.json";

export interface Prompt {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  prompt_body: string;
  char_count: number;
  original_format: string;
}

export const prompts: Prompt[] = promptsData as Prompt[];

export const categories = Array.from(
  new Set(prompts.map((p) => p.category))
).sort();

export const allTags = Array.from(
  new Set(prompts.flatMap((p) => p.tags))
).sort();

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((p) => p.slug === slug);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter((p) => p.category === category);
}

export const categoryIcons: Record<string, string> = {
  "Sales & Outreach": "💼",
  "Marketing & SEO": "📈",
  "Market Research": "🔍",
  "Content Writing": "✍️",
  Education: "🎓",
  "Business Analysis": "📊",
  "Development & Engineering": "💻",
  "Productivity & Tools": "⚡",
  "Prompt Engineering": "🧠",
  Other: "📁",
};

export const categoryCounts: Record<string, number> = categories.reduce(
  (acc, cat) => {
    acc[cat] = prompts.filter((p) => p.category === cat).length;
    return acc;
  },
  {} as Record<string, number>
);

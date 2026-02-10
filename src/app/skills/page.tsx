import { Suspense } from "react";
import { skills, skillCategories, allSkillTags } from "@/lib/skills";
import SkillsDirectory from "@/components/SkillsDirectory";

export const metadata = {
  title: "Browse Skills \u2014 Tom\u2019s Prompt Library",
  description: "Search and filter through our curated collection of AI skills.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">Browse Skills</h1>
      <p className="mb-8 text-[var(--muted)]">
        {skills.length} skills across {skillCategories.length} categories
      </p>
      <Suspense fallback={<div className="py-20 text-center text-[var(--muted)]">Loading...</div>}>
        <SkillsDirectory
          skills={skills}
          categories={skillCategories}
          allTags={allSkillTags}
        />
      </Suspense>
    </div>
  );
}

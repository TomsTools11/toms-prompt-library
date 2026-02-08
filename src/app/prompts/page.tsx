import { Suspense } from "react";
import { prompts, categories, allTags } from "@/lib/prompts";
import PromptsDirectory from "@/components/PromptsDirectory";

export const metadata = {
  title: "Browse Prompts — Tom's Prompt Library",
  description: "Search and filter through our curated collection of AI prompts.",
};

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 font-mono text-3xl font-bold text-[var(--color-text-primary)]">Browse Prompts</h1>
      <p className="mb-8 text-[var(--muted)]">
        {prompts.length} prompts across {categories.length} categories
      </p>
      <Suspense fallback={<div className="py-20 text-center text-[var(--muted)]">Loading...</div>}>
        <PromptsDirectory
          prompts={prompts}
          categories={categories}
          allTags={allTags}
        />
      </Suspense>
    </div>
  );
}

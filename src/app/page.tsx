import Link from "next/link";
import {
  prompts,
  categories,
  categoryIcons,
  categoryCounts,
} from "@/lib/prompts";
import {
  skills,
  skillCategories,
  skillCategoryIcons,
  skillCategoryCounts,
} from "@/lib/skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      {/* Hero */}
      <section className="mb-20 text-center">
        <p className="mb-5 font-mono text-sm text-[var(--color-blue-primary)]">
          $ browse prompts --count {prompts.length} --skills {skills.length}
        </p>
        <h1 className="mb-5 text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
          Tom&apos;s <span className="text-gradient-hero">Prompt Library</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          A curated collection of {prompts.length} AI prompts and{" "}
          {skills.length} skills for sales, marketing, research, education, and
          more. Find the right prompt or skill for any task.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/prompts"
            className="inline-flex items-center gap-2 rounded-pill bg-[var(--color-blue-primary)] px-7 py-3 text-sm font-medium text-white transition-all duration-150 hover:bg-[var(--color-blue-primary-hover)]"
          >
            Browse All Prompts
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 rounded-pill border border-[var(--color-blue-primary)] px-7 py-3 text-sm font-medium text-[var(--color-blue-primary)] transition-all duration-150 hover:bg-[var(--accent-light)]"
          >
            Browse Skills
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* Category Grid */}
      <section>
        <h2 className="mb-8 text-2xl font-semibold text-[var(--color-text-primary)]">Browse by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/prompts?category=${encodeURIComponent(cat)}`}
              className="card-glow group flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-150"
            >
              <span className="text-2xl" aria-hidden="true">
                {categoryIcons[cat] || "📁"}
              </span>
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)] transition-colors duration-150 group-hover:text-[var(--color-blue-primary)]">
                  {cat}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {categoryCounts[cat]} prompt{categoryCounts[cat] !== 1 && "s"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills Category Grid */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-semibold text-[var(--color-text-primary)]">Browse Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <Link
              key={cat}
              href={`/skills?category=${encodeURIComponent(cat)}`}
              className="card-glow group flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-150"
            >
              <span className="text-2xl" aria-hidden="true">
                {skillCategoryIcons[cat] || "\uD83D\uDCC1"}
              </span>
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)] transition-colors duration-150 group-hover:text-[var(--color-blue-primary)]">
                  {cat}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {skillCategoryCounts[cat]} skill{skillCategoryCounts[cat] !== 1 && "s"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

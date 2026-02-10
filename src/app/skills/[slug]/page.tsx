import { notFound } from "next/navigation";
import Link from "next/link";
import { skills, getSkillBySlug, skillCategoryIcons } from "@/lib/skills";
import CopyButton from "@/components/CopyButton";
import SkillContent from "@/components/SkillContent";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const skill = getSkillBySlug(params.slug);
  if (!skill) return {};
  return {
    title: `${skill.name} \u2014 Tom\u2019s Prompt Library`,
    description: skill.description,
  };
}

export default function SkillPage({ params }: Props) {
  const skill = getSkillBySlug(params.slug);
  if (!skill) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[var(--muted)]">
        <Link href="/skills" className="text-[var(--color-blue-primary)] transition-colors duration-150 hover:text-[var(--color-text-primary)]">
          Skills
        </Link>
        <span className="mx-2 text-[var(--border)]">/</span>
        <span className="text-[var(--color-text-secondary)]">{skill.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {skillCategoryIcons[skill.category] || "\uD83D\uDCC1"}
          </span>
          <Link
            href={`/skills?category=${encodeURIComponent(skill.category)}`}
            className="font-mono text-sm text-[var(--color-blue-primary)] transition-colors duration-150 hover:text-[var(--color-blue-primary-hover)] hover:underline"
          >
            {skill.category}
          </Link>
        </div>
        <h1 className="mb-4 font-mono text-3xl font-bold text-[var(--color-text-primary)]">{skill.name}</h1>
        <p className="mb-5 text-[var(--muted)] leading-relaxed">{skill.description}</p>
        <div className="flex flex-wrap items-center gap-3">
          {skill.tags.map((tag) => (
            <Link
              key={tag}
              href={`/skills?tag=${encodeURIComponent(tag)}`}
              className="rounded-pill bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors duration-150 hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-blue-primary)]"
            >
              {tag}
            </Link>
          ))}
          <span className="text-xs text-[var(--muted)]">
            {skill.char_count.toLocaleString()} characters
          </span>
        </div>
      </div>

      {/* Copy & Download buttons */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <CopyButton text={skill.skill_body} label="Copy Skill" />
        <a
          href={`/downloads/skills/${skill.slug}.md`}
          download
          className="inline-flex items-center gap-2 rounded-pill border border-[var(--border)] bg-transparent px-4 py-2 font-mono text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-150 hover:border-[var(--color-blue-primary)] hover:text-[var(--color-blue-primary)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </a>
      </div>

      {/* Skill body */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--color-bg-secondary)] p-6">
        <SkillContent content={skill.skill_body} />
      </div>
    </div>
  );
}

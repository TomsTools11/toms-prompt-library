import { notFound } from "next/navigation";
import Link from "next/link";
import { prompts, getPromptBySlug, categoryIcons } from "@/lib/prompts";
import CopyButton from "@/components/CopyButton";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return prompts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const prompt = getPromptBySlug(params.slug);
  if (!prompt) return {};
  return {
    title: `${prompt.name} — Tom's Prompt Library`,
    description: prompt.description,
  };
}

export default function PromptPage({ params }: Props) {
  const prompt = getPromptBySlug(params.slug);
  if (!prompt) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[var(--muted)]">
        <Link href="/prompts" className="text-[var(--color-blue-primary)] transition-colors duration-150 hover:text-[var(--color-text-primary)]">
          Prompts
        </Link>
        <span className="mx-2 text-[var(--border)]">/</span>
        <span className="text-[var(--color-text-secondary)]">{prompt.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {categoryIcons[prompt.category] || "📁"}
          </span>
          <Link
            href={`/prompts?category=${encodeURIComponent(prompt.category)}`}
            className="font-mono text-sm text-[var(--color-blue-primary)] transition-colors duration-150 hover:text-[var(--color-blue-primary-hover)] hover:underline"
          >
            {prompt.category}
          </Link>
        </div>
        <h1 className="mb-4 font-mono text-3xl font-bold text-[var(--color-text-primary)]">{prompt.name}</h1>
        <p className="mb-5 text-[var(--muted)] leading-relaxed">{prompt.description}</p>
        <div className="flex flex-wrap items-center gap-3">
          {prompt.tags.map((tag) => (
            <Link
              key={tag}
              href={`/prompts?tag=${encodeURIComponent(tag)}`}
              className="rounded-pill bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors duration-150 hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-blue-primary)]"
            >
              {tag}
            </Link>
          ))}
          <span className="text-xs text-[var(--muted)]">
            {prompt.char_count.toLocaleString()} characters
          </span>
        </div>
      </div>

      {/* Copy button */}
      <div className="mb-5">
        <CopyButton text={prompt.prompt_body} />
      </div>

      {/* Prompt body */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--color-bg-secondary)] p-6">
        <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {prompt.prompt_body}
        </pre>
      </div>
    </div>
  );
}

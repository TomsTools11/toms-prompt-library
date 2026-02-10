"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import type { Prompt } from "@/lib/prompts";
import { categoryIcons } from "@/lib/prompts";

interface Props {
  prompts: Prompt[];
  categories: string[];
  allTags: string[];
}

export default function PromptsDirectory({
  prompts,
  categories,
  allTags,
}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );
  const [selectedTag, setSelectedTag] = useState(
    searchParams.get("tag") || ""
  );

  // Build Fuse index
  const fuse = useMemo(
    () =>
      new Fuse(prompts, {
        keys: [
          { name: "name", weight: 3 },
          { name: "description", weight: 2 },
          { name: "tags", weight: 1.5 },
          { name: "prompt_body", weight: 0.5 },
        ],
        threshold: 0.35,
        includeScore: true,
      }),
    [prompts]
  );

  // Filter results
  const results = useMemo(() => {
    let filtered = prompts;

    // Text search
    if (query.trim()) {
      filtered = fuse.search(query.trim()).map((r) => r.item);
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Tag filter
    if (selectedTag) {
      filtered = filtered.filter((p) => p.tags.includes(selectedTag));
    }

    return filtered;
  }, [query, selectedCategory, selectedTag, prompts, fuse]);

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedCategory) params.set("category", selectedCategory);
    if (selectedTag) params.set("tag", selectedTag);
    const qs = params.toString();
    router.replace(`/prompts${qs ? `?${qs}` : ""}`, { scroll: false });
  }, [query, selectedCategory, selectedTag, router]);

  return (
    <div>
      {/* Search & Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search prompts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--color-form)] px-4 py-2.5 font-mono text-sm text-[var(--color-text-secondary)] outline-none transition-all duration-150 focus:border-[var(--color-blue-primary)] focus:shadow-[0_0_0_3px_rgba(13,145,253,0.15)] placeholder:text-[var(--muted)]"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-lg border border-[var(--border)] bg-[var(--color-form)] px-3 py-2.5 font-mono text-sm text-[var(--color-text-secondary)] outline-none transition-all duration-150 focus:border-[var(--color-blue-primary)] focus:shadow-[0_0_0_3px_rgba(13,145,253,0.15)]"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="rounded-lg border border-[var(--border)] bg-[var(--color-form)] px-3 py-2.5 font-mono text-sm text-[var(--color-text-secondary)] outline-none transition-all duration-150 focus:border-[var(--color-blue-primary)] focus:shadow-[0_0_0_3px_rgba(13,145,253,0.15)]"
        >
          <option value="">All Tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Active filters */}
      {(selectedCategory || selectedTag || query) && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-[var(--muted)]">
            {results.length} result{results.length !== 1 && "s"}
          </span>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory("")}
              className="inline-flex items-center gap-1 rounded-pill bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--color-blue-primary)] transition-colors duration-150 hover:bg-[var(--color-bg-elevated)]"
            >
              {selectedCategory} &times;
            </button>
          )}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag("")}
              className="inline-flex items-center gap-1 rounded-pill bg-[var(--accent-light)] px-3 py-1 text-xs font-medium text-[var(--color-blue-primary)] transition-colors duration-150 hover:bg-[var(--color-bg-elevated)]"
            >
              {selectedTag} &times;
            </button>
          )}
          {(selectedCategory || selectedTag || query) && (
            <button
              onClick={() => {
                setQuery("");
                setSelectedCategory("");
                setSelectedTag("");
              }}
              className="text-xs text-[var(--muted)] underline transition-colors duration-150 hover:text-[var(--color-text-secondary)]"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Results grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((prompt) => (
          <Link
            key={prompt.id}
            href={`/prompts/${prompt.slug}`}
            className="card-glow group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-150"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">
                {categoryIcons[prompt.category] || "📁"}
              </span>
              <span className="text-xs text-[var(--muted)]">
                {prompt.category}
              </span>
            </div>
            <h3 className="mb-2 font-semibold leading-tight text-[var(--color-text-primary)] transition-colors duration-150 group-hover:text-[var(--color-blue-primary)]">
              {prompt.name}
            </h3>
            <p className="mb-3 line-clamp-2 text-sm text-[var(--muted)]">
              {prompt.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill bg-[var(--accent-light)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div className="py-20 text-center text-[var(--muted)]">
          <p className="text-lg">No prompts found</p>
          <p className="mt-2 text-sm">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}

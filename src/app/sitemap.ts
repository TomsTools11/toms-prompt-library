import { prompts } from "@/lib/prompts";
import { skills } from "@/lib/skills";
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toms-prompt-library.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const promptPages = prompts.map((p) => ({
    url: `${BASE_URL}/prompts/${p.slug}`,
    lastModified: new Date(),
  }));

  const skillPages = skills.map((s) => ({
    url: `${BASE_URL}/skills/${s.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/prompts`, lastModified: new Date() },
    ...promptPages,
    { url: `${BASE_URL}/skills`, lastModified: new Date() },
    ...skillPages,
  ];
}

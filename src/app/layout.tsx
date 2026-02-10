import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Tom's Prompt Library",
  description:
    "A curated directory of AI prompts and skills for sales, marketing, SEO, content writing, education, and more.",
  openGraph: {
    title: "Tom's Prompt Library",
    description:
      "A curated directory of AI prompts and skills for sales, marketing, SEO, content writing, education, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--color-bg-secondary)]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-mono text-lg font-bold text-[var(--color-text-primary)]">
              <span className="text-[var(--accent)]">$</span> toms-prompt-library
            </Link>
            <div className="flex gap-6 text-sm">
              <Link
                href="/prompts"
                className="font-mono text-[var(--muted)] transition-colors duration-150 hover:text-[var(--color-blue-primary)]"
              >
                ./browse
              </Link>
              <Link
                href="/skills"
                className="font-mono text-[var(--muted)] transition-colors duration-150 hover:text-[var(--color-blue-primary)]"
              >
                ./skills
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

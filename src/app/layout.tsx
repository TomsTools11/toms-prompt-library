import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <nav className="sticky top-0 z-50 border-b border-[var(--border)] glass-nav">
          <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-4">
            <Link href="/" className="font-mono text-lg font-bold text-[var(--color-text-primary)]">
              <span className="text-[var(--accent)]">$</span> toms-prompt-library
            </Link>
            <div className="flex justify-center gap-6 text-sm">
              <a
                href="https://learntoprompt.us"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[var(--muted)] transition-colors duration-150 hover:text-[var(--color-blue-primary)]"
              >
                Learn to Prompt
              </a>
              <a
                href="https://tom-panos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[var(--muted)] transition-colors duration-150 hover:text-[var(--color-blue-primary)]"
              >
                My Website
              </a>
            </div>
            <div className="flex justify-end gap-6 text-sm">
              <Link
                href="/prompts"
                className="font-mono text-[var(--muted)] transition-colors duration-150 hover:text-[var(--color-blue-primary)]"
              >
                ./prompts
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

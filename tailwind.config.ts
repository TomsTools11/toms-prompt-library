import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
        },
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-elevated": "var(--color-bg-elevated)",
        "bg-hover": "var(--color-bg-hover)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        blue: {
          primary: "var(--color-blue-primary)",
          "primary-hover": "var(--color-blue-primary-hover)",
          secondary: "var(--color-blue-secondary)",
          light: "var(--color-blue-light)",
        },
        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        info: "var(--color-info)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;

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
        royal: {
          DEFAULT: "#1a4b8c",
          50: "#eef4fb",
          100: "#d6e6f7",
          200: "#a8ccef",
          300: "#6ba3db",
          400: "#3d7bc4",
          500: "#1a4b8c",
          600: "#153d73",
          700: "#0f2d56",
          800: "#0a2040",
          900: "#061428",
        },
        navy: {
          DEFAULT: "#1e293b",
          600: "#334155",
          700: "#1e293b",
          800: "#0f172a",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1100px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(26, 75, 140, 0.08), 0 2px 8px rgba(26, 75, 140, 0.04)",
        "card-hover": "0 8px 32px rgba(26, 75, 140, 0.12), 0 4px 12px rgba(26, 75, 140, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;

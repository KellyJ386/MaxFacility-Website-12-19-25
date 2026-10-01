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
        navy: {
          DEFAULT: "#002244",
          50: "#e6eef5",
          100: "#ccdceb",
          200: "#99b9d7",
          300: "#6697c3",
          400: "#3374af",
          500: "#00518b",
          600: "#002244",
          700: "#001b36",
          800: "#001428",
          900: "#000d1a",
        },
        // Seattle Seahawks action green. 600+ are darker shades for text and
        // links on white (600 is 5:1 on white).
        green: {
          DEFAULT: "#69BE28",
          50: "#f0f9e8",
          100: "#e1f4d1",
          200: "#c3e8a3",
          300: "#a5dd75",
          400: "#87d147",
          500: "#69BE28",
          600: "#2A8000",
          700: "#1F6000",
          800: "#164400",
          900: "#0c2400",
        },
        grey: {
          DEFAULT: "#A5ACAF",
          50: "#f7f8f8",
          100: "#eff0f1",
          200: "#dfe1e3",
          300: "#cfd2d5",
          400: "#bfc3c7",
          500: "#A5ACAF",
          600: "#848a8c",
          700: "#636769",
          800: "#424546",
          900: "#212223",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(0, 34, 68, 0.18)",
        float: "0 24px 60px -20px rgba(0, 34, 68, 0.35)",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        label: ["var(--font-label)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

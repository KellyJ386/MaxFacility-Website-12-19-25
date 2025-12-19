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
        // Seattle Seahawks Color Palette
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
        green: {
          DEFAULT: "#69BE28",
          50: "#f0f9e8",
          100: "#e1f4d1",
          200: "#c3e8a3",
          300: "#a5dd75",
          400: "#87d147",
          500: "#69BE28",
          600: "#549820",
          700: "#3f7218",
          800: "#2a4c10",
          900: "#152608",
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
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

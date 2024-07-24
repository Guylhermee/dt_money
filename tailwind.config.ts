import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--poppins)"],
      },
      colors: {
        "purple": "var(--purple)",
        "lighter-purple": "var(--lighter-purple)",
        "red": "var(--red)",
        "green": "var(--green)",
        "lighter-green": "var(--lighter-green)",
        "blue": "var(--blue)",
      }
    },
  },
  plugins: [],
};
export default config;

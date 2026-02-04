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
        brand: {
          amber: "#D97706",
          "amber-light": "#F59E0B",
          "amber-dark": "#B45309",
          sky: "#0EA5E9",
        },
        surface: {
          DEFAULT: "#18181B",
          dark: "#09090B",
          light: "#27272A",
        },
      },
      fontFamily: {
        heading: ["Bricolage Grotesque", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        btn: "8px",
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          RedP: "#ED315D",
          BlueP: "#1E6091",
          GreenLow: "#C1FFF8"
          
      },
    },
  },
  plugins: [],
} satisfies Config;

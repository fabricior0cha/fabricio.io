import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "profile-image": "url('/assets/profile.jpg')",
      },
      colors: {
        "yellow-javascript": "#F0DB4F",
        "blue-react": "#00D8FF",
        "red-angular": "#DD0031",
        "red-java": "#E76F00",
        "blue-python": "#3776AB",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": colors.white,
        "secondary-bg": "rgb(250, 250, 250)",
        "primary-text": colors.black,
        "secondary-text": "rgb(115, 115, 115)",
        "stroke": "rgb(219, 219, 219)",
        "stroke-secondary": "rgb(165, 165, 165)",
        "primary-button": "rgb(0, 149, 246)",
      },
    }
  },
};
export default config;

import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        csclub: {
          dark: "#10002B",
          orange: "#ECAD2D",
          lightblue: "#7CE2FE",
          teal: "#6DD5ED",
        },
      },
    },
  },
  plugins: [animate],
};

export default config;

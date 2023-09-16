import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
      },

      maxWidth: {
        app: "700px",
      },

      colors: {
        primary: "#8257E6",
      },
    },
  },
  plugins: [],
};
export default config;

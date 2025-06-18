import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  plugins: ["@tailwindcss/postcss"],
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
    }
  }
};

export default config;

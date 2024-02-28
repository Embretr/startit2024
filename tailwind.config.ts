import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#0a41fa",
          light: "#d4ebeb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;

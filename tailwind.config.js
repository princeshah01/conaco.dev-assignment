/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  presets: [require("nativewind/preset")],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans"],
        serif: ["Playfair Display"],
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",

        card: "rgb(var(--card) / <alpha-value>)",
        "card-foreground": "rgb(var(--card-foreground) / <alpha-value>)",

        popover: "rgb(var(--popover) / <alpha-value>)",
        "popover-foreground": "rgb(var(--popover-foreground) / <alpha-value>)",

        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",

        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "rgb(var(--secondary-foreground) / <alpha-value>)",

        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",

        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",

        destructive: "rgb(var(--destructive) / <alpha-value>)",

        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",

        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        info: "rgb(var(--info) / <alpha-value>)",

        rose: "rgb(var(--rose) / <alpha-value>)",
        "rose-light": "rgb(var(--rose-light) / <alpha-value>)",
        "rose-muted": "rgb(var(--rose-muted) / <alpha-value>)",

        ink: "#1a1a2e",
        "ink-soft": "rgb(var(--ink-soft) / <alpha-value>)",
        "ink-muted": "rgb(var(--ink-muted) / <alpha-value>)",

        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        "surface-3": "rgb(var(--surface-3) / <alpha-value>)",

        "green-light": "rgb(var(--green-light) / <alpha-value>)",
        "amber-light": "rgb(var(--amber-light) / <alpha-value>)",
        "blue-light": "rgb(var(--blue-light) / <alpha-value>)",
        "border-soft": "rgb(var(--border-soft) / <alpha-value>)",
      },
    },
  },

  plugins: [],
};

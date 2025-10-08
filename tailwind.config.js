// tailwind.config.js (v3 way)

const colors = require('./styles/colors').default;

module.exports = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
       customBlue: colors.customBlue,
      },
      fontFamily: {
        sans: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
        mono: "var(--font-geist-mono), monospace",
      },
    },
  },
};

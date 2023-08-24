/** @type {import('tailwindcss').Config} */
require("tailwind-scrollbar");
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        mybg: "#18181b",
        primary: "#9ca3af",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

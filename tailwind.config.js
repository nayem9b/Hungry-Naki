/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#89e871",

          secondary: "#c60d9e",

          accent: "#88cbe0",

          neutral: "#15161E",

          "base-100": "#FFFFFF",

          info: "#A6BBE3",

          success: "#17A160",

          warning: "#C88B09",

          error: "#DC2B28",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

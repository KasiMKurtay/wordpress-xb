/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {

    extend: {
      spacing: {
        85: "360px",
        90: "300px",
        100: "20rem",
        104: "25rem",
        128: "32rem",
        133: "35rem",
        150: "40rem",
        160: "45rem",
        170: "60rem",
      },
    },
  },
  plugins: [],
};

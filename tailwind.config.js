module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      "black-1": "#333333",
      "gray-0": "#C4C4C4",
      "gray-1": "#F2F2F2",
      "gray-2": "#4F4F4F",
      "gray-3": "#828282",
      blue: "#2F80ED",
    },
    fontSize: {
      sm: ["14px", { lineHeight: "17.07px" }],
      lg: ["16px", { lineHeight: "19.5px" }],
      xl: ["18px", { lineHeight: "21.94px" }],
      "2xl": ["24px", { lineHeight: "29.26px" }],
    },
  },
  plugins: [],
};

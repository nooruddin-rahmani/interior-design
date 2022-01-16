module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#181719",
      },
      fontFamily: {
        crimpson: "Crimson Pro",
        lora: "Lora",
        mont: "Montserrat",
      },
      spacing: {
        410: "25.625rem",
        189: "11.813rem",
        337: "18rem",
        77: "4.813rem",
        250: "23rem",
      },
      screens: {
        "2xl-max": { max: "1537px" },

        "xl-max": { max: "1281px" },

        "lg-max": { max: "1025px" },

        "md-max": { max: "769px" },

        "sm-max": { max: "639px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

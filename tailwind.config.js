module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightRed: "hsl(356, 100%, 66%)",
        veryLightRed: "hsl(355, 100%, 74%)",
        veryDarkBlue: "hsl(208, 49%, 24%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        veryDarkGrayishBlue: "hsl(207, 13%, 34%)",
        veryDarkBlackBlue: "hsl(240, 10%, 16%)",
        gradientVeryRed: "hsl(13, 100%, 72%)",
        gradientRed: "hsl(353, 100%, 62%)",
        gradientBlue: "hsl(237, 17%, 21%)",
        gradientVeryBlue: "hsl(237, 23%, 32%)",
      },
      size: {
        bord: "30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "text-muted": "rgba(26, 25, 30, 0.5)",
        "text-default": "#1a191e",
        mistyrose: "#f1dfdf",
        gray: "#616161",
        forestgreen: "#168933",
        black: "#202020",
        dimgray: {
          "100": "#565656",
          "200": "#545454",
          "300": "rgba(97, 97, 97, 0.8)",
        },
        gray1: {
          "100": "#262626",
          "200": "#1b1b1b",
          "300": "rgba(255, 255, 255, 0.75)",
          "400": "rgba(255, 255, 255, 0.9)",
        },
        ghostwhite: "#f5f8ff",
        lavender: "#e6edff",
        "colors-blue": "#007aff",
        limegreen: "rgba(57, 245, 76, 0.5)",
        deeppink: "rgba(245, 57, 120, 0.5)",
        "labels-primary": "#000",
        primary: "#ff3f3f",
        crimson: "#eb4343",
        gainsboro: "#d9d9d9",
        lightgray: "#d7d7d7",
        "fills-tertiary": "rgba(120, 120, 128, 0.12)",
        "labels-secondary": "rgba(60, 60, 67, 0.6)",
        "miscellaneous-bar-border": "rgba(0, 0, 0, 0.3)",
      },
      spacing: {},
      fontFamily: {
        "text-small": "Inter",
        "heading-h5": "'DM Sans'",
        poppins: "Poppins",
        "pt-serif": "'PT Serif'",
        rubik: "Rubik",
        "sf-pro": "'SF Pro'",
      },
      borderRadius: {
        lgi: "19px",
        xl: "20px",
        "8xs": "5px",
        mini: "15px",
        "31xl": "50px",
        "5xl-2": "24.2px",
        "36xl": "55px",
        "7xs-5": "5.5px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      lg: "18px",
      mini: "15px",
      "9xl": "28px",
      "3xl": "22px",
      "3xs": "10px",
      "11xl": "30px",
      "21xl": "40px",
      "13xl": "32px",
      "7xl": "26px",
      "2xl": "21px",
      "3xs-3": "9.3px",
      "5xs-1": "7.1px",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

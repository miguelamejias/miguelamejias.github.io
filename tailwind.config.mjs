/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    {
      pattern: /col-start-(\d+)/,
      variants: ["lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern:
        /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: "#fdf8f4",
          100: "#faece3",
          200: "#f3d2be",
          300: "#ebb292",
          400: "#e0895f",
          500: "#B7410E", // Copper
          600: "#a9370b",
          700: "#8c2a0d",
          800: "#70230f",
          900: "#5d2010",
          950: "#320d06",
        },
        neutral: {
          50: "#F5F5F5", // White Smoke
          100: "#D6CFC7", // Technical Beige
          200: "#A0A0A0", // Light Gray
          300: "#808080",
          400: "#606060",
          500: "#404040",
          600: "#2A2A2A", // Medium Gray
          700: "#1F3D2B", // Dark Green (mapped to neutral 700 for depth)
          800: "#1B2A34", // Petroleum Blue (mapped to neutral 800)
          900: "#121212", // Charcoal
          950: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#D4FF00", // Neon
          light: "#e1ff4d",
          dark: "#aab300",
        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        headings: ["Archivo Black", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);",
          },
        },
        fadeInShadowDark: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);",
          },
        },
        fadeUp: {
          "0%": { transform: "translateY(1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
        fadeUp: "fadeUp 500ms ease-in-out forwards",
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [
    typography,
    plugin(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};

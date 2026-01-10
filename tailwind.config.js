import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./lib/**/*.{js,ts,jsx,tsx}",
  // Add any additional paths required by Heroui, e.g.:
  // "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    colors: {
    },
    typography: {
      blackprose: {
        css: {
          '--tw-prose-body': 'oklch(0.985 0 0)',   // main text
          '--tw-prose-headings': 'white',          // headings
          '--tw-prose-links': '#20DBFE',           // cyan
          '--tw-prose-bold': 'white',
          '--tw-prose-quotes': '#ccc',
          '--tw-prose-code': '#ed6bff',            // purple text
          '--tw-prose-pre-bg': 'oklch(0.15 0 0)',  // dark pre background
          '--tw-prose-pre-code': '#fff',
          '--tw-prose-pre-border': 'transparent',
          '--tw-prose-th-borders': '#333',
          '--tw-prose-td-borders': '#333',
        },
      },
    },
    // Add any other theme extensions from Heroui here
  },
};
export const darkMode = "class";
export const plugins = [
  tailwindcssAnimate,
  typography
  // Add any other plugins required by Heroui here
];
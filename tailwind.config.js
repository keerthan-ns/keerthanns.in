import tailwindcssAnimate from "tailwindcss-animate";

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
    // Add any other theme extensions from Heroui here
  },
};
export const darkMode = "class";
export const plugins = [
  tailwindcssAnimate,
  // Add any other plugins required by Heroui here
];
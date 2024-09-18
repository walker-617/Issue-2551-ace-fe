import { MEDIA_QUERY_WIDTHS } from "./utils/mediaUtils";

/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./shared/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
  screens: MEDIA_QUERY_WIDTHS,
};
export const plugins = [];

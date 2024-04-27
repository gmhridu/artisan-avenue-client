import { theme } from 'flowbite-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {
      fontFamily: {
        pops: '"Work Sans", sans-serif',
      },
    },
  },
  daisyui: {
    themes:["light", "night"],
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}


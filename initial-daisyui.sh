#!/bin/bash

pnpm i -D tailwindcss postcss autoprefixer 

pnpm dlx tailwindcss init -p 

pnpm i daisyui

cat ./src/index.css > temp

rm -rf tailwind.config.cjs ./src/index.css 
 
printf '/** @type {import('tailwindcss').Config} */ \n/** created by HMJ for automation tailwind setup */ \nmodule.exports = { \n  content: [\"./index.html\", \"./src/**/*.{js,ts,jsx,tsx}\"],\n  theme: {\n    extend: {},\n  },\n  plugins: [require("daisyui")],\n}' > tailwind.config.cjs 
 
printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' > ./src/index.css 

cat temp >> ./src/index.css

rm -rf temp

/** @type {import(tailwindcss).Config} */ 
/** created by HMJ for automation tailwind setup */ 
module.exports = { 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
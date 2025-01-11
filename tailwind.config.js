/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#006CBB", // Customize your colors
          secondary: "#FFB703",
          accent: "#22C55E",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
    styled: true, // Keep DaisyUI's utility styles
    base: true,   // Keep base styles if needed
  },
}

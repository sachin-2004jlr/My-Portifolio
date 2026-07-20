/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  // Preflight is disabled so Tailwind's base reset doesn't fight the
  // hand-written design-system CSS that styles the rest of the site.
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
}

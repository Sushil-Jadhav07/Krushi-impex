/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2C328C',
        'primary-orange': '#F16222',
        'warm-orange-red': '#D95C2F',
        'off-white': '#F4F2F2',
        'brand-black': '#000000',
      },
      backgroundColor: {
        'primary-blue': '#2C328C',
        'primary-orange': '#F16222',
        'warm-orange-red': '#D95C2F',
        'off-white': '#F4F2F2',
      },
      textColor: {
        'primary-blue': '#2C328C',
        'primary-orange': '#F16222',
        'warm-orange-red': '#D95C2F',
        'brand-black': '#000000',
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      }
    },
  },
  plugins: [],
}


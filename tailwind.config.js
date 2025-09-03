/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210 36% 96.1%)',
        surface: 'hsl(0 0% 100%)',
        primary: 'hsl(240 5.9% 47.5%)',
        accent: 'hsl(208 40.9% 52.9%)',
        'text-primary': 'hsl(240 5.9% 10%)',
        'text-secondary': 'hsl(240 5.9% 30%)',
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
      },
      spacing: {
        'lg': '20px',
        'md': '12px',
        'sm': '8px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(240,5.9%,10%,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.22,1,0.36,1)',
        'scale-in': 'scaleIn 150ms cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

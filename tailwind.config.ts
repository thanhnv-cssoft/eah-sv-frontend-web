import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F47920',
          50: '#FEF3E8',
          100: '#FDE0C5',
          200: '#FACB9E',
          300: '#F8B577',
          400: '#F69749',
          500: '#F47920',
          600: '#D4630F',
          700: '#A14C0B',
          800: '#6E3408',
          900: '#3B1C04',
        },
        secondary: {
          DEFAULT: '#1677FF',
          50: '#E6F4FF',
          100: '#BAE0FF',
          200: '#91CAFF',
          300: '#69B1FF',
          400: '#4096FF',
          500: '#1677FF',
          600: '#0958D9',
          700: '#003EB3',
          800: '#002C8C',
          900: '#001D66',
        },
        dark: {
          950: '#070C15',
          900: '#0F1623',
          800: '#182030',
          700: '#1F2B3D',
          600: '#2A3A52',
          500: '#364A65',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#A8B8CB',
          tertiary: '#7B8DA0',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'Noto Sans', 'sans-serif'],
        body: ['Inter', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

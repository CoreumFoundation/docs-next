import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)'],
        'noto-sans': ['var(--font-noto-sans)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'warning-block': "rgba(255, 160, 46, 0.10)",
        'custom-green-bg': "rgba(37, 214, 149, 0.10)",
        'main-dark': '#080908',
        'main-light': '#fff',
        'sidebar-active': 'rgba(37, 214, 149, 0.05)',

        'sidebar-dark-hover': '#101216',
        'sidebar-light-hover': '#f3f3f3',

        'theme-switch-dark': '#0E0F10',
        'theme-switch-light': '#F9F9F9',

      },
      borderColor: {
        'main-dark': '#17191E',
        'main-light': '#f3f3f3',

        'sidebar-dark': '#101216',
        'sidebar-light': '#f3f3f3',

        'sidebar-internal-dark': '#17191E',
        'sidebar-internal-light': '#f3f3f3',
      },
      textColor: {
        'sidebar-dark': '#5E6773',
        'sidebar-light': '#9FA2AC',
        'sidebar-active': '#25D695',
        'sidebar-tab-dark-active': '#eee',
        'sidebar-tab-light-active': '#1B1D23',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;

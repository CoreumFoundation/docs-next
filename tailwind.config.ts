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
        'figtree': ['var(--font-figtree)'],
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

        'navigation-item-dark': '#0E0F10',
        'navigation-item-light': '#FCFCFC',

        'overview-link-dark': '#0E0F10',
        'overview-link-light': '#FCFCFC',

        'badge-dark': '#2B3138',
        'badge-light': '#EEE',

        'table-head-dark': '#0E0F10',
        'table-head-light': '#FCFCFC',

        'faucet-dark': '#0E0F10',
        'faucet-light': '#FCFCFC',

        'input-dark': '#090909',
        'input-light': '#F3F3F3',

        'search-dark': '#0E0F10',
        'search-light': '#FCFCFC',

        'faq-dark': '#121212',
        'faq-light': '#FAFAFA',
      },
      borderColor: {
        'main-dark': '#17191E',
        'main-light': '#f3f3f3',

        'sidebar-dark': '#101216',
        'sidebar-light': '#f3f3f3',

        'sidebar-internal-dark': '#17191E',
        'sidebar-internal-light': '#f3f3f3',

        'code-dark': '#1d1d1d',
        'code-light': '#FCFCFC',

        'input-dark': '#17191E',
        'input-light': '#F3F3F3',
      },
      textColor: {
        'sidebar-dark': '#5E6773',
        'sidebar-light': '#9FA2AC',
        'sidebar-active': '#25D695',

        'sidebar-tab-dark-active': '#eee',
        'sidebar-tab-light-active': '#1B1D23',

        'overview-link-dark': '#9FA2AC',
        'overview-link-light': '#5E6773',

        'overview-link-dark-hover': '#EEE',
        'overview-link-light-hover': '#1B1D23',

        'main-title-dark': '#EEE',
        'main-title-light': '#1B1D23',

        'badge-dark': '#9FA2AC',
        'badge-light': '#5E6773',

        'table-dark': '#9FA2AC',
        'table-light': '#5E6773',

        'faucet-dark': '#5E6773',
        'faucet-light': '#9FA2AC',

        'input-dark': '#EEE',
        'input-light': '#1B1D23',

        'input-placeholder-dark': '#5E6773',
        'input-placeholder-light': '#9FA2AC',

        'faucet-overview-dark': '#EEE',
        'faucet-overview-light': '#1B1D23',

        'help-card-title-dark': '#EEE',
        'help-card-title-light': '#1B1D23',

        'help-card-description-dark': '#9FA2AC',
        'help-card-description-light': '#5E6773',

        'landing-title-dark': '#FFF',
        'landing-title-light': '#1B1D23',

        'landing-description-dark': '#9FA2AC',
        'landing-description-light': '#5E6773',

        'landing-button-dark': '#1B1D23',
        'landing-button-light': '#EEE',

        'landing-card-title-dark': '#eee',
        'landing-card-title-light': '#1B1D23',

        'landing-card-description-dark': '#9FA2AC',
        'landing-card-description-light': '#9FA2AC',

        'footer-main-dark': '#5E6773',
        'footer-main-light': '#9FA2AC',

        'footer-secondary-dark': '#9FA2AC',
        'footer-secondary-light': '#5E6773',

        'footer-secondary-hover-dark': '#FFF',
        'footer-secondary-hover-light': '#1B1D23',

        'search-dark': '#EEE',
        'search-light': '#1B1D23',

        'search-placeholder-dark': '#5E6773',
        'search-placeholder-light': '#9FA2AC',

        'faq-dark': '#EEE',
        'faq-light': '#1B1D23',
      },
      fill: {
        'landing-button-dark': '#1B1D23',
        'landing-button-light': '#EEE',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;

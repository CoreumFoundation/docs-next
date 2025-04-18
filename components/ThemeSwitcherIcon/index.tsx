import { FC } from "react";

interface ThemeSwitcherIconProps {
  mode: 'sun' | 'moon';
  state: 'active' | 'normal';
}

export const ThemeSwitcherIcon: FC<ThemeSwitcherIconProps> = ({ mode, state }) => {
  switch (mode) {
    case 'sun':
      if (state === 'active') {
        return (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.49916 1.62842L8.79934 4.1864L11.462 3.02573L10.6238 5.8754L13.5706 6.56365L10.859 8.1746L12.8382 10.5868L9.69205 10.1324L9.60773 13.2128L7.49916 10.9056L5.3906 13.2128L5.30613 10.1324L2.1601 10.5868L4.09508 8.1746L1.42773 6.56365L4.38037 5.86302L3.5363 3.02573L6.20539 4.18348L7.49916 1.62842V1.62842ZM8.90332 9.85254C7.56018 10.628 5.84263 10.1678 5.0673 8.82483C4.29182 7.48169 4.75201 5.76414 6.09501 4.98881C7.43814 4.21334 9.1557 4.67353 9.93103 6.01652C10.7065 7.35966 10.2463 9.07721 8.90332 9.85254Z"
              fill="url(#paint0_linear_965_7254)"
            />
            <defs>
              <linearGradient id="paint0_linear_965_7254" x1="13.5706" y1="1.62842" x2="1.99905" y2="13.7578" gradientUnits="userSpaceOnUse">
                <stop stopColor="#25D695"/>
                <stop offset="1" stopColor="#179B69"/>
              </linearGradient>
            </defs>
          </svg>
        );
      }

      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.50014 1.62842L8.80032 4.1864L11.463 3.02573L10.6248 5.8754L13.5716 6.56365L10.86 8.1746L12.8392 10.5868L9.69303 10.1324L9.60871 13.2128L7.50014 10.9056L5.39157 13.2128L5.30711 10.1324L2.16108 10.5868L4.09606 8.1746L1.42871 6.56365L4.38134 5.86302L3.53728 3.02573L6.20637 4.18348L7.50014 1.62842V1.62842ZM8.9043 9.85254C7.56116 10.628 5.84361 10.1678 5.06828 8.82483C4.2928 7.48169 4.75299 5.76414 6.09598 4.98881C7.43912 4.21334 9.15667 4.67353 9.932 6.01652C10.7075 7.35966 10.2473 9.07721 8.9043 9.85254Z"
            fill="#5E6773"
          />
        </svg>
      );
    case 'moon':
      if (state === 'active') {
        return (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.54525 1.42871C9.42851 2.49501 9.95836 3.84984 9.95836 5.32535C9.95836 8.76026 7.09403 11.5451 3.55992 11.5451C2.87905 11.5451 2.22301 11.4406 1.60742 11.2491C2.78005 12.6646 4.57701 13.5716 6.59275 13.5716C10.1266 13.5716 12.9914 10.7869 12.9914 7.352C12.9912 4.57917 11.1238 2.23105 8.54525 1.42871Z"
              fill="url(#paint0_linear_965_2736)"
            />
            <defs>
              <linearGradient id="paint0_linear_965_2736" x1="12.9914" y1="1.42871" x2="0.873739" y2="12.789" gradientUnits="userSpaceOnUse">
                <stop stopColor="#25D695"/>
                <stop offset="1" stopColor="#179B69"/>
              </linearGradient>
            </defs>
          </svg>
        );
      }

      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.54525 1.42871C9.42851 2.49501 9.95836 3.84984 9.95836 5.32535C9.95836 8.76026 7.09403 11.5451 3.55992 11.5451C2.87905 11.5451 2.22301 11.4406 1.60742 11.2491C2.78005 12.6646 4.57701 13.5716 6.59275 13.5716C10.1266 13.5716 12.9914 10.7869 12.9914 7.352C12.9912 4.57917 11.1238 2.23105 8.54525 1.42871Z"
            fill="#9FA2AC"
          />
        </svg>
      );
    default:
      return null;
  }
};

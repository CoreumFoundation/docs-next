import classNames from "classnames";
import { FC } from "react";
import { ThemeSwitcherIcon } from "../ThemeSwitcherIcon";

interface ThemeSwitcherProps {
  activeTheme: 'light' | 'dark';
  toggleTheme: (value: 'light' | 'dark') => void;
}

export const ThemeSwitch: FC<ThemeSwitcherProps> = ({
  activeTheme,
  toggleTheme,
}) => {
  const sunCx = classNames('flex flex-col items-center justify-center p-2 rounded-md', {
    'bg-custom-green-bg': activeTheme === 'light',
    'bg-transparent': activeTheme === 'dark',
  });
  const moonCx = classNames('flex flex-col items-center justify-center p-2 rounded-md', {
    'bg-custom-green-bg': activeTheme === 'dark',
    'bg-transparent': activeTheme === 'light',
  });

  return (
    <div
      className="bg-theme-switch-light dark:bg-theme-switch-dark flex items-center p-1 rounded-[10px] cursor-pointer max-w-fit"
      onClick={() => toggleTheme(activeTheme === 'dark' ? 'light' : 'dark')}
    >
      <div className={sunCx}>
        <ThemeSwitcherIcon mode="sun" state={activeTheme === 'light' ? 'active' : 'normal'} />
      </div>
      <div className={moonCx}>
        <ThemeSwitcherIcon mode="moon" state={activeTheme === 'dark' ? 'active' : 'normal'} />
      </div>
    </div>
  );
};

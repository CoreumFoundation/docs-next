'use client';

import { ThemeContext } from '@/providers/ThemeProvider';
import Image from 'next/image';
import { FC, useContext } from 'react';

interface TutorialOverviewIconProps {
  label: string;
  logo: string;
  lightLogo?: string;
}

export const TutorialOverviewIcon: FC<TutorialOverviewIconProps> = ({
  label,
  logo,
  lightLogo,
}) => {
  const { theme } = useContext(ThemeContext);

  const logoPath = theme === 'dark' ? logo : (lightLogo || logo);

  return logoPath.length ? (
    <Image
      alt={label}
      src={logoPath}
      width={36}
      height={36}
    />
  ) : '';
};

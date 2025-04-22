'use client';

import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import { useContext } from "react";

export const LogoFooter = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Image
      className="h-6"
      src={theme === 'dark' ? '/images/logo-footer.svg' : '/images/logo-footer-light.svg'}
      alt="Company name"
      height={24}
      width={120}
    />
  );
};

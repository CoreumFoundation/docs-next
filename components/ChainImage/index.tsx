'use client';

import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import { useContext } from "react";

export const ChainImage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Image
      className="md:max-w-[350px] md:max-h-[500px] lg:max-h-max lg:max-w-max"
      src={theme === 'dark' ? '/images/chains.png' : '/images/chains-light.png'}
      alt="chains"
      width={300}
      height={420}
    />
  );
};

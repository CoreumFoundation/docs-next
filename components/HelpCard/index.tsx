import Link from "next/link";
import { FC } from "react";

interface HelpCardProps {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

export const HelpCard: FC<HelpCardProps> = ({
  title,
  description,
  linkLabel,
  linkHref,
}) => {
  return (
    <div className="flex flex-col p-6 bg-gradient-help-card rounded-xl gap-6 h-full w-full relative overflow-hidden">
      <div className="flex flex-col gap-2 z-10">
        <p className="font-space-grotesk text-base font-medium tracking-[-0.32px] text-main-title-light dark:text-main-title-dark">
          {title}
        </p>
        <p className="text-help-card-description-light dark:text-help-card-description-dark text-sm leading-[21px] tracking-[-0.14px]">
          {description}
        </p>
      </div>
      <Link href={linkHref} rel="noopener noreferrer" target="_blank" className="text-gradient-green text-sm tracking-[-0.28px] uppercase font-medium flex items-center gap-0.5 cursor-pointer z-10">
        {linkLabel}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.492 9.46915H8.43281V8H17.0029V16.5701H15.5337V10.5051L8.03885 18L7 16.9612L14.492 9.46915Z" fill="#25D695"/>
        </svg>
      </Link>
      <span className="horizontal" />
      <span className="vertical" />
      <span className="horizontal" />
      <span className="vertical" />
    </div>
  );
};

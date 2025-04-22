import { FC } from "react";
import Link from 'next/link';

export interface DocLinkItemProps {
  label: string;
  href: string;
  external: boolean;
}

export const DocLinkItem: FC<DocLinkItemProps> = ({ label, href, external }) => {
  const props = {
    className: "flex items-center p-6 text-base font-medium text-overview-link-light dark:text-overview-link-dark hover:text-overview-link-light-hover dark:hover:text-overview-link-dark-hover rounded-xl bg-overview-link-light dark:bg-overview-link-dark",
    label,
    href,
    ...( external && { target: 'blank' }),
  }

  return (
    <Link {...props}>
      {label}
      {external && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.492 9.46915H8.43281V8H17.0029V16.5701H15.5337V10.5051L8.03885 18L7 16.9612L14.492 9.46915Z" fill="#5E6773"/>
        </svg>
      )}
    </Link>
  );
};

import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

export enum NavigatonItemMode {
  Next = 'next',
  Previous = 'previous',
};

interface NavigatonItem {
  label: string;
  href: string;
  mode: NavigatonItemMode;
}

export const NavigatonItem: FC<NavigatonItem> = ({ label, href, mode }) => {
  const cx = classNames('flex flex-col gap-2 w-full p-4 rounded-md bg-navigation-item-light dark:bg-navigation-item-dark', {
    'items-start text-left': mode === NavigatonItemMode.Previous,
    'items-end text-right': mode === NavigatonItemMode.Next,
  });

  return (
    <Link href={href} className={cx}>
      <div className="text-[#868991] text-xs uppercase tracking-[-0.12px]">
        {mode}
      </div>
      <div className="text-[#25D695] text-[1.125rem] font-medium">
        {label}
      </div>
    </Link>
  );
};

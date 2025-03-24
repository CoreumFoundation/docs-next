"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const customLabels: Record<string, string> = {
  "dashboard": "Dashboard",
  "profile": "User Profile",
  "settings": "Settings",
};

export const Breadcrumb = () => {
  const pathname = usePathname();

  if (!pathname) return null;

  const routePrefix = pathname.includes('/docs/next') ? '/docs/next/' : '/docs/v4/';

  const mainPathname = pathname.split(routePrefix)[1];

  const pathSegments = mainPathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = routePrefix + pathSegments.slice(0, index + 1).join("/");
    const label = customLabels[segment] || segment.replace(/-/g, " ");

    return { href, label };
  });

  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-600">
      <ul className="flex items-center">
        <li>
          <Link href={`${routePrefix}`} className="text-[#5E6773] text-xs leading-[18px] tracking-[-0.12px] hover:underline">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0561 9L7.27734 6.22128L8.07284 5.42578L11.6471 9L8.07284 12.5742L7.27734 11.7787L10.0561 9Z"
                fill="#5E6773"
              />
            </svg>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-[#25D695] text-xs leading-[18px] tracking-[-0.12px] capitalize">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="text-[#5E6773] text-xs leading-[18px] tracking-[-0.12px] hover:underline capitalize">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

import { FC } from "react";

interface BadgeProps {
  label: string;
}

export const Badge: FC<BadgeProps> = ({
  label,
}) => {
  return (
    <div className="bg-badge-light dark:bg-badge-dark rounded-lg px-2 py-1 flex items-center">
      <p className="text-badge-light dark:bg-badge-dark text-sm font-medium tracking-[-0.28px]">
        {label}
      </p>
    </div>
  );
};

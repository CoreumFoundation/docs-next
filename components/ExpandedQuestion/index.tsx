import classNames from "classnames";
import { FC } from "react";

interface ExpandedQuestionProps {
  label: string;
  description: string | React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const ExpandedQuestion: FC<ExpandedQuestionProps> = ({
  label,
  description,
  isActive,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full relative cursor-pointer bg-faq-light dark:bg-faq-dark rounded-xl p-6 gap-4"
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 flex items-center">
          <p className="text-faq-light dark:text-faq-dark font-noto-sans text-[20px] leading-[30px] tracking-[-0.4px] font-medium">
            {label}
          </p>
        </div>
        <div className={classNames('flex-none flex items-center transition-all duration-300', {
          'rotate-90': isActive,
        })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.37047 19.0734C9.70521 19.4081 10.2479 19.4081 10.5827 19.0734L16.6436 13.0124C17.2015 12.4545 17.2015 11.55 16.6436 10.9921L10.5827 4.93122C10.2479 4.59648 9.70521 4.59648 9.37047 4.93122C9.03574 5.26595 9.03574 5.80867 9.37047 6.1434L15.2294 12.0023L9.37047 17.8612C9.03574 18.1959 9.03574 18.7386 9.37047 19.0734Z"
              fill="#696666"
            />
          </svg>
        </div>
      </div>
      <div className={classNames('transition-all overflow-hidden duration-300 w-full ease-in', {
        'max-h-0 h-0 absolute': !isActive,
        'max-h-screen': isActive,
      })}>
        <pre className="text-[#868991] font-noto-sans text-base leading-7 tracking-[-0.16px] !p-0 max-w-full whitespace-pre-wrap break-words">
          {description}
        </pre>
      </div>
    </div>
  );
};

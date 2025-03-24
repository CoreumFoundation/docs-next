import { FC } from "react";

interface BatchProps {
  label: string;
}

export const Batch: FC<BatchProps> = ({
  label,
}) => {
  return (
    <div className="bg-[#2B3138] rounded-lg px-2 py-1 flex items-center">
      <p className="text-[#9FA2AC] text-sm font-medium tracking-[-0.28px]">
        {label}
      </p>
    </div>
  );
};

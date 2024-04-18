import { FC } from "react";

interface InputProps {
  buttonLabel: string;
  onButtonClick: () => void;
  inputName: string;
  inputId: string;
  inputType: string;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder: string;
}

export const Input: FC<InputProps> = ({
  buttonLabel,
  onButtonClick,
  inputName,
  inputId,
  inputType,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex rounded-md shadow-sm border border-[#17191E] bg-[#090909] py-4 pl-5 pr-4 gap-2 sm:gap-4">
      <div className="relative flex flex-grow items-stretch gap-2">
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          className="bg-transparent w-full rounded-none rounded-l-md text-[#eee] outline-none placeholder:text-[#5E6773] sm:text-sm sm:leading-6"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={onButtonClick}
        className="relative inline-flex items-center gap-x-1 rounded-r-md text-sm font-semibold text-[#25D695] text-nowrap hover:opacity-70"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

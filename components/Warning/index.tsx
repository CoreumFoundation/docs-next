export const WarningBlock = () => {
  return (
    <div className="flex w-full flex-col gap-2 p-4 pl-5 border-l-4 border-[#FFA02E] rounded-xl bg-warning-block">
      <div className="flex flex-col w-full gap-2">
        <p className="text-[#FFA02E] text-base leading-7 tracking-[-0.16px] text-left flex items-center gap-2">
          <span>🚧 </span>
          <span>Development Version Notice</span>
        </p>
        <p className="text-[#FFA02E] text-base leading-7 tracking-[-0.16px] text-left">
          You are currently viewing documentation for the version that is under active development.
        </p>
      </div>
      <div className="flex flex-col w-full gap-1">
        <p className="text-[#FFA02E] text-base leading-7 tracking-[-0.16px] text-left">
          🔹 This version has <b>not been deployed to mainnet</b> yet
        </p>
        <p className="text-[#FFA02E] text-base leading-7 tracking-[-0.16px] text-left">
          🔹 Features and APIs may change before final release
        </p>
      </div>
    </div>
  );
};

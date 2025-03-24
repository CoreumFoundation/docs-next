export const WarningBlock = () => {
  return (
    <div className="flex w-full flex-col gap-2 p-4 pl-5 border-l-4 border-[#FFA02E] rounded-xl bg-warning-block">
      <p className="text-[#FFA02E] text-base leading-7 tracking-[-0.16px] text-left">
        This is documentation for v4, which is no longer which is no longer actively maintained.
      </p>
      <p className="text-[#FFA02E] text-base leading-7 tracking-[-0.16px] text-left">
        For up-to-date documentation, see the latest version (<a href="/docs/next/overview/general" className="text-[#FFA02E] text-base leading-7 tracking-[-0.16px] font-bold">next</a>).
      </p>
    </div>
  );
};

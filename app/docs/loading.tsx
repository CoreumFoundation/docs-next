import { Spinner } from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="flex items-center w-full">
      <div className="text-lg text-[#eee] font-medium">
        Page is loading
      </div>
      <Spinner />
    </div>
  );
}

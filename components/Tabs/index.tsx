import classNames from "classnames";
import { FC } from "react";

export interface TabItem {
  label: string;
  id: string;
}

interface TabsProps {
  currentTab: TabItem;
  tabs: TabItem[];
  setCurrentTab: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = ({
  currentTab,
  tabs,
  setCurrentTab,
}) => {
  return (
    <nav className="flex items-center bg-[#0d110f] rounded-md p-1 w-full sm:w-fit overflow-auto" aria-label="Tabs">
      {tabs.map((tab) => (
        <div
          key={tab.label}
          onClick={() => setCurrentTab(tab)}
          className={classNames(
            currentTab.id === tab.id ? 'bg-sidebar-active text-[#25D695] rounded-lg font-medium' : 'text-[#5E6773] rounded-md font-normal',
            "text-base px-20 py-3 font-space-grotesk cursor-pointer"
          )}
          aria-current={currentTab.id === tab.id ? 'page' : undefined}
        >
          {tab.label}
        </div>
      ))}
    </nav>
  );
};

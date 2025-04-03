
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './fees.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managing and Claiming Bridging Fees for XRPL-Coreum Bridge | Coreum Guides",
  description: "Learn how to manage bridging fees for tokens on the XRPL-Coreum Bridge and the process for relayers to claim these fees. Essential information for seamless cross-chain transactions.",
  keywords: [
    'Coreum Bridging Fees',
    'XRPL-Coreum Bridge',
    'Token Bridging Fees',
    'Claim Relayer Fees',
    'Coreum Token Registry',
    'Cross-Chain Transaction Fees',
    'Coreum Network Fees',
    'Relayer Profit',
    'Operational Expenses Coverage',
    'Coreum Explorer'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to manage bridging fees for tokens on the XRPL-Coreum Bridge and the process for relayers to claim these fees. Essential information for seamless cross-chain transactions.",
    siteName: "Managing and Claiming Bridging Fees for XRPL-Coreum Bridge | Coreum Guides",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Asset Flow',
    href: '/docs/v4/xrpl-bridge/asset-flow',
  };
  const nextNavigationItem = {
    label: 'Register New Token',
    href: '/docs/v4/xrpl-bridge/register-new-token',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default Page;

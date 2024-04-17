
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './cex-integrations.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CEX Integration Guide for Coreum | Coreum Official Documentation",
  description: "A comprehensive guide for exchanges on how to integrate trading of CORE tokens. Includes technical details, project information, and code examples in Golang and TypeScript.",
  keywords: [
    'Coreum CEX Integration', 
    'Trading CORE Tokens', 
    'Coreum Blockchain Integration', 
    'Cryptocurrency Exchange Integration', 
    'Coreum Technical Details', 
    'Golang Blockchain Integration', 
    'TypeScript Blockchain Integration', 
    'Coreum Token Trading'
  ]
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Smart FT with WASM',
    href: '/docs/tutorials/use-tokens/smart-ft-with-wasm',
  };
  const nextNavigationItem = {
    label: 'Wallet Integration',
    href: '/docs/tutorials/integrate-coreum/wallet-integration',
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

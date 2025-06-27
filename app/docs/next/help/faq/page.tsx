import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import { Metadata } from 'next';
import { FAQList } from './FAQList';

export const metadata: Metadata = {
  title: "Coreum Blockchain FAQ: Common Issues and Solutions | Coreum Docs",
  description: "Find answers to frequently asked questions about Coreum blockchain, including how to connect `cored` to specific networks, resolve account errors, and more.",
  keywords: [
    'Coreum blockchain FAQ',
    'Cored network connection',
    'Account not found error',
    'Key not found error',
    'Coreum blockchain solutions',
    'Blockchain troubleshooting'
  ],
  openGraph: {
    type: 'website',
    description: "Find answers to frequently asked questions about Coreum blockchain, including how to connect `cored` to specific networks, resolve account errors, and more.",
    siteName: "Coreum Blockchain FAQ: Common Issues and Solutions | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Help Overview',
    href: `/docs/next/overview/help`,
  };
  const nextNavigationItem = {
    label: 'Support',
    href: '/docs/next/help/support',
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="font-medium capitalize text-main-title-light dark:text-main-title-dark !text-[2rem] my-10 scroll-mt-14">
        FAQ
      </h1>
      <FAQList />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default Page;

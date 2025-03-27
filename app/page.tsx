import { CardImage } from "@/components/CardImage";
import Transition from "@/components/Transition";
import Image from "next/image";
import Link from 'next/link';

interface CardItem {
  image: React.ReactNode;
  title: string;
  content: string;
  href: string;
  external?: boolean;
}

export default function Home() {
  const CARDS: CardItem[] = [
    {
      image: <CardImage type="features" />,
      title: 'Features',
      content: 'Dive into the protocol\'s capabilities, including Smart Tokens, CosmWasm Smart Contracts and Coreum\'s gas fee model.',
      href: `/docs/next/overview/smart-tokens`,
    },
    {
      image: <CardImage type="validators" />,
      title: 'Validators',
      content: 'Guides and updates on node set up for deploying on devnet, testnet, or mainnet.',
      href: `/docs/next/become-validator/run-full-node`,
    },
    {
      image: <CardImage type="developers" />,
      title: 'Developers',
      content: 'A full suite of development tooling: Coreum\'s CLI, Smart Contract Playground, and complete TypeScript / Go modules, and tutorials.',
      href: `/docs/next/overview/general`,
    },
    {
      image: <CardImage type="community" />,
      title: 'Community',
      content: 'Explore community resources and initiatives across the Coreum ecosystem. Open-source knowledge and research materials.',
      href: 'https://www.coreum.com/community',
      external: true,
    },
  ];

  return (
    <Transition>
      <div className="flex min-h-max flex-col items-center justify-between px-6 pt-2 pb-20 md:px-14 lg:px-20 xl:px-32 w-full gap-20 max-w-7xl">
        <div className="flex flex-col md:flex-row w-full mb-10">
          <div className="flex flex-col w-full md:w-3/5 gap-8 md:max-w-[70%] py-14 md:py-16 xl:py-24 z-10">
            <div className="flex text-[#5E6773] text-xs">
              <div className="flex py-1 px-4 bg-grey-gradient border border-[#5e6773]/25 rounded-full backdrop-blur-sm">
                Last Updated: 12/14/2023, 6:39:40 AM
              </div>
            </div>
            <div className="flex flex-col text-[4rem] font-bold leading-tight text-white">
              The World’s First <span className="text-green-gradient">Super Ledger</span>
              <div className="text-xl text-[#9FA2AC] font-normal leading-[1.75]">
                Coreum is a scalable, secure, and interoperable blockchain for business, enriched with smart tokens and smart contract functionalities.
              </div>
            </div>
            <div className="flex">
              <Link href="/docs" className="flex items-center py-2 pl-6 pr-5 rounded-lg text-[#1B1D23] text-sm bg-green-gradient">
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.8434 13.0714V8.19407L6.72266 14.3148L5.68018 13.2723L11.7985 7.15398H6.92596V5.67969H14.3177V13.0714H12.8434Z"
                    fill="#1B1D23"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex w-full md:w-2/5 justify-center md:justify-end z-0 md:py-10">
            <Image className="md:max-w-[350px] md:max-h-[500px] lg:max-h-max lg:max-w-max" src="/images/chains.png" alt="chains" width={300} height={420} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {CARDS.map((cardItem: CardItem, index: number) => {
            return (
              <Link
                className="flex flex-col w-full p-6 card gap-2"
                key={`${cardItem.title}-${index}`}
                href={cardItem.href}
                target={cardItem.external ? '_blank' : '_self'}
              >
                <div className="flex w-full mb-4">
                  {cardItem.image}
                </div>
                <div className="text-[#eee] text-base font-medium">
                  {cardItem.title}
                </div>
                <div className="text-[#9FA2AC] text-sm font-normal">
                  {cardItem.content}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Transition>
  );
}

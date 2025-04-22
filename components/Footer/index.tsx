import Image from 'next/image';
import Link from 'next/link';
import { LogoFooter } from '../FooterLogo';

const navigation = {
  products: [
    { name: 'Explorer', href: 'https://explorer.coreum.com/coreum' },
    { name: 'ISO Simulator', href: 'https://www.coreum.com/iso20022' },
    { name: 'Developer Playground', href: 'https://playground.coreum.dev/' },
    { name: 'Whitepaper', href: 'https://www.coreum.com/assets/coreum_technical_paper.pdf' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://x.com/CoreumOfficial',
      icon: (props: any) => (
        <Image
          className="w-6"
          src="/images/twitter.svg"
          alt="Coreum Twitter"
          width={24}
          height={24}
          {...props}
        />
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/coreum.official/',
      icon: (props: any) => (
        <Image
          className="w-6"
          src="/images/instagram.svg"
          alt="Coreum Instagram"
          width={24}
          height={24}
          {...props}
        />
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/CoreumOfficial',
      icon: (props: any) => (
        <Image
          className="w-6"
          src="/images/telegram.svg"
          alt="Coreum Telegram"
          width={24}
          height={24}
          {...props}
        />
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.com/invite/VgkhYeWmTd',
      icon: (props: any) => (
        <Image
          className="w-6"
          src="/images/discord.svg"
          alt="Coreum Discord"
          width={24}
          height={24}
          {...props}
        />
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@coreumofficial',
      icon: (props: any) => (
        <Image
          className="w-6"
          src="/images/youtube.svg"
          alt="Coreum Youtube"
          width={24}
          height={24}
          {...props}
        />
      ),
    },
    {
      name: 'Medium',
      href: 'https://coreum.medium.com/',
      icon: (props: any) => (
        <Image
          className="w-6"
          src="/images/medium.svg"
          alt="Coreum Medium"
          width={24}
          height={24}
          {...props}
        />
      ),
    },
  ],
}

export const Footer = () => {
  return (
    <footer className="bg-main-light dark:bg-main-dark w-full" aria-labelledby="footer-heading">
      <div className="flex flex-1 flex-col h-full w-full relative bg-footer items-center">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="flex w-full justify-between gap-10 flex-col md:flex-row py-3 px-6 md:py-16 md:px-28">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <LogoFooter />
              <div className="flex items-center gap-x-6">
                {navigation.social.map((item) => (
                  <Link key={item.name} href={item.href} target="_blank">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <p className="hidden md:flex text-[10px] leading-[15px] text-footer-main-light dark:text-footer-main-dark font-normal">
              &copy; 2021 - 2025 Coreum Development Foundation Limited. All rights reserved
            </p>
          </div>
          <div className="flex flex-col gap-5 min-w-full md:min-w-[40%]">
            <h3 className="text-xs font-semibold leading-6 text-footer-main-light dark:text-footer-main-dark uppercase">Products</h3>
            <ul role="list" className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    className="flex items-center text-base leading-6 text-footer-secondary-light dark:text-footer-secondary-dark hover:text-footer-secondary-hover-light hover:dark:text-footer-secondary-hover-dark"
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.492 9.46915H8.43281V8H17.0029V16.5701H15.5337V10.5051L8.03885 18L7 16.9612L14.492 9.46915Z" fill="url(#paint0_linear_10730_29519)"/>
                      <defs>
                        <linearGradient id="paint0_linear_10730_29519" x1="7" y1="8" x2="7" y2="18" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#25D695"/>
                          <stop offset="1" stopColor="#046C44"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="flex md:hidden text-[10px] leading-[15px] text-footer-main-light dark:text-footer-main-dark font-normal">
            &copy; 2021 - 2024 Coreum Development Foundation Limited. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

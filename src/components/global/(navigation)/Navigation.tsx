import AlexTaylorLogoText from '@/assets/icons/brand/ALEX-TAYLOR_Logo-Text.png';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import Link from 'next/link';
import { mainNavItems, secondaryNavItems } from './navLinks';

// * Component: Navigation
export default function Navigation() {
  // * Render
  return (
    <header className="absolute inset-x-0 top-0 z-30 sm:py-1 border-b border-zinc-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-zinc-900"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation - Menu */}
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
        </div>

        {/* Logo */}
        <Link href="#Hero" className="-m-1.5 p-1.5">
          <span className="sr-only">ALEX TAYLOR</span>
          <Image
            className="h-3 md:h-4 xl:h-5 w-auto"
            src={AlexTaylorLogoText}
            alt="Alex Taylor Logo Text"
          />
        </Link>

        {/* Desktop Navigation - CTA */}
        <div className="hidden sm:flex flex-1 justify-end sm:gap-x-12">
          {secondaryNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-zinc-900"
            >
              {item.name}
            </Link>
          ))}

          {/* Contact */}
          <Link
            href="#Contact"
            className="text-sm font-semibold leading-6 text-zinc-900"
          >
            Contact Me <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

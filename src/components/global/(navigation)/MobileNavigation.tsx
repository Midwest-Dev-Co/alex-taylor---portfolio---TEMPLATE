import { Button } from '@/components/ui/Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import Image from 'next/image';

import AlexTaylorLogoText from '@/assets/icons/brand/ALEX-TAYLOR_Logo-Text.png';
import { mobileNavItems } from './navLinks';
import Link from 'next/link';

export default function MobileNavigation() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <span className="sr-only">Open main menu</span>

          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>
              <span className="sr-only">ALEX TAYLOR</span>
              <Image
                className="h-3 w-auto"
                src={AlexTaylorLogoText}
                alt="Alex Taylor Logo Text"
              />
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          {/* Content */}
          <div className="p-4 pb-0">
            {mobileNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block p-3 text-lg font-semibold leading-7 text-zinc-900 hover:bg-zinc-50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <DrawerFooter>
            <Button className="bg-orange-800">Live Shows</Button>
            <Button className="bg-purple-900">Contact Me</Button>

            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

// <div className="flex items-center justify-between">
//               <div className="flex flex-1">
//                 <button
//                   type="button"
//                   className="-m-2.5 rounded-md p-2.5 text-zinc-700"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <X className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>

//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">ALEX TAYLOR</span>
//                 <Image
//                   className="h-8 w-auto"
//                   src={AlexTaylorLogoText}
//                   alt="Alex Taylor Logo Text"
//                 />
//               </a>

//               <div className="flex flex-1 justify-end">
//                 <a
//                   href="#"
//                   className="text-sm font-semibold leading-6 text-zinc-900"
//                 >
//                   Log in <span aria-hidden="true">&rarr;</span>
//                 </a>
//               </div>
//             </div>

//             <div className="mt-6 space-y-2">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>

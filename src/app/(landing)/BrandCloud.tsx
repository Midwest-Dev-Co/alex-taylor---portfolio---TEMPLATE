import Section from '@/components/global/Section';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import StarlightImg from '@/assets/icons/brands/Starlight.png';
import FlintImg from '@/assets/icons/brands/Flint.png';
import EpidemicSoundImg from '@/assets/icons/brands/Epidemic_Sound.png';
import CirqueDuSoleilImg from '@/assets/icons/brands/Cirque_du_Soleil.png';
import TheMunyImg from '@/assets/icons/brands/The_Muny.png';

const brands = [
  {
    name: 'Starlight',
    logo: StarlightImg,
  },
  {
    name: 'Flint Institute of Music',
    logo: FlintImg,
  },

  {
    name: 'Cirque du Soleil',
    logo: CirqueDuSoleilImg,
  },
  {
    name: 'The Muny',
    logo: TheMunyImg,
  },
  {
    name: 'Epidemic Sound',
    logo: EpidemicSoundImg,
  },
];

export default function BrandCloud() {
  return (
    <Section name="Brands" className="max-w-7xl mx-auto px-4 text-center">
      {/* Content */}
      <div className="pb-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-zinc-900">
          Trusted by the Midwest&apos;s Best to Perform at the Highest Level
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {brands.map((brand, i) => (
            <Image
              key={brand.name}
              className={cn(
                'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
                i === 4 && 'col-start-2',
                i === 5 && 'col-start-2 lg:col-start-auto',
              )}
              src={brand.logo}
              alt={brand.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

// TODO: Fix Medium Screens

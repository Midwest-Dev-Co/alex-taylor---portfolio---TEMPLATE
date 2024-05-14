import Section from '@/components/global/Section';
import Image from 'next/image';

import AlexTaylorHeroImage from '@/assets/images/alex-taylor-fire.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <Section name="Hero" className="relative isolate">
      {/* Background Blobs */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -tranzinc-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8484] to-[#fcb962] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="py-24 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
              Transforming Vision into{' '}
              <span className="text-orange-800 block mt-2">
                Performance Artistry
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              With a keen eye for detail and a passion for storytelling, I bring
              every performance to life with authenticity and emotion. Whether
              on stage or behind the scenes, I strive to transform creative
              visions into unforgettable experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#LiveShows"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Attend Next Live Show
              </Link>
              <Link
                href="#Contact"
                className="text-sm font-semibold leading-6 text-zinc-900"
              >
                Contact Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={AlexTaylorHeroImage}
                alt="Alex Taylor performing with fire"
                className="rounded-md shadow-2xl ring-1 ring-zinc-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Blobs - Bottom */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -tranzinc-x-1/2 bg-gradient-to-tr from-[#ff8484] to-[#fcb962] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </Section>
  );
}

// Transforming Vision into Performance Artistry
// Alex Taylor
// With a keen eye for detail and a passion for storytelling, I bring every performance to life with authenticity and emotion. Whether on stage or behind the scenes, I strive to transform creative visions into unforgettable experiences.

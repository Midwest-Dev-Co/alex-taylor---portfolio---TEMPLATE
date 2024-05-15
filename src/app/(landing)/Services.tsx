import Section from '@/components/global/Section';
import { CalendarCheck, Globe2, Speech } from 'lucide-react';

const services = [
  {
    name: 'Theatrical Performances',
    description:
      'I offer a variety of theatrical performances, including plays, musicals, and cabaret shows. Whether you’re looking for a classic drama or a contemporary comedy, I can provide a performance that will entertain and inspire your audience.',
    href: '#Contact?subject=Theatrical%20Performances',
    icon: Globe2,
  },
  {
    name: 'Workshops & Coaching',
    description:
      'Join workshops and coaching for actors, singers, and dancers of all levels. Whether you’re a beginner or a seasoned professional, I can help you improve your skills and reach your full potential.',
    href: '#Contact?subject=Workshops%20&%20Coaching',
    icon: Speech,
  },
  {
    name: 'Event Entertainment',
    description:
      'Make your event unforgettable with a performance that will leave your guests in awe. From corporate events to private parties, I can provide a unique and memorable experience for your guests.',
    href: '#Contact?subject=Event%20Entertainment',
    icon: CalendarCheck,
  },
];

export default function Services() {
  return (
    <Section name="Services" className="bg-zinc-800 w-full">
      {/* Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14">
        {/* Header */}
        <header className="px-6 pb-24 sm:pb-32 max-w-2xl mx-auto text-center">
          <p className="text-base font-semibold leading-7 text-orange-400">
            There&apos;s Something for Everyone
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
            Service Offerings
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-200">
            I offer a variety of services to meet your needs, whether you’re
            looking for a theatrical performance, a workshop, or event
            entertainment. Whatever your needs, I can provide a unique and
            memorable experience that will leave a lasting impression on your
            audience.
          </p>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-zinc-50">
                  <service.icon
                    className="h-5 w-5 flex-none text-orange-400"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-200">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a
                      href={service.href}
                      className="text-sm font-semibold leading-6 text-orange-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

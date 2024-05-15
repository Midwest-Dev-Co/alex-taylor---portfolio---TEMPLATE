import Section from '@/components/global/Section';
import SectionHeader from '@/components/global/SectionHeader';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const liveShows = [
  {
    title: 'Spring Performance Gala',
    date: '2023-05-30',
    time: '7:00 PM',
    venue: 'Campus Theater',
    description:
      'Join us for an evening of spectacular dance and drama performances by our talented students.',
    imageUrl: 'https://source.unsplash.com/256x256/?dance',
    href: 'https://tickets.example.com/spring-gala',
  },
  {
    title: 'Jazz Ensemble Night',
    date: '2023-06-15',
    time: '8:00 PM',
    venue: 'Auditorium',
    description:
      'Experience a night of lively jazz music featuring our student ensemble and special guest performers.',
    imageUrl: 'https://source.unsplash.com/256x256/?jazz',
    href: '#Contact?subject=Jazz%20Ensemble%20Night%20Tickets',
  },
  {
    title: 'Drama Club: Modern Plays',
    date: '2023-07-20',
    time: '6:30 PM',
    venue: 'Black Box Theatre',
    description:
      'A series of contemporary plays directed and performed by our advanced drama students.',
    imageUrl: 'https://source.unsplash.com/256x256/?theatre',
    href: '#Contact?subject=Drama%20Club%20Tickets',
  },
  {
    title: 'Summer Dance Showcase',
    date: '2023-08-10',
    time: '7:30 PM',
    venue: 'Outdoor Amphitheater',
    description:
      'An outdoor showcase of dance performances choreographed by our talented students.',
    imageUrl: 'https://source.unsplash.com/256x256/?outdoor',
    href: '#Contact?subject=Dance%20Showcase%20Tickets',
  },
  {
    title: 'Music Festival Weekend',
    date: '2023-09-05',
    time: 'All Day',
    venue: 'Campus Grounds',
    description:
      'A weekend of live music performances by our student bands and guest artists.',
    imageUrl: 'https://source.unsplash.com/256x256/?music',
    href: '#Contact?subject=Music%20Festival%20Tickets',
  },
];

export default function LiveShows() {
  return (
    <Section name="LiveShows" className="mx-auto max-w-4xl">
      {/* Header */}
      <SectionHeader
        title="Upcoming Live Shows"
        subtitle="Come and see us live!"
        description="I would love to see you at one of our upcoming live shows. Check out the schedule below and make sure to RSVP."
        color="orange"
        className="sm:pb-20"
      />

      {/* Content */}
      <ul
        role="list"
        className="divide-y divide-zinc-100 overflow-hidden bg-white shadow-sm ring-1 ring-zinc-900/5 sm:rounded-xl"
      >
        {liveShows.map((show) => (
          <li
            key={show.date}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-zinc-50 sm:px-6"
          >
            {/* Left Side */}
            <div className="flex min-w-0 gap-x-4">
              <Image
                className="h-12 w-12 flex-none rounded-full bg-zinc-50"
                src={show.imageUrl}
                alt=""
                width={48}
                height={48}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-zinc-900">
                  <a href={show.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {show.title}
                  </a>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-zinc-500">
                  {show.description}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-zinc-900 relative truncate hover:underline cursor-pointer">
                  {show.venue}
                </p>
                {show.time ? (
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    {new Date(show.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                    })}
                    {' - '}
                    <time dateTime={show.date}>
                      {show.time.replace(/:00$/, '')}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-zinc-500">Upcoming</p>
                  </div>
                )}
              </div>

              <ChevronRight
                className="h-5 w-5 flex-none text-zinc-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

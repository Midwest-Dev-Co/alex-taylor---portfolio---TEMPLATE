import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import LiveShows from './LiveShows';
import Contact from './Contact';
import BrandCloud from './BrandCloud';

export default function LandingPage() {
  return (
    <main className="grow">
      <Hero />

      <BrandCloud />

      <Services />

      <Portfolio />

      <Testimonials />

      <LiveShows />

      <Contact />
    </main>
  );
}

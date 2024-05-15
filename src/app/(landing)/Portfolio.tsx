import Section from '@/components/global/Section';
import SectionHeader from '@/components/global/SectionHeader';
import { LayoutGrid } from '@/components/ui/LayoutGrid';
import { portfolioItems } from './PortfolioItems';

export default function Portfolio() {
  return (
    <Section
      name="Portfolio"
      className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24"
    >
      {/* Header */}
      <SectionHeader
        title="Performance Portfolio"
        subtitle="Check out some of my recent work"
        description="I've had the pleasure of working at some amazing venues. Here are a few of my favorites!"
        className="pb-6 sm:pb-12"
        color="orange"
      />

      {/* Content */}
      <div className="h-screen w-full">
        <LayoutGrid cards={portfolioItems} />
      </div>
    </Section>
  );
}

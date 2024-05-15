// * Images
import AlexGuitarImg from '@/assets/images/alex-taylor-guitar.jpg';
import AlexSingingImg from '@/assets/images/alex-taylor-singing.jpg';
import AlexFireImg from '@/assets/images/alex-taylor-fire-2.jpg';
import AlexStage2 from '@/assets/images/performing-arts-stage-2.jpg';

const PortfolioItemOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Alex Taylor Playing Guitar
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Captured in the moment, Alex Taylor showcases his incredible guitar
        skills during a live performance.
      </p>
    </div>
  );
};

const PortfolioItemTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Alex Taylor Singing</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        With a powerful voice and emotive delivery, Alex Taylor captivates the
        audience in this stunning singing performance.
      </p>
    </div>
  );
};

const PortfolioItemThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Alex Taylor with Fire Effects
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A mesmerizing performance where Alex Taylor integrates fire effects,
        adding an element of excitement and intensity to the show.
      </p>
    </div>
  );
};

const PortfolioItemFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Alex Taylor on Stage</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A dynamic and engaging stage performance by Alex Taylor, demonstrating
        his versatility and stage presence.
      </p>
    </div>
  );
};

export const portfolioItems = [
  {
    id: 1,
    content: <PortfolioItemOne />,
    className: 'md:col-span-2',
    thumbnail: AlexGuitarImg.src,
  },
  {
    id: 2,
    content: <PortfolioItemTwo />,
    className: 'col-span-1',
    thumbnail: AlexSingingImg.src,
  },
  {
    id: 3,
    content: <PortfolioItemThree />,
    className: 'col-span-1',
    thumbnail: AlexFireImg.src,
  },
  {
    id: 4,
    content: <PortfolioItemFour />,
    className: 'md:col-span-2',
    thumbnail: AlexStage2.src,
  },
];

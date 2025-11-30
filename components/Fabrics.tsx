import React from 'react';
import { FabricItem } from '../types';

const fabricItems: FabricItem[] = [
  {
    name: "Italian Silk Charmeuse",
    description: "Lustrous and smooth with a graceful drape.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB73q2jMAlQsNvv8-tNSqABSHQPf7GH42tuQKJsUsvey6T0VGOnujH849OFsQFngzh2eb7nwxcgtBzmZW1wokXvpyqUcT_4sEg9VMZvlSLz2PoaXItua8tpB2yHFGl2hvRUOa4vaNyjExJsRnI60LtKMRT9nGa03A1LPIOVJEEugqAciO92hiH1G2H73KGKvQm-Mwbchp_TTERNEOiyi5SKir7E7DeTR2dLXgCJY_HqKADsxBZKXvSkUiCKdPC8JaQQWHCjNdzEWd8",
    alt: "Close-up shot of shimmering Italian Silk Charmeuse fabric"
  },
  {
    name: "Organic Cotton Twill",
    description: "Durable and soft, perfect for structured garments.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH9JXVRpIZOBYWtd2k6PnfZWfKjgrMttDPUh2QGvgq9Lct7niLK6j47hAyMi0hpl--HHnSmVq8UMt5WoCAc9Z93hylzMCq6jnSqADXJO31tDeKklL9MzF2jbVuhSfp7WjZ09DdLX7sckm6SknuLZ9ZUKsy6NoAxercgJT6Dmhy6BnrX8apjnXHxl0aSzh1P1mjwJTunOS1IeLxJuPUjUfQQmYCtnIVW5xoGUKE_niMPT2zVQtMQ5lcGWuL_MOJzyFoTYnQ3V1gXgw",
    alt: "A roll of durable Organic Cotton Twill fabric"
  },
  {
    name: "Merino Wool Crepe",
    description: "Fine, breathable wool with a textured finish.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuANKvtseM_YcSZfEyrV77LjG3bSQnmFfoZRQMTBy6nAdbDkaUrpEG6qR9N60w4CVylodqEvcCoW1TeiAG6Q-GImOgkP5_SbVg9NhKkf4wSfLvtI4uYMKGnUeAHPz_e0O1uPNAen99dMTw3JdWK0Zqv-5PEbaQX0MZ2jXpD21RnJW8fK46mdVYYMFaX7VTOT9m30buvGl_8DWWQZ4bxqGzwUNxx1VD9ydv19d6TKIwTISUh1Tcm8vwMkVQyVRUbWutWisLBNtFgnUgQ",
    alt: "Textured Merino Wool Crepe fabric"
  },
  {
    name: "Linen Chambray",
    description: "Lightweight and breathable with a classic look.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1wovO7s08KlYDf_1OV8bBUP7JPFcY9sRGoJ9rvtVjBdWWcYyNlV7l9fX9rS6IcrAggaEcwjqI62y4xjNfkIC3SSu7fF3iFbT7jAq4C3Dm0OZYa_31XVJGb068O6DePjCu_IHhdr6zHm_iBPPYBymOJ3zehoLXFwLf8f1rRFggnKGljIztxuotp5BPJg8yGtft6IqKNBaLUAX1dQPbZeQw5OdDuC3dq-M_N9imsQ3c0tJrBTK1R5zqOapCXmxPpPL4I-Y7KkV5EM8",
    alt: "Light and airy Linen Chambray fabric"
  }
];

const Fabrics: React.FC = () => {
  return (
    <section className="py-10" id="fabrics">
      <h2 className="text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-10 pb-5 pt-5 font-serif">Featured Fabrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-10">
        {fabricItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3 group cursor-pointer">
            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg overflow-hidden">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg group-hover:scale-105 transition-transform duration-300" 
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
                role="img"
                aria-label={item.alt}
              ></div>
            </div>
            <div>
              <p className="text-base font-medium leading-normal">{item.name}</p>
              <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fabrics;

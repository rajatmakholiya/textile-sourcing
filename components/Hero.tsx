import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div 
            className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center" 
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRK05Xh2SwG9kOmiy-O7LrRLaEJrjQdcLqIPB-uxYiqE8czrAaIPHfcDo-UuK4_GA0qsPS_WcrnBGJ2g1l2D69ogmvqM9ZSUcp28zqjpJJxTZxXA9GHnEbuOI02H1Vig6Oymfaew-9CGvg9ivkX0V1DC1IghlTUtdZ2DtVvadUPp1tqJAk5CeCPTcIKE5br32kUwq5Wu5NoOWRTDZXV7gqNkclLH1hMdqfRKiu15J6qILrfOJYsfCK-d0wsSRHEtOwz0K_yqfiADU')" }}
          >
            <div className="flex flex-col gap-2 max-w-3xl">
              <h1 className="text-white text-5xl font-bold leading-tight tracking-tighter @[480px]:text-6xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-tighter font-serif">
                Sourcing the Finest Fabrics for Your Fashion Vision
              </h1>
              <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                We travel the globe to find premium, sustainable, and innovative textiles that bring your creative concepts to life.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:opacity-90 transition-opacity">
              <span className="truncate">Explore Our Collection</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

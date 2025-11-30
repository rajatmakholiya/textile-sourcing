import React from 'react';

const Customers: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300" id="customers">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 text-center">
        <h2 className="text-[32px] font-bold leading-tight tracking-[-0.015em] mb-4 font-serif">
          Trusted Partners
        </h2>
        <p className="text-subtle-light dark:text-subtle-dark text-base mb-12 max-w-2xl mx-auto">
            We are proud to collaborate with some of the world's most recognized fashion retailers, delivering quality textiles that power global trends.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {/* H&M Style Logo */}
          <div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105">
            <span className="font-sans text-5xl font-bold text-[#CD201F] tracking-tighter" style={{ fontFamily: 'sans-serif' }}>H&M</span>
          </div>

          {/* Zara Style Logo */}
          <div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105">
             <span className="font-serif text-6xl font-bold tracking-[-0.08em] text-black dark:text-white italic">ZARA</span>
          </div>

          {/* Zudio Style Logo */}
          <div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105">
            <span className="font-sans text-4xl font-extrabold uppercase tracking-[0.2em] text-black dark:text-white">ZUDIO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
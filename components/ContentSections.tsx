import React from 'react';

const ContentSections: React.FC = () => {
  return (
    <>
      <section className="px-4 py-16 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-subtle-light dark:text-subtle-dark text-base leading-relaxed">
              Welcome to Textile Sourcing, your leading choice for fashion fabrics. As an innovative and dedicated company, we are committed to delivering state-of-the-art textiles designed to fit the distinct needs of fashion brands. Our forward-thinking strategies and technology-enhanced operations guarantee a smooth and effective sourcing process for all our clients. At Textile Sourcing, our commitment is to redefine the landscape of fabric supply by harnessing technology to enhance every aspect of fashion creation.
            </p>
          </div>
          <div 
            className="w-full aspect-square md:aspect-[4/3] rounded-xl bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBU0gOinvB-MWKwqKm2CLZrYlj9UNqLFcQK4qQDLb5jQHZWiVKQ1qHqBTIi0HbmKLVZx-rzRwCddAdYo80qwuhqiLFT5e6dTVafrbn63Oklv-aRviyudJAodrju-6rRiyTt1g2CZogkTa-r62BNDCby2DTMtg_VZMP5tJ1LzSK2nicGAJBRQuAeJSyminZHvvcmlLE6kCG8s3YxN_81sE4PhJuVyKOoY043UYQQ5erv5gUitkcH_A1tN5-qtMoI4eaYq9rZxdOH100')" }}
            aria-label="Textile factory interior"
          />
        </div>
      </section>

      <section className="@container px-4 py-16 sm:px-10 bg-gray-50 dark:bg-black/10 transition-colors duration-300">
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center">
            <h2 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.015em] max-w-[720px] mx-auto font-serif">
                Why Choose Us?
            </h2>
            <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal max-w-[720px] mx-auto">
                We are dedicated to quality, sustainability, and a seamless sourcing experience for our partners.
            </p>
            </div>
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-0">
            <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 flex-col transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-3xl">spa</span>
                <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-tight">Sustainable Sourcing</h3>
                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Ethically sourced materials that meet the highest environmental standards.</p>
                </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 flex-col transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-3xl">public</span>
                <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-tight">Global Network</h3>
                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Access to a vast network of the world's finest textile mills and artisans.</p>
                </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 flex-col transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-tight">Quality Assured</h3>
                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Every fabric is meticulously inspected to ensure it meets our rigorous quality criteria.</p>
                </div>
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;

import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import ValueProp from './ValueProp';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Customers from './Customers';
import ScrollAnimation from './ScrollAnimation';

const Home: React.FC = () => {
  const scrollToCollections = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="w-full">
        <div className="@container">
          <ScrollAnimation>
            <div 
              className="h-[60vh] @[480px]:h-[70vh] flex flex-col justify-end p-4 pb-8 @[480px]:p-8 bg-cover bg-center bg-no-repeat" 
              data-alt="Close-up of a luxurious, flowing teal silk fabric"
              style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNKYcqHYpnbK3Q3dL8rOOEFJLDfMyvN6ydrbdbJMcrfUQ6kuaxJ8g0heZrwo5foTUU3DnFtRyU81yJV5N9ew_NylrzqBe-v8H0BgbLK6bLq5j_TrxKCNweyRdSNcLDU-19uNijqXEvwJl9y6Lyz_nHuSKLLBHkAOoVOenjfd_UUNkvNRIJSG54p5m3a_K2i4_PNLSxr2M82JG8goty0T7wy53_mmQ698DQQ7fFe7cEtNmeAVg6b7c1Pr2h--MQLMUT857mCF5sIOln')" }}
            >
              <div className="flex flex-col gap-2 text-center items-center">
                <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl max-w-sm font-serif">
                  Sourcing the Finest Fabrics for Your Fashion Vision
                </h1>
                <p className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base max-w-sm">
                  Discover premium textiles that bring your creative concepts to life.
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <button 
                  onClick={scrollToCollections}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:opacity-90 transition-opacity"
                >
                  <span className="truncate">Explore Our Collection</span>
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Curated Collections / Featured Fabrics */}
      <section className="px-4 py-16 sm:px-10" id="collections">
        <ScrollAnimation>
          <h2 className="text-[32px] font-bold leading-tight tracking-[-0.015em] pb-8 font-serif">Our Curated Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="group relative aspect-[3/2] overflow-hidden rounded-xl cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_Kz28ITxnsIAMlfiN5Iy6bnmJZrJ-_2YscuSSNMJzJ8oEyDWXb4_qgQl-QGdZ0UVZfhuA3MMQJrfSFwLAbB5v3MJTRSXTvPplw_9-4WiYw6spF0_KmFWov7UrN1tqgZS6u1SAalqwcjro2NJGqtM5RBsEUpVDyXqdXh-yBi8L-KSDVES9ghGgXe5x9EdKMGwWvXxiycHkQBjkxLH9fw9h2vv93YGCTZmc73S9BIk08QRQMHi7YPVfTGa5vrTx9KDYCFaU1McPGKzs')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-bold leading-tight font-serif mb-2">Luxurious Silks</h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    Experience the unparalleled drape and sheen of our silk selection.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative aspect-[3/2] overflow-hidden rounded-xl cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwcJ6dCh50rnK9yZNC8sAtWIfqZuqGKISRlQGLso2MwmJ7pYjA2fLBqlKzSy36Jph_nYzdr0_pMg5Bb-JBjTtqGVcncrbIJaM5RzEkThcPovCTLDnWCqz7tUw7PbPdxt_2akjxC4Q-XNRchiKpVrw_dUb6G3M-KztVuQtA_zgF3FGmE9emcGJk_mAosvcp_eoozTf5v8RMdI4UWSbleEkLic9oiAXevAT-gTM_lTeBnpo0ulV-CccdNOlxHYY6VLR7qhgr15kmprcL')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-bold leading-tight font-serif mb-2">Organic Linens</h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    Discover the breathable elegance of sustainable linen fabrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative aspect-[3/2] overflow-hidden rounded-xl cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApflZ2i3CT_aUAhSYt2bNbXCiz4_NSkFoiEtEY9C6pJnaMbE8HoadYrbgOoiO32_mnyVYO2qpsF1eGVnz0rwKTinb5RaVvEf-NNXCojdWJ9_MwoXVhCvyilVVjShwYm05E7XH2fktlb3b4z_Cv6JubhsiuwbNfm-OypqlmqR3bIWmK1oANGL6f7leTg0J00FAgkUSY6QrpJ3MLPPazWw7dePNCfNMtWvXe-FE4hWA3AFBCr8C5wD1WEp4sXvOAyuDUJQq4Ie7M-5Xj')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-bold leading-tight font-serif mb-2">Sustainable Cottons</h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    Responsibly sourced, exquisitely soft for conscious creations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </ScrollAnimation>
      </section>

      {/* Heritage */}
      <section className="flex flex-col gap-10 px-4 py-16 sm:px-10 @container">
        <ScrollAnimation>
          <div className="flex flex-col gap-6 items-center text-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-text-light dark:text-text-dark tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px] font-serif">
                Our Heritage: Crafting Fashion's Foundation
              </h1>
              <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal max-w-[720px]">
                For decades, we have been the trusted partner for designers seeking unparalleled textile excellence. We are dedicated to sourcing exceptional, often bespoke, textiles from around the globe, blending timeless tradition with cutting-edge innovation. Our mission is to provide you with unique fabrics and a service that empowers your creative vision, sustainably building the future of fashion, one exquisite thread at a time.
              </p>
            </div>
            <a 
              href="#/about"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary/10 hover:bg-primary/20 text-primary dark:text-primary text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base w-fit transition-colors no-underline"
            >
              <span className="truncate">Discover Our Story</span>
            </a>
          </div>
        </ScrollAnimation>
      </section>

      {/* Trusted Partners */}
      <ScrollAnimation>
        <Customers />
      </ScrollAnimation>

      {/* Impact & Reach */}
      <section className="px-4 py-16 sm:px-10 @container bg-gray-50 dark:bg-black/10 transition-colors duration-300">
        <ScrollAnimation>
          <h2 className="text-text-light dark:text-text-dark text-[28px] font-bold leading-tight tracking-[-0.015em] pb-8 font-serif">Our Impact & Reach</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 mb-12">
            <div className="flex flex-col items-center justify-center p-6 gap-2 bg-background-light dark:bg-background-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <p className="text-primary text-4xl font-bold font-serif">
                <AnimatedCounter end={25} suffix="+" />
              </p>
              <p className="text-subtle-light dark:text-subtle-dark text-sm font-bold text-center">Global Partners</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 gap-2 bg-background-light dark:bg-background-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <p className="text-primary text-4xl font-bold font-serif">
                <AnimatedCounter end={30} suffix="+" />
              </p>
              <p className="text-subtle-light dark:text-subtle-dark text-sm font-bold text-center">Years of Expertise</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 gap-2 bg-background-light dark:bg-background-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <p className="text-primary text-4xl font-bold font-serif">
                <AnimatedCounter end={500} suffix="+" duration={2500} />
              </p>
              <p className="text-subtle-light dark:text-subtle-dark text-sm font-bold text-center">Designers Empowered</p>
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-0">
            <div className="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark p-6 flex-col bg-background-light dark:bg-background-dark">
              <div className="text-primary"><span className="material-symbols-outlined text-3xl">public</span></div>
              <div className="flex flex-col gap-1">
                <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">Global Sourcing</h2>
                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Access to a worldwide network of premium mills and artisans.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark p-6 flex-col bg-background-light dark:bg-background-dark">
              <div className="text-primary"><span className="material-symbols-outlined text-3xl">verified</span></div>
              <div className="flex flex-col gap-1">
                <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">Quality Assurance</h2>
                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Every fabric is meticulously inspected to meet the highest standards.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-xl border border-border-light dark:border-border-dark p-6 flex-col bg-background-light dark:bg-background-dark">
              <div className="text-primary"><span className="material-symbols-outlined text-3xl">eco</span></div>
              <div className="flex flex-col gap-1">
                <h2 className="text-text-light dark:text-text-dark text-base font-bold leading-tight">Sustainable Focus</h2>
                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">A commitment to eco-friendly materials and ethical production.</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* New Sections Replacing Collaborate Form */}
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation>
        <ValueProp />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>

    </main>
  );
};

export default Home;
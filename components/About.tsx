import React from 'react';
import Hero from './Hero';
import ContentSections from './ContentSections';
import Customers from './Customers';
import Contact from './Contact';
import ScrollAnimation from './ScrollAnimation';

const About: React.FC = () => {
  return (
    <main className="flex-grow">
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      
      <ContentSections />
      
      <ScrollAnimation>
        <Customers />
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="px-4 py-16 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-6 border border-border-light dark:border-border-dark p-6 rounded-xl transition-colors duration-300">
              <div 
                className="w-1/3 aspect-[3/4] rounded-lg bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjro50peY7C6nf57DQlkmglsZxdODI81oOvs0zobtuBzgbemJ7nfz3Auakm2u-isqyRdgRdaubJyuzNMyXdg3LLHhOQ4n17m27Q9LHRmDxbIPXENdqwQ_ysN98K3pQAaKhdQixw3PVncCsdmQYUHjl29M0Ky_ADQcmWjaQAHx9IyU9I47UeZ5l3VzH3imzKoef4KmDCAxU52bOvWzU7BUoNwxGgvLKxyZqg8yNWPq9R5XT1BMeYMDWANWTjXBj7UlNsgxmL24EP9Y')" }}
                aria-label="Abstract textile pattern"
              />
              <div className="flex-1">
                <h3 className="text-3xl font-serif font-semibold mb-4 text-text-light dark:text-text-dark">Our Vision</h3>
                <p className="text-subtle-light dark:text-subtle-dark text-base leading-relaxed">
                  We aim to simplify fashion manufacturing for brands of all sizes by eliminating operational complexities with tailored solutions and advanced technology. We streamline your process from concept to consumer, allowing you to focus on design and innovation while we handle the rest.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 border border-border-light dark:border-border-dark p-6 rounded-xl transition-colors duration-300">
              <div 
                className="w-1/3 aspect-[3/4] rounded-lg bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmEqYcZu0Bly52JCN3ZQz_-d38LLnKb2k9ukyKfgXvAsXA5tAEvIdm9iZBIPEgyTKdOFiqssW1o2JgN802dpM2vdCOX_uf-wOSG3Ltfb_p1Fw_KHtidopfkdj5VLZEosGFiq-Dqm513PfpSLF_Eg7QwxKPxZdwm3mFQBgLoErrDPGBOa-URz4EiLFStEXc8_saf5RULOOSTGGlT13hg_MsKG4wcx-9Ap7vTb7e8AS91tjarJoOyhm6plCnkyxrfr27Jw0VDIt0DHg')" }}
                aria-label="Flowing fabric abstract"
              />
              <div className="flex-1">
                <h3 className="text-3xl font-serif font-semibold mb-4 text-text-light dark:text-text-dark">Our Mission</h3>
                <p className="text-subtle-light dark:text-subtle-dark text-base leading-relaxed">
                  Our mission is to clear the path for your creative journey, removing logistical hurdles. By handling the intricacies of manufacturing, from sourcing sustainable materials to employing advanced fabrication techniques, we enable you to dedicate your energy to design and strategic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="px-4 py-16 sm:px-10" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div 
              className="w-full aspect-square md:aspect-[4/3] rounded-xl bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4Js_cJcTzQfC4ZT-xSQY0w7bHfyqTuKv2dbBbHULINUOLJQhpfdwZFy8DI0tkG34uXWltwCfdYJCr-vc1OkVg-fC7yH_ErqIvct63azqflZSFOqTNtJRl2Y9W4QepWhI93wh-l2oBojwXbCjLghiipRJJ3oTiFyoone4WtK5paI9933k6Mv8e5eYK9lYPeH9oWKPKmDrTq1LE2GMhP7OdQ1geRnyQWCvHxavMqinQ3ajVffisDjw9A_h8yzVrUzhW3fp53R_ZnzU')" }}
              aria-label="Team of textile experts"
            />
            <div className="flex flex-col gap-4">
              <h2 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.015em] font-serif">Our Story</h2>
              <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-relaxed">
                Founded by a team of passionate textile enthusiasts, our mission has always been to bridge the gap between visionary designers and the world's most exceptional fabrics. We believe that every great creation begins with the right material. Our expertise lies in discovering and delivering textiles that not only look and feel incredible but are also produced with integrity and care for our planet. We're more than just a supplier; we're your partner in creation.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
    </main>
  );
};

export default About;
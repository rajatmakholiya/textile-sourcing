import React from 'react';
import { ArrowRight } from 'lucide-react';

const ValueProp: React.FC = () => {
  return (
    <section className="px-4 py-16 sm:px-10 bg-white dark:bg-black/5 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <div className="border border-text-light dark:border-text-dark rounded-full px-4 py-1.5 inline-block">
            <span className="text-xs font-bold uppercase tracking-wider">What you get</span>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-display tracking-tight text-text-light dark:text-text-dark">
              AI powered <span className="font-serif italic">Design to Delivery</span>
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-display tracking-tight text-text-light dark:text-text-dark">
              Minimum <span className="font-serif italic">Inventory</span> Risk
            </h2>
             <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-display tracking-tight text-text-light dark:text-text-dark">
              3X Faster <span className="font-serif italic">delivery</span>
            </h2>
          </div>

          <button className="group mt-4 bg-text-light dark:bg-text-dark text-background-light dark:text-background-dark rounded-full px-8 py-3.5 flex items-center gap-2 font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
            Know More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Image Grid */}
        <div className="flex-1 w-full relative">
           <div className="grid grid-cols-2 gap-4">
             <div className="flex flex-col gap-4 pt-12">
               <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1550614000-4b9519e09eb3?q=80&w=800&auto=format&fit=crop" 
                    alt="Fashion model in green" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
               </div>
             </div>
             <div className="flex flex-col gap-4">
               <div className="aspect-[3/5] w-full rounded-2xl overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
                    alt="Abstract fashion art" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ValueProp;
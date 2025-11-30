import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: "What services does Textile Sourcing provide?",
    answer: "We provide end-to-end textile sourcing solutions, including fabric discovery, quality assurance, sustainable procurement, and logistics management for fashion brands globally."
  },
  {
    question: "How long does it take to get my order?",
    answer: "Timelines vary by order volume and customization. Typically, sample sourcing takes 1-2 weeks, while bulk production and delivery range from 4-8 weeks."
  },
  {
    question: "How can I track my order and shipment timelines?",
    answer: "We provide a dedicated client portal where you can track real-time updates on production milestones, quality checks, and shipping status."
  },
  {
    question: "How does Textile Sourcing prioritize sustainability in its manufacturing processes?",
    answer: "We partner exclusively with certified mills that adhere to global sustainability standards, prioritizing organic materials, water-saving dyeing processes, and fair labor practices."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20 sm:px-10 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-12">
            <div className="border border-text-light dark:border-text-dark rounded-full px-4 py-1.5 inline-block mb-4">
                <span className="text-xs font-bold uppercase tracking-wider">Frequently Asked Questions</span>
            </div>
        </div>

        <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark border-t border-b border-border-light dark:border-border-dark">
          {faqItems.map((item, index) => (
            <div key={index} className="py-6">
              <button 
                className="w-full flex justify-between items-center text-left gap-4 group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-sm font-bold text-subtle-light dark:text-subtle-dark w-12 shrink-0">
                    No. {index + 1}
                </span>
                <span className="flex-1 text-lg sm:text-xl font-medium text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <span className="shrink-0 text-text-light dark:text-text-dark">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                    <div className="pl-16 pr-4">
                        <p className="text-base text-subtle-light dark:text-subtle-dark leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
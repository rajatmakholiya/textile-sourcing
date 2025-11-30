import React from 'react';

const testimonials = [
  {
    name: "ASHWINI",
    role: "Founder, Dennison",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
    quote: "Our collaboration has been transformative. Their expertise in design and data-driven fashion forecasting significantly enhanced our offerings, directly contributing to a noticeable increase in our sales. Their professional and tailored approach made them an invaluable partner."
  },
  {
    name: "MANISHA",
    role: "Founder, Deemonash",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
    quote: "Working with them introduced a level of transparency we hadn't experienced before. Their system streamlined our operations, from design approvals to keeping up with tight deadlines. It was refreshing to have such clear visibility and communication throughout the process."
  },
  {
    name: "DEVANSH",
    role: "Founder, Slazyclub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200",
    quote: "Their commitment to delivering top-notch designs within impressive turnaround times has been a game changer for our brand. It's rare to find a partner that consistently exceeds expectations on quality while also beating the clock."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="px-4 py-16 sm:px-10 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="flex flex-col border border-border-light dark:border-border-dark p-8 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-black/20">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-bold text-lg font-sans uppercase tracking-wide text-text-light dark:text-text-dark">{item.name}</h3>
                <p className="text-xs text-subtle-light dark:text-subtle-dark">{item.role}</p>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-text-light dark:text-text-dark font-medium">
              {item.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
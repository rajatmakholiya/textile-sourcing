import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="px-4 py-16 sm:px-10 bg-gray-50 dark:bg-black/10 transition-colors duration-300" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.015em] font-serif">Let's Create Together</h2>
        <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal max-w-2xl mx-auto mt-4">
          Have a project in mind or a question about our fabrics? We'd love to hear from you. Fill out the form below and a member of our team will get back to you shortly.
        </p>
      </div>
      <form className="max-w-2xl mx-auto mt-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input 
              className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary transition duration-150" 
              id="name" 
              placeholder="Your Name" 
              type="text" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input 
              className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary transition duration-150" 
              id="email" 
              placeholder="your.email@example.com" 
              type="email" 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea 
            className="w-full p-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary transition duration-150" 
            id="message" 
            placeholder="Tell us about your project..." 
            rows={5}
          ></textarea>
        </div>
        <div className="text-center">
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:opacity-90 transition-opacity" type="submit">
            <span className="truncate">Submit Inquiry</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

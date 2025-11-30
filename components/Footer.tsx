import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-background-light px-4 py-8 sm:px-10 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold font-serif">Textile Sourcing</h3>
          <p className="text-sm text-subtle-dark">© 2024. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <a className="text-subtle-dark hover:text-white transition-colors" aria-label="Facebook" href="#">
            <Facebook size={24} />
          </a>
          <a className="text-subtle-dark hover:text-white transition-colors" aria-label="Instagram" href="#">
            <Instagram size={24} />
          </a>
          <a className="text-subtle-dark hover:text-white transition-colors" aria-label="LinkedIn" href="#">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
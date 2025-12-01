import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, currentRoute }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 flex flex-col transition-colors duration-300">
      {/* Main Header Bar */}
      <div className="relative z-50 border-b border-solid border-border-light dark:border-border-dark bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 sm:px-10 py-3">
          <a 
            href="#/"
            className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity text-text-light dark:text-text-dark"
            onClick={closeMobileMenu}
          >
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-serif">Textile Sourcing</h2>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-9">
              <a 
                href="#/" 
                className={`text-sm font-medium leading-normal transition-colors relative group ${currentRoute === 'home' ? 'text-primary' : 'text-text-light dark:text-text-dark hover:text-primary'}`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${currentRoute === 'home' ? 'w-full' : ''}`}></span>
              </a>
              <a 
                href="#/about" 
                className={`text-sm font-medium leading-normal transition-colors relative group ${currentRoute === 'about' ? 'text-primary' : 'text-text-light dark:text-text-dark hover:text-primary'}`}
              >
                About Us
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${currentRoute === 'about' ? 'w-full' : ''}`}></span>
              </a>
            </div>
            
            <a 
              href="#/about"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all no-underline shadow-md shadow-primary/20"
            >
              <span className="truncate">Get a Quote</span>
            </a>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} className="text-subtle-dark" /> : <Moon size={20} className="text-subtle-light" />}
            </button>

            <div className="hidden sm:block bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-offset-2 ring-primary/20 dark:ring-offset-background-dark" data-alt="User profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCH6jrB56g1XfM3cxZFPIULt-Qu8cEFf6owG5reF7uQ8A7frLliQ85oZOM--b4qSUd1apAByO2LAWvs3ucSlWXPVwc-FQ2flBTx2te98cg8ueF2zj7uN-Thv9mBsaM2OuNTlaUo5buL7ZSIFOem76aKKq2y3jMW5zOwJbY-uUTsxglghmByMsv_1Vf3i88ujb-d8KJL4v0O8RZ488zT13FtljAs5r3LeFbgMPUb6orSChpxwRGIDTlfU0uXjFm0b9FoXEBBXjkLDx4')" }}></div>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} className="text-subtle-dark" /> : <Moon size={20} className="text-subtle-light" />}
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-text-light dark:text-text-dark transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          md:hidden absolute top-full left-0 w-full z-40
          bg-background-light dark:bg-background-dark 
          border-b border-border-light dark:border-border-dark
          shadow-xl
          transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] transform origin-top
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
        `}
      >
        <div className="px-6 py-8 flex flex-col gap-3">
          <a 
            href="#/" 
            onClick={closeMobileMenu}
            className={`
              flex items-center justify-between text-lg font-medium py-3 px-4 rounded-xl transition-all
              ${currentRoute === 'home' 
                ? 'bg-primary/10 text-primary' 
                : 'text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5'}
            `}
          >
            Home
            {currentRoute === 'home' && <ArrowRight size={18} />}
          </a>
          <a 
            href="#/about" 
            onClick={closeMobileMenu}
            className={`
              flex items-center justify-between text-lg font-medium py-3 px-4 rounded-xl transition-all
              ${currentRoute === 'about' 
                ? 'bg-primary/10 text-primary' 
                : 'text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5'}
            `}
          >
            About Us
            {currentRoute === 'about' && <ArrowRight size={18} />}
          </a>
          
          <div className="h-px bg-border-light dark:bg-border-dark my-2 mx-2" />
          
          <a 
            href="#/about"
            onClick={closeMobileMenu}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 active:scale-95 transition-all no-underline shadow-lg shadow-primary/20 mt-2"
          >
            <span className="truncate">Get a Quote</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
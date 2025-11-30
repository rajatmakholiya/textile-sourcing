import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onNavigate: (page: 'home' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm transition-colors duration-300">
      <div 
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-serif">Textile Sourcing</h2>
      </div>
      
      <div className="flex flex-1 justify-end items-center gap-4 sm:gap-8">
        <div className="hidden md:flex items-center gap-9">
          <button onClick={() => onNavigate('home')} className="text-sm font-medium leading-normal hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-text-light dark:text-text-dark">Home</button>
          <button onClick={() => onNavigate('about')} className="text-sm font-medium leading-normal hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-text-light dark:text-text-dark">Partners</button>
          <button onClick={() => onNavigate('about')} className="text-sm font-medium leading-normal hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-text-light dark:text-text-dark">About Us</button>
        </div>
        
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Get a Quote</span>
        </button>

        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} className="text-subtle-dark" /> : <Moon size={20} className="text-subtle-light" />}
        </button>

        <div className="hidden sm:block bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCH6jrB56g1XfM3cxZFPIULt-Qu8cEFf6owG5reF7uQ8A7frLliQ85oZOM--b4qSUd1apAByO2LAWvs3ucSlWXPVwc-FQ2flBTx2te98cg8ueF2zj7uN-Thv9mBsaM2OuNTlaUo5buL7ZSIFOem76aKKq2y3jMW5zOwJbY-uUTsxglghmByMsv_1Vf3i88ujb-d8KJL4v0O8RZ488zT13FtljAs5r3LeFbgMPUb6orSChpxwRGIDTlfU0uXjFm0b9FoXEBBXjkLDx4')" }}></div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  // Initialize theme based on system preference or default
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Update HTML class when theme changes
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleNavigate = (page: 'home' | 'about') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-[1600px] flex-1">
            <Header 
              isDarkMode={isDarkMode} 
              toggleTheme={toggleTheme} 
              onNavigate={handleNavigate}
            />
            
            {currentPage === 'home' ? <Home /> : <About />}
            
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
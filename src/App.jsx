import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import TrustedBy from './components/TrustedBy.jsx';
import Services from './components/Services.jsx';
import OurWork from './components/OurWork.jsx';
import Teams from './components/Teams.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Theme toggle effect
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Custom cursor effect
  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      position.x += (mouse.x - position.x) * 0.2;
      position.y += (mouse.y - position.y) * 0.2;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 6}px, ${mouse.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300 relative">
      {/* Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ zIndex: 9999 }}
      />

      {/* Layout */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Custom Cursor */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
        style={{ transition: 'transform 0.1s ease-out' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
      />
    </div>
  );
};

export default App;
// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
        <CustomCursor />
        <Background />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Pricing />
            <Contact />
          </main>
          <Footer />
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
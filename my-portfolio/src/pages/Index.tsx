import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { TechStack } from '@/components/sections/TechStack';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <a href="#main-content" className="sr-only-focusable">
        Skip to main content
      </a>
      <div className="min-h-screen">
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        <FloatingMenu />
      </div>
    </LanguageProvider>
  );
};

export default Index;

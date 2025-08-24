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
      <div className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
        <FloatingMenu />
      </div>
    </LanguageProvider>
  );
};

export default Index;

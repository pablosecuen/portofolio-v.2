import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';

import { ArrowDown, Download, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from "@/contexts/useLanguage";

export function Hero() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-secondary/15 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <GlassCard variant="violet" animation="float" className="p-2 rounded-full">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-primary flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
              <img alt="developer logo" src="/public/logo/logopablo.png" className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 p-2"/>
            </div>
          </GlassCard>
        </div>

        {/* Main Content */}
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-foreground via-violet-primary to-foreground bg-clip-text text-transparent animate-fade-in-up px-4">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted animate-fade-in-up delay-100 px-4">
              {t.hero.subtitle}
            </p>
          </div>

          <GlassCard variant="default" className="p-4 sm:p-6 max-w-2xl mx-auto animate-fade-in-up delay-200 ">
            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
              {t.hero.description}
            </p>
          </GlassCard>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-300 sm:px-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 border-violet-primary/30 group w-full sm:w-auto"
            >
              {t.hero.cta}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass border-glass-border/30 hover:border-violet-primary/50 hover:bg-violet-primary/10 w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass border-glass-border/30 hover:border-violet-primary/50 hover:bg-violet-primary/10 w-full sm:w-auto"
              asChild
            >
              <a href="mailto:pablosecuen@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Contact Me</span>
                <span className="sm:hidden">Contact</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-violet-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-violet-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

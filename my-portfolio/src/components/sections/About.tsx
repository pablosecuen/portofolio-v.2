import React from 'react';
import { GlassCard } from '@/components/GlassCard';

import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Code, Heart, Zap, Target } from 'lucide-react';
import { useLanguage } from "@/contexts/useLanguage";

export function About() {
  const { t } = useLanguage();
  const ref = useStaggeredAnimation(150);

  const highlights = [
    {
      icon: Code,
      title: '5+ Years',
      description: 'Frontend Development'
    },
    {
      icon: Zap,
      title: '50+ Projects',
      description: 'Successfully Delivered'
    },
    {
      icon: Target,
      title: '99%',
      description: 'Client Satisfaction'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'About Clean Code'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-6 lg:space-y-8">
            <div data-animate className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-violet-primary bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary rounded" />
            </div>

            <GlassCard 
              data-animate 
              variant="default" 
              className="p-6"
            >
              <p className="text-lg text-foreground-muted leading-relaxed">
                {t.about.description}
              </p>
            </GlassCard>

            <div data-animate className="space-y-4">
              <h3 className="text-xl font-semibold text-violet-primary">
                {t.about.passion}
              </h3>
              <p className="text-foreground-muted">
                {t.about.passionText}
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <GlassCard
                key={index}
                data-animate
                variant="hover"
                animation="scale"
                className="p-4 sm:p-6 text-center group"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-violet-primary">
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground-muted">
                      {item.description}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 lg:mt-16">
          <GlassCard variant="violet" className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-violet-primary">
              {t.about.skills}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {[
                'React & Next.js',
                'TypeScript',
                'Modern CSS',
                'Performance',
                'Testing',
                'Accessibility',
                'Team Leadership',
                'Mentoring'
              ].map((skill, index) => (
                <div 
                  key={skill}
                  className="text-center p-3 rounded-lg bg-background-secondary/50 hover:bg-violet-primary/20 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-sm font-medium">{skill}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

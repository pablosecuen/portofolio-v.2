import React from 'react';
import { GlassCard } from '@/components/GlassCard';

import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { experiences, experiencesEs } from '@/data/portfolio';
import { Calendar, MapPin, Award } from 'lucide-react';
import { useLanguage } from "@/contexts/useLanguage";

export function Experience() {
  const { t, language } = useLanguage();
  const ref = useStaggeredAnimation(200);

  // Selecciona el array correcto según el idioma
  const experiencesData = language === 'es' ? experiencesEs : experiences;

  const formatDate = (dateString: string) => {
    if (dateString === 'Present' || dateString === 'Actualidad') return t.experience.present;
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-violet-primary bg-clip-text text-transparent mb-4">
            {t.experience.title}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-primary rounded mx-auto" />
        </div>

        <div 
          ref={ref}
          className="space-y-6 lg:space-y-8"
        >
          {experiencesData.map((exp, index) => (
            <GlassCard
              key={exp.id}
              data-animate
              variant="hover"
              className="p-4 sm:p-6 lg:p-8 group"
            >
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Left Column - Company & Role */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-violet-primary group-hover:text-violet-secondary transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground-muted mt-2">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground-muted">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-violet-primary/20 text-violet-primary rounded-full text-xs font-medium border border-violet-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle Column - Description */}
                <div className="lg:col-span-1">
                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Right Column - Achievements */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 text-violet-primary">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="font-semibold text-sm sm:text-base">{t.experience.achievements}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li 
                        key={idx}
                        className="text-xs sm:text-sm text-foreground-muted flex items-start gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-violet-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Timeline Visualization - Hidden on mobile */}
        <div className="mt-12 lg:mt-16 relative hidden md:block">
          <GlassCard variant="violet" className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-violet-primary">
              Career Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary" />
              <div className="space-y-6 sm:space-y-8">
                {experiencesData.map((exp, index) => (
                  <div 
                    key={exp.id}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-4 lg:pr-8' : 'text-left pl-4 lg:pl-8'}`}>
                      <div className="bg-background-secondary/50 p-3 sm:p-4 rounded-lg">
                        <div className="font-bold text-violet-primary text-sm sm:text-base">{exp.company}</div>
                        <div className="text-xs sm:text-sm text-foreground-muted">
                          {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-violet-primary rounded-full border-2 sm:border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

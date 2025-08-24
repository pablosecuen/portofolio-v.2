import { GlassCard } from '@/components/GlassCard';

import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { techStack, techStackEs } from '@/data/portfolio';
import { useLanguage } from "@/contexts/useLanguage";

export function TechStack() {
  const { t, language } = useLanguage();
  const ref = useStaggeredAnimation(100);

  // Selecciona el array correcto según el idioma
  const techStackData = language === 'es' ? techStackEs : techStack;

  const getLevelColor = (level: number) => {
    if (level >= 5) return 'bg-violet-primary';
    if (level >= 4) return 'bg-violet-secondary';
    if (level >= 3) return 'bg-violet-muted';
    return 'bg-glass-border';
  };

  const getLevelWidth = (level: number) => {
    return `${(level / 5) * 100}%`;
  };

  return (
    <section id="tech" className="py-12 sm:py-16 lg:py-20 px-4 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-violet-primary bg-clip-text text-transparent mb-4">
            {t.techStack.title}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-primary rounded mx-auto" />
        </div>

        <div 
          ref={ref}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {techStackData.map((category, categoryIndex) => (
            <GlassCard
              key={category.category}
              data-animate
              variant="hover"
              className="p-6"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-violet-primary mb-4">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={tech.name}
                      className="space-y-2"
                      style={{ 
                        animationDelay: `${(categoryIndex * 100) + (techIndex * 50)}ms` 
                      }}
                    >
                      {/* Tech Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-xs text-foreground-muted">
                          {tech.level}/5
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-background-tertiary/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${getLevelColor(tech.level)}`}
                          style={{ 
                            width: getLevelWidth(tech.level),
                            transitionDelay: `${(categoryIndex * 100) + (techIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 lg:mt-16">
          <GlassCard variant="violet" className="p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-violet-primary mb-4">
                {t.techStack.level}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-center">
              <div className="space-y-2">
                <div className="w-4 h-4 bg-violet-primary rounded mx-auto" />
                <div className="text-xs text-foreground-muted">Expert (5/5)</div>
              </div>
              <div className="space-y-2">
                <div className="w-4 h-4 bg-violet-secondary rounded mx-auto" />
                <div className="text-xs text-foreground-muted">Advanced (4/5)</div>
              </div>
              <div className="space-y-2">
                <div className="w-4 h-4 bg-violet-muted rounded mx-auto" />
                <div className="text-xs text-foreground-muted">Intermediate (3/5)</div>
              </div>
              <div className="space-y-2">
                <div className="w-4 h-4 bg-glass-border rounded mx-auto" />
                <div className="text-xs text-foreground-muted">Beginner (2/5)</div>
              </div>
              <div className="space-y-2">
                <div className="w-4 h-4 bg-glass-border/50 rounded mx-auto" />
                <div className="text-xs text-foreground-muted">Learning (1/5)</div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Additional Stats */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <GlassCard variant="default" className="p-6 text-center">
            <div className="text-3xl mb-2">⚛️</div>
            <div className="text-lg font-bold text-violet-primary mb-1">React Ecosystem</div>
            <div className="text-sm text-foreground-muted">5+ Years Experience</div>
          </GlassCard>
          
          <GlassCard variant="default" className="p-6 text-center">
            <div className="text-3xl mb-2">📘</div>
            <div className="text-lg font-bold text-violet-primary mb-1">TypeScript</div>
            <div className="text-sm text-foreground-muted">Type-Safe Development</div>
          </GlassCard>
          
          <GlassCard variant="default" className="p-6 text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-lg font-bold text-violet-primary mb-1">Performance</div>
            <div className="text-sm text-foreground-muted">Optimization Expert</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

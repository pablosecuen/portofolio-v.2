import React, { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { projects, projectsEs } from '@/data/portfolio';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useLanguage } from "@/contexts/useLanguage";

export function Projects() {
  const { t, language } = useLanguage();
  const ref = useStaggeredAnimation(150);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'web', 'mobile', 'fullstack', 'library'];

  // Selecciona el array correcto según el idioma
  const projectsData = language === 'es' ? projectsEs : projects;

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-violet-primary bg-clip-text text-transparent mb-4">
            {t.projects.title}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-primary rounded mx-auto mb-6 sm:mb-8" />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  ${activeCategory === category 
                    ? 'bg-gradient-primary border-violet-primary/30' 
                    : 'glass border-glass-border/30 hover:border-violet-primary/50'
                  }
                  transition-all duration-300
                `}
              >
                {t.projects.categories[category as keyof typeof t.projects.categories]}
              </Button>
            ))}
          </div>
        </div>

        <div 
          ref={ref}
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              data-animate
              variant="hover"
              className="group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 bg-gradient-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-primary/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-24 sm:h-32 object-contain opacity-80 drop-shadow-xl rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-violet-primary/80 text-white rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-violet-primary group-hover:text-violet-secondary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background-secondary/80 text-foreground text-xs rounded border border-glass-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-violet-primary mb-2">
                    {t.projects.features}
                  </h4>
                  <ul className="text-xs text-foreground-muted space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-violet-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        {t.projects.live}
                      </a>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 glass border-glass-border/30 hover:border-violet-primary/50"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {t.projects.code}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-12 lg:mt-16">
          <GlassCard variant="violet" className="p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-violet-primary mb-2">50+</div>
                <div className="text-sm text-foreground-muted">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-primary mb-2">25+</div>
                <div className="text-sm text-foreground-muted">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-primary mb-2">5+</div>
                <div className="text-sm text-foreground-muted">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-primary mb-2">99%</div>
                <div className="text-sm text-foreground-muted">Success Rate</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Linkedin, MessageCircle, Calendar, MapPin, Clock } from 'lucide-react';
import { useLanguage } from "@/contexts/useLanguage";

export function Contact() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'pablosecuen@gmail.com',
      href: 'mailto:pablosecuen@gmail.com',
      color: 'hover:bg-red-600/20 hover:border-red-600/50'
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: 'https://www.linkedin.com/in/pablo-j-amico/',
      href: 'https://www.linkedin.com/in/pablo-j-amico/',
      color: 'hover:bg-blue-600/20 hover:border-blue-600/50'
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: '+54 (9) 341 7 206026',
      href: 'https://wa.me/5493417206026',
      color: 'hover:bg-green-600/20 hover:border-green-600/50'
    }
  ];

  const availability = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide (Remote)'
    },
    {
      icon: Clock,
      label: 'Timezone',
      value: 'UTC-3 (EST)'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open for new projects'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-violet-primary bg-clip-text text-transparent mb-4">
            {t.contact.title}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-primary rounded mx-auto mb-6" />
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-4">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* Contact Methods */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-violet-primary mb-4 sm:mb-6">
              Get In Touch
            </h3>
            
            {contactMethods.map((method) => (
              <GlassCard
                key={method.label}
                variant="hover"
                className={`p-4 sm:p-6 group transition-all duration-300 ${method.color}`}
              >
                <a 
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-foreground text-sm sm:text-base">
                      {method.label}
                    </div>
                    <div className="text-foreground-muted text-xs sm:text-sm break-all">
                      {method.value}
                    </div>
                  </div>
                </a>
              </GlassCard>
            ))}
          </div>

          {/* Availability Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-violet-primary mb-4 sm:mb-6">
              Availability
            </h3>
            
            {availability.map((item) => (
              <GlassCard
                key={item.label}
                variant="default"
                className="p-4 sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-violet-primary/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-violet-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {item.label}
                    </div>
                    <div className="text-foreground-muted text-sm">
                      {item.value}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <GlassCard variant="violet" className="p-6 sm:p-8 text-center">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-violet-primary mb-4">
                {t.contact.ctaTitle}
              </h3>
              <p className="text-sm sm:text-base text-foreground-muted px-4">
                {t.contact.ctaDesc}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto"
                asChild
              >
                <a href="mailto:pablosecuen@gmail.com">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{t.contact.ctaEmail}</span>
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="glass border-glass-border/30 hover:border-violet-primary/50 w-full sm:w-auto"
                asChild
              >
               {/*  <a href="https://calendly.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Schedule a Call</span>
                </a> */}
              </Button>
            </div>
            
            <div className="pt-6 border-t border-glass-border/30">
              <p className="text-sm text-foreground-muted">
                {t.contact.ctaResponse}
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center">
          <GlassCard variant="default" className="p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-foreground-muted px-4">
              © 2024 Senior Frontend Developer Portfolio. Built with React, Next.js & TypeScript.
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-primary/20 flex items-center justify-center hover:bg-violet-primary/30 transition-colors"
                >
                  <method.icon className="h-3 w-3 sm:h-4 sm:w-4 text-violet-primary" />
                </a>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

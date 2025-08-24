import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Globe, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from "@/contexts/useLanguage";
import { text } from "stream/consumers";

const languages = [
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'es', flag: '🇪🇸', name: 'Español' }
];

export function FloatingMenu() {
  const { language, setLanguage } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pablo-j-amico/',
      color: 'hover:bg-blue-600/20',
      text: 'LinkedIn'
    },
    {
      icon: Mail,
      label: 'Gmail',
      href: 'mailto:pablosecuen@gmail.com',
      color: 'hover:bg-red-600/20',
      text: 'Email'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/5493417206026',
      color: 'hover:bg-green-600/20',
      text: 'WhatsApp'
    }
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
      {/* Social Links */}
      <div className={`flex flex-col gap-2 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {socialLinks.map((link) => (
          <div className="flex items-center justify-end space-x-2 " key={link.label}>
            <span className="text-sm opacity-75">{link?.text}</span>
          <Button
            key={link.label}
            size="icon"
            variant="outline"
            className={`glass border-glass-border/30 hover:border-violet-primary/50 ${link.color} transition-all duration-300`}
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <link.icon className="h-4 w-4" />
            </a>
          </Button></div>
        ))}
      </div>

      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="glass border-glass-border/30 hover:border-violet-primary/50 transition-all duration-300"
          >
            <span className="text-lg">{currentLanguage?.flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="glass border-glass-border/30 backdrop-blur-xl"
        >
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as 'en' | 'es')}
              className="cursor-pointer hover:bg-violet-primary/20 transition-colors"
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Main Menu Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="icon"
        className="glass-violet border-violet-primary/30 hover:border-violet-primary/70 animate-pulse-violet transition-all duration-300"
      >
        <Globe className="h-5 w-5" />
      </Button>
    </div>
  );
}

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'violet' | 'hover';
  animation?: 'float' | 'float-delayed' | 'scale' | 'none';
}

const baseClasses = 'rounded-lg transition duration-300';

const variants = {
  default: 'glass',
  violet: 'glass-violet',
  hover: 'glass hover:glass-violet cursor-pointer'
};

const animations = {
  float: 'animate-float',
  'float-delayed': 'animate-float-delayed',
  scale: 'hover:scale-105',
  none: ''
};

export function GlassCard({
  children,
  className,
  variant = 'default',
  animation = 'none'
}: GlassCardProps) {
  return (
    <div className={cn(
      baseClasses,
      variants[variant],
      animations[animation],
      className
    )}>
      {children}
    </div>
  );
}

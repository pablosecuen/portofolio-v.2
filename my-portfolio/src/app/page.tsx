'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { arrayTech, proyects } from './data';

// Importing project and technology data

const TechIcon = ({ tech }: any) => (
  <div className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg dark:bg-gray-800'>
    <Image
      src={tech.logo}
      alt={tech.title}
      width={32}
      height={32}
      className='mb-2'
    />
    <span className='text-sm font-medium'>{tech.title}</span>
  </div>
);

export default function PortfolioLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyesRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (eyesRef && (eyesRef.current as any)) {
      const rect = eyesRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
      const angle = Math.atan2(
        mousePosition.y - eyeCenterY,
        mousePosition.x - eyeCenterX
      );
      const x = Math.cos(angle) * 5;
      const y = Math.sin(angle) * 5;
      eyesRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [mousePosition]);

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center z-50 relative'>
        <Link className='flex items-center justify-center' href='#'>
          <span className='sr-only'>Tu Nombre</span>
          <span className='font-bold text-xl'>TN</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#projects'
          >
            Proyectos
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#skills'
          >
            Habilidades
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#technologies'
          >
            Tecnologías
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#contact'
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full h-screen relative overflow-hidden flex items-center justify-center'>
          <div className='text-center'>
            <div className='relative w-64 h-64 mx-auto mb-8'>
              <Image
                src='/placeholder.svg'
                alt='Tu Nombre'
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
              <div
                ref={eyesRef}
                className='absolute top-1/4 left-1/2 transform -translate-x-1/2 flex gap-8'
              >
                <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                  <div className='w-4 h-4 bg-black rounded-full' />
                </div>
                <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                  <div className='w-4 h-4 bg-black rounded-full' />
                </div>
              </div>
            </div>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
              Tu Nombre
            </h1>
            <p className='mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
              ¡Hola! Soy Pablo Amico, un profesional con más de 5 años en
              tecnología. Destaco en diseño gráfico, desarrollo web, gestión de
              proyectos y marketing digital. Al haber colaborado con diversas
              empresas, comprendo el impacto del software en las operaciones
              comerciales. Como desarrollador Fullstack, aprovecho mi habilidad
              en varios lenguajes y marcos de trabajo para crear soluciones
              escalables y eficientes. Con habilidades de liderazgo y
              comunicación hábil, he dirigido equipos exitosos. ¡Contáctame si
              buscas un líder tecnológico para tus proyectos!
            </p>
            <div className='mt-8 flex justify-center space-x-4'>
              <Link href='#contact'>
                <Button>Contáctame</Button>
              </Link>
              <Link href='#projects'>
                <Button variant='outline'>Ver Proyectos</Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id='projects'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Proyectos Destacados
            </h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {proyects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription className='line-clamp-4 text-sm text-muted-foreground'>
                      {project.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={project.img}
                      alt={project.name}
                      width={400}
                      height={200}
                      className='rounded-lg object-cover w-full'
                    />
                    <div className='flex justify-end mt-4'>
                      <Link href={project.url}>
                        <Button variant='outline'>Ver más</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id='skills' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Habilidades
            </h2>
            <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
              {arrayTech.map((tech) => (
                <div
                  key={tech.name}
                  className='flex items-center justify-center p-4 bg-gray-100 rounded-lg dark:bg-gray-800'
                >
                  <span className='font-medium'>{tech.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id='technologies'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Tecnologías Manejadas
            </h2>
            <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
              {arrayTech.map((tech) => (
                <TechIcon key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </section>
        <section id='contact' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Contáctame
            </h2>
            <div className='max-w-2xl mx-auto'>
              <form className='space-y-4'>
                <Input placeholder='Nombre' />
                <Input type='email' placeholder='Email' />
                <Textarea placeholder='Mensaje' />
                <Button type='submit' className='w-full'>
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Tu Nombre. Todos los derechos reservados.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            <span className='sr-only'>GitHub</span>
            <Github className='h-6 w-6' />
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            <span className='sr-only'>Twitter</span>
            <Twitter className='h-6 w-6' />
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            <span className='sr-only'>LinkedIn</span>
            <Linkedin className='h-6 w-6' />
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            <span className='sr-only'>Email</span>
            <Mail className='h-6 w-6' />
          </Link>
        </nav>
      </footer>
    </div>
  );
}

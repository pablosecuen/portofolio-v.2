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
import { Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { arrayTech, proyects } from '@/app/data';
import Script from 'next/script';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function PortfolioLanding() {
  const t = useTranslations('common');

  const router = useRouter();
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyesRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameRegex = /^[a-zA-Z\s]*$/;
    let messageRegex = /^(?!.*(http|https)).*$/;
    if (!formData.name.match(nameRegex)) {
      setIsModalOpen1(true);
    } else if (!formData.email.match(emailRegex)) {
      setIsModalOpen1(true);
    } else if (!formData.message.match(messageRegex)) {
      setIsModalOpen1(true);
    } else {
      emailjs
        .send(
          'service_k1dn49a',
          'template_rjj68l7',
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          'v8HZ6Sk79OJKu27jg'
        )
        .then(
          (result: { text: any }) => {
            setIsModalOpen(true);
          },
          (error: { text: any }) => {
            setIsModalOpen1(true);
          }
        );
    }
  };

  const currentLanguage =
    languages.find((lang) => pathname.startsWith(`/${lang.code}`)) ||
    languages[0];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollTopVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (eyesRef.current) {
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

  const changeLanguage = (lang: 'es' | 'en' | 'fr') => {
    const newPathname = `/${lang}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    router.push(newPathname);
  };

  const footerElement = document.getElementById('copyright');

  const currentYear = new Date().getFullYear();

  if (footerElement) {
    footerElement.innerHTML = footerElement.innerHTML.replace(
      /\d{4}/,
      currentYear.toString()
    );
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center z-50 relative'>
        <Link className='flex items-center justify-center' href='#'>
          <span className='sr-only'>{t('name')}</span>
          <span className='font-bold text-xl'>TN</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6 items-center'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#projects'
          >
            {t('projects')}
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#skills'
          >
            {t('skills')}
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#technologies'
          >
            {t('technologies')}
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#contact'
          >
            {t('contact')}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='flex items-center gap-2'>
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.name}</span>
                <ChevronDown className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() =>
                    changeLanguage(lang.code as 'es' | 'en' | 'fr')
                  }
                >
                  <span className='mr-2'>{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full h-screen relative overflow-hidden flex items-center justify-center'>
          <div className='text-center'>
            {/*      <div className='relative w-64 h-64 mx-auto mb-8'>
              <Image
                src='/placeholder.svg'
                alt={t('name')}
                width={256}
                height={256}
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
            </div> */}
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
              {t('name')}
            </h1>
            <p className='mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
              {t('description')}
            </p>
            <div className='mt-8 flex justify-center space-x-4'>
              <Link href='#contact'>
                <Button>{t('contactMe')}</Button>
              </Link>
              <Link href='#projects'>
                <Button variant='outline'>{t('viewProjects')}</Button>
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
              {t('featuredProjects')}
            </h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {proyects.map((project, index) => {
                const [isExpanded, setIsExpanded] = useState(false);

                const toggleExpand = () => {
                  setIsExpanded((prev) => !prev);
                };

                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription
                        className={`text-sm text-muted-foreground ${
                          !isExpanded ? 'line-clamp-3' : ''
                        }`}
                      >
                        {project.descripcion}
                      </CardDescription>
                      {!isExpanded && (
                        <Button variant={'ghost'} onClick={toggleExpand}>
                          Leer más
                        </Button>
                      )}
                      {isExpanded && (
                        <Button onClick={toggleExpand}>Mostrar menos</Button>
                      )}
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={project.img}
                        alt={project.name}
                        width={400}
                        height={200}
                        className='rounded-lg object-cover w-full'
                      />
                      <Link
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Button variant={'outline'} className='mx-auto mt-4'>
                          Visitar Sitio
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <section id='skills' className='w-full  py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              {t('skills')}
            </h2>
            <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
              {arrayTech.map((tech) => (
                <div
                  key={tech.title}
                  className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg dark:bg-gray-800'
                >
                  <Image
                    src={tech.logo}
                    alt={tech.title}
                    width={48}
                    height={48}
                    className='mb-2'
                  />
                  <span className='text-sm font-medium'>{tech.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='w-full py-12 bg-gray-100 md:py-24 lg:py-32'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              {t('contact')}
            </h2>
            <div className='max-w-2xl mx-auto'>
              <form className='space-y-4' onSubmit={handleSubmit}>
                <Input
                  name='name'
                  placeholder={t('name')}
                  onChange={handleChange}
                />
                <Input
                  name='email'
                  type='email'
                  placeholder={t('email')}
                  onChange={handleChange}
                />
                <Textarea
                  placeholder={t('message')}
                  name='message'
                  onChange={handleChange}
                />
                <Button type='submit' className='w-full'>
                  {t('sendMessage')}
                </Button>
              </form>
            </div>
          </div>
        </section>

        <button
          onClick={scrollToTop}
          className='fixed bottom-20 right-6 bg-blue-600 text-white py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
        >
          ↑
        </button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '500px',
              width: '80%',
              height: 'auto',
              padding: '40px',
              borderRadius: '40px',
              backgroundColor: 'transparent',
              border: 'none',
            },
          }}
        >
          <iframe
            src='https://giphy.com/embed/NsPTjaNFdMx8ZPe9Qh'
            width='400'
            height='320'
            frameBorder='0'
            className='giphy-embed'
            allowFullScreen
          ></iframe>
          <p>
            <a href='https://giphy.com/gifs/playmobil-post-letter-mail-NsPTjaNFdMx8ZPe9Qh'>
              via GIPHY
            </a>
          </p>
        </Modal>
        <Modal
          isOpen={isModalOpen1}
          onRequestClose={() => setIsModalOpen1(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
            content: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '500px',
              width: '80%',
              height: 'auto',
              padding: '40px',
              borderRadius: '40px',
              backgroundColor: 'transparent',
              border: 'none',
            },
          }}
        >
          <iframe
            src='https://giphy.com/embed/ljtfkyTD3PIUZaKWRi'
            width='400'
            height='290'
            frameBorder='0'
            className='giphy-embed'
            allowFullScreen
          ></iframe>

          <p>
            <a href='https://giphy.com/gifs/theoffice-ljtfkyTD3PIUZaKWRi'>
              via GIPHY
            </a>
          </p>
          <p>
            <a href='https://giphy.com/gifs/playmobil-post-letter-mail-NsPTjaNFdMx8ZPe9Qh'>
              via GIPHY
            </a>
          </p>
        </Modal>
        <Script
          type='text/javascript'
          src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
        ></Script>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p id='copyright' className='text-xs text-gray-500 dark:text-gray-400'>
          {t('copyright')}
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='/https://github.com/pablosecuen'
          >
            <Github className='h-6 w-6' />
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='/https://github.com/pabloamicodev'
          >
            <Github className='h-6 w-6' />
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='https://www.linkedin.com/in/pablo-j-amico/'
          >
            <Twitter className='h-6 w-6' />
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='https://www.linkedin.com/in/pablo-j-amico/'
          >
            <Linkedin className='h-6 w-6' />
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='mailto:pablosecuen@gmail.com'
          >
            <Mail className='h-6 w-6' />
          </Link>
        </nav>
      </footer>
    </div>
  );
}

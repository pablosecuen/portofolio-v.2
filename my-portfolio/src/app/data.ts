import html from './../../public/assets/logoTecnologias/html.png';
import css from './../../public/assets/logoTecnologias/css.svg';
import javascript from './../../public/assets/logoTecnologias/js.svg';
import react from './../../public/assets/logoTecnologias/react.svg';
import redux from './../../public/assets/logoTecnologias/redux.svg';
import sass from './../../public/assets/logoTecnologias/sass.svg';
import boostrap from './../../public/assets/logoTecnologias/boostrap.svg';
import tailwind from './../../public/assets/logoTecnologias/tailwind.svg';
import node from './../../public/assets/logoTecnologias/node.svg';
import express from './../../public/assets/logoTecnologias/express.svg';
import insomnia from './../../public/assets/logoTecnologias/insomnia.svg';
import webpack from './../../public/assets/logoTecnologias/webpack.svg';
import illustrator from './../../public/assets/logoTecnologias/illustrator.png';
import photoshop from './../../public/assets/logoTecnologias/photoshop2.svg';
import git from './../../public/assets/logoTecnologias/git.svg';
import github from './../../public/assets/logoTecnologias/github.svg';
import vite from './../../public/assets/logoTecnologias/vite.svg';
import ts from './../../public/assets/logoTecnologias/ts-logo-128.png';
import next from './../../public/assets/logoTecnologias/next.svg';
import postgres from './../../public/assets/logoTecnologias/postgres.svg';
import mongo from './../../public/assets/logoTecnologias/mongo.svg';
import wordpress from './../../public/assets/logoTecnologias/wordpress.svg';
import movihome from './../../public/assets/img/movihome.png';
import pet from './../../public/assets/img/petfriendly.webp';
import aythenHome from './../../public/assets/img/aythenHome.png';
import wamhome from './../../public/assets/img/wamhome.png';
import meduxa from './../../public/assets/logoTecnologias/meduxa.png';
/* import anime from 'animejs/lib/anime.es.js'; */
import primhero from './../../public/assets/img/primhero.png';
import paranacomex from './../../public/assets/img/paranacomex.png';
import renthouse from './../../public/assets/img/renthouse.png';
import interchange from './../../public/assets/img/interchange.png';
import carbon from './../../public/assets/img/carbon.png';
import kaffeto from './../../public/assets/img/kaffeto.png';
import vichino from './../../public/assets/img/vichino.png';
import kamado from './../../public/assets/img/kamado.png';
import conference from './../../public/assets/img/conference.png';
import raffle from './../../public/assets/img/raffle.png';
import madewell from './../../public/assets/img/madewell.png';

// Types
import { StaticImageData } from 'next/image';

interface TechItem {
  name: string;
  logo: StaticImageData;
  title: string;
  shadowColor: string;
  url: string;
}

interface Project {
  name: string;
  img: StaticImageData;
  description: string;
  descripcion: string;
  url: string;
}

//a
export const arrayTech: TechItem[] = [
  {
    name: 'html',
    logo: html,
    title: 'Html',
    shadowColor: 'red',
    url: 'https://html.com/',
  },
  {
    name: 'css',
    logo: css,
    title: 'Css',
    shadowColor: 'blue',
    url: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },
  {
    name: 'typescript',
    logo: ts,
    title: 'TypeScript',
    shadowColor: 'blue',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'javascript',
    logo: javascript,
    title: 'Javascript',
    shadowColor: 'yellow',
    url: 'https://www.javascript.com/',
  },
  {
    name: 'react',
    logo: react,
    title: 'React',
    shadowColor: 'deepskyblue',
    url: 'https://es.reactjs.org/',
  },
  {
    name: 'next',
    logo: next,
    title: 'Next Js',
    shadowColor: 'white',
    url: 'https://nextjs.org/',
  },
  {
    name: 'redux',
    logo: redux,
    title: 'Redux',
    shadowColor: 'indigo',
    url: 'https://redux.js.org/',
  },

  {
    name: 'sass',
    logo: sass,
    title: 'Sass',
    shadowColor: 'hotpink',
    url: 'https://sass-lang.com/',
  },
  {
    name: 'boostrap',
    logo: boostrap,
    title: 'Boostrap',
    shadowColor: 'indigo',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'tailwind',
    logo: tailwind,
    title: 'Tailwind Css',
    shadowColor: 'white',
    url: 'https://tailwindcss.com//',
  },
  {
    name: 'vite',
    logo: vite,
    title: 'Vite',
    shadowColor: 'magenta',
    url: 'https://vitejs.dev/',
  },

  {
    name: 'node',
    logo: node,
    title: 'Node Js',
    shadowColor: 'limegreen',
    url: 'https://nodejs.org/en',
  },
  {
    name: 'express',
    logo: express,
    title: 'express',
    shadowColor: 'white',
    url: 'https://expressjs.com/',
  },
  {
    name: 'insomnia',
    logo: insomnia,
    title: 'Inomnia',
    shadowColor: 'indigo',
    url: 'https://insomnia.rest/',
  },
  {
    name: 'webpack',
    logo: webpack,
    title: 'Webpack',
    shadowColor: 'blue',
    url: 'https://webpack.js.org/',
  },
  {
    name: 'illustrator',
    logo: illustrator,
    title: 'Illustrator',
    shadowColor: 'orangered',
    url: 'https://www.adobe.com/products/illustrator.html',
  },
  {
    name: 'photoshop',
    logo: photoshop,
    title: 'Photoshop',
    shadowColor: 'blue',
    url: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    name: 'git',
    logo: git,
    title: 'Git',
    shadowColor: 'red',
    url: 'https://git-scm.com/',
  },
  {
    name: 'github',
    logo: github,
    title: 'Github',
    shadowColor: 'indigo',
    url: 'https://github.com/',
  },
  {
    name: 'postgresql',
    logo: postgres,
    title: 'PostgreSQL',
    shadowColor: 'indigo',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'mongodb',
    logo: mongo,
    title: 'MongoDb',
    shadowColor: 'limegreen',
    url: 'https://github.com/',
  },
  {
    name: 'wordpress',
    logo: wordpress,
    title: 'Wordpress',
    shadowColor: 'blue',
    url: 'https://wordpress.org/',
  },
];

export const proyects: Project[] = [
  {
    name: 'Madewell',
    img: madewell,
    description: `
      <h3>Madewell Web - Enterprise E-commerce Platform</h3>
      
      <p>I developed and maintained the next-generation e-commerce platform for Madewell (J.Crew Group), a high-traffic web application handling millions of transactions and users globally.</p>

      <h4>Project Description:</h4>
      <p>Madewell Web is a sophisticated e-commerce platform built with Next.js 14 and React 18, implementing enterprise-level microservices architecture. The application uses TypeScript to ensure type-safety and Redux Toolkit for predictable state management, while Sass with CSS modules provides a scalable and maintainable styling system.</p>

      <h4>Architecture and Technical Patterns:</h4>
      <p>I implemented a hexagonal architecture (Ports & Adapters) that allows dynamic switching between mock services and real APIs, facilitating development and testing. The project uses a custom abstraction layer pattern that separates business logic from specific external service implementations.</p>
      
      <p>State management follows an advanced Redux pattern with three distinct layers:</p>
      <ul>
        <li>storeOperators for business logic</li>
        <li>storeViews for optimized selectors</li>
        <li>storeReducersAndActions for state mutations</li>
      </ul>

      <h4>Complex Third-Party Integrations:</h4>
      <ul>
        <li><strong>Builder.io:</strong> Headless CMS for dynamic content management</li>
        <li><strong>Constructor.io:</strong> Intelligent search and personalized recommendations</li>
        <li><strong>Bazaarvoice:</strong> Complete reviews and ratings system</li>
        <li><strong>Stylitics:</strong> Outfit recommendations and "Shop the Look"</li>
        <li><strong>Monetate:</strong> Personalization and A/B testing</li>
        <li><strong>Payment services:</strong> Apple Pay and AfterPay integration</li>
      </ul>

      <h4>Infrastructure and DevOps:</h4>
      <p>I designed and implemented a fully automated CI/CD pipeline using Jenkins with deployment on Amazon EKS (Kubernetes). The application is containerized with Docker and uses Helm Charts for multi-environment deployment management. The system handles multi-region deployments with Akamai CDN for global performance optimization.</p>

      <h4>Performance and Scalability:</h4>
      <p>The application is optimized for high performance using Next.js SSR and SSG, automatic code splitting, and image optimization. I implemented lazy loading, intelligent prefetching, and multi-level caching strategies to ensure sub-second load times.</p>

      <h4>Key Technologies:</h4>
      <ul>
        <li><strong>Frontend:</strong> Next.js 14, React 18, TypeScript, Redux Toolkit, Sass</li>
        <li><strong>Infrastructure:</strong> AWS EKS, Docker, Kubernetes, Helm, Jenkins</li>
        <li><strong>Third-party:</strong> Builder.io, Constructor.io, Bazaarvoice, Stylitics, Monetate</li>
        <li><strong>Testing:</strong> Jest, React Testing Library, Cypress</li>
      </ul>

      <p><em>This project demonstrates my ability to develop enterprise-level e-commerce applications, handle complex microservices architectures, implement sophisticated third-party integrations, and deliver scalable solutions that directly impact business revenue.</em></p>
    `,
    descripcion: `
      <h3>Madewell Web - Plataforma E-commerce Enterprise</h3>
      
      <p>Desarrollé y mantuve la plataforma e-commerce de próxima generación para Madewell (J.Crew Group), una aplicación web de alto tráfico que maneja millones de transacciones y usuarios globalmente.</p>

      <h4>Descripción del Proyecto:</h4>
      <p>Madewell Web es una sofisticada plataforma de comercio electrónico construida con Next.js 14 y React 18, implementando una arquitectura de microservicios enterprise-level. La aplicación utiliza TypeScript para garantizar type-safety y Redux Toolkit para gestión de estado predictible, mientras que Sass con módulos CSS proporciona un sistema de estilos escalable y mantenible.</p>

      <h4>Arquitectura y Patrones Técnicos:</h4>
      <p>Implementé una arquitectura hexagonal (Ports & Adapters) que permite intercambio dinámico entre servicios mock y APIs reales, facilitando el desarrollo y testing. El proyecto utiliza un patrón de abstraction layer personalizado que separa la lógica de negocio de las implementaciones específicas de servicios externos.</p>
      
      <p>La gestión de estado sigue un patrón Redux avanzado con tres capas distintas:</p>
      <ul>
        <li>storeOperators para lógica de negocio</li>
        <li>storeViews para selectores optimizados</li>
        <li>storeReducersAndActions para mutaciones de estado</li>
      </ul>

      <h4>Integraciones Complejas de Terceros:</h4>
      <ul>
        <li><strong>Builder.io:</strong> CMS headless para gestión dinámica de contenido</li>
        <li><strong>Constructor.io:</strong> Búsqueda inteligente y recomendaciones personalizadas</li>
        <li><strong>Bazaarvoice:</strong> Sistema completo de reviews y ratings</li>
        <li><strong>Stylitics:</strong> Recomendaciones de outfits y "Shop the Look"</li>
        <li><strong>Monetate:</strong> Personalización y A/B testing</li>
        <li><strong>Servicios de pago:</strong> Apple Pay y AfterPay</li>
      </ul>

      <h4>Infraestructura y DevOps:</h4>
      <p>Diseñé e implementé un pipeline de CI/CD completamente automatizado usando Jenkins con deployment en Amazon EKS (Kubernetes). La aplicación se containeriza con Docker y utiliza Helm Charts para gestión de deployments multi-ambiente. El sistema maneja deployments multi-región con Akamai CDN para optimización de performance global.</p>

      <h4>Performance y Escalabilidad:</h4>
      <p>La aplicación está optimizada para alto rendimiento utilizando SSR y SSG de Next.js, code splitting automático, y optimización de imágenes. Implementé lazy loading, prefetching inteligente, y estrategias de caching multi-nivel para garantizar tiempos de carga sub-segundo.</p>

      <h4>Tecnologías Clave:</h4>
      <ul>
        <li><strong>Frontend:</strong> Next.js 14, React 18, TypeScript, Redux Toolkit, Sass</li>
        <li><strong>Infrastructure:</strong> AWS EKS, Docker, Kubernetes, Helm, Jenkins</li>
        <li><strong>Third-party:</strong> Builder.io, Constructor.io, Bazaarvoice, Salesforce, Loqate</li>
        <li><strong>Testing:</strong> Jest, React Testing Library, Cypress</li>
      </ul>

      <p><em>Este proyecto demuestra mi capacidad para desarrollar aplicaciones e-commerce de nivel enterprise, manejar arquitecturas complejas de microservicios, implementar integraciones sofisticadas de terceros, y entregar soluciones escalables que impactan directamente en el revenue del negocio.</em></p>
    `,
    url: 'https://madewell.com',
  },
  {
    name: 'Parana Comex',
    img: paranacomex,
    description: `
      <h3>Parana Comex - Foreign Trade Company</h3>
      
      <p>Parana Comex is a foreign trade company dedicated to the import and export of all kinds of products. We have developed a cutting-edge, responsive, modern, and attractive website using state-of-the-art technology.</p>
      
      <h4>Project Features:</h4>
      <ul>
        <li>Responsive and modern design</li>
        <li>Intuitive navigation interface</li>
        <li>Mobile device optimization</li>
        <li>State-of-the-art technology</li>
      </ul>
    `,
    descripcion: `
      <h3>Parana Comex - Comercio Exterior</h3>
      
      <p>Parana Comex es una empresa de comercio exterior dedicada a la importación y exportación de todo tipo de productos. Desarrollamos una web responsive, moderna y atractiva con tecnología de punta.</p>
      
      <h4>Características del Proyecto:</h4>
      <ul>
        <li>Diseño responsive y moderno</li>
        <li>Interfaz intuitiva para navegación</li>
        <li>Optimización para dispositivos móviles</li>
        <li>Tecnología de vanguardia</li>
      </ul>
    `,
    url: 'https://comex.vercel.app/',
  },
  {
    name: 'Prim Hero',
    img: primhero,
    description: `
      <h3>Prime Hero - Logistics Platform</h3>
      
      <p>I'm pleased to introduce you to Prime Hero, the logistics platform designed and developed at WAM! Creative Studio. For Prime Hero, we have created a nationwide shipment tracking system, aiming to provide you with a first-class experience where you'll always be informed and at ease about the status and location of your packages.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Real-time tracking system</li>
        <li>Nationwide shipment tracking</li>
        <li>First-class user experience</li>
        <li>Updated package status information</li>
      </ul>
      
      <h4>Technologies Used:</h4>
      <ul>
        <li>Frontend: TypeScript, React, Next.js 13, Tailwind</li>
        <li>Notifications: Sonner Toast</li>
        <li>Email: EmailJS</li>
        <li>Backend (Phase 2): Node.js, Express, Sequelize</li>
      </ul>
    `,
    descripcion: `
      <h3>Prime Hero - Plataforma de Logística</h3>
      
      <p>Me complace presentarles Prime Hero, la plataforma de logística diseñada y desarrollada en WAM! Estudio Creativo. Para Prime Hero, hemos creado un sistema de seguimiento y rastreo de envíos a nivel nacional, pensando en brindarte una experiencia de primera clase.</p>
      
      <h4>Características Principales:</h4>
      <ul>
        <li>Sistema de seguimiento en tiempo real</li>
        <li>Rastreo de envíos a nivel nacional</li>
        <li>Experiencia de usuario de primera clase</li>
        <li>Información actualizada del estado de paquetes</li>
      </ul>
      
      <h4>Tecnologías Utilizadas:</h4>
      <ul>
        <li>Frontend: TypeScript, React, Next.js 13, Tailwind</li>
        <li>Notificaciones: Sonner Toast</li>
        <li>Email: EmailJS</li>
        <li>Backend (Fase 2): Node.js, Express, Sequelize</li>
      </ul>
    `,
    url: 'https://primhero-pablosecuen.vercel.app/',
  },
  {
    name: 'Pet Friendly',
    img: pet,
    description: `
      <h3>Pet Friendly Universe - Multi-Platform Site</h3>
      
      <p>Pet Friendly Universe is a multi-platform site with a fully functional e-commerce system. Any user with previous administrator authorization can create a store and upload their product catalogs.</p>

      <h4>Main Services:</h4>
      <ul>
        <li>Complete e-commerce for pet products</li>
        <li>Pet daycare services</li>
        <li>Dog walking services</li>
        <li>Pet adoption platform</li>
      </ul>

      <h4>Social Impact:</h4>
      <p>Every sale made on the site donates 3% of its profits to non-governmental organizations for pet protection. These organizations have their own administrator dashboards to post pets for adoption.</p>

      <h4>Administration Panel:</h4>
      <ul>
        <li>Complete user control</li>
        <li>Post management</li>
        <li>Store creation authorization</li>
        <li>Content moderation</li>
      </ul>

      <h4>Technologies Used:</h4>
      <ul>
        <li><strong>Frontend:</strong> JavaScript, React, Redux</li>
        <li><strong>Backend:</strong> Express, PostgreSQL</li>
        <li><strong>Services:</strong> Cloudinary, JSON Web Token</li>
        <li><strong>Authentication:</strong> Third-party authorization</li>
      </ul>
    `,
    descripcion: `
      <h3>Pet Friendly Universe - Plataforma Multiplataforma</h3>
      
      <p>Pet Friendly Universe es un sitio multiplataforma con un sistema de comercio electrónico completamente funcional. Cualquier usuario con autorización de administrador previa puede crear una tienda y cargar su catálogo de productos.</p>

      <h4>Servicios Principales:</h4>
      <ul>
        <li>E-commerce completo para productos de mascotas</li>
        <li>Servicios de guardería de mascotas</li>
        <li>Servicios de paseo de perros</li>
        <li>Plataforma de adopción de mascotas</li>
      </ul>

      <h4>Impacto Social:</h4>
      <p>Cada venta realizada en el sitio dona el 3% de sus ganancias a organizaciones no gubernamentales para la protección de mascotas. Estas organizaciones tienen sus propios paneles de administración para publicar mascotas en adopción.</p>

      <h4>Panel de Administración:</h4>
      <ul>
        <li>Control completo de usuarios</li>
        <li>Gestión de publicaciones</li>
        <li>Autorización de creación de tiendas</li>
        <li>Moderación de contenido</li>
      </ul>

      <h4>Tecnologías Utilizadas:</h4>
      <ul>
        <li><strong>Frontend:</strong> JavaScript, React, Redux</li>
        <li><strong>Backend:</strong> Express, PostgreSQL</li>
        <li><strong>Servicios:</strong> Cloudinary, JSON Web Token</li>
        <li><strong>Autenticación:</strong> Autorización de terceros</li>
      </ul>
    `,
    url: 'https://petfriendlyuniverse.vercel.app/',
  },

  {
    name: 'Movi',
    img: movihome,
    description: `
      <h3>Movi - Transportation Solutions Hub</h3>
      
      <p>Movi is the central hub for all your transportation solutions. You can order food delivery, ride-hailing, taxis, intercity buses, and even carpooling. We provide comprehensive solutions with reliable security systems, a robust backend, and an intuitive and fresh urban design.</p>

      <h4>Services Available:</h4>
      <ul>
        <li>Food delivery service</li>
        <li>Ride-hailing and taxi booking</li>
        <li>Intercity bus transportation</li>
        <li>Carpooling platform</li>
      </ul>

      <h4>Admin Dashboard:</h4>
      <p>In the /admin/dashboard section, you will find a complete and thoughtfully designed admin panel down to the last detail. It is intuitive and efficient for managing all transportation services.</p>

      <h4>Technical Implementation:</h4>
      <ul>
        <li><strong>Database:</strong> Firebase with geolocation integration</li>
        <li><strong>Deployment:</strong> Free hosting tools (may have slower response times)</li>
        <li><strong>Location Services:</strong> Real-time geolocation tracking</li>
      </ul>

      <h4>Technology Stack:</h4>
      <ul>
        <li><strong>Frontend:</strong> React, Next.js, TypeScript</li>
        <li><strong>Styling:</strong> Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Build Tools:</strong> Babel</li>
      </ul>
    `,
    descripcion: `
      <h3>Movi - Hub de Soluciones de Transporte</h3>
      
      <p>Movi es la sede central para todas tus soluciones de transporte. Puedes pedir comida a domicilio, remises, taxis, buses intermunicipales e incluso hacer carpooling. Ofrecemos soluciones integrales con sistemas de seguridad confiables, un backend robusto y un diseño urbano intuitivo y fresco.</p>

      <h4>Servicios Disponibles:</h4>
      <ul>
        <li>Servicio de comida a domicilio</li>
        <li>Reserva de remises y taxis</li>
        <li>Transporte de buses intermunicipales</li>
        <li>Plataforma de carpooling</li>
      </ul>

      <h4>Panel de Administración:</h4>
      <p>En la sección /admin/dashboard, encontrarás un panel de administración completo y cuidadosamente diseñado hasta el último detalle. Es intuitivo y eficiente para gestionar todos los servicios de transporte.</p>

      <h4>Implementación Técnica:</h4>
      <ul>
        <li><strong>Base de datos:</strong> Firebase con integración de geolocalización</li>
        <li><strong>Despliegue:</strong> Herramientas de hosting gratuitas (tiempos de respuesta más lentos)</li>
        <li><strong>Servicios de ubicación:</strong> Seguimiento de geolocalización en tiempo real</li>
      </ul>

      <h4>Stack Tecnológico:</h4>
      <ul>
        <li><strong>Frontend:</strong> React, Next.js, TypeScript</li>
        <li><strong>Estilos:</strong> Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Herramientas de build:</strong> Babel</li>
      </ul>
    `,
    url: 'https://urban-movi.vercel.app/',
  },

  {
    name: 'Aythen',
    img: aythenHome,
    description: `
      <h3>Aythen - Multi-Service Development Platform</h3>
      
      <p>Aythen is a multi-service platform where you can assemble your own development team by adjusting the needs of your business to achieve a custom-developed proposal for the user.</p>

      <h4>Platform Capabilities:</h4>
      <ul>
        <li>Custom development team assembly</li>
        <li>Business needs assessment and adjustment</li>
        <li>Tailored development proposals</li>
        <li>Technical concept abstraction</li>
      </ul>

      <h4>Integration Features:</h4>
      <ul>
        <li><strong>API Integration:</strong> Over 50 integrable APIs</li>
        <li><strong>Flexibility:</strong> Infinite customization possibilities</li>
        <li><strong>Business Logic:</strong> Technical concepts applied to business needs</li>
        <li><strong>Scalability:</strong> Adaptable to growing business requirements</li>
      </ul>

      <h4>Value Proposition:</h4>
      <p>Aythen allows you to abstract the most technical concepts and apply them to your business logic, making complex development accessible and manageable for any business size.</p>
    `,
    descripcion: `
      <h3>Aythen - Plataforma Multi-Servicio de Desarrollo</h3>
      
      <p>Aythen es una plataforma multi-servicio donde puedes armar tu propio equipo de desarrollo ajustando las necesidades de tu negocio para lograr una propuesta especialmente desarrollada a medida del usuario.</p>

      <h4>Capacidades de la Plataforma:</h4>
      <ul>
        <li>Armado de equipos de desarrollo personalizados</li>
        <li>Evaluación y ajuste de necesidades empresariales</li>
        <li>Propuestas de desarrollo a medida</li>
        <li>Abstracción de conceptos técnicos</li>
      </ul>

      <h4>Características de Integración:</h4>
      <ul>
        <li><strong>Integración de APIs:</strong> Más de 50 APIs integrables</li>
        <li><strong>Flexibilidad:</strong> Posibilidades infinitas de personalización</li>
        <li><strong>Lógica de Negocio:</strong> Conceptos técnicos aplicados a necesidades empresariales</li>
        <li><strong>Escalabilidad:</strong> Adaptable a requerimientos empresariales en crecimiento</li>
      </ul>

      <h4>Propuesta de Valor:</h4>
      <p>Aythen permite abstraer los conceptos más técnicos y aplicarlos a tu lógica de negocios, haciendo el desarrollo complejo accesible y manejable para cualquier tamaño de empresa.</p>
    `,
    url: 'https://web2.aythen.com/',
  },
  {
    name: 'Wam',
    img: wamhome,
    description: `
      <h3>WAM - Creative Marketing Agency</h3>
      
      <p>WAM is a comprehensive marketing services agency specializing in corporate identity development, graphic design, and web development. Among its clients are well-known companies from the city of Rosario and the province of Santa Fe.</p>

      <h4>Services Offered:</h4>
      <ul>
        <li>Corporate identity development</li>
        <li>Professional graphic design</li>
        <li>Custom web development</li>
        <li>Comprehensive marketing solutions</li>
      </ul>

      <h4>Client Base:</h4>
      <ul>
        <li>Well-known companies from Rosario</li>
        <li>Businesses throughout Santa Fe province</li>
        <li>Regional corporate clients</li>
        <li>Growing brand portfolio</li>
      </ul>

      <h4>Agency Expertise:</h4>
      <p>WAM combines creative design with technical development to deliver comprehensive marketing solutions that help businesses establish strong brand identities and digital presence.</p>
    `,
    descripcion: `
      <h3>WAM - Agencia Creativa de Marketing</h3>
      
      <p>WAM es una agencia de servicios de marketing integral, especializada en desarrollo de identidades corporativas, diseño gráfico y desarrollo web. Entre sus clientes se encuentran conocidas empresas de la ciudad de Rosario y provincia de Santa Fe.</p>

      <h4>Servicios Ofrecidos:</h4>
      <ul>
        <li>Desarrollo de identidades corporativas</li>
        <li>Diseño gráfico profesional</li>
        <li>Desarrollo web personalizado</li>
        <li>Soluciones integrales de marketing</li>
      </ul>

      <h4>Base de Clientes:</h4>
      <ul>
        <li>Empresas reconocidas de Rosario</li>
        <li>Negocios de toda la provincia de Santa Fe</li>
        <li>Clientes corporativos regionales</li>
        <li>Portfolio de marcas en crecimiento</li>
      </ul>

      <h4>Experiencia de la Agencia:</h4>
      <p>WAM combina diseño creativo con desarrollo técnico para entregar soluciones integrales de marketing que ayudan a las empresas a establecer identidades de marca sólidas y presencia digital.</p>
    `,
    url: 'https://wamcreativo.com/',
  },
  {
    name: 'Meduxa Fest',
    img: meduxa,
    description: `
      <h3>MEDUXA FEST - Costume-Themed Birthday Invitations</h3>
      
      <p>MEDUXA FEST is a delightful website that I have created with love and dedication to invite loved ones to costume-themed birthdays. It proposes a somewhat defined identity, offers costume ideas, and provides event information.</p>

      <h4>Key Features:</h4>
      <ul>
        <li>Costume-themed birthday invitations</li>
        <li>Creative costume ideas and suggestions</li>
        <li>Comprehensive event information</li>
        <li>Fully validated attendance confirmation form</li>
      </ul>

      <h4>User Experience:</h4>
      <ul>
        <li>Delightful and engaging design</li>
        <li>Intuitive navigation</li>
        <li>Mobile-responsive interface</li>
        <li>Smooth user interactions</li>
      </ul>

      <h4>Technologies Used:</h4>
      <ul>
        <li><strong>Frontend:</strong> TypeScript, React, Next.js</li>
        <li><strong>Form Validation:</strong> Complete form validation system</li>
        <li><strong>Design:</strong> Custom themed styling</li>
      </ul>

      <p><em>This project showcases my ability to create engaging, themed web experiences with attention to detail and user experience.</em></p>
    `,
    descripcion: `
      <h3>MEDUXA FEST - Invitaciones de Cumpleaños Temáticos</h3>
      
      <p>MEDUXA FEST es una encantadora página web que he creado con amor y dedicación para invitar seres queridos a cumpleaños con temática de disfraces. Propone una identidad definida, brinda ideas para disfraces y proporciona información del evento.</p>

      <h4>Características Principales:</h4>
      <ul>
        <li>Invitaciones de cumpleaños con temática de disfraces</li>
        <li>Ideas creativas y sugerencias de disfraces</li>
        <li>Información completa del evento</li>
        <li>Formulario totalmente validado para confirmar asistencia</li>
      </ul>

      <h4>Experiencia de Usuario:</h4>
      <ul>
        <li>Diseño encantador y atractivo</li>
        <li>Navegación intuitiva</li>
        <li>Interfaz responsive para móviles</li>
        <li>Interacciones fluidas</li>
      </ul>

      <h4>Tecnologías Utilizadas:</h4>
      <ul>
        <li><strong>Frontend:</strong> TypeScript, React, Next.js</li>
        <li><strong>Validación de formularios:</strong> Sistema completo de validación</li>
        <li><strong>Diseño:</strong> Estilos temáticos personalizados</li>
      </ul>

      <p><em>Este proyecto demuestra mi capacidad para crear experiencias web temáticas y atractivas con atención al detalle y experiencia de usuario.</em></p>
    `,
    url: 'https://birthday-ruddy.vercel.app/',
  },
  {
    name: 'Rent House',
    img: renthouse,
    description: `
      <h3>Rent House - Temporary Property Rentals</h3>
      
      <p>Rent House is a temporary rental site for properties focused on events and farewells, featuring comprehensive web functionality with contact forms, property location services, and a fast-booking system.</p>

      <h4>Services Offered:</h4>
      <ul>
        <li>Temporary property rentals</li>
        <li>Event venue bookings</li>
        <li>Farewell party locations</li>
        <li>Special occasion venues</li>
      </ul>

      <h4>Platform Features:</h4>
      <ul>
        <li>Interactive contact forms</li>
        <li>Property location mapping</li>
        <li>Fast-booking system</li>
        <li>Property gallery and details</li>
      </ul>

      <h4>User Experience:</h4>
      <ul>
        <li>Streamlined booking process</li>
        <li>Easy property browsing</li>
        <li>Quick contact and inquiry system</li>
        <li>Mobile-friendly interface</li>
      </ul>
    `,
    descripcion: `
      <h3>Rent House - Alquiler Temporal de Propiedades</h3>
      
      <p>Rent House es un sitio de alquiler temporal para propiedades enfocado en eventos y despedidas, con funcionalidad web completa que incluye formularios de contacto, servicios de ubicación de propiedades y sistema de reserva rápida.</p>

      <h4>Servicios Ofrecidos:</h4>
      <ul>
        <li>Alquiler temporal de propiedades</li>
        <li>Reserva de venues para eventos</li>
        <li>Locaciones para fiestas de despedida</li>
        <li>Venues para ocasiones especiales</li>
      </ul>

      <h4>Características de la Plataforma:</h4>
      <ul>
        <li>Formularios de contacto interactivos</li>
        <li>Mapeo de ubicación de propiedades</li>
        <li>Sistema de reserva rápida</li>
        <li>Galería y detalles de propiedades</li>
      </ul>

      <h4>Experiencia de Usuario:</h4>
      <ul>
        <li>Proceso de reserva simplificado</li>
        <li>Navegación fácil de propiedades</li>
        <li>Sistema rápido de contacto y consultas</li>
        <li>Interfaz amigable para móviles</li>
      </ul>
    `,
    url: 'https://www.renthouse.com.ar/',
  },
  {
    name: 'Interchange institute',
    img: interchange,
    description: `
      <h3>Interchange Institute - Virtual Campus Platform</h3>
      
      <p>The project consists of developing an institutional website with a virtual campus specifically designed for students, allowing them to perform various educational and administrative activities online.</p>

      <h4>Student Features:</h4>
      <ul>
        <li>Online exams and assessments</li>
        <li>Assignment submission and tracking</li>
        <li>Real-time grade checking</li>
        <li>Educational content access (videos, articles, study materials)</li>
        <li>Course-organized pedagogical resources</li>
      </ul>

      <h4>Administrative Platform:</h4>
      <ul>
        <li>Centralized management dashboard</li>
        <li>Financial administration and fee control</li>
        <li>Automatic payment notifications</li>
        <li>Course assignment management</li>
        <li>Teacher role management</li>
        <li>Academic documentation generation</li>
      </ul>

      <h4>Communication Features:</h4>
      <ul>
        <li>Internal and external communication optimization</li>
        <li>Personalized notifications</li>
        <li>Automated reminders</li>
        <li>Student-teacher interaction tools</li>
      </ul>

      <h4>Platform Benefits:</h4>
      <p>This project combines educational and administrative management in an integrated digital environment, offering modern solutions for both students and the institute's management team. Its intuitive design and advanced functionality make it a key tool for improving operational efficiency and learning quality.</p>
    `,
    descripcion: `
      <h3>Interchange Institute - Plataforma de Campus Virtual</h3>
      
      <p>El proyecto consiste en el desarrollo de un sitio web institucional con un campus virtual diseñado específicamente para estudiantes, que les permite realizar diversas actividades educativas y administrativas de manera online.</p>

      <h4>Características para Estudiantes:</h4>
      <ul>
        <li>Exámenes y evaluaciones en línea</li>
        <li>Entrega y seguimiento de tareas</li>
        <li>Consulta de notas en tiempo real</li>
        <li>Acceso a contenido educativo (videos, artículos, materiales de estudio)</li>
        <li>Recursos pedagógicos organizados por curso</li>
      </ul>

      <h4>Plataforma Administrativa:</h4>
      <ul>
        <li>Dashboard centralizado de gestión</li>
        <li>Administración financiera y control de cuotas</li>
        <li>Notificaciones automáticas de pagos</li>
        <li>Gestión de asignación de cursos</li>
        <li>Gestión de roles de profesores</li>
        <li>Generación de documentación académica</li>
      </ul>

      <h4>Características de Comunicación:</h4>
      <ul>
        <li>Optimización de comunicación interna y externa</li>
        <li>Notificaciones personalizadas</li>
        <li>Recordatorios automatizados</li>
        <li>Herramientas de interacción estudiante-profesor</li>
      </ul>

      <h4>Beneficios de la Plataforma:</h4>
      <p>Este proyecto combina la gestión educativa y administrativa en un entorno digital integrado, ofreciendo soluciones modernas tanto para estudiantes como para el equipo de gestión del instituto. Su diseño intuitivo y funcionalidad avanzada lo convierten en una herramienta clave para mejorar la eficiencia operativa y la calidad del aprendizaje.</p>
    `,
    url: 'https://www.interchange.com.ar/',
  },
  {
    name: 'Carbon Los leños',
    img: carbon,
    description: `
      The "Carbón Los Leños" website is the official platform of an Argentine company dedicated to the production and distribution of high-quality charcoal. The page offers detailed information about their products, including charcoal, firewood, accessories, starters, briquettes, and salts, all designed to meet the needs of grill enthusiasts.
      
      Additionally, the site highlights the company's commitment to excellence, emphasizing the careful selection of premium woods that provide a unique flavor to food. Information about the company's history, its national distribution network, and contact options for customers and resellers interested in their products is also provided.
    `,
    descripcion: `
      <h3>Carbón Los Leños - Producción de Carbón Vegetal</h3>
      
      <p>El sitio web de "Carbón Los Leños" es la plataforma oficial de una empresa argentina dedicada a la producción y distribución de carbón vegetal de alta calidad.</p>

      <h4>Productos Ofrecidos:</h4>
      <ul>
        <li>Carbón vegetal de alta calidad</li>
        <li>Leña seleccionada</li>
        <li>Accesorios para parrilla</li>
        <li>Iniciadores de fuego</li>
        <li>Briquetas especializadas</li>
        <li>Sales y condimentos</li>
      </ul>

      <h4>Compromiso con la Calidad:</h4>
      <ul>
        <li>Cuidadosa selección de maderas de primera calidad</li>
        <li>Sabor único aportado a los alimentos</li>
        <li>Procesos de producción especializados</li>
        <li>Control de calidad riguroso</li>
      </ul>

      <h4>Información Corporativa:</h4>
      <ul>
        <li>Historia y trayectoria de la empresa</li>
        <li>Red de distribución a nivel nacional</li>
        <li>Opciones de contacto para clientes</li>
        <li>Información para revendedores</li>
      </ul>

      <p><em>Diseñado especialmente para satisfacer las necesidades de los amantes de la parrilla argentina.</em></p>
    `,
    url: 'https://www.carbonloslenos.com/',
  },
  {
    name: 'Kaffeto',
    img: kaffeto,
    description: `
      Kaffetto is an innovative web project focused on providing an interactive experience for coffee lovers. Ensuring optimal performance and smooth navigation. The site includes a carefully crafted responsive design, optimized for mobile and desktop devices.
      
      I implemented advanced features such as a dynamic filtering system to explore different types of coffee, payment gateway integration for secure purchases, and an informative blog about the coffee world. Additionally, Kaffetto uses advanced SEO techniques to maximize its search engine visibility and is prepared for scalability, making it ideal to grow alongside the brand.
      
      This project reflects my ability to combine intuitive design, technical functionality, and modern web development best practices.
    `,
    descripcion: `
      <h3>Kaffetto - Experiencia Interactiva del Café</h3>
      
      <p>Kaffetto es un proyecto web innovador enfocado en proporcionar una experiencia interactiva para los amantes del café, garantizando un rendimiento óptimo y una navegación fluida.</p>

      <h4>Características Avanzadas:</h4>
      <ul>
        <li>Sistema de filtrado dinámico para explorar tipos de café</li>
        <li>Integración de pasarelas de pago seguras</li>
        <li>Blog informativo sobre el mundo del café</li>
        <li>Experiencia de compra personalizada</li>
      </ul>

      <h4>Diseño y Experiencia:</h4>
      <ul>
        <li>Diseño responsivo cuidadosamente elaborado</li>
        <li>Optimización para dispositivos móviles y de escritorio</li>
        <li>Interfaz intuitiva y atractiva</li>
        <li>Navegación fluida y eficiente</li>
      </ul>

      <h4>Optimización Técnica:</h4>
      <ul>
        <li>Técnicas de SEO avanzadas</li>
        <li>Máxima visibilidad en buscadores</li>
        <li>Preparado para escalabilidad</li>
        <li>Rendimiento óptimo</li>
      </ul>

      <p><em>Este proyecto refleja mi capacidad para combinar diseño intuitivo, funcionalidad técnica y las mejores prácticas de desarrollo web moderno, ideal para crecer junto con la marca.</em></p>
    `,
    url: 'https://www.carbonloslenos.com/',
  },
  {
    name: 'Vichino Shoes',
    img: vichino,
    description: `
      Vichino is an online store specialized in footwear for men and women, offering a variety of products such as sneakers and leather shoes. The website presents a clear and functional structure, with sections dedicated to specific product categories, such as "Men" and "Women", facilitating navigation for users.
      
      Additionally, it features a highlighted offers section, providing information about current discounts and promotions. The store also offers interest-free installment payment options and free shipping for purchases exceeding a specific amount, improving the online shopping experience for its customers.
    `,
    descripcion: `
      <h3>Vichino Shoes - Tienda de Calzado Online</h3>
      
      <p>Vichino es una tienda en línea especializada en calzado para hombres y mujeres, ofreciendo una variedad de productos como zapatillas y zapatos de cuero.</p>

      <h4>Productos Disponibles:</h4>
      <ul>
        <li>Zapatillas para hombres y mujeres</li>
        <li>Zapatos de cuero de alta calidad</li>
        <li>Calzado casual y formal</li>
        <li>Variedad de estilos y tallas</li>
      </ul>

      <h4>Estructura del Sitio:</h4>
      <ul>
        <li>Categorías específicas: "Hombre" y "Mujer"</li>
        <li>Navegación clara y funcional</li>
        <li>Sección de ofertas destacadas</li>
        <li>Información de descuentos y promociones</li>
      </ul>

      <h4>Beneficios para el Cliente:</h4>
      <ul>
        <li>Opciones de pago en cuotas sin interés</li>
        <li>Envíos gratuitos para compras superiores a monto específico</li>
        <li>Experiencia de compra en línea optimizada</li>
        <li>Interfaz amigable y fácil de usar</li>
      </ul>
    `,
    url: 'https://vichino.com.ar/',
  },
  {
    name: 'Kamado Argentino',
    img: kamado,
    description: `
      Kamado Argentino is an Argentine company specialized in the manufacturing and distribution of kamados, Japanese-origin cooking devices that allow roasting, smoking, baking, and grilling food. They offer a wide range of models adapted to different needs, from the Kamado Asador Criollo, ideal for family gatherings of up to 15 people, to the Kamado Gran Asador Patagónico, designed for larger events.
      
      Additionally, they provide accessories and consumables to complement the culinary experience. The company stands out for its commitment to quality, offering warranties of up to 10 years on their products. They also promote an active community, providing recipes, tips, and classes to maximize the use of their kamados.
    `,
    descripcion: `
      <h3>Kamado Argentino - Dispositivos de Cocción Japoneses</h3>
      
      <p>Kamado Argentino es una empresa argentina especializada en la fabricación y distribución de kamados, dispositivos de cocción de origen japonés que permiten asar, ahumar, hornear y grillar alimentos.</p>

      <h4>Gama de Productos:</h4>
      <ul>
        <li><strong>Kamado Asador Criollo:</strong> Ideal para reuniones familiares de hasta 15 personas</li>
        <li><strong>Kamado Gran Asador Patagónico:</strong> Diseñado para eventos de mayor envergadura</li>
        <li>Accesorios especializados</li>
        <li>Consumibles para complementar la experiencia culinaria</li>
      </ul>

      <h4>Métodos de Cocción:</h4>
      <ul>
        <li>Asado tradicional</li>
        <li>Ahumado de carnes</li>
        <li>Horneado</li>
        <li>Grillado especializado</li>
      </ul>

      <h4>Compromiso con la Calidad:</h4>
      <ul>
        <li>Garantías de hasta 10 años en productos</li>
        <li>Fabricación argentina de alta calidad</li>
        <li>Comunidad activa de usuarios</li>
        <li>Recetas, consejos y clases especializadas</li>
      </ul>

      <p><em>Adaptados a diferentes necesidades para maximizar la experiencia culinaria argentina.</em></p>
    `,
    url: 'https://kamadoargentino.com.ar/',
  },
  {
    name: 'Conference App',
    img: conference,
    description: `
      Conference App is a video conferencing platform that allows users to create and join online meetings. It offers functionalities such as video calls, audio calls, screen sharing, and instant messaging, facilitating real-time collaboration.
      
      Additionally, the application is installable as a progressive web app (PWA), allowing users to add it to their devices for faster access and a native app-like experience. This feature improves accessibility and convenience for those seeking an efficient and easy-to-use video conferencing solution.
    `,
    descripcion: `
      <h3>Conference App - Plataforma de Videoconferencias</h3>
      
      <p>Conference App es una plataforma de videoconferencias que permite a los usuarios crear y unirse a reuniones en línea, facilitando la colaboración en tiempo real.</p>

      <h4>Funcionalidades Principales:</h4>
      <ul>
        <li>Videollamadas de alta calidad</li>
        <li>Audiollamadas cristalinas</li>
        <li>Uso compartido de pantalla</li>
        <li>Mensajería instantánea integrada</li>
      </ul>

      <h4>Características Técnicas:</h4>
      <ul>
        <li>Aplicación Web Progresiva (PWA)</li>
        <li>Instalable en dispositivos</li>
        <li>Acceso rápido y directo</li>
        <li>Experiencia similar a aplicación nativa</li>
      </ul>

      <h4>Beneficios para el Usuario:</h4>
      <ul>
        <li>Colaboración en tiempo real</li>
        <li>Accesibilidad mejorada</li>
        <li>Solución eficiente y fácil de usar</li>
        <li>Conveniencia para reuniones virtuales</li>
      </ul>

      <p><em>Diseñada para quienes buscan una solución de videoconferencia moderna y accesible.</em></p>
    `,
    url: 'https://conference-app-meet.vercel.app/',
  },
  {
    name: 'Raffle App',
    img: raffle,
    description: `
      The Raffle application is a tool designed to facilitate conducting raffles in a simple and efficient manner. It allows users to load participant lists from text files, select random winners, and maintain a record of previous winners.
      
      The interface is intuitive, offering a user-friendly experience for managing raffles in various contexts, such as events, promotions, or recreational activities. Additionally, the application is built with modern technologies, ensuring optimal performance and easy accessibility from different devices.
    `,
    descripcion: `
      <h3>Raffle App - Herramienta de Sorteos</h3>
      
      <p>La aplicación Raffle es una herramienta diseñada para facilitar la realización de sorteos de manera sencilla y eficiente.</p>

      <h4>Funcionalidades Principales:</h4>
      <ul>
        <li>Carga de listas de participantes desde archivos de texto</li>
        <li>Selección aleatoria de ganadores</li>
        <li>Registro histórico de ganadores anteriores</li>
        <li>Gestión completa de sorteos</li>
      </ul>

      <h4>Contextos de Uso:</h4>
      <ul>
        <li>Eventos corporativos</li>
        <li>Promociones comerciales</li>
        <li>Actividades recreativas</li>
        <li>Sorteos educativos</li>
      </ul>

      <h4>Experiencia de Usuario:</h4>
      <ul>
        <li>Interfaz intuitiva y amigable</li>
        <li>Proceso simplificado de sorteo</li>
        <li>Accesibilidad desde diferentes dispositivos</li>
        <li>Rendimiento óptimo</li>
      </ul>

      <h4>Tecnología:</h4>
      <p>Construida con tecnologías modernas para asegurar un rendimiento óptimo y fácil accesibilidad desde cualquier dispositivo.</p>
    `,
    url: 'https://raffle-app-public.vercel.app/',
  },
];

/* export function animateCSS(name: any, filterValues: any, options: any) {
  const target = '.' + name.toLowerCase(); // creamos un selector para targetear basado en el nombre
  const shadowColor = filterValues[0].shadowColor || 'blue'; // absorbemos el color de la propiedad shadowColor y si no tiene uzamos la azul por defecto
  const filter = filterValues.map((value: any) => {
    return {
      value: value.value.replace('blue', shadowColor),
      duration: value.duration,
    };
  }); // remplazamos el filtro base color "blue" en el filter value
  anime({
    targets: target,
    filter: filter,
    easing: options.easing || 'linear',
    direction: options.direction || 'alternate',
    loop: options.loop || true,
  });
} */

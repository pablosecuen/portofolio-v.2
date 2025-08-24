export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'library';
}

export interface TechStack {
  category: string;
  technologies: {
    name: string;
    level: number; // 1-5
    icon: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Minutentag',
    position: 'Senior Frontend Developer',
    startDate: '2024-01',
    endDate: 'Present',
    description: 'Main frontend development for enterprise-level React and Next applications, mentoring junior developers, and implementing modern development practices.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Akamai',
      'Jenkins',
      'Jest',
      'Builder.io',
      'Constructor.io',
      'Loqate',
      'Monetate',
      'Salesforce',
      'Merkle'
    ],
    achievements: [
      'Reduced page load time by 40% through code splitting and optimization',
      'Reduced image load time by 50% with srcset and webp implementation',
      'Improved SEO resulting in a 30% increase in organic traffic',
      'Implemented GM tracking across multiple SPAs',
      'Led migration from React 16 to React 18 with concurrent features',
      'Mentored a team of 5 junior developers',
      'Implemented micro-frontend architecture',
      'Integrated 3rd party vendors and CMSs: Builder.io, Constructor.io, Loqate, Monetate, Salesforce, Merkle',
      'Implemented Akamai CDN for enhanced performance and security',
      'Set up CI/CD pipelines using Jenkins',
      'Established automated testing with Jest'
    ]
  },
  {
    id: '2',
    company: 'WAM! Creative Studio',
    position: 'Web Master',
    startDate: '2023-01',
    endDate: '2024-01',
    description: 'Led fullstack development and maintenance for client web projects, including server setup, database management, WordPress development, and deployment. Responsible for mobile app development, plugin updates, and performance optimization.',
    technologies: [
      'WordPress',
      'React',
      'Next.js',
      'PHP',
      'JavaScript',
      'PostgreSQL',
      'Firebase',
      'WooCommerce',
      'Elementor',
      'Builder',
      'Divi',
      'Custom Plugins',
      'Google Analytics',
      'Google Search Console',
      'Lighthouse',
      'npm',
      'Jest'
    ],
    achievements: [
      'Developed and deployed fullstack web and mobile applications for new clients',
      'Set up and maintained Linux servers and cloud hosting environments',
      'Performed regular WordPress site disinfection and security hardening',
      'Implemented automated plugin and npm package updates across multiple sites',
      'Built custom plugins and integrations for WooCommerce, Elementor, and Divi',
      'Developed stock management systems using WooCommerce and custom solutions',
      'Optimized SEO and site performance using Google Analytics, Search Console, and Lighthouse',
      'Implemented advanced tracking and analytics for client sites',
      'Improved site reliability and uptime through proactive monitoring and maintenance',
      'Collaborated with design and marketing teams to deliver pixel-perfect UIs',
      'Developed reusable mobile apps (event raffles, predictions, QR scanners, etc.) as Android and PWA',
      'Managed database migrations and backups for PostgreSQL and Firebase',
      'Provided technical support and training for client teams'
    ]
  },
  {
    id: '3',
    company: 'Aythen',
    position: 'Full Stack Developer / Team Leader',
    startDate: '2022-01',
    endDate: '2023-01',
    description: 'Led full-stack development of RPA applications, no-code editors, and code translators. Managed a team of 20, coordinated sprints, and drove the migration to Next.js 13.5 with the new app router. Developed advanced tools for code automation, Figma-to-code plugins, and real-time video call solutions.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Socket.io',
      'WebRTC',
      'Figma API',
      'Express',
      'MongoDB',
      'Jest',
      'Docker',
      'Redux',
      'Tailwind CSS',
      'Vercel',
      'Git'
    ],
    achievements: [
      'Led migration of the front-end system to Next.js 13.5 with app router',
      'Organized and distributed sprints and roles for a team of 20 developers',
      'Developed RPA (Robotic Process Automation) applications for business process automation',
      'Built online no-code editors and automated code language translators',
      'Created Figma-to-code processor plugins for rapid UI development',
      'Developed real-time video call applications using WebRTC and Socket.io',
      'Coordinated project strategies and reporting with management',
      'Implemented CI/CD pipelines and Dockerized deployments',
      'Improved code quality and test coverage with Jest',
      'Integrated Figma project importers and advanced design-to-code workflows'
    ]
  },
  {
    id: '4',
    company: 'Atomico Marketing',
    position: 'Business Owner',
    startDate: '2017-01',
    endDate: '2021-01',
    description: 'Owner & CEO of a digital advertising agency operating under an outsourced model. Led integrated marketing campaigns, managed multidisciplinary teams, and oversaw all aspects of business operations for a diverse client portfolio in Rosario, Santa Fe, Argentina.',
    technologies: [
      'WordPress',
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'Google Analytics',
      'Facebook Ads',
      'Instagram',
      'Mailchimp',
      'Microsoft Office',
      'Adobe Photoshop',
      'Corporate Email',
      'Server Provisioning'
    ],
    achievements: [
      'Founded and grew a digital agency serving 15+ local businesses',
      'Developed and managed integrated marketing campaigns (digital, social, field)',
      'Provisioned and maintained web servers, websites, and corporate email accounts',
      'Created and managed social media platforms and newsletters for clients',
      'Led a team of promoters for field marketing campaigns',
      'Oversaw budgeting, procurement, and payment handling for all projects',
      'Managed multidisciplinary teams across marketing, design, and operations',
      'Built long-term client relationships with companies such as La Gallega, Berkley Seguros, Petit Fours, Deubel, Vichino Shoes, Óptica Schellhais, Back Up Jeans, Benevento Pastas, Vento Fit, Mayra Muga Dance School, Ivan Fernandez Coaching, Dismet LED SA, Bodegón El Oso, Sala la Sopa, Magnus Trade Logistics, Plus Cargo, Rosario Cargo SA, Buenos Aires Victoria Bar & Baristas',
      'Implemented campaign performance tracking and reporting',
      'Handled business administration, finance, and procurement processes',
      'Delivered end-to-end solutions from web development to campaign execution'
    ]
  }
];

export const experiencesEs: Experience[] = [
  {
    id: '1',
    company: 'Minutentag',
    position: 'Desarrollador Frontend Senior',
    startDate: '2024-01',
    endDate: 'Actualidad',
    description: 'Desarrollo principal de frontend para aplicaciones empresariales en React y Next, mentoría a desarrolladores junior e implementación de prácticas modernas.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Akamai',
      'Jenkins',
      'Jest',
      'Builder.io',
      'Constructor.io',
      'Loqate',
      'Monetate',
      'Salesforce',
      'Merkle'
    ],
    achievements: [
      'Reducción del tiempo de carga en un 40% mediante code splitting y optimización',
      'Reducción del tiempo de carga de imágenes en un 50% con srcset y webp',
      'Mejora del SEO con un aumento del 30% en tráfico orgánico',
      'Implementación de tracking GM en múltiples SPAs',
      'Lideré la migración de React 16 a React 18 con features concurrentes',
      'Mentoría a un equipo de 5 desarrolladores junior',
      'Implementación de arquitectura micro-frontend',
      'Integración de proveedores y CMSs: Builder.io, Constructor.io, Loqate, Monetate, Salesforce, Merkle',
      'Implementación de Akamai CDN para mejor rendimiento y seguridad',
      'Configuración de pipelines CI/CD con Jenkins',
      'Establecimiento de testing automatizado con Jest'
    ]
  },
  {
    id: '2',
    company: 'WAM! Creative Studio',
    position: 'Web Master',
    startDate: '2023-01',
    endDate: '2024-01',
    description: 'Lideré el desarrollo fullstack y mantenimiento de proyectos web para clientes, incluyendo servidores, bases de datos, desarrollo WordPress y despliegue. Responsable de apps móviles, actualizaciones de plugins y optimización de rendimiento.',
    technologies: [
      'WordPress',
      'React',
      'Next.js',
      'PHP',
      'JavaScript',
      'PostgreSQL',
      'Firebase',
      'WooCommerce',
      'Elementor',
      'Builder',
      'Divi',
      'Custom Plugins',
      'Google Analytics',
      'Google Search Console',
      'Lighthouse',
      'npm',
      'Jest'
    ],
    achievements: [
      'Desarrollé y desplegué aplicaciones web y móviles fullstack para nuevos clientes',
      'Configuré y mantuve servidores Linux y entornos cloud',
      'Realicé desinfección y endurecimiento de seguridad en sitios WordPress',
      'Implementé actualizaciones automáticas de plugins y npm en múltiples sitios',
      'Desarrollé plugins e integraciones personalizadas para WooCommerce, Elementor y Divi',
      'Desarrollé sistemas de stock usando WooCommerce y soluciones a medida',
      'Optimizé SEO y rendimiento usando Google Analytics, Search Console y Lighthouse',
      'Implementé tracking y analítica avanzada para sitios de clientes',
      'Mejoré la fiabilidad y uptime mediante monitoreo proactivo',
      'Colaboré con diseño y marketing para entregar UIs pixel-perfect',
      'Desarrollé apps móviles reutilizables (sorteos, predicciones, QR, etc.) como Android y PWA',
      'Gestioné migraciones y backups de bases de datos PostgreSQL y Firebase',
      'Brindé soporte técnico y capacitación a equipos de clientes'
    ]
  },
  {
    id: '3',
    company: 'Aythen',
    position: 'Desarrollador Full Stack / Líder de Equipo',
    startDate: '2022-01',
    endDate: '2023-01',
    description: 'Lideré el desarrollo fullstack de aplicaciones RPA, editores no-code y traductores de código. Gestioné un equipo de 20, coordiné sprints y migré a Next.js 13.5. Desarrollé herramientas avanzadas de automatización, plugins Figma-to-code y soluciones de videollamadas en tiempo real.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Socket.io',
      'WebRTC',
      'Figma API',
      'Express',
      'MongoDB',
      'Jest',
      'Docker',
      'Redux',
      'Tailwind CSS',
      'Vercel',
      'Git'
    ],
    achievements: [
      'Lideré la migración del frontend a Next.js 13.5 con app router',
      'Organicé y distribuí sprints y roles para un equipo de 20 desarrolladores',
      'Desarrollé aplicaciones RPA para automatización de procesos de negocio',
      'Construí editores no-code online y traductores automáticos de código',
      'Creé plugins Figma-to-code para desarrollo rápido de UI',
      'Desarrollé apps de videollamadas en tiempo real con WebRTC y Socket.io',
      'Coordiné estrategias y reportes de proyecto con management',
      'Implementé pipelines CI/CD y despliegues Dockerizados',
      'Mejoré calidad de código y cobertura de tests con Jest',
      'Integré importadores de proyectos Figma y flujos avanzados de diseño a código'
    ]
  },
  {
    id: '4',
    company: 'Atomico Marketing',
    position: 'Dueño de Negocio',
    startDate: '2017-01',
    endDate: '2021-01',
    description: 'Propietario y CEO de agencia de publicidad digital bajo modelo outsourcing. Lideré campañas integradas, gestioné equipos multidisciplinarios y supervisé todas las operaciones para una cartera diversa de clientes en Rosario, Santa Fe, Argentina.',
    technologies: [
      'WordPress',
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'Google Analytics',
      'Facebook Ads',
      'Instagram',
      'Mailchimp',
      'Microsoft Office',
      'Adobe Photoshop',
      'Corporate Email',
      'Server Provisioning'
    ],
    achievements: [
      'Fundé y expandí una agencia digital atendiendo a más de 15 negocios locales',
      'Desarrollé y gestioné campañas integradas (digital, social, campo)',
      'Provisioné y mantuve servidores web, sitios y correos corporativos',
      'Creé y gestioné redes sociales y newsletters para clientes',
      'Lideré equipos de promotores para campañas de campo',
      'Supervisé presupuestos, compras y pagos de todos los proyectos',
      'Gestioné equipos multidisciplinarios en marketing, diseño y operaciones',
      'Construí relaciones de largo plazo con empresas como La Gallega, Berkley Seguros, Petit Fours, Deubel, Vichino Shoes, Óptica Schellhais, Back Up Jeans, Benevento Pastas, Vento Fit, Mayra Muga Dance School, Ivan Fernandez Coaching, Dismet LED SA, Bodegón El Oso, Sala la Sopa, Magnus Trade Logistics, Plus Cargo, Rosario Cargo SA, Buenos Aires Victoria Bar & Baristas',
      'Implementé seguimiento y reportes de campañas',
      'Manejé administración, finanzas y compras',
      'Entregué soluciones end-to-end desde desarrollo web hasta ejecución de campañas'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Madewell',
    description: 'Enterprise-level e-commerce platform for Madewell, developed as part of the Minutentag team. Features advanced filtering, real-time inventory, seamless checkout, and integrations with multiple 3rd party vendors and CMSs.',
    image: '/proyects/madewell.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Akamai',
      'Jenkins',
      'Jest',
      'Builder.io',
      'Constructor.io',
      'Loqate',
      'Monetate',
      'Salesforce',
      'Merkle'
    ],
    features: [
      'Real-time inventory management',
      'Advanced product filtering',
      'Secure and seamless checkout',
      'Integration with Builder.io, Constructor.io, Loqate, Monetate, Salesforce, Merkle',
      'Admin dashboard',
      'Mobile-responsive design',
      'Performance optimization with Akamai',
      'Automated testing with Jest',
      'CI/CD pipelines with Jenkins'
    ],
    liveUrl: 'https://www.madewell.com',
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Interchange Institute - Virtual Campus Platform',
    description: 'Development of an institutional website and virtual campus for Interchange Institute, allowing students to perform educational and administrative activities online. Includes exams, assignment submissions, grade consultation, access to materials, financial management, automatic notifications, and optimized communication between students and teachers.',
    image: '/proyects/interchange.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'NextUI'
    ],
    features: [
      'Online exams and assessments',
      'Assignment submission and tracking',
      'Real-time grade consultation',
      'Access to multimedia educational content',
      'Pedagogical resources organized by course',
      'Centralized admin dashboard',
      'Financial management and fee control',
      'Automatic payment notifications',
      'Course assignment management and teacher roles',
      'Academic documentation generation',
      'Optimized internal and external communication',
      'Personalized notifications and reminders',
      'Student-teacher interaction tools',
      'Intuitive design and advanced functionality'
    ],
    liveUrl: 'https://www.interchange.com.ar',
    category: 'fullstack'
  },
  {
    id: '3',
    title: 'Kaffetto - Interactive Coffee Experience',
    description: 'Kaffetto is an innovative web project focused on providing an interactive experience for coffee lovers, ensuring optimal performance and smooth navigation. Includes dynamic filtering system, Mercado Pago payment integration with webhook listeners, informative blog, personalized shopping experience, and responsive design optimized for all devices.',
    image: '/proyects/kaffeto.png',
    technologies: [
      'WordPress',
      'PHP',
      'JavaScript',
      'CSS',
      'FTP',
      'Custom Plugins',
      'Elementor',
      'Mercado Pago',
      'Webhook Listeners'
    ],
    features: [
      'Dynamic filtering system to explore coffee types',
      'Secure payment gateway integration (Mercado Pago with webhook listeners)',
      'Informative blog about the world of coffee',
      'Personalized shopping experience',
      'Carefully crafted responsive design',
      'Optimized for mobile and desktop devices',
      'Intuitive and attractive interface',
      'Smooth and efficient navigation',
      'Advanced SEO techniques',
      'Maximum search engine visibility',
      'Scalability ready',
      'Optimal performance'
    ],
     liveUrl: 'https://kaffetto.com/', 
    category: 'web'
  },
  {
    id: '4',
    title: 'Carbón Los Leños - Charcoal Production',
    description: 'The "Carbón Los Leños" website is the official platform of an Argentine company dedicated to the production and distribution of high-quality charcoal. Includes product catalog, corporate information, contact options, and resources for resellers, all designed for barbecue enthusiasts.',
    image: '/proyects/carbonloslenos.png',
    technologies: [
      'Next.js',
      'CSS',
      'PostgreSQL',
      'Mercado Pago',
      'Webhook Listeners',
      'Google GM Tracking',
      'Lighthouse'
    ],
    features: [
      'Product catalog: charcoal, firewood, accessories, starters, briquettes, salts, and seasonings',
      'Mercado Pago payment gateway integration with webhooks',
      'Corporate information and company history',
      'National distribution network',
      'Contact options and resources for resellers',
      'Commitment to quality: wood selection, specialized processes, strict control',
      'Performance and SEO optimization with Lighthouse',
      'Google GM Tracking implementation',
      'Responsive design and intuitive user experience'
    ],
    liveUrl: 'https://carbonloslenos.com.ar/',
    category: 'fullstack'
  },
  {
    id: '5',
    title: 'Conference App - Videoconferencing Platform',
    description: 'Conference App is a videoconferencing platform developed for internal corporate use, allowing users to create and join online meetings with real-time collaboration. Includes high-quality video calls, crystal-clear audio calls, screen sharing, and integrated instant messaging. The app is an installable PWA, providing quick access and a native app-like experience.',
    image: '/proyects/conferenceapp.png',
    technologies: [
      'JavaScript',
      'React',
      'CSS'
    ],
    features: [
      'High-quality video calls',
      'Crystal-clear audio calls',
      'Screen sharing',
      'Integrated instant messaging',
      'Progressive Web App (PWA)',
      'Installable on devices',
      'Quick and direct access',
      'Native app-like experience',
      'Real-time collaboration',
      'Enhanced accessibility',
      'Efficient and easy-to-use solution',
      'Convenient for virtual meetings'
    ],
    category: 'web'
  },
  {
    id: '6',
    title: 'Vichino Shoes - Online Shoe Store',
    description: 'Vichino is an online store specializing in footwear for men and women, offering a variety of products such as sneakers and leather shoes. Includes corporate newsletter system, email management, user tracking for marketing strategies, and an optimized shopping experience.',
    image: '/proyects/vichino.png',
    technologies: [
      'WordPress',
      'PHP',
      'JavaScript',
      'CSS',
      'Custom Plugins'
    ],
    features: [
      'Sneakers for men and women',
      'High-quality leather shoes',
      'Casual and formal footwear',
      'Variety of styles and sizes',
      'Specific categories: "Men" and "Women"',
      'Clear and functional navigation',
      'Featured offers section',
      'Discount and promotion information',
      'Installment payment options with no interest',
      'Free shipping for purchases over a specific amount',
      'Optimized online shopping experience',
      'User-friendly and easy-to-use interface',
      'Corporate newsletter system',
      'Email and communication management',
      'User flow tracking for marketing',
      'Custom plugin integration'
    ],
     liveUrl: 'https://conference-app-meet.vercel.app/',
    category: 'web'
  },
  {
    id: '7',
    title: 'Kamado Argentino - Japanese Cooking Devices',
    description: 'Kamado Argentino is an Argentine company specializing in the manufacture and distribution of kamados, Japanese-origin cooking devices that allow grilling, smoking, baking, and roasting food. The site includes product catalog, cooking methods, accessories, recipes, and an active community, all optimized for the Argentine culinary experience.',
    image: '/proyects/kamado.png',
    technologies: [
      'WordPress',
      'PHP',
      'JavaScript',
      'CSS',
      'Custom Plugins'
    ],
    features: [
      'Product catalog: Kamado Asador Criollo, Kamado Gran Asador Patagónico, accessories and consumables',
      'Cooking methods: traditional grilling, smoking, baking, roasting',
      'Up to 10-year product warranties',
      'High-quality Argentine manufacturing',
      'Active user community',
      'Recipes, tips, and specialized classes',
      'Accessories and consumables section',
      'Responsive design and intuitive user experience',
      'SEO and performance optimization',
      'User-friendly interface',
      'Adapted to different culinary needs'
    ],
    liveUrl: 'https://kamadoargentino.com.ar/',
    category: 'web'
  },
  {
    id: '8',
    title: 'Raffle App - Raffle Tool',
    description: 'Raffle App is a tool developed for WAM! Creative Studio that facilitates the easy and efficient execution of internal raffles. Allows loading participant lists from text files, randomly selecting winners, keeping a historical record of raffles, and managing multiple events. Ideal for corporate events, promotions, recreational activities, and educational raffles.',
    image: '/proyects/raffle.png',
    technologies: [
      'React',
      'JavaScript',
      'CSS'
    ],
    features: [
      'Load participant lists from text files',
      'Random winner selection',
      'Historical record of previous winners',
      'Complete raffle management',
      'Intuitive and user-friendly interface',
      'Simplified raffle process',
      'Accessible from different devices',
      'Optimal performance'
    ],
    liveUrl: 'https://raffle-app-public.vercel.app/',
    category: 'web'
  },
  {
    id: '9',
    title: 'MEDUXA FEST - Themed Birthday Invitations',
    description: 'MEDUXA FEST is a charming personal website created to invite loved ones to costume-themed birthday parties. Offers personalized invitations, creative costume ideas, complete event information, and a validated form to confirm attendance. The design is attractive, navigation is intuitive, and the user experience is carefully crafted.',
    image: '/proyects/aythenHome.png',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'CSS'
    ],
    features: [
      'Costume-themed birthday invitations',
      'Creative ideas and costume suggestions',
      'Complete event information',
      'Fully validated attendance confirmation form',
      'Charming and attractive design',
      'Intuitive navigation',
      'Responsive mobile interface',
      'Smooth interactions',
      'Custom themed styles'
    ],
    liveUrl: 'https://birthday-ruddy.vercel.app/',
    category: 'web'
  }
];

export const projectsEs: Project[] = [
  {
    id: '1',
    title: 'Madewell',
    description: 'Plataforma e-commerce empresarial para Madewell, desarrollada como parte del equipo de Minutentag. Incluye filtrado avanzado, inventario en tiempo real, checkout fluido e integraciones con múltiples proveedores y CMSs.',
    image: '/proyects/madewell.png',
    technologies: [
      'Next.js', 'React', 'TypeScript', 'Akamai', 'Jenkins', 'Jest', 'Builder.io', 'Constructor.io', 'Loqate', 'Monetate', 'Salesforce', 'Merkle'
    ],
    features: [
      'Gestión de inventario en tiempo real',
      'Filtrado avanzado de productos',
      'Checkout seguro y fluido',
      'Integración con Builder.io, Constructor.io, Loqate, Monetate, Salesforce, Merkle',
      'Panel de administración',
      'Diseño responsive',
      'Optimización de rendimiento con Akamai',
      'Testing automatizado con Jest',
      'Pipelines CI/CD con Jenkins'
    ],
    liveUrl: 'https://www.madewell.com',
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Interchange Institute - Plataforma de Campus Virtual',
    description: 'Desarrollo de un sitio institucional y campus virtual para Interchange Institute, permitiendo a estudiantes realizar actividades educativas y administrativas online. Incluye exámenes, entrega de tareas, consulta de notas, acceso a materiales, gestión financiera, notificaciones automáticas y comunicación optimizada entre estudiantes y profesores.',
    image: '/proyects/interchange.png',
    technologies: [
      'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'NextUI'
    ],
    features: [
      'Exámenes y evaluaciones en línea',
      'Entrega y seguimiento de tareas',
      'Consulta de notas en tiempo real',
      'Acceso a contenido educativo multimedia',
      'Recursos pedagógicos organizados por curso',
      'Dashboard administrativo centralizado',
      'Gestión financiera y control de cuotas',
      'Notificaciones automáticas de pagos',
      'Gestión de asignación de cursos y roles de profesores',
      'Generación de documentación académica',
      'Comunicación interna y externa optimizada',
      'Notificaciones y recordatorios personalizados',
      'Herramientas de interacción estudiante-profesor',
      'Diseño intuitivo y funcionalidad avanzada'
    ],
     liveUrl: 'https://www.interchange.com.ar',
    category: 'fullstack'
  },
  {
    id: '3',
    title: 'Kaffetto - Experiencia Interactiva del Café',
    description: 'Kaffetto es un proyecto web innovador enfocado en proporcionar una experiencia interactiva para los amantes del café, garantizando un rendimiento óptimo y una navegación fluida. Incluye sistema de filtrado dinámico, integración de pagos con Mercado Pago y webhook listeners, blog informativo, experiencia de compra personalizada y diseño responsivo optimizado para todos los dispositivos.',
    image: '/proyects/kaffeto.png',
    technologies: [
      'WordPress', 'PHP', 'JavaScript', 'CSS', 'FTP', 'Custom Plugins', 'Elementor', 'Mercado Pago', 'Webhook Listeners'
    ],
    features: [
      'Sistema de filtrado dinámico para explorar tipos de café',
      'Integración de pasarelas de pago seguras (Mercado Pago con webhook listeners)',
      'Blog informativo sobre el mundo del café',
      'Experiencia de compra personalizada',
      'Diseño responsivo cuidadosamente elaborado',
      'Optimización para dispositivos móviles y de escritorio',
      'Interfaz intuitiva y atractiva',
      'Navegación fluida y eficiente',
      'Técnicas de SEO avanzadas',
      'Máxima visibilidad en buscadores',
      'Preparado para escalabilidad',
      'Rendimiento óptimo'
    ],
    liveUrl: 'https://kaffetto.com/', 
    category: 'web'
  },
  {
    id: '4',
    title: 'Carbón Los Leños - Producción de Carbón Vegetal',
    description: 'El sitio web de "Carbón Los Leños" es la plataforma oficial de una empresa argentina dedicada a la producción y distribución de carbón vegetal de alta calidad. Incluye catálogo de productos, información corporativa, opciones de contacto y recursos para revendedores, todo diseñado para los amantes de la parrilla.',
    image: '/proyects/carbonloslenos.png',
    technologies: [
      'Next.js', 'CSS', 'PostgreSQL', 'Mercado Pago', 'Webhook Listeners', 'Google GM Tracking', 'Lighthouse'
    ],
    features: [
      'Catálogo de productos: carbón vegetal, leña, accesorios, iniciadores, briquetas, sales y condimentos',
      'Integración de pasarela de pago Mercado Pago con webhooks',
      'Información corporativa y trayectoria de la empresa',
      'Red de distribución nacional',
      'Opciones de contacto y recursos para revendedores',
      'Compromiso con la calidad: selección de maderas, procesos especializados, control riguroso',
      'Optimización de rendimiento y SEO con Lighthouse',
      'Implementación de Google GM Tracking',
      'Diseño responsivo y experiencia de usuario intuitiva'
    ],
      liveUrl: 'https://carbonloslenos.com.ar/',
    category: 'fullstack'
  },
  {
    id: '5',
    title: 'Conference App - Plataforma de Videoconferencias',
    description: 'Conference App es una plataforma de videoconferencias desarrollada para uso corporativo interno, permitiendo a los usuarios crear y unirse a reuniones en línea con colaboración en tiempo real. Incluye videollamadas de alta calidad, audiollamadas cristalinas, uso compartido de pantalla y mensajería instantánea integrada. La aplicación es una PWA instalable, brindando acceso rápido y una experiencia similar a una app nativa.',
    image: '/proyects/conferenceapp.png',
    technologies: [
      'JavaScript', 'React', 'CSS'
    ],
    features: [
      'Videollamadas de alta calidad',
      'Audiollamadas cristalinas',
      'Uso compartido de pantalla',
      'Mensajería instantánea integrada',
      'Aplicación Web Progresiva (PWA)',
      'Instalable en dispositivos',
      'Acceso rápido y directo',
      'Experiencia similar a aplicación nativa',
      'Colaboración en tiempo real',
      'Accesibilidad mejorada',
      'Solución eficiente y fácil de usar',
      'Conveniencia para reuniones virtuales'
    ],
    liveUrl: 'https://conference-app-meet.vercel.app/',
    category: 'web'
  },
  {
    id: '6',
    title: 'Vichino Shoes - Tienda de Calzado Online',
    description: 'Vichino es una tienda en línea especializada en calzado para hombres y mujeres, ofreciendo una variedad de productos como zapatillas y zapatos de cuero. Incluye sistema de newsletters corporativos, gestión de correos, tracking de usuarios para estrategias de marketing, y una experiencia de compra optimizada.',
    image: '/proyects/vichino.png',
    technologies: [
      'WordPress', 'PHP', 'JavaScript', 'CSS', 'Custom Plugins'
    ],
    features: [
      'Zapatillas para hombres y mujeres',
      'Zapatos de cuero de alta calidad',
      'Calzado casual y formal',
      'Variedad de estilos y tallas',
      'Categorías específicas: "Hombre" y "Mujer"',
      'Navegación clara y funcional',
      'Sección de ofertas destacadas',
      'Información de descuentos y promociones',
      'Opciones de pago en cuotas sin interés',
      'Envíos gratuitos para compras superiores a monto específico',
      'Experiencia de compra en línea optimizada',
      'Interfaz amigable y fácil de usar',
      'Sistema de newsletters corporativos',
      'Gestión de correos y comunicaciones',
      'Tracking de flujo de usuarios para marketing',
      'Integración de plugins personalizados'
    ],
      liveUrl: 'https://conference-app-meet.vercel.app/',
    category: 'web'
  },
  {
    id: '7',
    title: 'Kamado Argentino - Dispositivos de Cocción Japoneses',
    description: 'Kamado Argentino es una empresa argentina especializada en la fabricación y distribución de kamados, dispositivos de cocción de origen japonés que permiten asar, ahumar, hornear y grillar alimentos. El sitio incluye catálogo de productos, métodos de cocción, accesorios, recetas y comunidad activa, todo optimizado para la experiencia culinaria argentina.',
    image: '/proyects/kamado.png',
    technologies: [
      'WordPress', 'PHP', 'JavaScript', 'CSS', 'Custom Plugins'
    ],
    features: [
      'Catálogo de productos: Kamado Asador Criollo, Kamado Gran Asador Patagónico, accesorios y consumibles',
      'Métodos de cocción: asado tradicional, ahumado, horneado, grillado',
      'Garantías de hasta 10 años en productos',
      'Fabricación argentina de alta calidad',
      'Comunidad activa de usuarios',
      'Recetas, consejos y clases especializadas',
      'Sección de accesorios y consumibles',
      'Diseño responsivo y experiencia de usuario intuitiva',
      'Optimización SEO y rendimiento',
      'Interfaz amigable y fácil de usar',
      'Adaptado a diferentes necesidades culinarias'
    ],
    liveUrl: 'https://kamadoargentino.com.ar/',
    category: 'web'
  },
  {
    id: '8',
    title: 'Raffle App - Herramienta de Sorteos',
    description: 'Raffle App es una herramienta desarrollada para WAM! Creative Studio que facilita la realización de sorteos internos de manera sencilla y eficiente. Permite cargar listas de participantes desde archivos de texto, seleccionar ganadores de forma aleatoria, mantener un registro histórico de sorteos y gestionar múltiples eventos. Ideal para eventos corporativos, promociones, actividades recreativas y sorteos educativos.',
    image: '/proyects/raffle.png',
    technologies: [
      'React', 'JavaScript', 'CSS'
    ],
    features: [
      'Carga de listas de participantes desde archivos de texto',
      'Selección aleatoria de ganadores',
      'Registro histórico de ganadores anteriores',
      'Gestión completa de sorteos',
      'Interfaz intuitiva y amigable',
      'Proceso simplificado de sorteo',
      'Accesibilidad desde diferentes dispositivos',
      'Rendimiento óptimo'
    ],
    liveUrl: 'https://raffle-app-public.vercel.app/',
    category: 'web'
  },
  {
    id: '9',
    title: 'MEDUXA FEST - Invitaciones de Cumpleaños Temáticos',
    description: 'MEDUXA FEST es una encantadora página web personal creada para invitar a seres queridos a cumpleaños con temática de disfraces. Ofrece invitaciones personalizadas, ideas creativas para disfraces, información completa del evento y un formulario validado para confirmar asistencia. El diseño es atractivo, la navegación intuitiva y la experiencia de usuario está cuidada en cada detalle.',
    image: '/proyects/aythenHome.png',
    technologies: [
      'TypeScript', 'React', 'Next.js', 'CSS'
    ],
    features: [
      'Invitaciones de cumpleaños con temática de disfraces',
      'Ideas creativas y sugerencias de disfraces',
      'Información completa del evento',
      'Formulario totalmente validado para confirmar asistencia',
      'Diseño encantador y atractivo',
      'Navegación intuitiva',
      'Interfaz responsive para móviles',
      'Interacciones fluidas',
      'Estilos temáticos personalizados'
    ],
    liveUrl: 'https://birthday-ruddy.vercel.app/',
    category: 'web'
  }
];

export const techStack: TechStack[] = [
  {
    category: 'Frontend Frameworks',
    technologies: [
      { name: 'React', level: 5, icon: '⚛️' },
      { name: 'Next.js', level: 5, icon: '▲' },
    ]
  },
  {
    category: 'Languages',
    technologies: [
      { name: 'TypeScript', level: 5, icon: '📘' },
      { name: 'JavaScript', level: 5, icon: '💛' },
      { name: 'Node.js', level: 4, icon: '🟢' },
    ]
  },
  {
    category: 'State Management',
    technologies: [
      { name: 'Redux Toolkit', level: 5, icon: '🔄' },
      { name: 'Zustand', level: 4, icon: '🐻' },
      { name: 'React Query', level: 5, icon: '📡' },
      { name: 'Context API', level: 5, icon: '🎯' }
    ]
  },
  {
    category: 'Styling',
    technologies: [
      { name: 'Tailwind CSS', level: 5, icon: '💨' },
      { name: 'Styled Components', level: 4, icon: '💅' },
      { name: 'CSS Modules', level: 4, icon: '📦' },
      { name: 'SASS/SCSS', level: 4, icon: '🎨' }
    ]
  },
  {
    category: 'Backend & Database',
    technologies: [

      { name: 'PostgreSQL', level: 4, icon: '🐘' },
      { name: 'MongoDB', level: 4, icon: '🍃' },
      { name: 'Firebase', level: 4, icon: '📊' }
    ]
  },
  {
    category: 'Tools & DevOps',
    technologies: [
      { name: 'Git', level: 5, icon: '📝' },
      { name: 'Docker', level: 4, icon: '🐳' },
      { name: 'AWS', level: 4, icon: '☁️' },
      { name: 'Vercel', level: 5, icon: '▲' },
      { name: 'Jenkins', level: 2, icon: '☁️' }
    ]
  }
];

export const techStackEs: TechStack[] = [
  {
    category: 'Frameworks de Frontend',
    technologies: [
      { name: 'React', level: 5, icon: '⚛️' },
      { name: 'Next.js', level: 5, icon: '▲' },
    ]
  },
  {
    category: 'Lenguajes',
    technologies: [
      { name: 'TypeScript', level: 5, icon: '📘' },
      { name: 'JavaScript', level: 5, icon: '💛' },
      { name: 'Node.js', level: 4, icon: '🟢' },
    ]
  },
  {
    category: 'Gestión de Estado',
    technologies: [
      { name: 'Redux Toolkit', level: 5, icon: '🔄' },
      { name: 'Zustand', level: 4, icon: '🐻' },
      { name: 'React Query', level: 5, icon: '📡' },
      { name: 'Context API', level: 5, icon: '🎯' }
    ]
  },
  {
    category: 'Estilos',
    technologies: [
      { name: 'Tailwind CSS', level: 5, icon: '💨' },
      { name: 'Styled Components', level: 4, icon: '💅' },
      { name: 'CSS Modules', level: 4, icon: '📦' },
      { name: 'SASS/SCSS', level: 4, icon: '🎨' }
    ]
  },
  {
    category: 'Backend y Base de Datos',
    technologies: [
      { name: 'Node.js', level: 4, icon: '🟢' },
      { name: 'PostgreSQL', level: 4, icon: '🐘' },
      { name: 'MongoDB', level: 4, icon: '🍃' },
      { name: 'Firebase', level: 4, icon: '📊' }
    ]
  },
  {
    category: 'Herramientas y DevOps',
    technologies: [
      { name: 'Git', level: 5, icon: '📝' },
      { name: 'Docker', level: 4, icon: '🐳' },
      { name: 'AWS', level: 4, icon: '☁️' },
      { name: 'Vercel', level: 5, icon: '▲' },
      { name: 'Jenkins', level: 2, icon: '☁️' }
    ]
  }
];

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      tech: 'Tech Stack',
      contact: 'Contact'
    },
    hero: {
      title: 'Senior Frontend Developer',
      subtitle: 'Crafting exceptional digital experiences with React & Next.js',
      description: 'Passionate about building scalable, performant, and beautiful web applications that make a difference.',
      cta: 'View My Work'
    },
    about: {
      title: 'About Me',
      description: 'I\'m a Senior Frontend Developer with 5+ years of experience specializing in React ecosystem. I love creating intuitive user interfaces and optimizing performance.',
      skills: 'Core Skills',
      passion: 'What drives me',
      passionText: 'Creating seamless user experiences through clean code, modern technologies, and attention to detail.'
    },
    experience: {
      title: 'Professional Experience',
      present: 'Present',
      achievements: 'Key Achievements'
    },
    projects: {
      title: 'Featured Projects',
      features: 'Key Features',
      live: 'Live Demo',
      code: 'Source Code',
      categories: {
        all: 'All',
        web: 'Web Apps',
        mobile: 'Mobile',
        fullstack: 'Full Stack',
        library: 'Libraries'
      }
    },
    techStack: {
      title: 'Tech Stack & Skills',
      level: 'Proficiency Level'
    },
    contact: {
      title: 'Let\'s Work Together',
      description: 'I\'m always interested in hearing about new opportunities and exciting projects.',
      email: 'Send Email',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      ctaTitle: 'Ready to Start Your Project?',
      ctaDesc: "Let's discuss how I can help bring your ideas to life with modern web technologies.",
      ctaEmail: 'Send Me an Email',
      ctaResponse: 'Response time: Usually within 24 hours'
    }
  },
  es: {
    nav: {
      about: 'Acerca de',
      experience: 'Experiencia',
      projects: 'Proyectos',
      tech: 'Tecnologías',
      contact: 'Contacto'
    },
    hero: {
      title: 'Desarrollador Frontend Senior',
      subtitle: 'Creando experiencias digitales excepcionales con React y Next.js',
      description: 'Apasionado por construir aplicaciones web escalables, eficientes y hermosas que marquen la diferencia.',
      cta: 'Ver Mi Trabajo'
    },
    about: {
      title: 'Acerca de Mí',
      description: 'Soy un Desarrollador Frontend Senior con más de 5 años de experiencia especializado en el ecosistema React. Me encanta crear interfaces de usuario intuitivas y optimizar el rendimiento.',
      skills: 'Habilidades Principales',
      passion: 'Lo que me motiva',
      passionText: 'Crear experiencias de usuario fluidas a través de código limpio, tecnologías modernas y atención al detalle.'
    },
    experience: {
      title: 'Experiencia Profesional',
      present: 'Actualidad',
      achievements: 'Logros Principales'
    },
    projects: {
      title: 'Proyectos Destacados',
      features: 'Características Principales',
      live: 'Demo en Vivo',
      code: 'Código Fuente',
      categories: {
        all: 'Todos',
        web: 'Apps Web',
        mobile: 'Móvil',
        fullstack: 'Full Stack',
        library: 'Librerías'
      }
    },
    techStack: {
      title: 'Stack Tecnológico y Habilidades',
      level: 'Nivel de Competencia'
    },
    contact: {
      title: 'Trabajemos Juntos',
      description: 'Siempre estoy interesado en escuchar sobre nuevas oportunidades y proyectos emocionantes.',
      email: 'Enviar Email',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      ctaTitle: '¿Listo para empezar tu proyecto?',
      ctaDesc: 'Conversemos cómo puedo ayudarte a hacer realidad tus ideas con tecnologías web modernas.',
      ctaEmail: 'Envíame un Email',
      ctaResponse: 'Tiempo de respuesta: Normalmente dentro de las 24 horas'
    }
  }
};

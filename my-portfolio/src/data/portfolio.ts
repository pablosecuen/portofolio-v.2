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
    id: '22',
    title: 'J.Crew',
    description: 'Enterprise-level e-commerce platform for J.Crew, developed as part of the Minutentag team on the same codebase and vendor integrations as the Madewell platform (J.Crew Group brands).',
    image: '/proyects/jcrew.png',
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
    liveUrl: 'https://www.jcrew.com',
    category: 'fullstack'
  },
  {
    id: '11',
    title: 'GetTruSupps — E-commerce Store',
    description: 'Shopify storefront for TRU Supplements, sharing the same checkout UI extension suite (bundle discounts, subscription upsells, trust badges) built across the HPN Supplements brand family.',
    image: '/proyects/gettrusupps.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions'],
    features: [
      'Custom Shopify Liquid theme',
      'Bundle & volume discount functions',
      'Checkout UI extensions for upsells and trust badges',
      'Responsive, conversion-focused storefront design',
      'Ongoing theme maintenance and performance tuning'
    ],
    liveUrl: 'https://gettrusupps.com',
    category: 'web'
  },
  {
    id: '10',
    title: 'HPN Supplements — E-commerce Store',
    description: 'Shopify storefront for HPN Supplements, a health & wellness supplement brand. Built and maintain the theme along with custom checkout UI extensions and a full migration off legacy Shopify Scripts to Shopify Functions.',
    image: '/proyects/hpnsupplements.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions', 'GraphQL', 'React'],
    features: [
      'Custom Shopify Liquid theme',
      'Shopify Functions discount engine (bundles, volume discounts)',
      'Checkout UI extensions: subscription upsells, trust badges, order duplication',
      'Migration from legacy Shopify Scripts to Shopify Functions',
      'Admin dashboard for discount & promo management',
      'Performance-optimized storefront'
    ],
    liveUrl: 'https://hpnsupplements.com',
    category: 'web'
  },
  {
    id: '12',
    title: 'OneSol Supplements — E-commerce Store',
    description: 'Shopify storefront for OneSol Supplements, part of the same multi-brand supplement portfolio, with shared checkout discount infrastructure and a fully custom theme.',
    image: '/proyects/onesolsupps.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions'],
    features: [
      'Custom Shopify Liquid theme',
      'Bundle & volume discount functions',
      'Checkout UI extensions for upsells and trust badges',
      'Cross-brand component reuse with HPN & TRU storefronts',
      'Performance and conversion optimization'
    ],
    liveUrl: 'https://onesol.com',
    category: 'web'
  },
  {
    id: '23',
    title: 'Ambrosia Collective — E-commerce Store',
    description: 'Shopify storefront for Ambrosia Collective, a superfood supplement brand, sharing the same checkout UI extension suite (bundle discounts, subscription upsells, trust badges) built across the HPN Supplements brand family.',
    image: '/proyects/ambrosiacollective.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions'],
    features: [
      'Custom Shopify Liquid theme',
      'Bundle & volume discount functions',
      'Checkout UI extensions for upsells and trust badges',
      'Cross-brand component reuse with HPN, TRU & OneSol storefronts',
      'Performance and conversion optimization'
    ],
    liveUrl: 'https://ambrosiacollective.com',
    category: 'web'
  },
  {
    id: '24',
    title: 'Monthly — AI Content Engine',
    description: "Automated programmatic-SEO content engine behind Monthly's marketing site (monthly.com.ar). A queue-driven pipeline decides what to write next by SEO opportunity (keyword-cannibalization checks, category balance, provincial cluster coverage), generates structured content with Cerebras AI validated against Zod schemas, and runs it through a custom-built detector for generic AI phrasing and near-duplicate content before anything publishes. A targeted repair loop feeds the model its exact mistakes instead of blindly regenerating, and nothing ships below an 80/100 quality gate. Fully automated through a weekly GitHub Actions run.",
    image: '/proyects/monthly.png',
    technologies: ['Astro', 'Cerebras AI', 'Zod', 'TypeScript', 'GitHub Actions', 'Playwright'],
    features: [
      'SEO-opportunity queue: prioritizes content by cannibalization risk, category balance, and cluster coverage',
      'Structured generation with Cerebras AI + Zod schema validation per content type',
      'Custom AI-copy pattern detector (generic phrasing, buzzwords, forced localization, keyword stuffing)',
      'Near-duplicate detection via w-shingling + Jaccard similarity, within-page and cross-page',
      'Targeted repair loop that feeds specific issues back to the model instead of blind regeneration',
      'Quantified publication-quality gate (80/100) combining originality, depth, structure, and SEO',
      'Weekly GitHub Actions pipeline: generate → validate → build → OG images → SEO audit → PR'
    ],
    liveUrl: 'https://monthly.com.ar',
    category: 'fullstack'
  },
  {
    id: '14',
    title: 'Monthly — Personal Finance App',
    description: 'The budgeting app behind Monthly: plan salary, fixed expenses, weekend spending money, and investments without connecting a bank account, with AI-assisted spending insights. Ships as an installable PWA and as a native Android app via a TWA wrapper.',
    image: '/proyects/monthly.png',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'Zustand', 'Tailwind CSS', 'Cerebras AI'],
    features: [
      'AI-assisted spending insights (Cerebras)',
      'Salary, fixed-expense, weekend-money, and investment planning',
      'Supabase-backed sync across devices',
      'Installable PWA with an Android TWA wrapper (Play Store-ready)',
      'No bank connection required'
    ],
    liveUrl: 'https://app.monthly.com.ar',
    category: 'fullstack'
  },
  {
    id: '15',
    title: 'Focus Digital Insight — Chrome Extension',
    description: 'A Chrome extension (Manifest V3) that inspects any webpage in real time for SEO signals, detected tech stack, and tracking scripts, using a Rust-to-WebAssembly detection engine.',
    image: '/proyects/focusdigitalinsight.png',
    technologies: ['TypeScript', 'Rust', 'WebAssembly', 'Chrome Extension API'],
    features: [
      'Real-time SEO audit of the active tab',
      'Tech-stack detection engine compiled from Rust to WASM',
      'Tracking script and pixel detection',
      'Manifest V3 Chrome extension architecture'
    ],
    liveUrl: 'https://chromewebstore.google.com/detail/focus-digital-insight/gcmhelkoendjknbjogjpkmmhiamedfnm',
    category: 'library'
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
  },
  {
    id: '13',
    title: 'MarginLab — Shopify Profit Analytics SaaS',
    description: 'A/B testing, personalization, and profit-analytics SaaS built for Shopify merchants, with checkout and theme extensions being prepared for the Shopify App Store.',
    image: '/proyects/marginlab.png',
    technologies: ['Next.js', 'TypeScript', 'Shopify Extensions', 'Turborepo', 'Vercel'],
    features: [
      'Shopify checkout & theme app extensions',
      'A/B testing and personalization engine',
      'Merchant profit-analytics dashboard',
      'Monorepo architecture for shared packages',
      'Preparing for Shopify App Store submission'
    ],
    liveUrl: 'https://marginlab.vercel.app',
    category: 'fullstack'
  },
  {
    id: '16',
    title: 'Seamless Chex — ACH Payments Marketing Site',
    description: 'Migrated the marketing site for Seamless Chex, an ACH payment processing platform, from Webflow to Astro for faster load times and easier long-term maintenance.',
    image: '/proyects/seamlesschex.png',
    technologies: ['Astro', 'Tailwind CSS', 'MDX', 'Cloudflare Pages'],
    features: [
      'Full migration from Webflow to Astro',
      'MDX-powered content sections',
      'Deployed on Cloudflare Pages',
      'Optimized Core Web Vitals over the legacy Webflow build'
    ],
    liveUrl: 'https://sc-astro-6ps.pages.dev',
    category: 'web'
  },
  {
    id: '17',
    title: 'ClinicMind — Practice Management SaaS Website',
    description: 'Marketing website for ClinicMind, a chiropractic and health-practice-management SaaS platform.',
    image: '/proyects/clinicmind.png',
    technologies: ['HTML', 'Tailwind CSS', 'Vercel'],
    features: [
      'Multi-page marketing site with blog',
      'Feature and product pages (AI Scribe, ClinicMind Pay, etc.)',
      'SEO-optimized static build',
      'Deployed on Vercel'
    ],
    liveUrl: 'https://www.clinicmind.com',
    category: 'web'
  },
  {
    id: '18',
    title: 'Edelman Team — HVAC & Plumbing Web App',
    description: 'Location-aware web application for Edelman Heating, Cooling, Plumbing, Electric & Solar, serving Illinois and Wisconsin, with IP-based geolocation and integrations for scheduling and blog content.',
    image: '/proyects/edelmanteam.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'WordPress REST API', 'ServiceTitan'],
    features: [
      'IP-based geolocation for personalized service-area content',
      'WordPress-powered blog via REST API',
      'ServiceTitan integration for scheduling',
      'Formspree-powered contact forms',
      'Location pages across Illinois & Wisconsin service areas'
    ],
    liveUrl: 'https://www.edelmanteam.com',
    category: 'fullstack'
  },
  {
    id: '19',
    title: 'Piedmont Capital Advisors — Financial Advisory Site',
    description: 'WordPress website for Piedmont Capital Advisors, a financial advisory firm, currently being rebuilt with a custom Gutenberg block theme.',
    image: '/proyects/piedmontcapital.png',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    features: [
      'Custom WordPress theme and content structure',
      'Firm overview, services, and team pages',
      'Contact and lead-generation forms'
    ],
    liveUrl: 'https://www.piedmontcapitaladvisors.com',
    category: 'web'
  },
  {
    id: '20',
    title: 'Funes Vape — Product Catalog',
    description: 'E-commerce product catalog for a vape shop, with a Supabase-backed product database and a modern shadcn/ui interface.',
    image: '/proyects/funesvape.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'shadcn/ui', 'Supabase', 'Tailwind CSS'],
    features: [
      'Supabase-backed product database',
      'Category and product filtering',
      'Responsive product catalog UI',
      'Fast Vite-based build'
    ],
    liveUrl: 'https://funes-vape.vercel.app',
    category: 'fullstack'
  },
  {
    id: '21',
    title: 'Magic Tarot — AI Tarot Reading App',
    description: 'A mobile tarot-reading app with AI-assisted card interpretations, animated card draws, and zodiac-based personalization.',
    image: '/proyects/magictarot.webp',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    features: [
      'AI-assisted tarot card interpretations',
      'Animated card draw and reveal',
      'Zodiac-based personalization',
      'Built with React Native & Expo'
    ],
    category: 'mobile'
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
    id: '22',
    title: 'J.Crew',
    description: 'Plataforma e-commerce empresarial para J.Crew, desarrollada como parte del equipo de Minutentag sobre el mismo código base e integraciones de proveedores que la plataforma de Madewell (marcas de J.Crew Group).',
    image: '/proyects/jcrew.png',
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
    liveUrl: 'https://www.jcrew.com',
    category: 'fullstack'
  },
  {
    id: '11',
    title: 'GetTruSupps — Tienda E-commerce',
    description: 'Tienda Shopify para TRU Supplements, compartiendo la misma suite de extensiones de checkout (descuentos por bundle, upsells de suscripción, sellos de confianza) construida para la familia de marcas HPN.',
    image: '/proyects/gettrusupps.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions'],
    features: [
      'Theme de Shopify Liquid a medida',
      'Funciones de descuento por bundle y volumen',
      'Extensiones de checkout para upsells y sellos de confianza',
      'Diseño de tienda responsivo orientado a conversión',
      'Mantenimiento continuo del theme y optimización de rendimiento'
    ],
    liveUrl: 'https://gettrusupps.com',
    category: 'web'
  },
  {
    id: '10',
    title: 'HPN Supplements — Tienda E-commerce',
    description: 'Tienda Shopify para HPN Supplements, marca de suplementos de salud y bienestar. Desarrollo y mantenimiento del theme junto con extensiones de checkout a medida y migración completa de Shopify Scripts a Shopify Functions.',
    image: '/proyects/hpnsupplements.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions', 'GraphQL', 'React'],
    features: [
      'Theme de Shopify Liquid a medida',
      'Motor de descuentos con Shopify Functions (bundles, descuentos por volumen)',
      'Extensiones de checkout: upsells de suscripción, sellos de confianza, duplicación de pedidos',
      'Migración de Shopify Scripts legacy a Shopify Functions',
      'Panel de administración para gestión de descuentos y promociones',
      'Tienda optimizada en rendimiento'
    ],
    liveUrl: 'https://hpnsupplements.com',
    category: 'web'
  },
  {
    id: '12',
    title: 'OneSol Supplements — Tienda E-commerce',
    description: 'Tienda Shopify para OneSol Supplements, parte del mismo portfolio multi-marca de suplementos, con infraestructura de descuentos de checkout compartida y theme totalmente a medida.',
    image: '/proyects/onesolsupps.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions'],
    features: [
      'Theme de Shopify Liquid a medida',
      'Funciones de descuento por bundle y volumen',
      'Extensiones de checkout para upsells y sellos de confianza',
      'Reutilización de componentes entre las tiendas HPN y TRU',
      'Optimización de rendimiento y conversión'
    ],
    liveUrl: 'https://onesol.com',
    category: 'web'
  },
  {
    id: '23',
    title: 'Ambrosia Collective — Tienda E-commerce',
    description: 'Tienda Shopify para Ambrosia Collective, marca de suplementos superfood, compartiendo la misma suite de extensiones de checkout (descuentos por bundle, upsells de suscripción, sellos de confianza) construida para la familia de marcas HPN.',
    image: '/proyects/ambrosiacollective.png',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Functions'],
    features: [
      'Theme de Shopify Liquid a medida',
      'Funciones de descuento por bundle y volumen',
      'Extensiones de checkout para upsells y sellos de confianza',
      'Reutilización de componentes entre las tiendas HPN, TRU y OneSol',
      'Optimización de rendimiento y conversión'
    ],
    liveUrl: 'https://ambrosiacollective.com',
    category: 'web'
  },
  {
    id: '24',
    title: 'Monthly — Motor de Contenido con IA',
    description: 'Motor de contenido programático para el sitio de marketing de Monthly (monthly.com.ar). Un pipeline basado en colas decide qué escribir según oportunidad SEO (riesgo de canibalización de keywords, balance de categorías, cobertura de clusters provinciales), genera contenido estructurado con Cerebras AI validado contra schemas de Zod, y lo pasa por un detector propio de "esto lo escribió una IA" y de contenido casi-duplicado antes de publicar nada. Un loop de reparación dirigida le devuelve al modelo sus errores exactos en vez de regenerar a ciegas, y nada se publica por debajo de un piso de calidad de 80/100. Totalmente automatizado con una corrida semanal en GitHub Actions.',
    image: '/proyects/monthly.png',
    technologies: ['Astro', 'Cerebras AI', 'Zod', 'TypeScript', 'GitHub Actions', 'Playwright'],
    features: [
      'Cola de oportunidad SEO: prioriza contenido por riesgo de canibalización, balance de categorías y cobertura de clusters',
      'Generación estructurada con Cerebras AI + validación por schema de Zod según tipo de contenido',
      'Detector propio de patrones de copy de IA (frases genéricas, buzzwords, localización forzada, keyword stuffing)',
      'Detección de casi-duplicados vía w-shingling + similitud de Jaccard, dentro de la página y entre páginas',
      'Loop de reparación dirigida que le devuelve al modelo los problemas puntuales en vez de regenerar a ciegas',
      'Piso de calidad de publicación cuantificado (80/100) combinando originalidad, profundidad, estructura y SEO',
      'Pipeline semanal en GitHub Actions: generar → validar → build → imágenes OG → auditoría SEO → PR'
    ],
    liveUrl: 'https://monthly.com.ar',
    category: 'fullstack'
  },
  {
    id: '14',
    title: 'Monthly — App de Finanzas Personales',
    description: 'La app de presupuesto detrás de Monthly: planificá sueldo, gastos fijos, plata libre de fin de semana e inversiones sin conectar el banco, con insights de gastos asistidos por IA. Disponible como PWA instalable y como app Android nativa vía wrapper TWA.',
    image: '/proyects/monthly.png',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'Zustand', 'Tailwind CSS', 'Cerebras AI'],
    features: [
      'Insights de gastos asistidos por IA (Cerebras)',
      'Planificación de sueldo, gastos fijos, plata libre de fin de semana e inversiones',
      'Sincronización entre dispositivos con Supabase',
      'PWA instalable con wrapper Android TWA (listo para Play Store)',
      'No requiere conectar el banco'
    ],
    liveUrl: 'https://app.monthly.com.ar',
    category: 'fullstack'
  },
  {
    id: '15',
    title: 'Focus Digital Insight — Extensión de Chrome',
    description: 'Extensión de Chrome (Manifest V3) que analiza cualquier página en tiempo real detectando señales de SEO, stack tecnológico y scripts de tracking, usando un motor de detección compilado de Rust a WebAssembly.',
    image: '/proyects/focusdigitalinsight.png',
    technologies: ['TypeScript', 'Rust', 'WebAssembly', 'Chrome Extension API'],
    features: [
      'Auditoría SEO en tiempo real de la pestaña activa',
      'Motor de detección de stack tecnológico compilado de Rust a WASM',
      'Detección de scripts y píxeles de tracking',
      'Arquitectura de extensión Chrome Manifest V3'
    ],
    liveUrl: 'https://chromewebstore.google.com/detail/focus-digital-insight/gcmhelkoendjknbjogjpkmmhiamedfnm',
    category: 'library'
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
  },
  {
    id: '13',
    title: 'MarginLab — SaaS de Analítica de Rentabilidad para Shopify',
    description: 'SaaS de A/B testing, personalización y analítica de rentabilidad para comercios Shopify, con extensiones de checkout y theme en preparación para el Shopify App Store.',
    image: '/proyects/marginlab.png',
    technologies: ['Next.js', 'TypeScript', 'Shopify Extensions', 'Turborepo', 'Vercel'],
    features: [
      'Extensiones de checkout y theme app de Shopify',
      'Motor de A/B testing y personalización',
      'Dashboard de analítica de rentabilidad para comercios',
      'Arquitectura monorepo con paquetes compartidos',
      'En preparación para publicación en el Shopify App Store'
    ],
    liveUrl: 'https://marginlab.vercel.app',
    category: 'fullstack'
  },
  {
    id: '16',
    title: 'Seamless Chex — Sitio de Pagos ACH',
    description: 'Migración del sitio de marketing de Seamless Chex, una plataforma de procesamiento de pagos ACH, de Webflow a Astro para mejorar tiempos de carga y facilitar el mantenimiento a largo plazo.',
    image: '/proyects/seamlesschex.png',
    technologies: ['Astro', 'Tailwind CSS', 'MDX', 'Cloudflare Pages'],
    features: [
      'Migración completa de Webflow a Astro',
      'Secciones de contenido con MDX',
      'Desplegado en Cloudflare Pages',
      'Core Web Vitals optimizados respecto al sitio Webflow original'
    ],
    liveUrl: 'https://sc-astro-6ps.pages.dev',
    category: 'web'
  },
  {
    id: '17',
    title: 'ClinicMind — Sitio de SaaS de Gestión de Clínicas',
    description: 'Sitio de marketing para ClinicMind, una plataforma SaaS de gestión de consultorios quiroprácticos y de salud.',
    image: '/proyects/clinicmind.png',
    technologies: ['HTML', 'Tailwind CSS', 'Vercel'],
    features: [
      'Sitio de marketing multipágina con blog',
      'Páginas de producto y features (AI Scribe, ClinicMind Pay, etc.)',
      'Build estático optimizado para SEO',
      'Desplegado en Vercel'
    ],
    liveUrl: 'https://www.clinicmind.com',
    category: 'web'
  },
  {
    id: '18',
    title: 'Edelman Team — App Web para Climatización y Plomería',
    description: 'Aplicación web con geolocalización para Edelman Heating, Cooling, Plumbing, Electric & Solar, que atiende Illinois y Wisconsin, con integraciones de agenda y contenido de blog.',
    image: '/proyects/edelmanteam.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'WordPress REST API', 'ServiceTitan'],
    features: [
      'Geolocalización por IP para contenido personalizado por zona de servicio',
      'Blog impulsado por WordPress vía REST API',
      'Integración con ServiceTitan para turnos',
      'Formularios de contacto con Formspree',
      'Páginas de zonas de servicio en Illinois y Wisconsin'
    ],
    liveUrl: 'https://www.edelmanteam.com',
    category: 'fullstack'
  },
  {
    id: '19',
    title: 'Piedmont Capital Advisors — Sitio de Asesoría Financiera',
    description: 'Sitio WordPress para Piedmont Capital Advisors, una firma de asesoría financiera, actualmente en proceso de rediseño con un theme a medida basado en bloques de Gutenberg.',
    image: '/proyects/piedmontcapital.png',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    features: [
      'Theme de WordPress y estructura de contenido a medida',
      'Páginas de la firma, servicios y equipo',
      'Formularios de contacto y generación de leads'
    ],
    liveUrl: 'https://www.piedmontcapitaladvisors.com',
    category: 'web'
  },
  {
    id: '20',
    title: 'Funes Vape — Catálogo de Productos',
    description: 'Catálogo de productos e-commerce para una vapeshop, con base de datos en Supabase e interfaz moderna con shadcn/ui.',
    image: '/proyects/funesvape.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'shadcn/ui', 'Supabase', 'Tailwind CSS'],
    features: [
      'Base de datos de productos en Supabase',
      'Filtrado por categoría y producto',
      'UI de catálogo responsiva',
      'Build rápido basado en Vite'
    ],
    liveUrl: 'https://funes-vape.vercel.app',
    category: 'fullstack'
  },
  {
    id: '21',
    title: 'Magic Tarot — App de Tarot con IA',
    description: 'App móvil de lectura de tarot con interpretaciones asistidas por IA, animación de cartas y personalización por signo zodiacal.',
    image: '/proyects/magictarot.webp',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    features: [
      'Interpretaciones de tarot asistidas por IA',
      'Animación de robo y revelado de cartas',
      'Personalización basada en el signo zodiacal',
      'Construida con React Native y Expo'
    ],
    category: 'mobile'
  }
];

export const techStack: TechStack[] = [
  {
    category: 'Frontend Frameworks',
    technologies: [
      { name: 'React', level: 5, icon: '⚛️' },
      { name: 'Next.js', level: 5, icon: '▲' },
      { name: 'Astro', level: 4, icon: '🪐' },
      { name: 'React Native / Expo', level: 4, icon: '📱' },
    ]
  },
  {
    category: 'Languages',
    technologies: [
      { name: 'TypeScript', level: 5, icon: '📘' },
      { name: 'JavaScript', level: 5, icon: '💛' },
      { name: 'Node.js', level: 4, icon: '🟢' },
      { name: 'PHP', level: 4, icon: '🐘' },
    ]
  },
  {
    category: 'E-commerce & CMS',
    technologies: [
      { name: 'Shopify (Liquid & Functions)', level: 5, icon: '🛍️' },
      { name: 'WordPress', level: 5, icon: '📝' },
      { name: 'Custom Theme Development', level: 5, icon: '🧩' },
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
      { name: 'Supabase', level: 4, icon: '⚡' },
      { name: 'PostgreSQL', level: 4, icon: '🗄️' },
      { name: 'MongoDB', level: 4, icon: '🍃' },
      { name: 'Firebase', level: 4, icon: '📊' }
    ]
  },
  {
    category: 'Tools & DevOps',
    technologies: [
      { name: 'Git', level: 5, icon: '🔧' },
      { name: 'Docker', level: 4, icon: '🐳' },
      { name: 'AWS', level: 4, icon: '☁️' },
      { name: 'Vercel', level: 5, icon: '▲' },
      { name: 'Jenkins', level: 2, icon: '⚙️' }
    ]
  }
];

export const techStackEs: TechStack[] = [
  {
    category: 'Frameworks de Frontend',
    technologies: [
      { name: 'React', level: 5, icon: '⚛️' },
      { name: 'Next.js', level: 5, icon: '▲' },
      { name: 'Astro', level: 4, icon: '🪐' },
      { name: 'React Native / Expo', level: 4, icon: '📱' },
    ]
  },
  {
    category: 'Lenguajes',
    technologies: [
      { name: 'TypeScript', level: 5, icon: '📘' },
      { name: 'JavaScript', level: 5, icon: '💛' },
      { name: 'Node.js', level: 4, icon: '🟢' },
      { name: 'PHP', level: 4, icon: '🐘' },
    ]
  },
  {
    category: 'E-commerce y CMS',
    technologies: [
      { name: 'Shopify (Liquid y Functions)', level: 5, icon: '🛍️' },
      { name: 'WordPress', level: 5, icon: '📝' },
      { name: 'Desarrollo de Themes a Medida', level: 5, icon: '🧩' },
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
      { name: 'Supabase', level: 4, icon: '⚡' },
      { name: 'PostgreSQL', level: 4, icon: '🗄️' },
      { name: 'MongoDB', level: 4, icon: '🍃' },
      { name: 'Firebase', level: 4, icon: '📊' }
    ]
  },
  {
    category: 'Herramientas y DevOps',
    technologies: [
      { name: 'Git', level: 5, icon: '🔧' },
      { name: 'Docker', level: 4, icon: '🐳' },
      { name: 'AWS', level: 4, icon: '☁️' },
      { name: 'Vercel', level: 5, icon: '▲' },
      { name: 'Jenkins', level: 2, icon: '⚙️' }
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
      passionText: 'Creating seamless user experiences through clean code, modern technologies, and attention to detail.',
      highlights: [
        { title: '5+ Years', description: 'Frontend Development' },
        { title: '50+ Projects', description: 'Successfully Delivered' },
        { title: '99%', description: 'Client Satisfaction' },
        { title: 'Passionate', description: 'About Clean Code' }
      ]
    },
    experience: {
      title: 'Professional Experience',
      present: 'Present',
      achievements: 'Key Achievements',
      timeline: 'Career Timeline'
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
      },
      stats: {
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        years: 'Years Experience',
        success: 'Success Rate'
      }
    },
    techStack: {
      title: 'Tech Stack & Skills',
      level: 'Proficiency Level',
      legend: {
        expert: 'Expert (5/5)',
        advanced: 'Advanced (4/5)',
        intermediate: 'Intermediate (3/5)',
        beginner: 'Beginner (2/5)',
        learning: 'Learning (1/5)'
      },
      highlights: {
        reactTitle: 'React Ecosystem',
        reactDesc: '5+ Years Experience',
        tsTitle: 'TypeScript',
        tsDesc: 'Type-Safe Development',
        perfTitle: 'Performance',
        perfDesc: 'Optimization Expert'
      }
    },
    contact: {
      title: 'Let\'s Work Together',
      description: 'I\'m always interested in hearing about new opportunities and exciting projects.',
      email: 'Send Email',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      getInTouch: 'Get In Touch',
      availabilityTitle: 'Availability',
      location: 'Location',
      locationValue: 'Available Worldwide (Remote)',
      timezone: 'Timezone',
      timezoneValue: 'UTC-3 (EST)',
      openStatus: 'Availability',
      openStatusValue: 'Open for new projects',
      ctaTitle: 'Ready to Start Your Project?',
      ctaDesc: "Let's discuss how I can help bring your ideas to life with modern web technologies.",
      ctaEmail: 'Send Me an Email',
      ctaResponse: 'Response time: Usually within 24 hours',
      footer: 'Senior Frontend Developer Portfolio. Built with React & TypeScript.'
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
      passionText: 'Crear experiencias de usuario fluidas a través de código limpio, tecnologías modernas y atención al detalle.',
      highlights: [
        { title: '+5 Años', description: 'Desarrollo Frontend' },
        { title: '+50 Proyectos', description: 'Entregados con Éxito' },
        { title: '99%', description: 'Satisfacción del Cliente' },
        { title: 'Apasionado', description: 'Por el Código Limpio' }
      ]
    },
    experience: {
      title: 'Experiencia Profesional',
      present: 'Actualidad',
      achievements: 'Logros Principales',
      timeline: 'Línea de Tiempo Profesional'
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
      },
      stats: {
        projects: 'Proyectos Completados',
        clients: 'Clientes Satisfechos',
        years: 'Años de Experiencia',
        success: 'Tasa de Éxito'
      }
    },
    techStack: {
      title: 'Stack Tecnológico y Habilidades',
      level: 'Nivel de Competencia',
      legend: {
        expert: 'Experto (5/5)',
        advanced: 'Avanzado (4/5)',
        intermediate: 'Intermedio (3/5)',
        beginner: 'Principiante (2/5)',
        learning: 'Aprendiendo (1/5)'
      },
      highlights: {
        reactTitle: 'Ecosistema React',
        reactDesc: '+5 Años de Experiencia',
        tsTitle: 'TypeScript',
        tsDesc: 'Desarrollo Type-Safe',
        perfTitle: 'Rendimiento',
        perfDesc: 'Experto en Optimización'
      }
    },
    contact: {
      title: 'Trabajemos Juntos',
      description: 'Siempre estoy interesado en escuchar sobre nuevas oportunidades y proyectos emocionantes.',
      email: 'Enviar Email',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      getInTouch: 'Ponte en Contacto',
      availabilityTitle: 'Disponibilidad',
      location: 'Ubicación',
      locationValue: 'Disponible en todo el mundo (Remoto)',
      timezone: 'Zona Horaria',
      timezoneValue: 'UTC-3 (EST)',
      openStatus: 'Disponibilidad',
      openStatusValue: 'Abierto a nuevos proyectos',
      ctaTitle: '¿Listo para empezar tu proyecto?',
      ctaDesc: 'Conversemos cómo puedo ayudarte a hacer realidad tus ideas con tecnologías web modernas.',
      ctaEmail: 'Envíame un Email',
      ctaResponse: 'Tiempo de respuesta: Normalmente dentro de las 24 horas',
      footer: 'Portfolio de Desarrollador Frontend Senior. Hecho con React & TypeScript.'
    }
  }
};

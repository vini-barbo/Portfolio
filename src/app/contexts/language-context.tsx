import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en" | "es" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // General
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.tech": "Tecnologias",
    "nav.technologies": "Tecnologias",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    // Hero Section
    "hero.available": "Disponível para novos projetos",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Engenheiro de Software Full Stack",
    "hero.description": "Engenheiro de Software Full Stack com 4+ anos de experiência construindo aplicações web, APIs REST e sistemas corporativos usando Java, Spring Boot, Angular, React, Node.js e PostgreSQL.",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Entrar em Contato",
    "hero.downloadCV": "Baixar Currículo",

    // About Section
    "about.title": "Sobre Mim",
    "about.paragraph1": "Engenheiro de Software Full Stack com 4+ anos de experiência construindo aplicações web, APIs REST e sistemas corporativos usando Java, Spring Boot, Angular, React, Node.js e PostgreSQL. Experiente em desenvolvimento Ágil, tecnologias cloud e soluções de software escaláveis.",
    "about.paragraph2": "Especializado em frameworks frontend como Angular, React e Next.js. No backend, proficiente com Java, Spring Boot, Node.js e NestJS. Experiência sólida com PostgreSQL, MySQL, AWS, Docker e práticas de CI/CD.",
    "about.paragraph3": "Bacharel em Licenciatura em Ciência da Computação pela UFRPE (2022-2026). Certificado Microsoft Azure AI Fundamentals (AI-900). Atualmente baseado em Dublin, Irlanda.",
    "about.cleanCode": "Código Limpo",
    "about.cleanCodeDesc": "Compromisso com SOLID, Clean Code, Design Patterns e arquitetura escalável.",
    "about.innovation": "Inovação",
    "about.innovationDesc": "Sempre atualizado com as últimas tecnologias e tendências do mercado de desenvolvimento.",
    "about.collaboration": "Colaboração",
    "about.collaborationDesc": "Experiência em trabalho em equipe, metodologias ágeis (Scrum) e comunicação efetiva.",

    // Technologies Section
    "tech.title": "Tecnologias & Skills",
    "tech.subtitle": "Ferramentas e tecnologias que domino para criar soluções completas e robustas",
    "tech.learning": "E sempre aprendendo novas tecnologias...",
    "tech.category.frontend": "Frontend",
    "tech.category.backend": "Backend",
    "tech.category.database": "Database",
    "tech.category.devops": "DevOps",
    "tech.category.cloud": "Cloud",
    "tech.category.tools": "Tools",

    // Projects Section
    "projects.title": "Projetos",
    "projects.subtitle": "Alguns dos meus trabalhos mais recentes e relevantes",
    "projects.viewCode": "Código",
    "projects.viewDemo": "Demo",
    "projects.project1.name": "E-Commerce Platform",
    "projects.project1.desc": "Plataforma completa de e-commerce com painel administrativo, gestão de produtos, carrinho e checkout integrado com gateway de pagamento.",
    "projects.project2.name": "Task Management System",
    "projects.project2.desc": "Sistema de gerenciamento de tarefas em tempo real com colaboração em equipe, notificações e dashboard analítico.",
    "projects.project3.name": "API Gateway Service",
    "projects.project3.desc": "Microserviço de gateway com autenticação, rate limiting, cache e monitoramento de APIs REST.",
    "projects.project4.name": "Social Media Dashboard",
    "projects.project4.desc": "Dashboard analítico para redes sociais com integração de múltiplas plataformas e visualização de métricas em tempo real.",
    "projects.project5.name": "CMS Headless",
    "projects.project5.desc": "Sistema de gestão de conteúdo headless com API GraphQL, autenticação JWT e painel administrativo customizável.",
    "projects.project6.name": "DevOps Automation Tool",
    "projects.project6.desc": "Ferramenta de automação de deploy e CI/CD com integração AWS, monitoramento e rollback automático.",

    // Experience Section
    "experience.title": "Experiência Profissional",
    "experience.subtitle": "Minha trajetória profissional e contribuições em diferentes organizações",
    "experience.company1": "Avanade",
    "experience.role1": "Desenvolvedor Full Stack",
    "experience.period1": "2025 - Presente",
    "experience.desc1.1": "Desenvolveu e manteve aplicações empresariais usadas por 1.500+ funcionários em múltiplas unidades de negócios usando Angular, TypeScript, Java, Spring Boot, Node.js, PostgreSQL e Azure DevOps.",
    "experience.desc1.2": "Projetou e implementou 25+ APIs REST com Java Spring Boot e Node.js, reduzindo o tempo de integração entre sistemas em 40%.",
    "experience.desc1.3": "Colaborou em equipes Ágeis entregando releases a cada duas semanas usando Git, CI/CD pipelines, Azure DevOps e Docker, mantendo 99.9% de disponibilidade.",
    "experience.company2": "SENAI Instituto de Inovação (ISI-TICs)",
    "experience.role2": "Desenvolvedor Full Stack",
    "experience.period2": "2023 - 2025",
    "experience.desc2.1": "Desenvolveu e manteve o Frevo, uma plataforma de gerenciamento interno suportando 300+ pesquisadores e equipe usando Angular, TypeScript, Java, Spring Boot, PostgreSQL e Docker.",
    "experience.desc2.2": "Construiu 20+ APIs REST e integrações de banco de dados usando Spring Boot, PostgreSQL e JPA/Hibernate, reduzindo processos operacionais manuais em 50%.",
    "experience.desc2.3": "Melhorou a performance da aplicação em 35% através de otimização de backend, tuning de queries SQL e melhorias arquiteturais.",
    "experience.company3": "Data Priority",
    "experience.role3": "Desenvolvedor Full Stack",
    "experience.period3": "2022 - 2023",
    "experience.desc3.1": "Desenvolveu soluções de business intelligence e visualização de dados processando 100.000+ registros mensais usando React, JavaScript, Node.js, PostgreSQL e APIs REST.",
    "experience.desc3.2": "Construiu dashboards interativos e ferramentas de relatórios usando React, HTML5, CSS3 e bibliotecas de gráficos, suportando 50+ stakeholders de negócios.",
    "experience.desc3.3": "Implementou integrações de API e banco de dados usando Node.js, PostgreSQL e Git, reduzindo o tempo de geração de relatórios em 60%.",

    // Contact Section
    "contact.title": "Contato",
    "contact.subtitle": "Interessado em trabalhar juntos? Entre em contato através de qualquer um dos canais abaixo",
    "contact.cta": "Vamos trabalhar juntos",
    "contact.footer": "© 2026 Vinicius Barbosa. Desenvolvido com React, Tailwind CSS e Motion.",
  },
  en: {
    // General
    "nav.home": "Home",
    "nav.about": "About",
    "nav.tech": "Technologies",
    "nav.technologies": "Technologies",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.available": "Available for new projects",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Full Stack Software Engineer",
    "hero.description": "Full Stack Software Engineer with 4+ years of experience building web applications, REST APIs, and enterprise systems using Java, Spring Boot, Angular, React, Node.js, and PostgreSQL.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Get in Touch",
    "hero.downloadCV": "Download Resume",

    // About Section
    "about.title": "About Me",
    "about.paragraph1": "Full Stack Software Engineer with 4+ years of experience building web applications, REST APIs, and enterprise systems using Java, Spring Boot, Angular, React, Node.js, and PostgreSQL. Experienced in Agile development, cloud technologies, and scalable software solutions.",
    "about.paragraph2": "Specialized in frontend frameworks like Angular, React, and Next.js. On the backend, proficient with Java, Spring Boot, Node.js, and NestJS. Solid experience with PostgreSQL, MySQL, AWS, Docker, and CI/CD practices.",
    "about.paragraph3": "Bachelor's Degree in Computer Science Education from UFRPE (2022-2026). Microsoft Certified: Azure AI Fundamentals (AI-900). Currently based in Dublin, Ireland.",
    "about.cleanCode": "Clean Code",
    "about.cleanCodeDesc": "Commitment to SOLID principles, Clean Code, Design Patterns, and scalable architecture.",
    "about.innovation": "Innovation",
    "about.innovationDesc": "Always updated with the latest technologies and development market trends.",
    "about.collaboration": "Collaboration",
    "about.collaborationDesc": "Experience in teamwork, Agile methodologies (Scrum), and effective communication.",

    // Technologies Section
    "tech.title": "Technologies & Skills",
    "tech.subtitle": "Tools and technologies I master to create complete and robust solutions",
    "tech.learning": "And always learning new technologies...",
    "tech.category.frontend": "Frontend",
    "tech.category.backend": "Backend",
    "tech.category.database": "Database",
    "tech.category.devops": "DevOps",
    "tech.category.cloud": "Cloud",
    "tech.category.tools": "Tools",

    // Projects Section
    "projects.title": "Projects",
    "projects.subtitle": "Some of my most recent and relevant works",
    "projects.viewCode": "Code",
    "projects.viewDemo": "Demo",
    "projects.project1.name": "E-Commerce Platform",
    "projects.project1.desc": "Complete e-commerce platform with admin panel, product management, cart, and checkout integrated with payment gateway.",
    "projects.project2.name": "Task Management System",
    "projects.project2.desc": "Real-time task management system with team collaboration, notifications, and analytical dashboard.",
    "projects.project3.name": "API Gateway Service",
    "projects.project3.desc": "Gateway microservice with authentication, rate limiting, cache, and REST API monitoring.",
    "projects.project4.name": "Social Media Dashboard",
    "projects.project4.desc": "Analytical dashboard for social networks with multi-platform integration and real-time metrics visualization.",
    "projects.project5.name": "Headless CMS",
    "projects.project5.desc": "Headless content management system with GraphQL API, JWT authentication, and customizable admin panel.",
    "projects.project6.name": "DevOps Automation Tool",
    "projects.project6.desc": "Deploy automation and CI/CD tool with AWS integration, monitoring, and automatic rollback.",

    // Experience Section
    "experience.title": "Professional Experience",
    "experience.subtitle": "My professional journey and contributions in different organizations",
    "experience.company1": "Avanade",
    "experience.role1": "Full Stack Developer",
    "experience.period1": "2025 - Present",
    "experience.desc1.1": "Developed and maintained enterprise applications used by 1,500+ employees across multiple business units using Angular, TypeScript, Java, Spring Boot, Node.js, PostgreSQL, and Azure DevOps.",
    "experience.desc1.2": "Designed and implemented 25+ REST APIs with Java Spring Boot and Node.js, reducing integration time between systems by 40%.",
    "experience.desc1.3": "Collaborated within Agile teams delivering software releases every two weeks using Git, CI/CD pipelines, Azure DevOps, and Docker, while maintaining 99.9% system availability.",
    "experience.company2": "SENAI Institute for Innovation (ISI-TICs)",
    "experience.role2": "Full Stack Developer",
    "experience.period2": "2023 - 2025",
    "experience.desc2.1": "Developed and maintained Frevo, an internal management platform supporting 300+ researchers and staff using Angular, TypeScript, Java, Spring Boot, PostgreSQL, and Docker.",
    "experience.desc2.2": "Built 20+ REST APIs and database integrations using Spring Boot, PostgreSQL, and JPA/Hibernate, reducing manual operational processes by 50%.",
    "experience.desc2.3": "Improved application performance by 35% through backend optimization, SQL query tuning, and architectural improvements.",
    "experience.company3": "Data Priority",
    "experience.role3": "Full Stack Developer",
    "experience.period3": "2022 - 2023",
    "experience.desc3.1": "Developed business intelligence and data visualization solutions processing 100,000+ records monthly using React, JavaScript, Node.js, PostgreSQL, and REST APIs.",
    "experience.desc3.2": "Built interactive dashboards and reporting tools using React, HTML5, CSS3, and Chart Libraries, supporting 50+ business stakeholders.",
    "experience.desc3.3": "Implemented API and database integrations using Node.js, PostgreSQL, and Git, reducing report generation time by 60%.",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Interested in working together? Get in touch through any of the channels below",
    "contact.cta": "Let's work together",
    "contact.footer": "© 2026 Vinicius Barbosa. Built with React, Tailwind CSS and Motion.",
  },
  es: {
    // General
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.tech": "Tecnologías",
    "nav.technologies": "Tecnologías",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.available": "Disponible para nuevos proyectos",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Ingeniero de Software Full Stack",
    "hero.description": "Ingeniero de Software Full Stack con 4+ años de experiencia construyendo aplicaciones web, APIs REST y sistemas empresariales usando Java, Spring Boot, Angular, React, Node.js y PostgreSQL.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contact": "Ponerse en Contacto",
    "hero.downloadCV": "Descargar Currículum",

    // About Section
    "about.title": "Acerca de Mí",
    "about.paragraph1": "Ingeniero de Software Full Stack con 4+ años de experiencia construyendo aplicaciones web, APIs REST y sistemas empresariales usando Java, Spring Boot, Angular, React, Node.js y PostgreSQL. Experimentado en desarrollo Ágil, tecnologías cloud y soluciones de software escalables.",
    "about.paragraph2": "Especializado en frameworks frontend como Angular, React y Next.js. En el backend, competente con Java, Spring Boot, Node.js y NestJS. Experiencia sólida con PostgreSQL, MySQL, AWS, Docker y prácticas de CI/CD.",
    "about.paragraph3": "Licenciatura en Ciencias de la Computación de UFRPE (2022-2026). Certificado Microsoft Azure AI Fundamentals (AI-900). Actualmente basado en Dublín, Irlanda.",
    "about.cleanCode": "Código Limpio",
    "about.cleanCodeDesc": "Compromiso con principios SOLID, Clean Code, Design Patterns y arquitectura escalable.",
    "about.innovation": "Innovación",
    "about.innovationDesc": "Siempre actualizado con las últimas tecnologías y tendencias del mercado de desarrollo.",
    "about.collaboration": "Colaboración",
    "about.collaborationDesc": "Experiencia en trabajo en equipo, metodologías ágiles (Scrum) y comunicación efectiva.",

    // Technologies Section
    "tech.title": "Tecnologías & Habilidades",
    "tech.subtitle": "Herramientas y tecnologías que domino para crear soluciones completas y robustas",
    "tech.learning": "Y siempre aprendiendo nuevas tecnologías...",
    "tech.category.frontend": "Frontend",
    "tech.category.backend": "Backend",
    "tech.category.database": "Base de Datos",
    "tech.category.devops": "DevOps",
    "tech.category.cloud": "Nube",
    "tech.category.tools": "Herramientas",

    // Projects Section
    "projects.title": "Proyectos",
    "projects.subtitle": "Algunos de mis trabajos más recientes y relevantes",
    "projects.viewCode": "Código",
    "projects.viewDemo": "Demo",
    "projects.project1.name": "Plataforma E-Commerce",
    "projects.project1.desc": "Plataforma completa de comercio electrónico con panel administrativo, gestión de productos, carrito y checkout integrado con pasarela de pago.",
    "projects.project2.name": "Sistema de Gestión de Tareas",
    "projects.project2.desc": "Sistema de gestión de tareas en tiempo real con colaboración en equipo, notificaciones y panel analítico.",
    "projects.project3.name": "Servicio API Gateway",
    "projects.project3.desc": "Microservicio de gateway con autenticación, limitación de velocidad, caché y monitoreo de APIs REST.",
    "projects.project4.name": "Panel de Redes Sociales",
    "projects.project4.desc": "Panel analítico para redes sociales con integración de múltiples plataformas y visualización de métricas en tiempo real.",
    "projects.project5.name": "CMS Headless",
    "projects.project5.desc": "Sistema de gestión de contenido headless con API GraphQL, autenticación JWT y panel administrativo personalizable.",
    "projects.project6.name": "Herramienta de Automatización DevOps",
    "projects.project6.desc": "Herramienta de automatización de despliegue y CI/CD con integración AWS, monitoreo y rollback automático.",

    // Experience Section
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Mi trayectoria profesional y contribuciones en diferentes organizaciones",
    "experience.company1": "Avanade",
    "experience.role1": "Desarrollador Full Stack",
    "experience.period1": "2025 - Presente",
    "experience.desc1.1": "Desarrolló y mantuvo aplicaciones empresariales usadas por 1.500+ empleados en múltiples unidades de negocio usando Angular, TypeScript, Java, Spring Boot, Node.js, PostgreSQL y Azure DevOps.",
    "experience.desc1.2": "Diseñó e implementó 25+ APIs REST con Java Spring Boot y Node.js, reduciendo el tiempo de integración entre sistemas en un 40%.",
    "experience.desc1.3": "Colaboró en equipos Ágiles entregando releases cada dos semanas usando Git, CI/CD pipelines, Azure DevOps y Docker, manteniendo 99.9% de disponibilidad.",
    "experience.company2": "SENAI Instituto de Innovación (ISI-TICs)",
    "experience.role2": "Desarrollador Full Stack",
    "experience.period2": "2023 - 2025",
    "experience.desc2.1": "Desarrolló y mantuvo Frevo, una plataforma de gestión interna que soporta 300+ investigadores y personal usando Angular, TypeScript, Java, Spring Boot, PostgreSQL y Docker.",
    "experience.desc2.2": "Construyó 20+ APIs REST e integraciones de base de datos usando Spring Boot, PostgreSQL y JPA/Hibernate, reduciendo procesos operacionales manuales en un 50%.",
    "experience.desc2.3": "Mejoró el rendimiento de la aplicación en un 35% mediante optimización del backend, tuning de queries SQL y mejoras arquitectónicas.",
    "experience.company3": "Data Priority",
    "experience.role3": "Desarrollador Full Stack",
    "experience.period3": "2022 - 2023",
    "experience.desc3.1": "Desarrolló soluciones de business intelligence y visualización de datos procesando 100.000+ registros mensualmente usando React, JavaScript, Node.js, PostgreSQL y APIs REST.",
    "experience.desc3.2": "Construyó dashboards interactivos y herramientas de reportes usando React, HTML5, CSS3 y librerías de gráficos, apoyando a 50+ stakeholders de negocio.",
    "experience.desc3.3": "Implementó integraciones de API y base de datos usando Node.js, PostgreSQL y Git, reduciendo el tiempo de generación de reportes en un 60%.",

    // Contact Section
    "contact.title": "Contacto",
    "contact.subtitle": "¿Interesado en trabajar juntos? Ponte en contacto a través de cualquiera de los canales a continuación",
    "contact.cta": "Trabajemos juntos",
    "contact.footer": "© 2026 Vinicius Barbosa. Desarrollado con React, Tailwind CSS y Motion.",
  },
  fr: {
    // General
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.tech": "Technologies",
    "nav.technologies": "Technologies",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.available": "Disponible pour de nouveaux projets",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Ingénieur Logiciel Full Stack",
    "hero.description": "Ingénieur Logiciel Full Stack avec 4+ ans d'expérience dans la création d'applications web, d'APIs REST et de systèmes d'entreprise utilisant Java, Spring Boot, Angular, React, Node.js et PostgreSQL.",
    "hero.viewProjects": "Voir les Projets",
    "hero.contact": "Me Contacter",
    "hero.downloadCV": "Télécharger le CV",

    // About Section
    "about.title": "À Propos de Moi",
    "about.paragraph1": "Ingénieur Logiciel Full Stack avec 4+ ans d'expérience dans la création d'applications web, d'APIs REST et de systèmes d'entreprise utilisant Java, Spring Boot, Angular, React, Node.js et PostgreSQL. Expérimenté en développement Agile, technologies cloud et solutions logicielles évolutives.",
    "about.paragraph2": "Spécialisé dans les frameworks frontend comme Angular, React et Next.js. En backend, compétent avec Java, Spring Boot, Node.js et NestJS. Expérience solide avec PostgreSQL, MySQL, AWS, Docker et pratiques CI/CD.",
    "about.paragraph3": "Licence en Enseignement de l'Informatique de l'UFRPE (2022-2026). Certifié Microsoft Azure AI Fundamentals (AI-900). Actuellement basé à Dublin, Irlande.",
    "about.cleanCode": "Code Propre",
    "about.cleanCodeDesc": "Engagement envers les principes SOLID, Clean Code, Design Patterns et architecture évolutive.",
    "about.innovation": "Innovation",
    "about.innovationDesc": "Toujours à jour avec les dernières technologies et tendances du marché du développement.",
    "about.collaboration": "Collaboration",
    "about.collaborationDesc": "Expérience en travail d'équipe, méthodologies agiles (Scrum) et communication efficace.",

    // Technologies Section
    "tech.title": "Technologies & Compétences",
    "tech.subtitle": "Outils et technologies que je maîtrise pour créer des solutions complètes et robustes",
    "tech.learning": "Et toujours en train d'apprendre de nouvelles technologies...",
    "tech.category.frontend": "Frontend",
    "tech.category.backend": "Backend",
    "tech.category.database": "Base de Données",
    "tech.category.devops": "DevOps",
    "tech.category.cloud": "Cloud",
    "tech.category.tools": "Outils",

    // Projects Section
    "projects.title": "Projets",
    "projects.subtitle": "Certains de mes travaux les plus récents et pertinents",
    "projects.viewCode": "Code",
    "projects.viewDemo": "Démo",
    "projects.project1.name": "Plateforme E-Commerce",
    "projects.project1.desc": "Plateforme e-commerce complète avec panneau d'administration, gestion de produits, panier et paiement intégré avec passerelle de paiement.",
    "projects.project2.name": "Système de Gestion de Tâches",
    "projects.project2.desc": "Système de gestion de tâches en temps réel avec collaboration d'équipe, notifications et tableau de bord analytique.",
    "projects.project3.name": "Service API Gateway",
    "projects.project3.desc": "Microservice de passerelle avec authentification, limitation de débit, cache et surveillance des APIs REST.",
    "projects.project4.name": "Tableau de Bord des Réseaux Sociaux",
    "projects.project4.desc": "Tableau de bord analytique pour réseaux sociaux avec intégration multi-plateforme et visualisation de métriques en temps réel.",
    "projects.project5.name": "CMS Headless",
    "projects.project5.desc": "Système de gestion de contenu headless avec API GraphQL, authentification JWT et panneau d'administration personnalisable.",
    "projects.project6.name": "Outil d'Automatisation DevOps",
    "projects.project6.desc": "Outil d'automatisation de déploiement et CI/CD avec intégration AWS, surveillance et rollback automatique.",

    // Experience Section
    "experience.title": "Expérience Professionnelle",
    "experience.subtitle": "Mon parcours professionnel et contributions dans différentes organisations",
    "experience.company1": "Avanade",
    "experience.role1": "Développeur Full Stack",
    "experience.period1": "2025 - Présent",
    "experience.desc1.1": "Développé et maintenu des applications d'entreprise utilisées par 1 500+ employés dans plusieurs unités commerciales utilisant Angular, TypeScript, Java, Spring Boot, Node.js, PostgreSQL et Azure DevOps.",
    "experience.desc1.2": "Conçu et implémenté 25+ APIs REST avec Java Spring Boot et Node.js, réduisant le temps d'intégration entre systèmes de 40%.",
    "experience.desc1.3": "Collaboré au sein d'équipes Agile livrant des releases toutes les deux semaines utilisant Git, pipelines CI/CD, Azure DevOps et Docker, maintenant 99.9% de disponibilité.",
    "experience.company2": "SENAI Institut d'Innovation (ISI-TICs)",
    "experience.role2": "Développeur Full Stack",
    "experience.period2": "2023 - 2025",
    "experience.desc2.1": "Développé et maintenu Frevo, une plateforme de gestion interne supportant 300+ chercheurs et personnel utilisant Angular, TypeScript, Java, Spring Boot, PostgreSQL et Docker.",
    "experience.desc2.2": "Construit 20+ APIs REST et intégrations de bases de données utilisant Spring Boot, PostgreSQL et JPA/Hibernate, réduisant les processus opérationnels manuels de 50%.",
    "experience.desc2.3": "Amélioré la performance de l'application de 35% par l'optimisation backend, le tuning de requêtes SQL et des améliorations architecturales.",
    "experience.company3": "Data Priority",
    "experience.role3": "Développeur Full Stack",
    "experience.period3": "2022 - 2023",
    "experience.desc3.1": "Développé des solutions de business intelligence et visualisation de données traitant 100 000+ enregistrements mensuels utilisant React, JavaScript, Node.js, PostgreSQL et APIs REST.",
    "experience.desc3.2": "Construit des tableaux de bord interactifs et outils de reporting utilisant React, HTML5, CSS3 et bibliothèques de graphiques, supportant 50+ parties prenantes.",
    "experience.desc3.3": "Implémenté des intégrations d'API et de bases de données utilisant Node.js, PostgreSQL et Git, réduisant le temps de génération de rapports de 60%.",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Intéressé par une collaboration? Contactez-moi via l'un des canaux ci-dessous",
    "contact.cta": "Travaillons ensemble",
    "contact.footer": "© 2026 Vinicius Barbosa. Développé avec React, Tailwind CSS et Motion.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
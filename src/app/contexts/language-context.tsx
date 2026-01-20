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
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    // Hero Section
    "hero.available": "Disponível para novos projetos",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Fullstack Developer",
    "hero.description": "Construindo soluções digitais escaláveis e eficientes com tecnologias modernas",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Entrar em Contato",
    "hero.downloadCV": "Baixar Currículo",
    
    // About Section
    "about.title": "Sobre Mim",
    "about.paragraph1": "Desenvolvedor Fullstack com mais de 5 anos de experiência na criação de aplicações web modernas e escaláveis. Apaixonado por tecnologia e por resolver problemas complexos através de código limpo e eficiente.",
    "about.paragraph2": "Especializado em JavaScript/TypeScript, frameworks modernos como React e Angular no frontend, e Java Spring Boot, PHP Laravel no backend. Experiência sólida em arquitetura de software, práticas DevOps e deployment em cloud (AWS).",
    "about.paragraph3": "Meu foco está em criar soluções que combinam excelência técnica com experiência do usuário excepcional, sempre buscando aprender novas tecnologias e melhores práticas.",
    "about.cleanCode": "Código Limpo",
    "about.cleanCodeDesc": "Compromisso com padrões de código, arquitetura sólida e manutenibilidade de longo prazo.",
    "about.innovation": "Inovação",
    "about.innovationDesc": "Sempre atualizado com as últimas tecnologias e tendências do mercado de desenvolvimento.",
    "about.collaboration": "Colaboração",
    "about.collaborationDesc": "Experiência em trabalho em equipe, metodologias ágeis e comunicação efetiva.",
    
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
    "experience.company1": "Tech Solutions Inc.",
    "experience.role1": "Senior Fullstack Developer",
    "experience.period1": "2022 - Presente",
    "experience.desc1.1": "Liderança técnica no desenvolvimento de aplicações web escaláveis usando React, Node.js e AWS",
    "experience.desc1.2": "Implementação de arquitetura de microserviços reduzindo tempo de deploy em 40%",
    "experience.desc1.3": "Mentoria de equipe de 5 desenvolvedores júnior e pleno",
    "experience.desc1.4": "Integração de CI/CD com GitHub Actions e Docker",
    "experience.company2": "Digital Innovations Ltd.",
    "experience.role2": "Fullstack Developer",
    "experience.period2": "2020 - 2022",
    "experience.desc2.1": "Desenvolvimento de APIs REST robustas com Java Spring Boot e Laravel",
    "experience.desc2.2": "Criação de interfaces modernas e responsivas com Angular e React",
    "experience.desc2.3": "Otimização de queries de banco de dados melhorando performance em 60%",
    "experience.desc2.4": "Participação ativa em code reviews e definição de padrões de código",
    "experience.company3": "StartupTech",
    "experience.role3": "Desenvolvedor Full Stack",
    "experience.period3": "2018 - 2020",
    "experience.desc3.1": "Desenvolvimento fullstack de MVP para startup de fintech",
    "experience.desc3.2": "Implementação de sistema de autenticação e autorização com JWT",
    "experience.desc3.3": "Criação de dashboard administrativo com métricas em tempo real",
    "experience.desc3.4": "Trabalho com metodologia ágil (Scrum) em sprints de 2 semanas",
    
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
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.available": "Available for new projects",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Fullstack Developer",
    "hero.description": "Building scalable and efficient digital solutions with modern technologies",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Get in Touch",
    "hero.downloadCV": "Download Resume",
    
    // About Section
    "about.title": "About Me",
    "about.paragraph1": "Fullstack Developer with over 5 years of experience creating modern and scalable web applications. Passionate about technology and solving complex problems through clean and efficient code.",
    "about.paragraph2": "Specialized in JavaScript/TypeScript, modern frameworks like React and Angular on the frontend, and Java Spring Boot, PHP Laravel on the backend. Solid experience in software architecture, DevOps practices, and cloud deployment (AWS).",
    "about.paragraph3": "My focus is on creating solutions that combine technical excellence with exceptional user experience, always seeking to learn new technologies and best practices.",
    "about.cleanCode": "Clean Code",
    "about.cleanCodeDesc": "Commitment to code standards, solid architecture, and long-term maintainability.",
    "about.innovation": "Innovation",
    "about.innovationDesc": "Always updated with the latest technologies and development market trends.",
    "about.collaboration": "Collaboration",
    "about.collaborationDesc": "Experience in teamwork, agile methodologies, and effective communication.",
    
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
    "experience.company1": "Tech Solutions Inc.",
    "experience.role1": "Senior Fullstack Developer",
    "experience.period1": "2022 - Present",
    "experience.desc1.1": "Technical leadership in developing scalable web applications using React, Node.js, and AWS",
    "experience.desc1.2": "Implementation of microservices architecture reducing deploy time by 40%",
    "experience.desc1.3": "Mentoring team of 5 junior and mid-level developers",
    "experience.desc1.4": "CI/CD integration with GitHub Actions and Docker",
    "experience.company2": "Digital Innovations Ltd.",
    "experience.role2": "Fullstack Developer",
    "experience.period2": "2020 - 2022",
    "experience.desc2.1": "Development of robust REST APIs with Java Spring Boot and Laravel",
    "experience.desc2.2": "Creation of modern and responsive interfaces with Angular and React",
    "experience.desc2.3": "Database query optimization improving performance by 60%",
    "experience.desc2.4": "Active participation in code reviews and code standards definition",
    "experience.company3": "StartupTech",
    "experience.role3": "Full Stack Developer",
    "experience.period3": "2018 - 2020",
    "experience.desc3.1": "Fullstack development of MVP for fintech startup",
    "experience.desc3.2": "Implementation of authentication and authorization system with JWT",
    "experience.desc3.3": "Creation of administrative dashboard with real-time metrics",
    "experience.desc3.4": "Work with agile methodology (Scrum) in 2-week sprints",
    
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
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.available": "Disponible para nuevos proyectos",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Desarrollador Fullstack",
    "hero.description": "Construyendo soluciones digitales escalables y eficientes con tecnologías modernas",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contact": "Ponerse en Contacto",
    "hero.downloadCV": "Descargar Currículum",
    
    // About Section
    "about.title": "Acerca de Mí",
    "about.paragraph1": "Desarrollador Fullstack con más de 5 años de experiencia en la creación de aplicaciones web modernas y escalables. Apasionado por la tecnología y por resolver problemas complejos a través de código limpio y eficiente.",
    "about.paragraph2": "Especializado en JavaScript/TypeScript, frameworks modernos como React y Angular en el frontend, y Java Spring Boot, PHP Laravel en el backend. Experiencia sólida en arquitectura de software, prácticas DevOps e implementación en la nube (AWS).",
    "about.paragraph3": "Mi enfoque está en crear soluciones que combinen excelencia técnica con experiencia de usuario excepcional, siempre buscando aprender nuevas tecnologías y mejores prácticas.",
    "about.cleanCode": "Código Limpio",
    "about.cleanCodeDesc": "Compromiso con estándares de código, arquitectura sólida y mantenibilidad a largo plazo.",
    "about.innovation": "Innovación",
    "about.innovationDesc": "Siempre actualizado con las últimas tecnologías y tendencias del mercado de desarrollo.",
    "about.collaboration": "Colaboración",
    "about.collaborationDesc": "Experiencia en trabajo en equipo, metodologías ágiles y comunicación efectiva.",
    
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
    "experience.company1": "Tech Solutions Inc.",
    "experience.role1": "Desarrollador Fullstack Senior",
    "experience.period1": "2022 - Presente",
    "experience.desc1.1": "Liderazgo técnico en el desarrollo de aplicaciones web escalables usando React, Node.js y AWS",
    "experience.desc1.2": "Implementación de arquitectura de microservicios reduciendo el tiempo de despliegue en 40%",
    "experience.desc1.3": "Mentoría de equipo de 5 desarrolladores junior y semi-senior",
    "experience.desc1.4": "Integración de CI/CD con GitHub Actions y Docker",
    "experience.company2": "Digital Innovations Ltd.",
    "experience.role2": "Desarrollador Fullstack",
    "experience.period2": "2020 - 2022",
    "experience.desc2.1": "Desarrollo de APIs REST robustas con Java Spring Boot y Laravel",
    "experience.desc2.2": "Creación de interfaces modernas y responsivas con Angular y React",
    "experience.desc2.3": "Optimización de consultas de base de datos mejorando el rendimiento en 60%",
    "experience.desc2.4": "Participación activa en revisiones de código y definición de estándares de código",
    "experience.company3": "StartupTech",
    "experience.role3": "Desarrollador Full Stack",
    "experience.period3": "2018 - 2020",
    "experience.desc3.1": "Desarrollo fullstack de MVP para startup de fintech",
    "experience.desc3.2": "Implementación de sistema de autenticación y autorización con JWT",
    "experience.desc3.3": "Creación de panel administrativo con métricas en tiempo real",
    "experience.desc3.4": "Trabajo con metodología ágil (Scrum) en sprints de 2 semanas",
    
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
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.available": "Disponible pour de nouveaux projets",
    "hero.name": "Vinicius Barbosa",
    "hero.role": "Développeur Fullstack",
    "hero.description": "Créer des solutions numériques évolutives et efficaces avec des technologies modernes",
    "hero.viewProjects": "Voir les Projets",
    "hero.contact": "Me Contacter",
    "hero.downloadCV": "Télécharger le CV",
    
    // About Section
    "about.title": "À Propos de Moi",
    "about.paragraph1": "Développeur Fullstack avec plus de 5 ans d'expérience dans la création d'applications web modernes et évolutives. Passionné par la technologie et la résolution de problèmes complexes grâce à un code propre et efficace.",
    "about.paragraph2": "Spécialisé en JavaScript/TypeScript, frameworks modernes comme React et Angular en frontend, et Java Spring Boot, PHP Laravel en backend. Expérience solide en architecture logicielle, pratiques DevOps et déploiement cloud (AWS).",
    "about.paragraph3": "Mon objectif est de créer des solutions qui combinent excellence technique et expérience utilisateur exceptionnelle, tout en cherchant toujours à apprendre de nouvelles technologies et meilleures pratiques.",
    "about.cleanCode": "Code Propre",
    "about.cleanCodeDesc": "Engagement envers les standards de code, architecture solide et maintenabilité à long terme.",
    "about.innovation": "Innovation",
    "about.innovationDesc": "Toujours à jour avec les dernières technologies et tendances du marché du développement.",
    "about.collaboration": "Collaboration",
    "about.collaborationDesc": "Expérience en travail d'équipe, méthodologies agiles et communication efficace.",
    
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
    "experience.company1": "Tech Solutions Inc.",
    "experience.role1": "Développeur Fullstack Senior",
    "experience.period1": "2022 - Présent",
    "experience.desc1.1": "Leadership technique dans le développement d'applications web évolutives utilisant React, Node.js et AWS",
    "experience.desc1.2": "Mise en œuvre de l'architecture de microservices réduisant le temps de déploiement de 40%",
    "experience.desc1.3": "Mentorat d'une équipe de 5 développeurs junior et intermédiaire",
    "experience.desc1.4": "Intégration CI/CD avec GitHub Actions et Docker",
    "experience.company2": "Digital Innovations Ltd.",
    "experience.role2": "Développeur Fullstack",
    "experience.period2": "2020 - 2022",
    "experience.desc2.1": "Développement d'APIs REST robustes avec Java Spring Boot et Laravel",
    "experience.desc2.2": "Création d'interfaces modernes et responsives avec Angular et React",
    "experience.desc2.3": "Optimisation des requêtes de base de données améliorant les performances de 60%",
    "experience.desc2.4": "Participation active aux revues de code et définition des standards de code",
    "experience.company3": "StartupTech",
    "experience.role3": "Développeur Full Stack",
    "experience.period3": "2018 - 2020",
    "experience.desc3.1": "Développement fullstack de MVP pour startup fintech",
    "experience.desc3.2": "Mise en œuvre du système d'authentification et d'autorisation avec JWT",
    "experience.desc3.3": "Création de tableau de bord administratif avec métriques en temps réel",
    "experience.desc3.4": "Travail avec méthodologie agile (Scrum) en sprints de 2 semaines",
    
    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Intéressé par une collaboration? Contactez-moi via l'un des canaux ci-dessous",
    "contact.cta": "Travaillons ensemble",
    "contact.footer": "© 2026 Vinicius Barbosa. Développé avec React, Tailwind CSS et Motion.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

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
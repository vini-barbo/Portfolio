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
    "hero.role": "Desenvolvedor Full Stack Pleno",
    "hero.description": "Construindo aplicações web usando React, Node.js e Java. Entregando soluções escaláveis em ambientes corporativos e de inovação.",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Entrar em Contato",
    "hero.downloadCV": "Baixar Currículo",

    // About Section
    "about.title": "Sobre Mim",
    "about.paragraph1": "Desenvolvedor Full Stack com experiência na construção de aplicações web usando React, Node.js e Java. Sólida experiência no desenvolvimento de APIs REST, integração de bancos de dados e entrega de soluções escaláveis em ambientes corporativos e de inovação.",
    "about.paragraph2": "Especializado em frameworks frontend modernos como React, Next.js, Vue.js e Nuxt.js. No backend, proficiente com Node.js, NestJS, Java e Spring Boot. Experiência sólida com PostgreSQL, AWS e aplicação de princípios SOLID e práticas de Clean Code.",
    "about.paragraph3": "Confortável trabalhando em equipes ágeis e ambientes de startup. Atualmente cursando Licenciatura em Computação na UFRPE e possuo certificações incluindo Microsoft AI-900 e Docker/Kubernetes. Inglês avançado (TOEIC: 840).",
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
    "projects.project1.name": "Quest Lab",
    "projects.project1.desc": "Plataforma educacional moderna para gerenciamento de questões, provas e resoluções. Sistema completo com autenticação, dashboard analítico, criação de questões e acompanhamento de desempenho dos estudantes.",

    // Experience Section
    "experience.title": "Experiência Profissional",
    "experience.subtitle": "Minha trajetória profissional e contribuições em diferentes organizações",
    "experience.company1": "Avanade",
    "experience.role1": "Desenvolvedor Full Stack",
    "experience.period1": "2025 - Presente",
    "experience.desc1.1": "Desenvolveu um Aplicativo Educacional, um sistema de gerenciamento de workflow empresarial usando React e Node.js",
    "experience.desc1.2": "Integrou serviços baseados em Java para automatizar processos internos e melhorar a confiabilidade do sistema",
    "experience.desc1.3": "Tecnologias: Node.js, React, Java",
    "experience.desc1.4": "Focado em aplicações de nível empresarial e arquitetura escalável",
    "experience.company2": "SENAI iSI TCs",
    "experience.role2": "Desenvolvedor Full Stack",
    "experience.period2": "2024 - 2025",
    "experience.desc2.1": "Construiu Frevo, uma plataforma de gerenciamento interno desenvolvida com React, Node.js e PostgreSQL",
    "experience.desc2.2": "Expôs APIs REST e integrou bancos de dados para suportar necessidades operacionais e de relatórios",
    "experience.desc2.3": "Tecnologias: Node.js, React, PostgreSQL",
    "experience.desc2.4": "Focado em automação de processos internos e gerenciamento de dados",
    "experience.company3": "Arena Fantasy",
    "experience.role3": "Desenvolvedor Full Stack",
    "experience.period3": "2023 - 2024",
    "experience.desc3.1": "Trabalhou na Aplicação Web Arena Fantasy, uma aplicação web de esportes de fantasia construída com React e Node.js",
    "experience.desc3.2": "Gerenciou autenticação de usuários, criação de times e dados de jogos em tempo real",
    "experience.desc3.3": "Tecnologias: React, Node.js",
    "experience.desc3.4": "Implementou recursos em tempo real e sistemas de gerenciamento de usuários",
    "experience.company4": "Data Priority",
    "experience.role4": "Desenvolvedor Full Stack",
    "experience.period4": "2023 - 2024",
    "experience.desc4.1": "Contribuiu para o DataSend, um dashboard de visualização de dados desenvolvido com React e Node.js",
    "experience.desc4.2": "Permitiu que usuários visualizassem, filtrassem e gerenciassem dados de negócios de forma eficiente",
    "experience.desc4.3": "Tecnologias: React, Node.js",
    "experience.desc4.4": "Focado em visualização de dados e recursos de business intelligence",
    "experience.company5": "UFRPE",
    "experience.role5": "Estagiário de Ensino de Ciência da Computação",
    "experience.period5": "2022 - 2024",
    "experience.desc5.1": "Contribuiu para o desenvolvimento do PIBID, um programa educacional para ensinar fundamentos de programação",
    "experience.desc5.2": "Ensinou JavaScript e React para estudantes de graduação",
    "experience.desc5.3": "Tecnologias: React, Node.js",
    "experience.desc5.4": "Criou conteúdo educacional e mentorou estudantes em desenvolvimento web",

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
    "hero.role": "Mid-level Full Stack Developer",
    "hero.description": "Building web applications using React, Node.js, and Java. Delivering scalable solutions in enterprise and innovation-driven environments.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Get in Touch",
    "hero.downloadCV": "Download Resume",

    // About Section
    "about.title": "About Me",
    "about.paragraph1": "Full Stack Developer with experience building web applications using React, Node.js, and Java. Strong background in developing REST APIs, integrating databases, and delivering scalable solutions in enterprise and innovation-driven environments.",
    "about.paragraph2": "Specialized in modern frontend frameworks like React, Next.js, Vue.js, and Nuxt.js. On the backend, proficient with Node.js, NestJS, Java, and Spring Boot. Solid experience with PostgreSQL, AWS, and applying SOLID principles and Clean Code practices.",
    "about.paragraph3": "Comfortable working in agile teams and startup environments. Currently pursuing a Bachelor's Degree in Computer Science Education at UFRPE and hold certifications including Microsoft AI-900 and Docker/Kubernetes. Advanced English proficiency (TOEIC: 840).",
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
    "projects.project1.name": "Quest Lab",
    "projects.project1.desc": "Modern educational platform for managing questions, exams, and solutions. Complete system with authentication, analytical dashboard, question creation, and student performance tracking.",

    // Experience Section
    "experience.title": "Professional Experience",
    "experience.subtitle": "My professional journey and contributions in different organizations",
    "experience.company1": "Avanade",
    "experience.role1": "Full Stack Developer",
    "experience.period1": "2025 - Present",
    "experience.desc1.1": "Developed an Educational App, an enterprise workflow management system using React and Node.js",
    "experience.desc1.2": "Integrated Java-based services to automate internal processes and improve system reliability",
    "experience.desc1.3": "Technologies: Node.js, React, Java",
    "experience.desc1.4": "Focused on enterprise-level applications and scalable architecture",
    "experience.company2": "SENAI iSI TCs",
    "experience.role2": "Full Stack Developer",
    "experience.period2": "2024 - 2025",
    "experience.desc2.1": "Built Frevo, an internal management platform developed with React, Node.js and PostgreSQL",
    "experience.desc2.2": "Exposed REST APIs and integrated databases to support operational and reporting needs",
    "experience.desc2.3": "Technologies: Node.js, React, PostgreSQL",
    "experience.desc2.4": "Focused on internal process automation and data management",
    "experience.company3": "Arena Fantasy",
    "experience.role3": "Full Stack Developer",
    "experience.period3": "2023 - 2024",
    "experience.desc3.1": "Worked on Arena Fantasy Web Application, a fantasy sports web application built with React and Node.js",
    "experience.desc3.2": "Handled user authentication, team creation, and real-time game data",
    "experience.desc3.3": "Technologies: React, Node.js",
    "experience.desc3.4": "Implemented real-time features and user management systems",
    "experience.company4": "Data Priority",
    "experience.role4": "Full Stack Developer",
    "experience.period4": "2023 - 2024",
    "experience.desc4.1": "Contributed to DataSend, a data visualization dashboard developed with React and Node.js",
    "experience.desc4.2": "Allowed users to view, filter, and manage business data efficiently",
    "experience.desc4.3": "Technologies: React, Node.js",
    "experience.desc4.4": "Focused on data visualization and business intelligence features",
    "experience.company5": "UFRPE",
    "experience.role5": "Computer Science Teaching Intern",
    "experience.period5": "2022 - 2024",
    "experience.desc5.1": "Contributed to the development of PIBID, an educational program to teach programming fundamentals",
    "experience.desc5.2": "Taught JavaScript and React to undergraduate students",
    "experience.desc5.3": "Technologies: React, Node.js",
    "experience.desc5.4": "Created educational content and mentored students in web development",

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
    "projects.project1.name": "Quest Lab",
    "projects.project1.desc": "Plataforma educativa moderna para gestión de preguntas, exámenes y soluciones. Sistema completo con autenticación, panel analítico, creación de preguntas y seguimiento del rendimiento de los estudiantes.",

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
    "projects.project1.name": "Quest Lab",
    "projects.project1.desc": "Plateforme éducative moderne pour la gestion de questions, examens et solutions. Système complet avec authentification, tableau de bord analytique, création de questions et suivi des performances des étudiants.",

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
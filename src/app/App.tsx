import { LanguageProvider, useLanguage } from "@/app/contexts/language-context";
import { LanguageSelector } from "@/app/components/language-selector";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { TechnologiesSection } from "@/app/components/technologies-section";
import { ProjectsSection } from "@/app/components/projects-section";
import { ExperienceSection } from "@/app/components/experience-section";
import { ContactSection } from "@/app/components/contact-section";

function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              LS
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#sobre" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {t("nav.about")}
              </a>
              <a 
                href="#tecnologias" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {t("nav.technologies")}
              </a>
              <a 
                href="#projetos" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {t("nav.projects")}
              </a>
              <a 
                href="#experiencia" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {t("nav.experience")}
              </a>
              <a 
                href="#contato" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
              >
                {t("nav.contact")}
              </a>
              <LanguageSelector />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSelector />
              <button className="text-gray-400 hover:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
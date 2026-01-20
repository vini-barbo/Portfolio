import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useLanguage } from "@/app/contexts/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Substitua com o link do seu currículo
    const cvUrl = "/curriculo.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Lucas_Silva_Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-2 md:order-1"
          >
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50 animate-pulse" />

              {/* Photo container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border-4 border-background bg-card shadow-2xl">
                <ImageWithFallback
                  src="/profile.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm">
                {t("hero.available")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent"
            >
              {t("hero.name")}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl text-blue-400 mb-6"
            >
              {t("hero.role")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 min-w-[180px]"
              >
                {t("hero.viewProjects")}
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-transparent border border-gray-700 hover:border-blue-600 text-gray-300 hover:text-blue-400 rounded-lg transition-all duration-300 hover:scale-105 min-w-[180px]"
              >
                {t("hero.contact")}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-4 flex justify-center md:justify-start"
            >
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-blue-600/50 hover:bg-blue-600/10 text-blue-400 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                {t("hero.downloadCV")}
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
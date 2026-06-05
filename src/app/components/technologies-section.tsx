import { motion } from "motion/react";
import { useLanguage } from "@/app/contexts/language-context";

const featuredTechnologies = [
  { name: "Java", icon: "/icons/java.svg", category: "backend", description: "Enterprise-grade backend development", color: "#007396" },
  { name: "Angular", icon: "/icons/angular.svg", category: "frontend", description: "Enterprise frontend framework", color: "#DD0031" },
  { name: "React", icon: "/icons/react.svg", category: "frontend", description: "Library for building user interfaces", color: "#61DAFB" },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend", description: "JavaScript runtime for backend development", color: "#339933" },
];

const technologies = [
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "frontend", color: "#3178C6" },
  { name: "Spring Boot", icon: "/icons/spring.svg", category: "backend", color: "#6DB33F" },
  { name: "NestJS", icon: "/icons/nestjs.svg", category: "backend", color: "#E0234E" },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "frontend", color: "#000000" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database", color: "#336791" },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "database", color: "#4479A1" },
  { name: "Docker", icon: "/icons/docker.svg", category: "devops", color: "#2496ED" },
  { name: "AWS", icon: "/icons/aws.svg", category: "cloud", color: "#FF9900" },
  { name: "Git", icon: "/icons/github.svg", category: "tools", color: "#F05032" },
  { name: "Azure DevOps", icon: "/icons/azure.svg", category: "tools", color: "#0078D4" },
];

export function TechnologiesSection() {
  const { t } = useLanguage();

  return (
    <section id="tecnologias" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {t("tech.title")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("tech.subtitle")}
          </p>
        </motion.div>

        {/* Featured Technologies */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredTechnologies.map((tech, index) => {
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border-2 border-blue-600/50 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30 group cursor-pointer relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300 group-hover:scale-110">
                    <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{tech.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30">
                      {t(`tech.category.${tech.category}`)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => {
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 group cursor-pointer"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                    <span className="text-xs text-gray-500">{t(`tech.category.${tech.category}`)}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            {t("tech.learning")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
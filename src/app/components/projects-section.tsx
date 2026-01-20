import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      nameKey: "projects.project1.name",
      descKey: "projects.project1.desc",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      nameKey: "projects.project2.name",
      descKey: "projects.project2.desc",
      technologies: ["Angular", "Spring Boot", "MySQL", "WebSocket"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      nameKey: "projects.project3.name",
      descKey: "projects.project3.desc",
      technologies: ["Java", "Spring Cloud", "Redis", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      nameKey: "projects.project4.name",
      descKey: "projects.project4.desc",
      technologies: ["React", "Laravel", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      nameKey: "projects.project5.name",
      descKey: "projects.project5.desc",
      technologies: ["Next.js", "Node.js", "GraphQL", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      nameKey: "projects.project6.name",
      descKey: "projects.project6.desc",
      technologies: ["Python", "AWS", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projetos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 group"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {t(project.nameKey)}
                </h3>
                
                <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                  {t(project.descKey)}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/10 text-blue-400 text-sm rounded-full border border-blue-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-gray-700 hover:border-blue-600 text-gray-300 hover:text-blue-400 rounded-lg transition-all duration-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    {t("projects.viewCode")}
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t("projects.viewDemo")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
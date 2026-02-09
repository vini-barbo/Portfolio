import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      companyKey: "experience.company1",
      roleKey: "experience.role1",
      periodKey: "experience.period1",
      logo: "/logos/avanade-logo.png",
      descriptionKeys: [
        "experience.desc1.1",
        "experience.desc1.2",
        "experience.desc1.3",
        "experience.desc1.4",
      ],
    },
    {
      id: 2,
      companyKey: "experience.company2",
      roleKey: "experience.role2",
      periodKey: "experience.period2",
      logo: "/logos/senai-logo.png",
      descriptionKeys: [
        "experience.desc2.1",
        "experience.desc2.2",
        "experience.desc2.3",
        "experience.desc2.4",
      ],
    },
    {
      id: 3,
      companyKey: "experience.company3",
      roleKey: "experience.role3",
      periodKey: "experience.period3",
      logo: "/logos/arena-logo.jpeg",
      descriptionKeys: [
        "experience.desc3.1",
        "experience.desc3.2",
        "experience.desc3.3",
        "experience.desc3.4",
      ],
    },
    {
      id: 4,
      companyKey: "experience.company4",
      roleKey: "experience.role4",
      periodKey: "experience.period4",
      logo: "/logos/datapriority-logo.png",
      descriptionKeys: [
        "experience.desc4.1",
        "experience.desc4.2",
        "experience.desc4.3",
        "experience.desc4.4",
      ],
    },
    {
      id: 5,
      companyKey: "experience.company5",
      roleKey: "experience.role5",
      periodKey: "experience.period5",
      logo: "/logos/UFRPE-logo.png",
      descriptionKeys: [
        "experience.desc5.1",
        "experience.desc5.2",
        "experience.desc5.3",
        "experience.desc5.4",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-blue-600/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {t(exp.roleKey)}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{t(exp.companyKey)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{t(exp.periodKey)}</span>
                        </div>
                      </div>
                      {exp.logo && (
                        <div className="ml-4 flex-shrink-0">
                          <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                            <img
                              src={exp.logo}
                              alt={t(exp.companyKey)}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {exp.descriptionKeys.map((descKey, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-blue-400 mt-1.5">▹</span>
                          <span className="leading-relaxed">{t(descKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
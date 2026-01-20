import { motion } from "motion/react";
import { Code2, Rocket, Users } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              {t("about.paragraph1")}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t("about.paragraph2")}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t("about.paragraph3")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <div className="bg-card border border-border rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t("about.cleanCode")}</h3>
              <p className="text-gray-400">
                {t("about.cleanCodeDesc")}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t("about.innovation")}</h3>
              <p className="text-gray-400">
                {t("about.innovationDesc")}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t("about.collaboration")}</h3>
              <p className="text-gray-400">
                {t("about.collaborationDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
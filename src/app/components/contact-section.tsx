import { motion } from "motion/react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export function ContactSection() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      name: "Email",
      value: "vinicius2508@hotmail.com",
      href: "mailto:vinicius2508@hotmail.com",
      icon: Mail,
      color: "text-red-400",
      hoverColor: "hover:border-red-600/50",
    },
    {
      name: "LinkedIn",
      value: "/in/vinicius-barbosa-8204604b",
      href: "https://www.linkedin.com/in/vinicius-barbosa-8204604b/",
      icon: Linkedin,
      color: "text-blue-400",
      hoverColor: "hover:border-blue-600/50",
    },
    {
      name: "GitHub",
      value: "/vini-barbo",
      href: "https://github.com/vini-barbo/",
      icon: Github,
      color: "text-purple-400",
      hoverColor: "hover:border-purple-600/50",
    },
    {
      name: "Portfólio",
      value: "viniciusbarbosa.dev.br",
      href: "https://www.viniciusbarbosa.dev.br",
      icon: ExternalLink,
      color: "text-green-400",
      hoverColor: "hover:border-green-600/50",
    },
  ];

  return (
    <section id="contato" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`bg-card border border-border rounded-lg p-6 ${link.hoverColor} transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 group`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 ${link.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{link.name}</h3>
                    <p className="text-gray-400 text-sm">{link.value}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="mailto:vinicius2508@hotmail.com"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 text-lg font-medium"
          >
            {t("contact.cta")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border text-center text-gray-500 text-sm"
        >
          <p>{t("contact.footer")}</p>
        </motion.div>
      </div>
    </section>
  );
}
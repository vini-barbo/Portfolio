import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";

export function CertificationsSection() {
    const { t } = useLanguage();

    const certifications = [
        {
            id: 1,
            nameKey: "certifications.cert1.name",
            issuerKey: "certifications.cert1.issuer",
            dateKey: "certifications.cert1.date",
            descKey: "certifications.cert1.desc",
            link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
            icon: "🤖",
        },
    ];

    return (
        <section id="certificacoes" className="py-20 px-6 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                        {t("certifications.title")}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t("certifications.subtitle")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-card border border-border rounded-lg p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 group"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-4xl">{cert.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors">
                                            {t(cert.nameKey)}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {t(cert.issuerKey)} • {t(cert.dateKey)}
                                        </p>
                                    </div>
                                    <Award className="w-5 h-5 text-blue-400" />
                                </div>

                                <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                                    {t(cert.descKey)}
                                </p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 hover:border-blue-600 text-blue-400 rounded-lg transition-all duration-300 text-sm mt-auto"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    {t("certifications.viewCert")}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

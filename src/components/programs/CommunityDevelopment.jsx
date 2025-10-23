import { motion } from "framer-motion";

export default function CommunityDevelopment() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">
        C. COMMUNITY DEVELOPMENT – Empowerment through Health, Food Security and Environment Conservation
      </h2>
      <p><strong>Health – Malaria control in Nyabondo, Kisumu County</strong></p>
      <p>
        Malaria remains a major challenge in Nyabondo. ECN collaborates with MOCON CBO, ICIPE, and Karibu Afrika to improve the impact of malaria control initiatives.
      </p>
      <p><strong>Fish farming</strong></p>
      <p>
        Despite drought challenges, training sessions were organized to ensure the sustainability of fish farming — an effective way to control mosquito larvae.
      </p>
      <p><strong>Community Mosquito Day</strong></p>
      <p>
        Over 800 people participated in the event featuring free malaria and HIV testing, awareness campaigns, and community exhibitions.
      </p>
    </motion.section>
  );
}

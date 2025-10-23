import { motion } from "framer-motion";

export default function FamiliaBora() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">FAMILIA BORA FOSTER CARE PROGRAMME</h2>
      <p>
        In collaboration with CFFK and DCS, ECN supports Kenya’s National Care Reform Strategy (NCRS), which transitions
        from institutional care to family and community-based care systems.
      </p>
      <p>
        The programme focuses on Kiambu County (Githunguri Sub-county) and Kajiado County (Kajiado North Sub-county)
        through the L4C initiative and Foster Collaborative Initiative.
      </p>
      <p>
        It aims to promote and protect vulnerable children’s rights to family-based care in line with the UN Guidelines and Kenya’s Children Act 2022.
      </p>
    </motion.section>
  );
}

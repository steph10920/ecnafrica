import { motion } from "framer-motion";

export default function ChildProtection() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">
        B. CHILD PROTECTION – Alternative Care and Participatory Learning
      </h2>
      <p>
        We believe it’s possible to rescue every child from the streets and enable them to live to their full potential through relevant education.
        We identify what has separated the child from the protection of family to the street and focus our effort on the root causes.
      </p>
      <p>
        Character development, resilience and leadership are central to our service. Hence, we equip a child to succeed by building internal qualities
        based on positive values. As children develop strong personal qualities, they are better able to maximize opportunities and become creative.
      </p>
      <p><strong>Every child in the streets has a unique story... Therefore, the solution for every child is unique.</strong></p>
      <p>
        We believe that the best place for any child is in a family setup that loves and takes care of their basic needs.
        We therefore endeavour to reintegrate children into biological families, kinship care, or foster care where possible.
      </p>
    </motion.section>
  );
}

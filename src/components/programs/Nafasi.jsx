import { motion } from "framer-motion";

export default function Nafasi() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">NAFASI PROGRAMME</h2>
      <p>
        Nafasi is a Swahili word that means ‘space’ and ‘opportunity’. It is the name given to our social programme that has a mission to reduce
        the number of children, youth, and families living on the streets. We journey with children and youth living on the streets to explore
        spaces and opportunities in society where they can survive and thrive.
      </p>
      <p>
        The programme begins by helping children, youth and their families to find survival opportunities on the streets.
        It then facilitates safe rehabilitation opportunities and explores innovative paths for full reintegration and potential development.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>Improve social protection to safeguard welfare of children and youth living in the streets.</li>
        <li>Increase sustainable reintegration of vulnerable children and youth through alternative family-based care and opportunities.</li>
      </ul>
    </motion.section>
  );
}

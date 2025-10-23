import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">
        A. EDUCATION – System Strengthening for Innovative Learning Opportunities
      </h2>
      <p>
        We strive to transform schools/learning institutions to become catalysts for the desired social change,
        responsive agents that activate local communities to become proactive <strong>because we believe that;</strong>
      </p>
      <blockquote className="pl-4 border-l-4 border-blue-700 italic">
        “Access to quality and inclusive education enables children and families to become lifelong learners,
        transform their communities, protect themselves from exploitation and explore all the potentials of life.”
      </blockquote>
      <p><strong>and that.....</strong></p>
      <p>
        “An educative community is a teacher of all the people who live in it. The community is a teacher in the sense
        that it is a continuous learning setting in which people’s attitudes, talents, and behaviors are influenced.
        Hence a school as part of the educational system can help the community become a better teacher for the generation
        of innovative opportunities. It can facilitate the interaction of the community members and the educational system
        for the betterment of all. The community is potentially a living, learning laboratory that needs to be activated.”
      </p>
      <p><strong>Are you ready?</strong></p>
      <p>
        To explore creative ways of learning, to capacity build agents of change, to provide leadership in the generation of knowledge
        that is relevant to the local African context. Join us! Karibu.
      </p>
    </motion.section>
  );
}

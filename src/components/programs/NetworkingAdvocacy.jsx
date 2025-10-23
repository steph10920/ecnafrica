import { motion } from "framer-motion";

export default function NetworkingAdvocacy() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">Networking and Advocacy</h2>
      <p>
        This is a component that cuts across all our initiatives to ensure maximum impact for our beneficiaries.
        Through advocacy at County and Sub-county Levels, we sensitize decision-makers on the rights and needs of children.
        We also support children and young people to actively participate in the decision-making processes as protagonists of their lives.
        In addition, we strive to build the capacity of community networks to conduct advocacy efforts for the implementation of children’s rights
        according to national and international standards.
      </p>
      <p>
        Since inception, ECN has used the blog to highlight key issues affecting children in Kenya and around the world.
        It has proven to be a powerful tool for sharing information and influencing learning for stakeholders through articles focusing on our target areas.
        This has facilitated the safeguarding of children’s rights and the advocacy for their best interests.
      </p>
    </motion.section>
  );
}

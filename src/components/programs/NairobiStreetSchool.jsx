import { motion } from "framer-motion";

export default function NairobiStreetSchool() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold">
        NAIROBI STREET SCHOOL – Education Alternatives for Children in the Streets
      </h2>
      <p>
        ECN was founded as a response to the educational needs of children on the streets that educators had come to know over the years in Nairobi, Kenya.
      </p>
      <p>
        The programme is currently on-going in the STREET BASES of Nairobi and endeavours to promote the right to education and child protection objective of ECN.
      </p>
      <p>
        The mobile school is a safe space where street-connected children and youth are able to explore their talents, interests and dreams.
        They are empowered and motivated to take their lives in their own hands and make their own decisions for a sustainable future.
      </p>
      <p>
        Join us every week on this beautiful adventure of exploring and discovering street education.
      </p>
    </motion.section>
  );
}

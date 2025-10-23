import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-700"
        >
          About ECN
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 mb-4 text-lg leading-relaxed"
        >
          Elimu community network (ECN) is a Non- Governmental learning organization based in Kenya. Since 2012, ECN has helped in safeguarding the rights of vulnerable children and empowering their families by promoting quality and best practices in education for sustainable community development.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 mb-4"
        >
          We believe that relevant and quality inclusive education is a powerful tool for:
        </motion.p>

        <motion.ul
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="list-disc list-inside text-gray-700 mb-6 space-y-2"
        >
          <li className="hover:translate-x-2 transition-transform duration-300">
            Facilitating the discovery of unique potentials within all children in their journey of self-awareness
          </li>
          <li className="hover:translate-x-2 transition-transform duration-300">
            Developing efficient schools as creative systems that promptly respond to evolving needs from children, family, and communities
          </li>
          <li className="hover:translate-x-2 transition-transform duration-300">
            Generating innovative solutions for resolving social challenges within the framework of educative communities
          </li>
        </motion.ul>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 mb-4"
        >
          <strong>Elimu</strong> in Swahili means <strong>EDUCATION</strong>.
        </motion.p>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Vision</h2>
          <p className="text-gray-700 mb-4">
            Every child grows to full potential in resilient families within a supportive educational and community environment.
          </p>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Mission</h2>
          <p className="text-gray-700 mb-4">
            We establish creative safe spaces for children. We facilitate the process of placing vulnerable children in caring and resilient families. We promote access to relevant inclusive education and the development of sustainable opportunities in communities.
          </p>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Values</h2>
          <ul className="text-gray-700 list-disc list-inside mb-6">
            {["Service", "Integrity", "Creativity", "Grit", "Collaboration"].map((value, i) => (
              <li
                key={i}
                className="transition-all duration-300 hover:text-blue-700 hover:translate-x-2"
              >
                {value}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-4">
            Through <strong>educational programs</strong>, ECN focuses on:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li className="transition-transform duration-300 hover:translate-x-2">
              Rescuing street-connected children and supporting OVCs to access appropriate alternative care and learning services to safeguard their rights.
            </li>
            <li className="transition-transform duration-300 hover:translate-x-2">
              Creating innovative learning alternatives to explore the full potential of education institutions and educators/child practitioners in cultivating a culture of lifelong learning for children, families, and local communities.
            </li>
            <li className="transition-transform duration-300 hover:translate-x-2">
              Enhancing community development through empowerment initiatives that strengthen health, food security, and environmental conservation systems.
            </li>
          </ul>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Regions</h2>
          <ul className="text-gray-700 list-disc list-inside mb-6">
            <li className="transition-transform duration-300 hover:translate-x-2">
              Nairobi region: Nairobi, Kajiado, Machakos, Kiambu
            </li>
            <li className="transition-transform duration-300 hover:translate-x-2">
              Coastal region: Mombasa, Kilifi, Kwale, Tana River
            </li>
            <li className="transition-transform duration-300 hover:translate-x-2">
              Western region: Busia, Kakamega, Vihiga, Kisumu
            </li>
          </ul>
        </motion.section>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700"
        >
          Contact us at <strong>elimu.communitynetwork@gmail.com</strong> or visit{" "}
          <a
            href="https://www.facebook.com/elimucommunitynetwork/"
            className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
          >
            our Facebook page
          </a>.
        </motion.p>
      </main>

      <Footer />
    </div>
  );
}

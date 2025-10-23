import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Programs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-32 space-y-16">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-700 text-center"
        >
          Our Programmes
        </motion.h1>

        {/* Networking and Advocacy */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Networking and Advocacy
          </h2>
          <p>
            This is a component that cuts across all our initiatives to ensure maximum impact for our beneficiaries.
            Through advocacy at County and Sub-county Levels, we sensitize decision-makers on the rights and needs of children.
            We also support children and young people to actively participate in the decision-making processes as protagonists of their lives.
            In addition, we strive to build the capacity of community networks to conduct advocacy efforts for the implementation of children’s rights according to national and international standards.
          </p>
          <p>
            Since inception, ECN has used the blog to highlight key issues affecting children in Kenya and around the world.
            It has proven to be a powerful tool for sharing information and influencing learning for stakeholders through articles focusing on our target areas.
            This has facilitated the safeguarding of children’s rights and the advocacy for their best interests.
          </p>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            A. EDUCATION – System Strengthening for Innovative Learning Opportunities
          </h2>
          <p>
            We strive to transform schools/learning institutions to become catalysts for the desired social change,
            responsive agents that activate local communities to become proactive <strong>because we believe that;</strong>
          </p>
          <blockquote className="pl-4 border-l-4 border-blue-700 italic bg-blue-50 py-2 px-4 rounded-lg shadow-sm">
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

        {/* Nairobi Street School */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
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

        {/* Child Protection */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
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

        {/* Nafasi Programme */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">NAFASI PROGRAMME</h2>
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
            <li className="transition-transform duration-300 hover:translate-x-2">
              Improve social protection to safeguard welfare of children and youth living in the streets.
            </li>
            <li className="transition-transform duration-300 hover:translate-x-2">
              Increase sustainable reintegration of vulnerable children and youth through alternative family-based care and opportunities.
            </li>
          </ul>
        </motion.section>

        {/* Familia Bora */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            FAMILIA BORA FOSTER CARE PROGRAMME
          </h2>
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

        {/* Community Development */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
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
      </main>

      <Footer />
    </div>
  );
}

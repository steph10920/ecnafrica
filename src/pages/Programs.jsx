import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const Navbar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading navbar...</div>}>
        <Navbar />
      </Suspense>

      <main className="max-w-6xl mx-auto px-6 py-24 animate-fade-in space-y-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-700 text-center"
        >
          Our Programmes
        </motion.h1>

        {[
          {
            title: "Networking and Advocacy",
            body: `This component cuts across all our initiatives... building the capacity of community networks to advocate for children’s rights.`,
          },
          {
            title: "A. EDUCATION – System Strengthening for Innovative Learning Opportunities",
            body: `We strive to transform schools into catalysts for social change... Join us in creating educative communities.`,
          },
          {
            title: "NAIROBI STREET SCHOOL – Education Alternatives for Children in the Streets",
            body: `Founded to meet the educational needs of street-connected children in Nairobi, providing safe spaces for learning and growth.`,
          },
          {
            title: "B. CHILD PROTECTION – Alternative Care and Participatory Learning",
            body: `We rescue children from the streets, focusing on family reintegration and character development for long-term growth.`,
          },
          {
            title: "NAFASI PROGRAMME",
            body: `A social initiative reducing street-connected youth by creating opportunities for survival, rehabilitation, and reintegration.`,
          },
          {
            title: "FAMILIA BORA FOSTER CARE PROGRAMME",
            body: `Supporting Kenya’s National Care Reform Strategy to move from institutional to family-based child care.`,
          },
          {
            title: "C. COMMUNITY DEVELOPMENT – Empowerment through Health, Food Security and Environment Conservation",
            body: `Collaborating with local partners to fight malaria, promote fish farming, and host community awareness events.`,
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-blue-700">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.body}</p>
          </motion.section>
        ))}
      </main>

      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

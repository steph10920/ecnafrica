import { motion } from "framer-motion";
import { Lightbulb, Users, HeartHandshake, Globe } from "lucide-react";

export default function StrategicFocus() {
  const focuses = [
    {
      icon: <Lightbulb className="w-10 h-10 text-green-700" />,
      title: "Education & Learning Innovation",
      desc: "Reimagining education as a lifelong process that empowers children, youth, and women to unlock their full potential through creative, inclusive, and practical learning pathways.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-700" />,
      title: "Child Protection & Family Reintegration",
      desc: "Strengthening community-based systems to prevent child neglect, rescue street-connected children, and support their reintegration into safe and nurturing family environments.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-green-700" />,
      title: "Youth Empowerment & Livelihoods",
      desc: "Using sports, skills training, and mentorship as transformative tools to help youth discover purpose, develop resilience, and pursue meaningful livelihoods.",
    },
    {
      icon: <Globe className="w-10 h-10 text-green-700" />,
      title: "Community Development & Sustainability",
      desc: "Supporting families and communities through programs on food security, health, and environmental stewardship for sustainable transformation.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
        >
          Our Strategic Focus
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          ECN’s strategy is rooted in the belief that transformation begins when education connects
          with community, creativity, and compassion. Our focus areas integrate learning with social
          action to create holistic impact.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {focuses.map((focus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">{focus.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">{focus.title}</h3>
              <p className="text-gray-600 leading-relaxed">{focus.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

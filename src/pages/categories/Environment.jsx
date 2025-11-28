import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Footer from "../../components/Footer";
import { ArrowUp, TreeDeciduous, Recycle, Sprout, Leaf, Users } from "lucide-react";

import tree1 from "../../assets/environment/trees1.jpg";
import tree2 from "../../assets/environment/trees2.jpg";
import clean1 from "../../assets/environment/clean1.jpg";
import clean2 from "../../assets/environment/clean2.jpg";
import climate1 from "../../assets/environment/climate1.jpg";
import climate2 from "../../assets/environment/climate2.jpg";
import waste1 from "../../assets/environment/waste1.jpg";
import waste2 from "../../assets/environment/waste2.jpg";
import workshop1 from "../../assets/environment/workshop1.jpg";
import workshop2 from "../../assets/environment/workshop2.jpg";
import tree3 from "../../assets/environment/trees3.jpg";
import tree4 from "../../assets/environment/trees4.jpg";



export default function Environment() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openActivity, setOpenActivity] = useState(null);

  const treeImages = [tree1, tree2, tree3, tree4];

  const impactStats = [
    { label: "Trees Planted", value: 1200 },
    { label: "Schools Greened", value: 45 },
    { label: "Community Members Engaged", value: 800 },
    { label: "Clean-up Campaigns", value: 30 },
  ];

  const activityList = [
    {
      text: "Tree planting and greening schools",
      icon: <TreeDeciduous className="text-green-700 w-6 h-6" />,
      description:
        "We plant trees in schools and community spaces, teaching participants about the importance of urban greenery and biodiversity.",
      images: [tree1, tree2],
    },
    {
      text: "Waste management education & recycling drives",
      icon: <Recycle className="text-green-700 w-6 h-6" />,
      description:
        "Community workshops and drives to educate on proper waste segregation, recycling, and reducing plastic use.",
      images: [waste1, waste2],
    },
    {
      text: "Climate change awareness & advocacy",
      icon: <Leaf className="text-green-700 w-6 h-6" />,
      description:
        "Programs to raise awareness on climate change, carbon footprint reduction, and sustainable living practices.",
      images: [climate1, climate2],
    },
    {
      text: "Community clean-ups & action days",
      icon: <Users className="text-green-700 w-6 h-6" />,
      description:
        "Hands-on clean-up days in local communities to restore rivers, streets, and public spaces.",
      images: [clean1, clean2],
    },
    {
      text: "Eco-literacy youth workshops",
      icon: <Sprout className="text-green-700 w-6 h-6" />,
      description:
        "Youth-focused workshops to teach environmental literacy, eco-friendly habits, and leadership in sustainability.",
      images: [workshop1, workshop2],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-green-50 via-white to-green-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center scale-105 brightness-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-xl">
            Environment & Sustainability
          </h1>
          <p className="text-lg md:text-2xl text-green-100 max-w-3xl mx-auto mt-4">
            Empowering communities to restore nature, promote climate awareness, and build a greener future.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto py-20 px-6 space-y-24">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-green-700 mb-4">Our Vision</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            To create thriving communities where environmental sustainability is a shared responsibility and where nature and people coexist in balance.
          </p>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-green-700 text-center mb-10">Our Key Activities</h2>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 mb-10">
            Our environmental activities are hands-on, interactive, and community-driven. Each program teaches practical sustainability skills while bringing people together.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white shadow-xl rounded-2xl p-6 border border-green-100 hover:shadow-2xl transition cursor-pointer overflow-hidden"
              >
                <div
                  className="flex items-center justify-between gap-4 cursor-pointer"
                  onClick={() => setOpenActivity(openActivity === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.3 }}>
                      {item.icon}
                    </motion.div>
                    <p className="text-lg font-semibold">{item.text}</p>
                  </div>
                  {/* Plus/minus indicator */}
                  <span className="text-green-700 font-bold text-2xl select-none">
                    {openActivity === i ? "-" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {openActivity === i && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${item.text} ${idx + 1}`}
                            className="rounded-xl shadow-md object-cover w-full h-48"
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tree Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-green-700 text-center mb-10">Tree Planting Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treeImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Tree planting ${i + 1}`}
                className="rounded-3xl shadow-lg object-cover w-full h-64 hover:opacity-90 transition"
                whileHover={{ scale: 1.04 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Impact Section */}
        <section className="bg-green-700 text-white py-20 rounded-3xl shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Our Environmental Impact</h2>
            <p className="text-green-100 max-w-3xl mx-auto text-lg">
              Through partnerships, volunteers, and community engagement, we are making measurable progress in environmental restoration.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {impactStats.map((stat, i) => (
              <div key={i} className="bg-green-600/40 rounded-2xl p-6 shadow-inner">
                <CountUp end={stat.value} duration={4} className="text-5xl font-bold" />
                <p className="text-xl mt-2 text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-800 rounded-3xl py-14 px-6 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Be Part of the Green Movement</h3>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-green-100">
            Every tree planted and every volunteer effort contributes to a sustainable Africa. Join us today and help build a healthier planet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:education@ecnafrica.org?subject=Volunteer"
              className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-50 transition"
            >
              Volunteer Today
            </a>
            <a
              href="/donate"
              className="bg-green-900 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-950 transition"
            >
              Support With a Donation
            </a>
          </div>
        </section>
      </main>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import FishingPhoto1 from "../assets/fishing1.jpg";
import FishingPhoto2 from "../assets/fishing2.jpg";

export default function BlueHorizons() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🔹 Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-800 to-sky-600 text-white py-24 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Blue Horizons: Youth for Sustainable Fishing and Innovation
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Empowering the Next Generation to Transform Lake Victoria’s Future
        </p>
      </section>

      {/* 🔹 Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-12 text-gray-700">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-sky-700">
            Turning the Tide in Busia County
          </h2>
          <p className="leading-relaxed">
            Along the shores of Lake Victoria, in Runyu Village, a generation of young people faces 
            an uncertain future. Most have dropped out of school, struggling to survive through precarious 
            fishing, often caught in cycles of poverty, drug abuse, and disease.
          </p>
          <p>
            Yet, beneath these challenges lies something powerful, Their potential.
          </p>
          <p className="leading-relaxed">
            At Elimu Community Network (ECN), we believe that when young people are given the tools to learn, 
            innovate, and lead, they can turn survival into sustainability and despair into discovery.
          </p>
          <p className="leading-relaxed">
            That’s why we launched Blue Horizons.  A ground breaking youth initiative designed to reshape the 
            fishing industry through education, technology, and entrepreneurship.
          </p>
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">
            What We Do
          </h2>
          <p className="leading-relaxed">
            Blue Horizons empowers vulnerable youth to become champions of sustainable fishing, innovation, and community development.<br />
            Through hands-on learning and mentorship, the program explores the entire fishing value chain, from sustainable 
            practices to high-tech solutions and business creation.<br />
            Our approach blends traditional wisdom with modern technology, creating a model of learning that is both relevant and transformative.
          </p>           
         </motion.div>

        {/* Our Approach */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">
            Our Approach
          </h2>
          <ul className="list-disc list-inside space-y-3 pl-2">
            <li>
              <strong>Sustainable Fishing Education:</strong><br /> We train youth on eco-friendly fishing 
              practices, lake conservation, and community stewardship.
            They learn to protect biodiversity, use the right tools, and safeguard the lake’s ecosystem by 
            ensuring that fishing today does not destroy tomorrow.<br />
            “We teach them to fish but also to think, innovate, and sustain.”
            </li>
            <li>
              <strong>Technology Meets Tradition: </strong><br /> At our solar-powered digital training hub in Runyu 
              Village, young people gain essential ICT and AI skills.
                They learn how to use data and technology to map fish resources, improve marketing, and apply artificial 
                intelligence in managing fisheries.<br />
                From digital literacy to AI for aquaculture, this is where the future of fishing goes smart.
            </li>
            <li>
              <strong>Value Addition and Entrepreneurship</strong><br /> Fishing is more than catching fish, it’s about creating value.<br />
            Youth are trained to process, dry, and package fish sustainably, while also exploring innovative by-products like fish oil, 
            animal feed, and organic fertilizer.<br />  
            They also receive coaching in entrepreneurship, cooperative formation, and financial literacy, turning their skills into sustainable businesses.

            </li>
            <li>
              <strong>Connecting to Markets</strong><br /> ECN builds market linkages between youth-led enterprises and major cities like 
              Kisumu, Nairobi, and Mombasa.<br />   
            Future phases will expand across Uganda and Tanzania, building a vibrant East African network of young innovators in the blue economy.<br />    
            This is how local talent becomes regional impact.

            </li>
          </ul>
        </motion.div>

        {/* Our Impact Goals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">
            Our Impact Goals
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
            <li>Train 30 youth (20 young men and 10 young women) from Runyu Village in sustainable fishing and digital skills.</li>
            <li>Support creation of 5 youth-led enterprises along the fishing value chain.</li>
            <li>Promote environmental stewardship and responsible use of Lake Victoria’s resources.</li>
            <li>Reduce unemployment, drug use, and illegal fishing through meaningful livelihoods.</li>
        </ol> 
          
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={FishingPhoto1}
              alt="Youth engaged in sustainable fishing"
              className="rounded-2xl shadow-md"
            />
            <img
              src={FishingPhoto2}
              alt="Marine conservation and training"
              className="rounded-2xl shadow-md"
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="bg-sky-100 p-6 rounded-2xl border-l-4 border-sky-700 shadow-sm"
        >
            <h2 className="text-2xl font-semibold text-sky-700 mb-3">
            Why It Matters
          </h2>
          <p className="italic text-sky-800 text-lg">
            Every fish caught, every app coded, every business started becomes a ripple of change.<br />
            Blue Horizons is more than a program; it’s a movement.<br />
            A movement of young people reclaiming their dignity, redefining their future, and restoring balance 
            to one of Africa’s greatest natural treasures.
          </p>
          <p className="text-right font-semibold text-sky-700 mt-2">
            “Teach a youth to fish wisely, and you feed generations while saving the lake.” — ECN– Elimu Community Network (ECN)
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-4">
            Join the Blue Horizons Movement
          </h3>
          <p className="mb-6">
            Partner with us to power the next generation of innovators, entrepreneurs, and lake stewards.<br />
            Together, we can build a sustainable blue economy one where education, technology, and opportunity meet at the water’s edge.

          </p>
          <a
            href="/contact"
            className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl transition duration-300"
          >
            Get Involved
          </a>
        </motion.div>
      </section>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-sky-700 text-white p-3 rounded-full shadow-lg hover:bg-sky-800 transition duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { BookOpen, Heart, Users, Star } from "lucide-react";
import CountUp from "react-countup";
import Footer from "../components/Footer";

// Import project images
import dheader from "../assets/dheader.png";
import treePlanting from "../assets/tree-planting.jpg";
import arts from "../assets/arts.jpg";
import healthCamp from "../assets/health-camp.jpg";
import skillsWorkshop from "../assets/skills-workshop.jpg"; 
import amrefLogo from "../assets/amref.png";

export default function Donate() {
  const donors = [
    { name: "Emeldah E.", message: "Donating to ECN has changed lives in our community!" },
    { name: "James K.", message: "I love supporting ECN’s programs for education." },
    { name: "Mary T.", message: "Seeing the impact firsthand makes every shilling worth it." },
  ];

  const causes = [
    { title: "Education", description: "Support quality education initiatives and school programs.", icon: <BookOpen size={28} className="text-green-600" /> },
    { title: "Health", description: "Help provide healthcare, nutrition, and wellness programs.", icon: <Heart size={28} className="text-red-500" /> },
    { title: "Youth Empowerment", description: "Enable skills development, mentorship, and community engagement.", icon: <Users size={28} className="text-blue-500" /> },
  ];

  const impactStats = [
    { label: "Volunteers", value: 120, icon: <Users size={28} /> },
    { label: "Learners reached", value: 4500, icon: <BookOpen size={28} /> },
    { label: "Projects funded", value: 32, icon: <Star size={28} /> },
    { label: "Program satisfaction", value: 98, icon: <Heart size={28} /> },
  ];

  const projects = [
    { title: "Arts & Craft", img: arts },
    { title: "Community Health Camp", img: healthCamp },
    { title: "Youth Skills Workshop", img: skillsWorkshop },
    { title: "Tree Planting Initiative", img: treePlanting },
  ];

  const partners = [
  {
    name: "Amref Health Africa",
    url: "https://amref.org/",
    logo: amrefLogo,
  },
];


  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Helmet>
        <title>Donate | ECN Africa</title>
        <meta
          name="description"
          content="Support ECN Africa and help transform communities through education, health, and youth empowerment programs."
        />
      </Helmet>

      {/* HERO */}
      <header
        className="bg-green-600 text-white py-24 text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${dheader})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Support ECN Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Your support helps us empower communities through education, health, and youth programs.
            We invite you to contact us to discuss your contribution.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = "mailto:education@ecnafrica.org"}
            className="mt-8 px-8 py-3 rounded-full bg-white text-green-700 font-bold shadow-lg hover:scale-[1.02] transition"
          >
            Contact Us to Donate
          </motion.button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-12 flex flex-col gap-16">

        {/* Causes Section */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Donation Causes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {causes.map((cause, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition flex flex-col items-start gap-4"
              >
                {cause.icon}
                <h3 className="text-xl font-bold text-green-700">{cause.title}</h3>
                <p className="text-gray-700">{cause.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Donor Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">What Donors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donors.map((donor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02, shadow: "0 10px 20px rgba(0,0,0,0.12)" }}
                className="bg-white p-6 rounded-2xl shadow border border-green-100"
              >
                <p className="text-gray-700">"{donor.message}"</p>
                <p className="mt-3 font-semibold text-green-700">- {donor.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Snapshot */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Impact Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center gap-2"
              >
                {stat.icon}
                <div className="text-2xl font-bold">
                  <CountUp end={stat.value} duration={2} separator="," />{stat.label === "Program satisfaction" ? "%" : ""}
                </div>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Completed */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Projects Completed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-3xl shadow-lg border border-green-100 cursor-pointer"
              >
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-green-700">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-6 text-center rounded-3xl shadow-lg">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Ready to Make a Difference?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Join us in transforming communities! Reach out today to explore how your support can empower education, health, and youth programs across Africa.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = "mailto:education@ecnafrica.org"}
            className="mt-8 px-8 py-3 rounded-full bg-white text-green-700 font-bold shadow-lg hover:scale-[1.02] transition"
          >
            Contact Us to Donate
          </motion.button>
        </section>

        {/* PARTNERS SECTION */}
        <section className="py-12 px-6 md:px-12">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Partners</h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {partners.map((partner, i) => (
              <motion.a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white rounded-2xl shadow-lg border border-green-100 flex items-center justify-center w-40 h-20"
              >
                <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain h-full"
                />
                
              </motion.a>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

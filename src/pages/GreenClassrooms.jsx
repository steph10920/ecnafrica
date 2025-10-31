import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

// ✅ Local images (hero slides)
import Slide1 from "../assets/greenclassroom1.jpg";
import Slide2 from "../assets/greenclassroom2.jpg";
import Slide3 from "../assets/greenclassroom3.jpg";
import BeforePhoto from "../assets/community-before.jpg";
import AfterPhoto from "../assets/community-after.jpg";
import green1 from "../assets/greenclassroom1.jpg";
import green2 from "../assets/greenclassroom3.jpg";




export default function GreenClassrooms() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  const slides = [Slide1, Slide2, Slide3];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Show "scroll to top" button
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ✅ Card data (no images)
  const cards = [
    {
      title: "Before: Flooded Landscapes",
      description:
        "Communities in Budalangi faced recurring floods, soil erosion, and crop failure, threatening education and livelihoods.",
    },
    {
      title: "After: Thriving Green Belts",
      description:
        "Tree planting and schoolyard greening projects reduced flooding, restored soil fertility, and provided shade and food sources.",
    },
    {
      title: "Education in Action",
      description:
        "Students turn theory into practice through activities like tree nursery management, recycling, and water conservation lessons.",
    },
    {
      title: "Community Partnerships",
      description:
        "ECN collaborates with schools, parents, and local governments to promote environmental literacy and climate resilience.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* ✅ Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-bold mb-4"
          >
            GREEN CLASSROOMS FOR COMMUNITY RESILIENCE
          </motion.h1>
          <p className="text-lg sm:text-2xl font-medium">
            Education for a Greener and Sustainable Future
          </p>
        </div>
      </section>

      {/* ✅ Project Overview */}
      <section className="py-12 px-6 sm:px-12 bg-green-50 text-gray-700">
        <div className="max-w-5xl mx-auto text-center mb-12 space-y-4">
          <motion.h2
            className="text-3xl font-bold text-green-700 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About the Initiative
          </motion.h2>

          <p className="text-lg leading-relaxed">
            The Green Classrooms initiative connects environmental education with community 
            action. It teaches children and families to protect nature while meeting daily 
            needs through sustainable practices like tree planting, recycling, and water conservation.
          </p>
          <p className="text-lg leading-relaxed">
            Each classroom becomes a living lab where students learn how trees prevent soil erosion, 
            improve rainfall, and provide food and medicine. In Busia’s flood-prone Budalangi area, 
            ECN-led tree planting projects have reduced flooding and improved soil fertility — turning 
            vulnerability into opportunity.
          </p>
          <p className="text-lg leading-relaxed">
            Through partnerships with schools and local governments, ECN integrates environmental literacy 
            into school curricula, nurturing young eco-leaders who care for both people and the planet.
          </p>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-blue-700">
            “The environment is in us, not outside of us. The trees are our lungs, the rivers our bloodstream. 
            We are all interconnected.” — Wangari Maathai
          </blockquote>

          <h3 className="text-xl font-semibold text-green-700 mt-6">WHY TREES?</h3>
          <blockquote className="border-l-4 border-green-500 pl-4 italic text-blue-700 mb-6">
            “Trees exhale for us so that we can inhale them to stay alive. Can we ever forget 
            that? Let us love trees with every breath we take until we perish.” — Munia Khan
          </blockquote>

          <p className="text-lg leading-relaxed">
            At Elimu Community Network (ECN), trees represent more than nature. They symbolize life, learning, 
            and liberation.<br />
            Through our tree planting initiatives, we blend environmental conservation with education, helping 
            communities understand that sustainability begins with knowledge and grows through collective action.
          </p>
          <p className="text-lg leading-relaxed">
            Tree planting with ECN is a learning journey. It brings together children, youth, women, and families 
            to care for the earth while cultivating skills, values, and unity. It is one of the simplest yet most 
            profound ways to teach communities how education and nature together can transform lives.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-6">WHY TREES?</h3>
          <p className="text-lg leading-relaxed">
            Tree planting promotes development in our communities and contributes to climate resilience by:
          </p>

          {/* ✅ Aligned bullet list */}
          <ul className="text-lg leading-relaxed list-disc list-inside marker:text-green-700 text-left mx-auto max-w-3xl space-y-2">
            <li>
              <span className="font-semibold">Building community unity: </span> 
              Bringing people together with a shared goal of creating greener spaces.
            </li>
            <li>
              <span className="font-semibold">Improving air quality and rainfall: </span> 
              Trees breathe life into our planet by producing clean oxygen and restoring natural cycles.
            </li>
            <li>
              <span className="font-semibold">Protecting soil and preventing floods: </span> 
              Strong roots reduce erosion and safeguard farmlands and homes.
            </li>
            <li>
              <span className="font-semibold">Supporting livelihoods: </span> 
              Providing fruits, herbs, and medicines that enhance nutrition and health.
            </li>
            <li>
              <span className="font-semibold">Protecting biodiversity: </span> 
              Creating habitats for birds, insects, and wildlife essential to ecosystem balance.
            </li>
          </ul>

          <blockquote className="pl-4 italic text-blue-700 mt-4">
            “The best time to plant a tree was 20 years ago. The second-best time is now.” — African Proverb
          </blockquote>

          <div className="mt-6">
            <a
              href="/contact"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              Join Our Green Movement
            </a>
          </div>
        </div>

        {/* 🌱 Dual Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
          {/* 🌿 LEARNING THROUGH ACTION */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
              LEARNING THROUGH ACTION
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              At ECN, tree planting doubles as an educational experience where learning meets action.
              Our school-based activities inspire young minds to understand the power of small actions
              in shaping a sustainable future.
            </p>

            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Objective:</span>{" "}
              To teach children and communities the importance of environmental care and tree planting.
            </p>

            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Materials Needed:</span> Seedlings, charts, watering cans.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold">Time Required:</span> 15 minutes
            </p>

            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Simple Learning Activity:
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
              <li>Begin with a discussion on why trees are important.</li>
              <li>Have children draw or write the steps for tree planting on colorful charts.</li>
              <li>Add inspiring phrases like “Trees and Children for the Future!” and display them publicly.</li>
              <li>Prepare the planting site, dig holes, and plant the seedlings carefully.</li>
              <li>Water, protect, and nurture the trees, while celebrating teamwork and responsibility.</li>
            </ol>

            <blockquote className="mt-8 italic text-green-700 text-center text-xl font-medium">
              “When children plant trees, they are planting hope for generations to come.”
            </blockquote>

            <p className="text-center text-gray-800 font-semibold mt-6">
              Partner with us in Starting a School Green Club
            </p>
          </motion.div>

          {/* 🌍 COMMUNITY IMPACT */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
              COMMUNITY IMPACT
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Across ECN’s regions from Nairobi’s urban schools to Busia’s flood-prone plains, 
              tree planting has become a symbol of education in action. In Budalangi, Busia County, 
              our initiatives engage local communities in planting trees to reduce flooding, restore 
              soil health, and create sustainable livelihoods.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
                <img
                src={BeforePhoto}
                alt="Before: Flooded landscapes"
                className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <p className="mt-3 text-sm text-gray-600 italic">Before: Flooded landscapes</p>
            </div>
            <div className="flex flex-col items-center">
                <img
                src={AfterPhoto}
                alt="After: Thriving green belts"
                className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <p className="mt-3 text-sm text-gray-600 italic">After: Thriving green belts</p>
            </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              This initiative exemplifies how education can drive environmental innovation by 
              turning community challenges into opportunities for growth and resilience.
            </p>
          </motion.div>
          {/* EDUCATION AS THE ROOT OF SUSTAINABILITY */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
              EDUCATION AS THE ROOT OF SUSTAINABILITY
            </h2>
            <p>
            For ECN, education is the seed and sustainability is the harvest. 
              Tree planting symbolizes the harmony between learning and living and 
              a reminder that informed communities are empowered communities.
            </p>
            <blockquote className="mt-8 italic text-green-700 text-center text-xl font-medium">
              “When we plant trees, we plant the seeds of peace and hope.”— Wangari Maathai
            </blockquote>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
                <img
                src={green1}
                alt="Before: Flooded landscapes"
                className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <p className="mt-3 text-sm text-gray-600 italic">Before: Flooded landscapes</p>
            </div>
            <div className="flex flex-col items-center">
                <img
                src={green2}
                alt="After: Thriving green belts"
                className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <p className="mt-3 text-sm text-gray-600 italic">After: Thriving green belts</p>
            </div>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Through these efforts, ECN aims to cultivate not just forests, but a culture of 
              environmental consciousness, where children, youth, and women lead Africa’s green transformation.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
             Be Part of Our Eco-Education Movement <br />
            “Growing Education. Growing Africa.”

            </p>
          </motion.div>
          {/* -	Urban Green Minds: Turning Waste into Worth */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
            Urban Green Minds: Turning Waste into Worth
            </h2>
            <h3 className="text-1xl font-bold text-blue-700 mb-4 text-center">
                Empowering Street Youth to Clean, Create, and Conserve
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Where Others See Waste, We See Potential
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Every day, the streets of our cities fill with waste — plastic bottles, discarded paper, 
              and forgotten metal. But to the street youth of Kenya, this isn’t just trash.<br />
              It’s a chance to learn, to earn, and to lead.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
             Urban Green Minds is a transformative ECN initiative that turns the challenges of urban waste into 
             opportunities for education, innovation, and sustainable livelihoods.
            It’s where environmental conservation meets youth empowerment, and where learning takes place not 
            only in classrooms but on the streets themselves.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Learning to Clean the City and the Future
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
             At the heart of Urban Green Minds is one simple belief:
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
             Education changes everything, even how we see waste.<br />
            Through fun, hands-on lessons, street-connected youth discover how the waste that clutters their 
            communities can become a source of income, creativity, and pride.<br />
            From sorting plastics to understanding pollution, they learn the science of waste — and how caring 
            for the environment begins with small, everyday actions.

            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              This initiative exemplifies how education can drive environmental innovation by 
              turning community challenges into opportunities for growth and resilience.
            </p>
          </motion.div>
            {/* Technology that Transforms */}
            <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-5xl text-center space-y-6">
                <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
                Technology that Transforms
                </h2>                
                <p className="text-lg sm:text-xl leading-relaxed">
                This isn’t yesterday’s waste collection. It’s smart, tech-driven recycling for the future.
                Using solar-powered learning hubs, youth access digital tools and apps to map waste hotspots, 
                organize collection routes, and connect with recycling centres. They explore how AI and simple 
                sensors can sort materials faster and how 3D printing can give plastic a second life.<br />
                Its innovation powered by curiosity, technology, and hope.
                </p>
                <blockquote className="mt-8 italic text-green-700 text-center text-xl font-medium">
              “We are building green entrepreneurs from the streets, one recycled bottle at a time.”
                </blockquote>                
            </div>
            </motion.div>
             {/* Recycling for Dignity and Jobs */}
            <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-5xl text-center space-y-6">
                <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
                Recycling for Dignity and Jobs
                </h2>                
                <p className="text-lg sm:text-xl leading-relaxed">
                Every item recycled tells a new story not just of cleaner cities, but of restored dignity. 
                Youth teams transform waste into products that sell:
                </p>
                <ul>
                    <li><span className="font-semibold">Art pieces from plastics and metals</span></li>
                </ul>
                <ul>
                    <li><span className="font-semibold">Bags made from old banners and fabric scraps.</span></li>
                </ul>
                <p className="text-lg sm:text-xl leading-relaxed">
                These become green businesses, creating income while saving the planet. It’s where education meets 
                enterprise, and survival meets sustainability.
                </p>                             
            </div>
            </motion.div>

            </div>      
      </section>

      {/* ✅ Additional Content */}
      <section className="py-12 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-gray-700 leading-relaxed">
        <h3 className="text-2xl sm:text-2xl font-bold text-green mb-4">
            Changing the Culture, One Street at a Time
            </h3> 
          <p>
            Urban Green Minds is not only cleaning up waste, it’s cleaning up perceptions.
            It teaches that every person and every piece of waste has value.
            Through music, street art, and public campaigns, the youth become ambassadors of change, 
            inspiring entire neighbourhoods to rethink their habits and embrace recycling as a way of life.

          </p>
          <p>
            By teaching the value of trees and sustainability, the program helps
            communities adapt to climate challenges while fostering unity and
            hope for a greener future.
          </p>
          <blockquote className="mt-8 italic text-green-700 text-center text-xl font-medium">
              “We are building green entrepreneurs from the streets, one recycled bottle at a time.”
                </blockquote>
        <h2 className="text-2xl sm:text-2xl font-bold text-green mb-4">
            Our Impact Goals:
            </h2> 
        <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
            <li>Train 100 street-connected youth in sustainable waste management and recycling.</li>
            <li>Establish 10 youth-led green enterprises across Nairobi, Kisumu, and Mombasa.</li>
            <li>Reduce urban waste pollution while creating dignified green jobs.</li>
            <li>Cultivate a culture of recycling that drives cleaner, safer, and more inclusive cities.</li>
        </ol> 
        <h2 className="text-2xl sm:text-2xl font-bold text-green mb-4">
        Our Vision
        </h2>
         <p className="text-lg sm:text-l leading-relaxed">
        We imagine a future where no youth is left behind and no waste goes to waste.
        A future where education fuels creativity, and where the streets themselves become classrooms for 
        learning, invention, and environmental stewardship.<br />
        At ECN, we believe that the youth who once lived from waste can now live for the planet and lead 
        the green revolution of tomorrow
        </p>
        <blockquote className="mt-8 italic text-green-700 text-center text-xl font-medium">
              “When we teach the youth to recycle, we don’t just save the city — we save their future.” — Elimu Community Network
        </blockquote>
        <h2 className="text-2xl sm:text-2xl font-bold text-gray mb-4">
        Be Part of the Change
        </h2>
         <p className="text-lg sm:text-l leading-relaxed">
        Join us in empowering street youth to build cleaner cities and greener futures.
        Partner, volunteer, or support the Urban Green Minds programme where every act of recycling becomes a lesson in dignity, innovation, and hope.
        </p>
        <a
              href="/contact"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              Join Our Green Movement
            </a>
        </div>
      </section>
      {/* ✅ Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition"
        >
          <ArrowUp size={24} />
        </button>
      )}
      <Footer />
    </div>
  );
}

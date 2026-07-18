import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

import Slide1 from "../assets/greenclassroom1.jpg";
import Slide2 from "../assets/greenclassroom2.jpg";
import Slide3 from "../assets/greenclassroom3.jpg";
import BeforePhoto from "../assets/community-before.jpg";
import AfterPhoto from "../assets/community-after.jpg";
import green1 from "../assets/greenclassroom1.jpg";
import green2 from "../assets/greenclassroom3.jpg";
import farm1 from "../assets/greenfarm1.jpg";
import farm2 from "../assets/greenfarm2.jpg";
import farm3 from "../assets/greenfarm3.jpg";

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to the rest of the site.     */
/* ------------------------------------------------------------------ */

const THEME_VARS = {
  "--ink": "#1B2A22",
  "--paper": "#F1EDD9",
  "--chalk": "#1F3A2E",
  "--clay": "#B8462F",
  "--gold": "#E3A73B",
  "--sky": "#3E7C8C",
  "--font-display": "'Fraunces', ui-serif, Georgia, serif",
  "--font-body": "'Work Sans', ui-sans-serif, system-ui, sans-serif",
};

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

function Grain({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay ${className}`}
      style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}

function SpiralEdge() {
  return (
    <div aria-hidden="true" className="absolute left-3 top-0 bottom-0 flex flex-col justify-evenly py-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="h-2 w-2 rounded-full bg-[var(--paper)] ring-2 ring-[var(--ink)]/15" />
      ))}
    </div>
  );
}

const ACCENTS = ["var(--clay)", "var(--sky)", "var(--gold)", "var(--chalk)", "var(--clay)", "var(--sky)"];

export default function GreenClassrooms() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  const slides = [Slide1, Slide2, Slide3];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Elimu Community Network | ECN Africa</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa), our mission, vision, and how we empower communities through education, innovation, and sustainable programs."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] overflow-hidden bg-[var(--chalk)]">
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

        <div className="absolute inset-0 bg-[var(--chalk)]/45 flex flex-col items-center justify-center text-center text-white px-6">
          <Grain />
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-3xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GREEN CLASSROOMS FOR COMMUNITY RESILIENCE
          </motion.h1>
          <p className="relative z-10 text-lg sm:text-2xl font-medium text-[var(--paper)]/90">
            Education for a Greener and Sustainable Future
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 sm:px-12 bg-[var(--paper)] text-[var(--ink)]">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.h2
            className="text-4xl font-bold text-[var(--chalk)] text-center mb-8"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Green Classrooms for Community Resilience
          </motion.h2>

          {/* Paragraph 1 with image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-xl leading-relaxed">
              The Green Classrooms initiative connects environmental education with community
              action. It teaches children and families to protect nature while meeting daily
              needs through sustainable practices like tree planting, recycling, and water conservation.
            </p>
            <img
              src={farm1}
              alt="Children in green classroom"
              className="shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Paragraph 2 with image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={farm2}
              alt="Tree planting activity"
              className="shadow-lg w-full h-64 object-cover md:order-1 order-2"
            />
            <p className="text-xl leading-relaxed md:order-2 order-1">
              Each classroom becomes a living lab where students learn how trees prevent soil erosion,
              improve rainfall, and provide food and medicine. In Busia’s flood-prone Budalangi area,
              ECN-led tree planting projects have reduced flooding and improved soil fertility — turning
              vulnerability into opportunity.
            </p>
          </div>

          {/* Paragraph 3 */}
          <p className="text-xl leading-relaxed">
            Through partnerships with schools and local governments, ECN integrates environmental literacy
            into school curricula, nurturing young eco-leaders who care for both people and the planet.
          </p>

          {/* Quote 1 */}
          <blockquote className="relative bg-white p-6 pl-8 shadow-sm text-center md:text-left">
            <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--clay)]" />
            <p
              className="italic text-[var(--chalk)] text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-display)" }}
            >
              “The environment is in us, not outside of us. The trees are our lungs, the rivers our bloodstream.
              We are all interconnected.” — Wangari Maathai
            </p>
          </blockquote>

          {/* WHY TREES section with image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-xl leading-relaxed">
              At Elimu Community Network (ECN), trees represent more than nature. They symbolize life, learning,
              and liberation.
              <br />
              Through our tree planting initiatives, we blend environmental conservation with education, helping
              communities understand that sustainability begins with knowledge and grows through collective action.
            </p>
            <img
              src={farm3}
              alt="Community tree planting"
              className="shadow-lg w-full h-64 object-cover"
            />
          </div>

          <p className="text-xl leading-relaxed">
            Tree planting with ECN is a learning journey. It brings together children, youth, women, and families
            to care for the earth while cultivating skills, values, and unity. It is one of the simplest yet most
            profound ways to teach communities how education and nature together can transform lives.
          </p>

          <h3
            className="text-xl font-semibold text-[var(--chalk)] mt-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WHY TREES?
          </h3>
          <p className="text-xl leading-relaxed">
            Tree planting promotes development in our communities and contributes to climate resilience by:
          </p>

          {/* Bullet list with small images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="text-lg leading-relaxed list-disc list-inside marker:text-[var(--clay)] space-y-2">
              <li>
                <span className="font-semibold">Building community unity: </span>Bringing people together with a shared goal of creating greener spaces.
              </li>
              <li>
                <span className="font-semibold">Improving air quality and rainfall: </span>Trees breathe life into our planet by producing clean oxygen and restoring natural cycles.
              </li>
              <li>
                <span className="font-semibold">Protecting soil and preventing floods: </span>Strong roots reduce erosion and safeguard farmlands and homes.
              </li>
            </ul>
            <ul className="text-lg leading-relaxed list-disc list-inside marker:text-[var(--clay)] space-y-2">
              <li>
                <span className="font-semibold">Supporting livelihoods: </span>Providing fruits, herbs, and medicines that enhance nutrition and health.
              </li>
              <li>
                <span className="font-semibold">Protecting biodiversity: </span>Creating habitats for birds, insects, and wildlife essential to ecosystem balance.
              </li>
            </ul>
          </div>

          <blockquote className="pl-4 border-l-4 border-[var(--gold)] italic text-[var(--chalk)] mt-4 text-center md:text-left">
            “The best time to plant a tree was 20 years ago. The second-best time is now.” — African Proverb
          </blockquote>

          <div className="mt-6 text-center">
            <Link
              to="/contact"
              className="inline-block bg-[var(--clay)] hover:brightness-110 text-[var(--paper)] px-6 py-3 font-semibold shadow transition duration-300"
            >
              Join Our Green Movement
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 px-6 lg:px-0">
        {/* LEARNING THROUGH ACTION */}
        <motion.div
          className="relative bg-white shadow-sm p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SpiralEdge />
          <span aria-hidden="true" className="absolute top-0 left-8 right-6 h-1.5" style={{ backgroundColor: ACCENTS[0] }} />
          <h2
            className="text-3xl font-bold text-[var(--chalk)] mb-4 text-center pl-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LEARNING THROUGH ACTION
          </h2>

          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            At ECN, tree planting doubles as an educational experience where learning meets action.
            Our school-based activities inspire young minds to understand the power of small actions
            in shaping a sustainable future.
          </p>

          <p className="text-lg text-[var(--ink)]/80 mb-2 pl-4">
            <span className="font-semibold">Objective:</span>{" "}
            To teach children and communities the importance of environmental care and tree planting.
          </p>

          <p className="text-lg text-[var(--ink)]/80 mb-2 pl-4">
            <span className="font-semibold">Materials Needed:</span> Seedlings, charts, watering cans.
          </p>

          <p className="text-lg text-[var(--ink)]/80 mb-6 pl-4">
            <span className="font-semibold">Time Required:</span> 15 minutes
          </p>

          <h3
            className="text-2xl font-semibold text-[var(--chalk)] mb-3 pl-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple Learning Activity:
          </h3>
          <ol className="list-decimal pl-10 space-y-2 text-lg text-[var(--ink)]/80 leading-relaxed">
            <li>Begin with a discussion on why trees are important.</li>
            <li>Have children draw or write the steps for tree planting on colorful charts.</li>
            <li>Add inspiring phrases like “Trees and Children for the Future!” and display them publicly.</li>
            <li>Prepare the planting site, dig holes, and plant the seedlings carefully.</li>
            <li>Water, protect, and nurture the trees, while celebrating teamwork and responsibility.</li>
          </ol>

          <blockquote
            className="mt-8 italic text-[var(--clay)] text-center text-xl font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            “When children plant trees, they are planting hope for generations to come.”
          </blockquote>

          <p className="text-center text-[var(--chalk)] font-semibold mt-6">
            Partner with us in Starting a School Green Club
          </p>
        </motion.div>

        {/* COMMUNITY IMPACT */}
        <motion.div
          className="relative bg-white shadow-sm p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SpiralEdge />
          <span aria-hidden="true" className="absolute top-0 left-8 right-6 h-1.5" style={{ backgroundColor: ACCENTS[1] }} />
          <h2
            className="text-3xl font-bold text-[var(--chalk)] mb-4 text-center pl-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            COMMUNITY IMPACT
          </h2>

          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            Across ECN’s regions from Nairobi’s urban schools to Busia’s flood-prone plains,
            tree planting has become a symbol of education in action. In Budalangi, Busia County,
            our initiatives engage local communities in planting trees to reduce flooding, restore
            soil health, and create sustainable livelihoods.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pl-4 pr-4">
            <div className="flex flex-col items-center">
              <img
                src={BeforePhoto}
                alt="Before: Flooded landscapes"
                className="shadow-lg w-full h-56 object-cover"
              />
              <p className="mt-3 text-sm text-[var(--ink)]/60 italic">Before: Flooded landscapes</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={AfterPhoto}
                alt="After: Thriving green belts"
                className="shadow-lg w-full h-56 object-cover"
              />
              <p className="mt-3 text-sm text-[var(--ink)]/60 italic">After: Thriving green belts</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 pl-4 mt-4">
            This initiative exemplifies how education can drive environmental innovation by
            turning community challenges into opportunities for growth and resilience.
          </p>
        </motion.div>

        {/* EDUCATION AS THE ROOT OF SUSTAINABILITY */}
        <motion.div
          className="relative bg-white shadow-sm p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SpiralEdge />
          <span aria-hidden="true" className="absolute top-0 left-8 right-6 h-1.5" style={{ backgroundColor: ACCENTS[2] }} />
          <h2
            className="text-3xl font-bold text-[var(--chalk)] mb-4 text-center pl-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            EDUCATION AS THE ROOT OF SUSTAINABILITY
          </h2>
          <p className="pl-4 text-[var(--ink)]/80">
            For ECN, education is the seed and sustainability is the harvest.
            Tree planting symbolizes the harmony between learning and living and
            a reminder that informed communities are empowered communities.
          </p>
          <blockquote
            className="mt-8 italic text-[var(--clay)] text-center text-xl font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            “When we plant trees, we plant the seeds of peace and hope.”— Wangari Maathai
          </blockquote>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pl-4 pr-4">
            <div className="flex flex-col items-center">
              <img
                src={green1}
                alt="Before: Flooded landscapes"
                className="shadow-lg w-full h-56 object-cover"
              />
              <p className="mt-3 text-sm text-[var(--ink)]/60 italic">Before: Flooded landscapes</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={green2}
                alt="After: Thriving green belts"
                className="shadow-lg w-full h-56 object-cover"
              />
              <p className="mt-3 text-sm text-[var(--ink)]/60 italic">After: Thriving green belts</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-[var(--ink)]/80 pl-4 mt-4">
            Through these efforts, ECN aims to cultivate not just forests, but a culture of
            environmental consciousness, where children, youth, and women lead Africa’s green transformation.
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 pl-4">
            Be Part of Our Eco-Education Movement <br />
            “Growing Education. Growing Africa.”
          </p>
        </motion.div>

        {/* Urban Green Minds: Turning Waste into Worth */}
        <motion.div
          className="relative bg-white shadow-sm p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SpiralEdge />
          <span aria-hidden="true" className="absolute top-0 left-8 right-6 h-1.5" style={{ backgroundColor: ACCENTS[3] }} />
          <h2
            className="text-3xl font-bold text-[var(--chalk)] mb-4 text-center pl-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Urban Green Minds: Turning Waste into Worth
          </h2>
          <h3 className="text-xl font-bold text-[var(--sky)] mb-4 text-center pl-4">
            Empowering Street Youth to Clean, Create, and Conserve
          </h3>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            Where Others See Waste, We See Potential
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            Every day, the streets of our cities fill with waste — plastic bottles, discarded paper,
            and forgotten metal. But to the street youth of Kenya, this isn’t just trash.
            <br />
            It’s a chance to learn, to earn, and to lead.
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            Urban Green Minds is a transformative ECN initiative that turns the challenges of urban waste into
            opportunities for education, innovation, and sustainable livelihoods.
            It’s where environmental conservation meets youth empowerment, and where learning takes place not
            only in classrooms but on the streets themselves.
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            Learning to Clean the City and the Future
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            At the heart of Urban Green Minds is one simple belief:
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 mb-4 pl-4">
            Education changes everything, even how we see waste.
            <br />
            Through fun, hands-on lessons, street-connected youth discover how the waste that clutters their
            communities can become a source of income, creativity, and pride.
            <br />
            From sorting plastics to understanding pollution, they learn the science of waste — and how caring
            for the environment begins with small, everyday actions.
          </p>
          <p className="text-lg leading-relaxed text-[var(--ink)]/80 pl-4">
            This initiative exemplifies how education can drive environmental innovation by
            turning community challenges into opportunities for growth and resilience.
          </p>
        </motion.div>

        {/* Technology that Transforms */}
        <motion.div
          className="relative bg-white shadow-sm p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SpiralEdge />
          <span aria-hidden="true" className="absolute top-0 left-8 right-6 h-1.5" style={{ backgroundColor: ACCENTS[4] }} />
          <div className="max-w-5xl text-center space-y-6 pl-4">
            <h2
              className="text-3xl font-bold text-[var(--chalk)] mb-4 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Technology that Transforms
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-[var(--ink)]/80">
              This isn’t yesterday’s waste collection. It’s smart, tech-driven recycling for the future.
              Using solar-powered learning hubs, youth access digital tools and apps to map waste hotspots,
              organize collection routes, and connect with recycling centres. They explore how AI and simple
              sensors can sort materials faster and how 3D printing can give plastic a second life.
              <br />
              Its innovation powered by curiosity, technology, and hope.
            </p>
            <blockquote
              className="mt-8 italic text-[var(--clay)] text-center text-xl font-medium"
              style={{ fontFamily: "var(--font-display)" }}
            >
              “We are building green entrepreneurs from the streets, one recycled bottle at a time.”
            </blockquote>
          </div>
        </motion.div>

        {/* Recycling for Dignity and Jobs */}
        <motion.div
          className="relative bg-white shadow-sm p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SpiralEdge />
          <span aria-hidden="true" className="absolute top-0 left-8 right-6 h-1.5" style={{ backgroundColor: ACCENTS[5] }} />
          <div className="max-w-5xl text-center space-y-6 pl-4">
            <h2
              className="text-3xl font-bold text-[var(--chalk)] mb-4 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Recycling for Dignity and Jobs
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-[var(--ink)]/80">
              Every item recycled tells a new story not just of cleaner cities, but of restored dignity.
              Youth teams transform waste into products that sell:
            </p>
            <ul className="text-[var(--ink)]/80">
              <li><span className="font-semibold">Art pieces from plastics and metals</span></li>
            </ul>
            <ul className="text-[var(--ink)]/80">
              <li><span className="font-semibold">Bags made from old banners and fabric scraps.</span></li>
            </ul>
            <p className="text-lg sm:text-xl leading-relaxed text-[var(--ink)]/80">
              These become green businesses, creating income while saving the planet. It’s where education meets
              enterprise, and survival meets sustainability.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Additional Content */}
      <section className="py-12 px-6 sm:px-12 bg-[var(--paper)]">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-[var(--ink)]/80 leading-relaxed">
          <h3
            className="text-2xl font-bold text-[var(--chalk)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
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
          <blockquote
            className="mt-8 italic text-[var(--clay)] text-center text-xl font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            “We are building green entrepreneurs from the streets, one recycled bottle at a time.”
          </blockquote>
          <h2
            className="text-2xl font-bold text-[var(--chalk)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Impact Goals:
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg text-[var(--ink)]/80 leading-relaxed">
            <li>Train 100 street-connected youth in sustainable waste management and recycling.</li>
            <li>Establish 10 youth-led green enterprises across Nairobi, Kisumu, and Mombasa.</li>
            <li>Reduce urban waste pollution while creating dignified green jobs.</li>
            <li>Cultivate a culture of recycling that drives cleaner, safer, and more inclusive cities.</li>
          </ol>
          <h2
            className="text-2xl font-bold text-[var(--chalk)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed">
            We imagine a future where no youth is left behind and no waste goes to waste.
            A future where education fuels creativity, and where the streets themselves become classrooms for
            learning, invention, and environmental stewardship.
            <br />
            At ECN, we believe that the youth who once lived from waste can now live for the planet and lead
            the green revolution of tomorrow
          </p>
          <blockquote
            className="mt-8 italic text-[var(--clay)] text-center text-xl font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            “When we teach the youth to recycle, we don’t just save the city — we save their future.” — Elimu Community Network
          </blockquote>
          <h2
            className="text-2xl font-bold text-[var(--chalk)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Be Part of the Change
          </h2>
          <p className="text-lg leading-relaxed">
            Join us in empowering street youth to build cleaner cities and greener futures.
            Partner, volunteer, or support the Urban Green Minds programme where every act of recycling becomes a lesson in dignity, innovation, and hope.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--clay)] hover:brightness-110 text-[var(--paper)] px-6 py-3 font-semibold shadow transition duration-300"
          >
            Join Our Green Movement
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-[var(--clay)] text-[var(--paper)] p-3 rounded-full shadow-lg hover:brightness-110 transition"
        >
          <ArrowUp size={24} />
        </button>
      )}
      <Footer />
    </div>
  );
}

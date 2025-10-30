import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ImpactPhoto1 from "../assets/community-impact1.jpg";
import ImpactPhoto2 from "../assets/community-impact2.jpg";



export default function Programs() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Handle smooth scrolling to hash section
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex flex-col items-center justify-start px-4 sm:px-8 py-8">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-green-700 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PROGRAMMES
        </motion.h1>

       {/* 🔹 COMMUNITY DEVELOPMENT SECTION */}
<motion.section
  id="community-development"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-2xl border border-green-100 p-10 sm:p-14 space-y-10"
>
   <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
      A.	GREEN CLASSROOMS FOR COMMUNITY RESILIENCE: EDUCATION FOR A GREENER AND SUSTAINABLE FUTURE
    </h2>

  {/* --- Green Classrooms for Community Resilience --- */}
  <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
      The <span className="font-semibold">Green Classrooms</span> initiative connects environmental education with community action. It teaches 
      children and families to protect nature while meeting daily needs through sustainable practices 
      like tree planting, recycling, and water conservation.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Each classroom becomes a living lab where students learn how trees prevent soil erosion, improve rainfall, and provide food and medicine. 
      In Busia’s flood-prone Budalangi area, ECN-led tree planting projects have reduced flooding and improved soil fertility — turning 
      vulnerability into opportunity.
      <br></br>
      Through partnerships with schools and local governments, ECN integrates environmental literacy into school curricula, nurturing young 
      eco-leaders who care for both people and the planet.
    </p>
    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-600">
      “The environment is in us, not outside of us. The trees are our lungs, the rivers our bloodstream. We are all interconnected.” — Wangari Maathai
    </blockquote>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
     WHY TREES?
    </h3>
    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-600">
      “Trees exhale for us so that we can inhale them to stay alive. Can we ever forget that? Let us love trees with every breath we take until we perish.” — Munia Khan
    </blockquote>
     <p className="text-gray-700 leading-relaxed">
      At Elimu Community Network (ECN), trees represent more than nature. They symbolize life, learning, and liberation.
      <br></br>
      Through our tree planting initiatives, we blend environmental conservation with education, helping communities understand that sustainability begins with knowledge 
      and grows through collective action.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Tree planting with ECN is a learning journey. It brings together children, youth, women, and families to care for the earth while cultivating skills, values, 
      and unity. It is one of the simplest yet most profound ways to teach communities how education and nature together can transform lives.
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
     WHAT TREE PLANTING ACHIEVES
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Tree planting promotes development in our communities and contributes to climate resilience by:
    </p>
    <ul className="list-disc pl-8 text-gray-700 leading-relaxed space-y-2">
      <li>
        <span className="font-semibold">Building community unity:</span>Bringing people together with a shared goal of creating greener spaces.
      </li>
      <li>
        <span className="font-semibold">Improving air quality and rainfall :</span>Trees breathe life into our planet by producing clean oxygen and restoring natural cycles.
      </li>
      <li>
        <span className="font-semibold">Protecting soil and preventing floods:</span>Strong roots reduce erosion and safeguard farmlands and homes.
      </li>
      <li>
        <span className="font-semibold">Supporting livelihoods:</span>Providing fruits, herbs, and medicines that enhance nutrition and health.
      </li>
      <li>
        <span className="font-semibold">Protecting biodiversity:</span>creating habitats for birds, insects, and wildlife essential to ecosystem balance.
      </li>
    </ul>
    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-600">
      “The best time to plant a tree was 20 years ago. The second-best time is now.”— African Proverb
    </blockquote>

    <p className="text-gray-700 leading-relaxed">
      Green Classrooms are therefore not only centers of learning but also incubators of
      climate resilience, nurturing a generation that can respond creatively to the
      challenges of a changing planet.
    </p>
    <p className="text-1xl sm:text-1xl font-bold text-green-700">
      Join Our Green Movement
      <br></br>
      LEARNING THROUGH ACTION
    </p>
    <p className="text-gray-700 leading-relaxed">
      At ECN, tree planting doubles as an educational experience where learning meets action.
      Our school-based activities inspire young minds to understand the power of small actions in shaping 
      a sustainable future.
    </p>
    <p className="sm:text-1xl text-green-700 leading-relaxed">
      Objective:
      <br></br>
      To teach children and communities the importance of environmental care and tree planting.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Materials Needed: Seedlings, charts, watering cans.
      <br></br>
      Time Required: 15 minutes
      <br></br>
      Simple Learning Activity:
    </p>
    <ol className="list-decimal pl-8 text-gray-700 leading-relaxed space-y-2">
      <li>
        <span className="font-semibold">Begin with a discussion on why trees are important.</span>
      </li>
      <li>
        <span className="font-semibold">Have children draw or write the steps for tree planting on colorful charts.</span>
      </li>
      <li>
        <span className="font-semibold">Add inspiring phrases like “Trees and Children for the Future!” and display them publicly.</span>
      </li>
      <li>
        <span className="font-semibold">Prepare the planting site, dig holes, and plant the seedlings carefully.</span>
      </li>
      <li>
        <span className="font-semibold">Water, protect, and nurture the trees, while celebrating teamwork and responsibility.</span>
      </li>
    </ol>
    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-600">
      “When children plant trees, they are planting hope for generations to come.”
    </blockquote>
    <p>Partner with us in Starting a School Green Club </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
     COMMUNITY IMPACT
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Across ECN’s regions from Nairobi’s urban schools to Busia’s flood-prone plains, 
      tree planting has become a symbol of education in action. In Budalangi, Busia County, 
      our initiatives engage local communities in planting trees to reduce flooding, restore 
      soil health, and create sustainable livelihoods.
    </p>
    <div className="flex flex-wrap justify-center gap-6 mt-6">
        {/* Before Image */}
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <img
            src={ImpactPhoto1}
            alt="Before: Flooded landscapes"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
            Before: Flooded landscapes
          </div>
        </div>

        {/* After Image */}
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <img
            src={ImpactPhoto2}
            alt="After: Thriving green belts with mature trees"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
            After: Thriving green belts with mature trees
          </div>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">
      This initiative exemplifies how education can drive environmental innovation by turning community 
      challenges into opportunities for growth and resilience.
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
     EDUCATION AS THE ROOT OF SUSTAINABILITY
    </h3>
    <p className="text-gray-700 leading-relaxed">
      For ECN, education is the seed and sustainability is the harvest. Tree planting symbolizes the harmony 
      between learning and living and a reminder that informed communities are empowered communities.
    </p>
    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-600">
      “When we plant trees, we plant the seeds of peace and hope.”— Wangari Maathai
    </blockquote>
    <p className="text-gray-700 leading-relaxed">
      Through these efforts, ECN aims to cultivate not just forests, but a culture of environmental 
      consciousness, where children, youth, and women lead Africa’s green transformation.
      <br></br>
      Be Part of Our Eco-Education Movement 
      <br></br>
      <span className="font-semibold">“Growing Education. Growing Africa.”</span>
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
     Urban Green Minds: Turning Waste into Worth
     </h3>
      <p className="italic text-black-600">
      Empowering Street Youth to Clean, Create, and Conserve
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
    Where Others See Waste, We See Potential
     </h3>
    <p className="text-gray-700 leading-relaxed">
      Every day, the streets of our cities fill with waste — plastic
       bottles, discarded paper, and forgotten metal. But to the street 
       youth of Kenya, this isn’t just trash.
       <br></br>
       It’s a chance to learn, to earn, and to lead.
    </p>
     <p className="text-gray-700 leading-relaxed">
      Urban Green Minds is a transformative ECN initiative that turns the 
      challenges of urban waste into opportunities for education, innovation, and sustainable livelihoods.
      <br></br>
      It’s where environmental conservation meets youth empowerment, and where learning takes place not 
      only in classrooms but on the streets themselves.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Learning to Clean the City and the Future
      <br></br>
      At the heart of Urban Green Minds is one simple belief:
      <br></br>
      <strong>Education changes everything, even how we see waste.</strong>
    </p>
    <p className="text-gray-700 leading-relaxed">
      Through fun, hands-on lessons, street-connected youth discover how the waste that clutters their
      communities can become a source of income, creativity, and pride.
      <br></br>
      From sorting plastics to understanding pollution, they learn the science of waste — and how caring
       for the environment begins with small, everyday actions.
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
    Technology that Transforms
     </h3>
     <p className="text-gray-700 leading-relaxed">
      This isn’t yesterday’s waste collection. It’s smart, tech-driven recycling for the future.
      Using solar-powered learning hubs, youth access digital tools and apps to map waste hotspots,
      organize collection routes, and connect with recycling centres. They explore how AI and simple
      sensors can sort materials faster and how 3D printing can give plastic a second life.
        <br></br>
      Its innovation powered by curiosity, technology, and hope
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
    Recycling for Dignity and Jobs
     </h3>
     <p className="text-gray-700 leading-relaxed">
      Every item recycled tells a new story not just of cleaner cities,
      but of restored dignity. Youth teams transform waste into products that sell:
    </p>
    <ul className="list-decimal pl-8 text-gray-700 leading-relaxed space-y-2">
      <li>Art pieces from plastics and metals</li>
      <li>Bags made from old banners and fabric scraps.</li>
    </ul>
    <p className="text-gray-700 leading-relaxed">
      These become green businesses, creating income while saving the planet. 
      It’s where education meets enterprise, and survival meets sustainability.
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
    Changing the Culture, One Street at a Time
     </h3>
     <p className="text-gray-700 leading-relaxed">
      Urban Green Minds is not only cleaning up waste, it’s cleaning up perceptions.
      It teaches that every person and every piece of waste has value.
      <br></br>
      Through music, street art, and public campaigns, the youth become ambassadors of change, 
      inspiring entire neighbourhoods to rethink their habits and embrace recycling as a way of life.
      <br></br>
      <strong>“We don’t just collect waste — we collect hope, innovation, and community pride.”</strong>
    </p>
    <p className="text-1xl sm:text-1xl font-bold text-black-700">
    Our Impact Goals:
     </p>
     <ul className="list-disc pl-8 text-gray-700 leading-relaxed space-y-2">
      <li>Train 100 street-connected youth in sustainable waste management and recycling.</li>
      <li>Establish 10 youth-led green enterprises across Nairobi, Kisumu, and Mombasa.</li>
      <li>Reduce urban waste pollution while creating dignified green jobs.</li>
      <li>Cultivate a culture of recycling that drives cleaner, safer, and more inclusive cities.</li>
    </ul>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
    Our Vision
     </h3>
     <p className="text-gray-700 leading-relaxed">
      We imagine a future where no youth is left behind and no waste goes to waste.
      A future where education fuels creativity, and where the streets themselves become 
      classrooms for learning, invention, and environmental stewardship.
      <br></br>
      At ECN, we believe that the youth who once lived from waste can now live for the planet 
      and lead the green revolution of tomorrow.
    </p>
    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-600">
      “When we teach the youth to recycle, we don’t just save the city — we save their future.” — Elimu Community Network
    </blockquote>
    <p className="text-1xl sm:text-1xl font-bold text-black-700">
    Be Part of the Change
     </p>
     <p className="text-gray-700 leading-relaxed">
      Join us in empowering street youth to build cleaner cities and greener futures.
      Partner, volunteer, or support the Urban Green Minds programme where every act of recycling becomes a lesson in dignity, innovation, and hope.
    </p> 
  </div>
  {/* --- B.	Nafasi Learning Programme --- */}
  <div className="space-y-6 pt-10 border-t border-green-200">
    <h3 className="text-2xl sm:text-3xl font-bold text-green-700">
      B.	Nafasi Learning Programme: Creating Spaces and Opportunities for Change
    </h3>
   <p className="text-gray-700 leading-relaxed">
      The Nafasi Learning Programme supports street-connected children 
      and youth to reclaim their right to education, protection, and dignity. 
      ‘Nafasi’ which means space or opportunity in Swahili, reflects our belief 
      that every young person deserves a chance to learn and to belong.
      <br></br>
      Through mobile street schools, creative arts, and sports for transformation, 
      ECN builds pathways from the street to structured learning environments. 
      The programme integrates psychosocial care, family reintegration, and vocational 
      training to empower youth toward independence.
      <br></br>
      Each child’s story begins in struggle but evolves through education from survival 
      to learning, from learning to leadership. One example is a group of former street 
      boys in Nairobi who, after completing ECN’s vocational program, now operate a community 
      transport service using trollies that supports their families and funds younger children’s school fees.
      <br></br>
      Through the Nafasi Programme, ECN journeys with street-connected children and youth by meeting them where 
      they are, listening to their stories, and walking beside them as they discover spaces and opportunities to survive, learn, and thrive.
    </p> 
    <p className="text-gray-700 leading-relaxed">
     Through the Nafasi Programme, ECN journeys with street-connected children and youth by meeting them where they are, listening to their stories, 
     and walking beside them as they discover spaces and opportunities to survive, learn, and thrive.
     <br></br>
     <strong>“Every child has a right to be safe, to learn, and to dream.”</strong>
    </p>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
    From the Streets to Safe Spaces
     </h3>
    <p className="text-gray-700 leading-relaxed">
     Nafasi begins with compassion and curiosity. Our teams conduct mobile street outreach, building trust and helping children and youth identify 
     safe survival options. From there, we guide them into rehabilitation, learning opportunities, and eventually family or community reintegration.
     <br></br>
     The journey follows three stages:
    </p>
    <ol className="list-decimal pl-8 text-gray-700 leading-relaxed space-y-2">
      <li>
        <span className="font-semibold">Rescue/Survival </span>Offering immediate safety, care, and emotional support on the streets.
      </li>
      <li>
        <span className="font-semibold">Rehabilitation</span>Providing counselling, basic education, and psychosocial support in transitional spaces.
      </li>
      <li>
        <span className="font-semibold">Foster and kinship care</span>Support for short-term placement of children into foster families
      </li>
      <li>
        <span className="font-semibold">Reintegration</span>Supporting family reunification and access to long-term educational and vocational pathways.
      </li>      
    </ol>
    <p className="text-gray-700 leading-relaxed">
     Each step is guided by our belief that; education is the bridge between vulnerability and opportunity.
    </p>
    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-600">
     “Education is not a way to escape poverty; it is a way of fighting it.” — Julius Nyerere
    </blockquote>
    <h3 className="text-1xl sm:text-1xl font-bold text-black-700">
    Programme Objectives:
     </h3>
     <ol className="list-decimal pl-8 text-gray-700 leading-relaxed space-y-2">
      <li>
        <span className="font-semibold">To strengthen social protection systems  </span>for children and youth living on the streets/ vulnerability by safeguarding their rights and wellbeing.
      </li>
      <li>
        <span className="font-semibold">To increase sustainable reintegration </span>through family-based care and access to education, skills training, and livelihood opportunities.
      </li>       
    </ol>
    <p className="text-gray-700 leading-relaxed">
     Key activities:
    </p>
    <ul className="list-disc pl-8 text-gray-700 leading-relaxed space-y-2">
      <li>
        <span className="font-semibold">Street Work:</span>Identification and assessment of street-connected children and youth, providing immediate assistance and pathways to reintegration.
      </li>
      <li>
        <span className="font-semibold">Street Teams and Safe Learning Spaces:</span>Formation of creative and inclusive street teams engaged in arts, sports, and mentorship as tools for behaviour transformation and leadership development.
      </li>
      <li>
        <span className="font-semibold">Mobile School — Learning Without Walls:</span>: Establishment of a mobile street school as a safe, open, and flexible learning space where children and youth explore their talents, strengthen their self-esteem, and discover the joy of learning.
      </li>
      <li>
        <span className="font-semibold">Toolkits for Self-Reliance:</span>Provision of work trollies and tool kits that help youth transition from street life to self-employment and community contribution.
      </li>       
    </ul>
    <p className="text-black-700 leading-relaxed">
     “When we educate a child, we do not just change a life — we change a generation.”
    </p>


   









  </div>
</motion.section>
      </div>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Programs() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show "Back to Top" button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 py-8 bg-white">
      {/* Animated Page Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-green-700 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PROGRAMMES
      </motion.h1>

      {/* Section A */}
      <section className="w-full max-w-4xl mb-12">
        <div className="sticky top-0 bg-green-100 py-3 px-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-green-800">
            A. COMMUNITY DEVELOPMENT & ENVIRONMENTAL STEWARDSHIP
          </h2>
        </div>

        <motion.div
          className="mt-4 text-gray-700 leading-relaxed space-y-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Education for a Greener and Sustainable Future</p>
          <p>
           The environment is in us, not outside of us. The trees are our lungs, the rivers our bloodstream. We are all interconnected.”
           <strong>— Wangari Maathai</strong>
          </p>
          <p>
            WHY TREES?
            <br></br>
            “Trees exhale for us so that we can inhale them to stay alive. Can we ever forget that? Let us love trees with every breath we take until we perish.”
              — Munia Khan
          </p>
          <p>
            At Elimu Community Network (ECN), trees represent more than nature. They symbolize life, learning, and liberation.
            Through our tree planting initiatives, we blend environmental conservation with education, helping communities understand that sustainability begins with knowledge and grows through collective action.
            </p>
            <p>
              Tree planting with ECN is a learning journey. It brings together children, youth, women, and families to care for the earth while cultivating skills, values, and unity.
              It is one of the simplest yet most profound ways to teach communities how education and nature together can transform lives.

            </p>
            <p><strong>WHAT TREE PLANTING ACHIEVES</strong></p>
            <p>
              Tree planting promotes development in our communities and contributes to climate resilience by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Building community unity – bringing people together with a shared goal of creating greener spaces.</li>
          <li>Improving air quality and rainfall – trees breathe life into our planet by producing clean oxygen and restoring natural cycles.</li>
          <li>Protecting soil and preventing floods – strong roots reduce erosion and safeguard farmlands and homes.</li>
          <li>Supporting livelihoods – providing fruits, herbs, and medicines that enhance nutrition and health.</li>
          <li>Protecting biodiversity – creating habitats for birds, insects, and wildlife essential to ecosystem balance.</li>
        </ul>
        <p>
          “The best time to plant a tree was 20 years ago. The second-best time is now.”
            — African Proverb    
        </p>
        <p>Join Our Green Movement </p>
        <h2>LEARNING THROUGH ACTION</h2>
        <p>At ECN, tree planting doubles as an educational experience where learning meets action.
          Our school-based activities inspire young minds to understand the power of small actions in shaping a sustainable future.
        </p>
        <h3>Objective:</h3>
        <p>
          To teach children and communities the importance of environmental care and tree planting.
          <br></br>
          Materials Needed:
          <br></br>
          Seedlings, charts, watering cans.
          <br></br>
          Time Required:
        </p>
        <p>Simple Learning Activity:</p>
        <ul>
          <li>1.	Begin with a discussion on why trees are important.</li>
          <li>2.	Have children draw or write the steps for tree planting on colorful charts.</li>
          <li>3.	Add inspiring phrases like “Trees and Children for the Future!” and display them publicly.</li>
          <li>4.	Prepare the planting site, dig holes, and plant the seedlings carefully.</li>
          <li>5.	Water, protect, and nurture the trees, while celebrating teamwork and responsibility.</li>
        </ul>
        <p>“When children plant trees, they are planting hope for generations to come.”</p>
        <p>Partner with us in Starting a School Green Club </p>
        <h2>COMMUNITY IMPACT</h2>
        <p>
          Across ECN’s regions from Nairobi’s urban schools to Busia’s flood-prone plains, tree planting has become a symbol of education in action.
          In Budalangi, Busia County, our initiatives engage local communities in planting trees to reduce flooding, restore soil health, and create sustainable livelihoods.
        </p>
        <p>Images coming soon</p>
        <p>
          This initiative exemplifies how education can drive environmental innovation by turning community challenges into opportunities for growth and resilience.
        </p>
        <h2>EDUCATION AS THE ROOT OF SUSTAINABILITY</h2>
        <p>
          For ECN, education is the seed and sustainability is the harvest.
          Tree planting symbolizes the harmony between learning and living and a reminder that informed communities are empowered communities.
        </p>
        <p>
          “When we plant trees, we plant the seeds of peace and hope.”
          <strong>— Wangari Maathai</strong>
          <p>
            Through these efforts, ECN aims to cultivate not just forests, but a culture of environmental consciousness, where children, youth, and women lead Africa’s green transformation.
          </p>
        </p>
        <p>
          Be Part of Our Eco-Education Movement
        </p>
        <p>
          “Growing Education. Growing Africa.”
          <br></br>
          “He who learns, teaches.” <strong>— Ethiopian Proverb</strong>

        </p>
        </motion.div>
      </section>

      {/* Section B */}
      <section className="w-full max-w-4xl mb-12">
        <div className="sticky top-0 bg-green-100 py-3 px-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-green-800">
            B.	CHILD/YOUTH PROTECTION AND EDUCATION ALTERNATIVES
          </h2>
        </div>

        <motion.div
          className="mt-4 text-gray-700 leading-relaxed space-y-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nafasi Programme: Creating Spaces and Opportunities for Change</h2>
          <p>“Every child has a right to be safe, to learn, and to dream.”</p>
          <h2>What is Nafasi?</h2>
          <p>
           Nafasi is a Swahili word meaning “space” and “opportunity.”
            It is also the name of ECN’s transformative social programme dedicated to reducing the number of children, youth, and families living on the streets by using education as a pathway to dignity, empowerment, and lasting change.
           </p>
           <br></br>
          <p>
            Through the Nafasi Programme, ECN journeys with street-connected children and youth by meeting them where they are, listening to their stories, and walking beside them as they discover spaces and opportunities to survive, learn, and thrive.
          </p>
          <br></br>
          <p>
            From the Streets to Safe Spaces
          </p>
          <br></br>
          <p>
            Nafasi begins with compassion and curiosity.
Our teams conduct mobile street outreach, building trust and helping children and youth identify safe survival options. From there, we guide them into rehabilitation, learning opportunities, and eventually family or community reintegration.
          </p>
          <p>
            The journey follows three stages:
          </p>
          <ul>
            <li>1.	Rescue/Survival – Offering immediate safety, care, and emotional support on the streets.</li>
            <li>2.	Rehabilitation – Providing counseling, basic education, and psychosocial support in transitional spaces.</li>
            <li>3.	Reintegration – Supporting family reunification and access to long-term educational and vocational pathways.</li>
          </ul>
          <p>
            Each step is guided by our belief that; education is the bridge between vulnerability and opportunity.
          </p>
          <p>
            “Education is not a way to escape poverty; it is a way of fighting it.”
            <strong>— Julius Nyerere</strong>
          </p>
          <br></br>
          <p>
            Programme Objectives:
          </p>
          <ul>
            <li>1.  <strong>To strengthen social protection systems</strong> for children and youth living on the streets, safeguarding their rights and wellbeing.</li>
            <li>2.	<strong>To increase sustainable reintegration</strong> through family-based care and access to education, skills training, and livelihood opportunities.</li>
          </ul>
          <p>Key Activities</p>
          <ul>
            <li>
          <strong>Street Work:</strong> Identification and assessment of
          street-connected children and youth, providing immediate assistance
          and pathways to reintegration.
        </li>
        <li>
          <strong>Street Teams and Safe Learning Spaces:</strong> Formation of
          creative and inclusive street teams engaged in arts, sports, and
          mentorship as tools for behaviour transformation and leadership
          development.
        </li>
        <li>
          <strong>Mobile Street Schools — Learning Without Walls:</strong>{" "}
          Establishment of a mobile street school as a safe, open, and flexible
          learning space where children and youth explore their talents,
          strengthen their self-esteem, and discover the joy of learning.
        </li>
        <li>
          <strong>Toolkits for Self-Reliance:</strong> Provision of work
          trollies and tool kits that help youth transition from street life to
          self-employment and community contribution.
        </li>
          </ul>
        </motion.div>
      </section>

      {/* Section C */}
      <section className="w-full max-w-4xl mb-12">
        <div className="sticky top-0 bg-green-100 py-3 px-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-green-800">
            C. ENVIRONMENTAL CONSERVATION AND SUSTAINABILITY
          </h2>
        </div>

        <motion.div
          className="mt-4 text-gray-700 leading-relaxed space-y-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            ECN promotes environmental awareness and sustainable practices
            through community tree planting, waste management campaigns, and
            training on climate-smart agriculture. Our goal is to foster a
            generation that values and protects nature.
          </p>
          <p>
            We partner with schools, local groups, and government agencies to
            implement conservation projects that ensure a cleaner and greener
            environment for all.
          </p>
        </motion.div>
      </section>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          title="Back to Top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}

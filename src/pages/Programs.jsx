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
            B. EDUCATION SUPPORT PROGRAMS
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
            ECN supports children from needy backgrounds to access education
            through school sponsorships, provision of learning materials, and
            mentorship programs. We believe that education is a powerful tool
            for breaking the cycle of poverty and empowering the next
            generation.
          </p>
          <p>
            Our mentorship and after-school initiatives provide academic and
            emotional support to help students excel both in school and in life.
          </p>
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

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Footer from "../components/Footer"; // ✅ Added Footer

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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Page Content */}
      <div className="flex-grow flex flex-col items-center justify-start px-4 sm:px-8 py-8">
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
            {/* ✅ No text edited below */}
            <p>Education for a Greener and Sustainable Future</p>
            <p>
              The environment is in us, not outside of us. The trees are our
              lungs, the rivers our bloodstream. We are all interconnected.”
              <strong>— Wangari Maathai</strong>
            </p>
            <p>
              WHY TREES?
              <br />
              “Trees exhale for us so that we can inhale them to stay alive. Can
              we ever forget that? Let us love trees with every breath we take
              until we perish.” — Munia Khan
            </p>
            <p>
              At Elimu Community Network (ECN), trees represent more than
              nature. They symbolize life, learning, and liberation. Through our
              tree planting initiatives, we blend environmental conservation
              with education, helping communities understand that sustainability
              begins with knowledge and grows through collective action.
            </p>
            <p>
              Tree planting with ECN is a learning journey. It brings together
              children, youth, women, and families to care for the earth while
              cultivating skills, values, and unity. It is one of the simplest
              yet most profound ways to teach communities how education and
              nature together can transform lives.
            </p>
            <p>
              <strong>WHAT TREE PLANTING ACHIEVES</strong>
            </p>
            <p>
              Tree planting promotes development in our communities and
              contributes to climate resilience by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>
                Building community unity – bringing people together with a
                shared goal of creating greener spaces.
              </li>
              <li>
                Improving air quality and rainfall – trees breathe life into our
                planet by producing clean oxygen and restoring natural cycles.
              </li>
              <li>
                Protecting soil and preventing floods – strong roots reduce
                erosion and safeguard farmlands and homes.
              </li>
              <li>
                Supporting livelihoods – providing fruits, herbs, and medicines
                that enhance nutrition and health.
              </li>
              <li>
                Protecting biodiversity – creating habitats for birds, insects,
                and wildlife essential to ecosystem balance.
              </li>
            </ul>
            <p>
              “The best time to plant a tree was 20 years ago. The second-best
              time is now.” — African Proverb
            </p>
            <p>Join Our Green Movement </p>
            <h2>LEARNING THROUGH ACTION</h2>
            <p>
              At ECN, tree planting doubles as an educational experience where
              learning meets action. Our school-based activities inspire young
              minds to understand the power of small actions in shaping a
              sustainable future.
            </p>
            <h3>Objective:</h3>
            <p>
              To teach children and communities the importance of environmental
              care and tree planting.
              <br />
              Materials Needed:
              <br />
              Seedlings, charts, watering cans.
              <br />
              Time Required:
            </p>
            <p>Simple Learning Activity:</p>
            <ul>
              <li>1. Begin with a discussion on why trees are important.</li>
              <li>
                2. Have children draw or write the steps for tree planting on
                colorful charts.
              </li>
              <li>
                3. Add inspiring phrases like “Trees and Children for the
                Future!” and display them publicly.
              </li>
              <li>
                4. Prepare the planting site, dig holes, and plant the seedlings
                carefully.
              </li>
              <li>
                5. Water, protect, and nurture the trees, while celebrating
                teamwork and responsibility.
              </li>
            </ul>
            <p>
              “When children plant trees, they are planting hope for generations
              to come.”
            </p>
            <p>Partner with us in Starting a School Green Club </p>
            <h2>COMMUNITY IMPACT</h2>
            <p>
              Across ECN’s regions from Nairobi’s urban schools to Busia’s
              flood-prone plains, tree planting has become a symbol of education
              in action. In Budalangi, Busia County, our initiatives engage
              local communities in planting trees to reduce flooding, restore
              soil health, and create sustainable livelihoods.
            </p>
            <p>Images coming soon</p>
            <p>
              This initiative exemplifies how education can drive environmental
              innovation by turning community challenges into opportunities for
              growth and resilience.
            </p>
            <h2>EDUCATION AS THE ROOT OF SUSTAINABILITY</h2>
            <p>
              For ECN, education is the seed and sustainability is the harvest.
              Tree planting symbolizes the harmony between learning and living
              and a reminder that informed communities are empowered
              communities.
            </p>
            <p>
              “When we plant trees, we plant the seeds of peace and hope.”
              <strong>— Wangari Maathai</strong>
            </p>
            <p>
              Through these efforts, ECN aims to cultivate not just forests, but
              a culture of environmental consciousness, where children, youth,
              and women lead Africa’s green transformation.
            </p>
            <p>Be Part of Our Eco-Education Movement</p>
            <p>
              “Growing Education. Growing Africa.” <br />
              “He who learns, teaches.” <strong>— Ethiopian Proverb</strong>
            </p>
          </motion.div>
        </section>

        {/* Section B */}
        <section className="w-full max-w-4xl mb-12">
          <div className="sticky top-0 bg-green-100 py-3 px-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-green-800">
              B. CHILD/YOUTH PROTECTION AND EDUCATION ALTERNATIVES
            </h2>
          </div>

          <motion.div
            className="mt-4 text-gray-700 leading-relaxed space-y-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* ✅ Text preserved */}
            <h2>Nafasi Programme: Creating Spaces and Opportunities for Change</h2>
            <p>“Every child has a right to be safe, to learn, and to dream.”</p>
            <h2>What is Nafasi?</h2>
            <p>
              Nafasi is a Swahili word meaning “space” and “opportunity.” It is
              also the name of ECN’s transformative social programme dedicated
              to reducing the number of children, youth, and families living on
              the streets by using education as a pathway to dignity,
              empowerment, and lasting change.
            </p>
            <p>
              Through the Nafasi Programme, ECN journeys with street-connected
              children and youth by meeting them where they are, listening to
              their stories, and walking beside them as they discover spaces and
              opportunities to survive, learn, and thrive.
            </p>
            <p>From the Streets to Safe Spaces</p>
            <p>
              Nafasi begins with compassion and curiosity. Our teams conduct
              mobile street outreach, building trust and helping children and
              youth identify safe survival options. From there, we guide them
              into rehabilitation, learning opportunities, and eventually family
              or community reintegration.
            </p>
            <p>The journey follows three stages:</p>
            <ul>
              <li>
                1. Rescue/Survival – Offering immediate safety, care, and
                emotional support on the streets.
              </li>
              <li>
                2. Rehabilitation – Providing counseling, basic education, and
                psychosocial support in transitional spaces.
              </li>
              <li>
                3. Reintegration – Supporting family reunification and access to
                long-term educational and vocational pathways.
              </li>
            </ul>
            <p>
              Each step is guided by our belief that; education is the bridge
              between vulnerability and opportunity.
            </p>
            <p>
              “Education is not a way to escape poverty; it is a way of fighting
              it.” <strong>— Julius Nyerere</strong>
            </p>
            <p>Programme Objectives:</p>
            <ul>
              <li>
                1. <strong>To strengthen social protection systems</strong> for
                children and youth living on the streets, safeguarding their
                rights and wellbeing.
              </li>
              <li>
                2. <strong>To increase sustainable reintegration</strong> through
                family-based care and access to education, skills training, and
                livelihood opportunities.
              </li>
            </ul>
            <p>Key Activities</p>
            <ul>
              <li>
                <strong>Street Work:</strong> Identification and assessment of
                street-connected children and youth, providing immediate
                assistance and pathways to reintegration.
              </li>
              <li>
                <strong>Street Teams and Safe Learning Spaces:</strong> Formation
                of creative and inclusive street teams engaged in arts, sports,
                and mentorship as tools for behaviour transformation and
                leadership development.
              </li>
              <li>
                <strong>Mobile Street Schools — Learning Without Walls:</strong>{" "}
                Establishment of a mobile street school as a safe, open, and
                flexible learning space where children and youth explore their
                talents, strengthen their self-esteem, and discover the joy of
                learning.
              </li>
              <li>
                <strong>Toolkits for Self-Reliance:</strong> Provision of work
                trollies and tool kits that help youth transition from street
                life to self-employment and community contribution.
              </li>
            </ul>
            <p>
              “When we educate a child, we do not just change a life — we change
              a generation.” <strong>- Mobile street school</strong>
            </p>
            <br></br>
            <p>
              Nafasi is founded on the belief that education liberates potential.
              It helps children and youth rediscover their identity, rebuild confidence, and reimagine their place in the world.
              Our “mobile street school” is not confined by walls because it travels where the children are, creating learning experiences rooted in real life and inspired by their strengths, talents, and dreams.
              Through mentorship, creativity, and structured support, each child learns that their circumstances do not define their destiny.
            </p>
            <p>
              “The child who is not embraced by the village will burn it down to feel its warmth.”
              <strong>— African Proverb</strong>
            </p>
            <p>Join the Journey</p>
            <p>Every week, ECN’s Nafasi team takes to the streets of Nairobi and surrounding communities not only to rescue but to reimagine education as a tool for healing and empowerment.
            This is not charity, it is partnership in transformation.
            </p>
            <p>
              “Education is the key to unlock the golden door of freedom.”
                <strong> George Washington Carver</strong>
            </p>
            <h2>Call to Action:</h2>
            <p>
              Join us in this beautiful journey of discovering and expanding learning spaces where every child finds their Nafasi; their space, their opportunity, their future.
            </p>
            <h2>Sports for Transformation</h2>
            <p>Empowering vulnerable Youth through Play, Purpose, and Participation</p>
            <p>“Sport has the power to change the world. It has the power to inspire and unite people in a way that little else does.”
            <strong>— Nelson Mandela</strong>
            </p>
            <p>
              At Elimu Community Network (ECN), we believe that street and village sports are more than games. They are a classroom without walls, a bridge from vulnerability to self-discovery.
              Through sports-based learning, we use football, athletics, and creative games as transformative tools to engage youth, build life skills, promote discipline, and open pathways to education and sustainable livelihoods.
            </p>
            <h2>Specific Objective</h2>
            <p>
              To empower village and street-connected youth through structured sports and life-skills education, enhancing their social inclusion, psychosocial wellbeing, and access to education and livelihood opportunities.
            </p>
            <h2>Key Activities</h2>
            <ul>
              <li>
                <strong>1.	Formation of Street Sports Clubs</strong> 
                <p>Establish safe and inclusive street and village sports clubs where youth meet regularly to play, learn, and grow together.
                Sessions combine football, athletics, and team challenges with structured life-skills lessons on teamwork, communication, leadership, and self-control.
                </p>
              </li>
              <li>
                <strong>2.	Street and village Sports Tournaments and Talent Days</strong> 
                <p>EOrganize quarterly community tournaments and “Talent Days” that showcase the abilities of participating youth.
                  These events foster team spirit, reduce stigma, and connect youth to education, vocational training, and mentorship opportunities.
                </p>
              </li>
              <li>
                <strong>3.  Peer Coaching and Leadership Development</strong> 
                <p>Identify and train outstanding participants as peer coaches and youth mentors.
                They become positive role models, leading younger players, facilitating learning circles, and organizing community clean-up or advocacy events that promote peace and social responsibility.
                </p>
              </li>
            </ul>
            <h2>Achievements</h2>
            <ul>
              <li>
                <strong>1.	Youth Empowerment and Re-engagement</strong> 
                <p>Over 70% of participating youth demonstrated improved confidence, teamwork, and emotional regulation, with many re-engaging in education, training, or family life.
                </p>
              </li>
              <li>
                <strong>2.	Social Inclusion and Community Cohesion</strong> 
                <p>Street and village sports activities reduced social stigma and strengthened community bonds, transforming how local residents perceive and support vulnerable youth.
                </p>
              </li>
              <li>
                <strong>3.	Pathways to Opportunity</strong> 
                <p>Through mentorship, talent development, and educational linkages, participating youth accessed new opportunities — from school re-entry and vocational training to employment and microenterprise in the sports value chain.
                </p>
              </li>
            </ul>
            <p>
              “When youth play, they learn. When they learn, they lead. And when they lead, communities transform.”
              <strong>— Elimu Community Network</strong>
            </p>
            </motion.div>
        </section>

        {/* Section C */}
        <section className="w-full max-w-4xl mb-12">
          <div className="sticky top-0 bg-green-100 py-3 px-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-green-800">
              C.	IMARA WOMEN: Building Strength through Knowledge and Innovation
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
      </div>

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

      {/* ✅ Full-width Sticky Footer */}
      <footer className="w-full bg-green-600 text-white mt-auto">
        <div className="max-w-screen-2xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

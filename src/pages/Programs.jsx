import { useState } from "react";
import { Link } from "react-router-dom";

export default function Programs() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 NAVBAR */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">ECN AFRICA</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium relative">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/programs" className="hover:text-blue-600">Programs</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog/News</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-blue-700 text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-6 py-4">
            <Link to="/" className="hover:text-blue-600 block">Home</Link>
            <Link to="/about" className="hover:text-blue-600 block">About Us</Link>
            <Link to="/programs" className="hover:text-blue-600 block">Programs</Link>
            <Link to="/blog" className="hover:text-blue-600 block">Blog/News</Link>
            <Link to="/contact" className="hover:text-blue-600 block">Contact Us</Link>
          </nav>
        )}
      </header>

      {/* 🔹 PAGE CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-32 space-y-12">
        <h1 className="text-4xl font-bold text-blue-700 text-center">Our Programmes</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Networking and Advocacy</h2>
          <p>
            This is a component that cuts across all our initiatives to ensure maximum impact for our beneficiaries. 
            Through advocacy at County and Sub-county Levels, we sensitize decision-makers on the rights and needs of children. 
            We also support children and young people to actively participate in the decision-making processes as protagonists of their lives. 
            In addition, we strive to build the capacity of community networks to conduct advocacy efforts for the implementation of children rights according to national and international standards.
          </p>
          <p>
            Since inception, ECN has used the blog to highlight key issues affecting children in Kenya and around the world. 
            It has proven to be a powerful tool for sharing information and influencing learning for stakeholders through articles focusing on our target areas. 
            This has facilitated the safeguarding of children rights and the advocacy for their best interests.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">A. EDUCATION – System Strengthening for Innovative Learning Opportunities</h2>
          <p>
            We strive to transform schools/learning institutions to become catalysts for the desired social change, responsive agents that activate local communities to become proactive <strong>because we believe that;</strong>
          </p>
          
    
          <blockquote className="pl-4 border-l-4 border-blue-700 italic">
            “Access to quality and inclusive education enables children and families to become lifelong learners, transform their communities, protect themselves from exploitation and explore all the potentials of life.”
          </blockquote>
          <section><p><strong>and that.....</strong></p></section>
          <p>
            “An educative community is a teacher of all the people who live in it. The community is a teacher in the sense that it is a continuous learning setting in which people’s attitudes, talents, and behaviors are influenced. Hence a school as part of the educational system can help the community become a better teacher for the generation of innovative opportunities. It can facilitate the interaction of the community members and the educational system for the betterment of all. The community is potentially a living, learning laboratory that needs to be activated”
          </p>
          <section><p><strong>Are you ready?</strong></p></section>
          <p>
            To explore creative ways of learning, to capacity build agents of change, to provide leadership in the generation of knowledge that is relevant to the local African context. Join us! Karibu
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">NAIROBI STREET SCHOOL – Education Alternatives for Children in the Streets</h2>
          <p>
            ECN was founded as a response to the educational needs of children on the streets that educators had come to know over the years in Nairobi Kenya.
          </p>
          <p>
            The programme is currently on-going in the STREET BASES of Nairobi and endeavours to promote the right to education and child protection objective of ECN. 
          </p>
          <p>
            We look for street children who need help and explore with them how to survive in the society as inspired by their strengths and curiosity. In addition to knowledge and skills, we emphasize on the practical aspects of real life situations in the streets.
          </p>
          <p>
            The mobile school is a safe space where street connected children and youth are able to explore their talents, interests and dreams. Where they are empowered and motivated to take their lives in their own hands, and make their own decisions to have a sustainable life. The goal is to facilitate their educational discovery of themselves…..
          </p>
          <p>
            Join us every week on this beautiful adventure of exploring and discovering street education
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">B. CHILD PROTECTION – Alternative Care and Participatory Learning</h2>
          <p>
            We believe it’s possible to rescue every child from the streets and enable them to live to their full potential facilitated by relevant education. We identify what has separated the child from the protection of family to the street and focus our effort on the root causes. With our support, journeying together with them, children and families participate in choosing and implementing their own solutions. 
          </p>
          <p>
            Character development, resilience and leadership are central to our service. Hence, we equip a child to succeed by building internal qualities based on positive values.  As children develop strong personal qualities, they are better able to maximize opportunities and become creative.
          </p>
          <p>
            <strong>Every child in the streets has a unique story…. The reason for being in the streets, how they survive, their dreams…… Therefore the solution for every child is unique…..</strong>
          </p>
          <p>
            We believe that the best place for any child is in a family set-up that loves and takes care of their basic material needs. We therefore endeavour to reintegrate children into biological families or under kinship care or foster care where possible.
          </p>
          <p>
            We believe that families can support each other reciprocally. Hence the need to prevent family separations while strengthening the potential of biological families, kinship care and foster care options is paramount.
          </p>
          <p>
            <strong>“When a family wishes to open-up itself to an encounter with other learning experiences, then community based support can enable the germination of new opportunities that facilitate Education Alternatives.”</strong>
          </p>
          <p>
            It is an opportunity to open our hearts and minds, to discover Africa that is capable of acting, which works for improvement through education, which teaches courage and trust.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">NAFASI PROGRAMME</h2>
          <p>
           Nafasi is a Swahili word that means ‘space’ and ‘opportunity’. It is the name given to our social programme that has a mission to reduce the number of children, youth and families living on the streets. We journey with children and youth living on the streets to explore spaces and opportunities in society where they can survive and thrive.
          </p>
          <p>The programme begins by helping children, youth and their families (where applicable), to find survival opportunities on the streets. It then facilitates safe rehabilitation opportunities and eventually explores innovative and alternative opportunities to achieve the full integration and potential of the child or youth within empowering spaces in families and communities.
            </p>
            <p>
                The programme which is based in Kawangware and Ruai streets and has two specific objectives:
            </p>
             <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>To improve social protection in order to safeguard the welfare of children and youth living in the streets</li>
          <li>To increase the sustainable reintegration of vulnerable children and youth through alternative family-based care and potential opportunities</li>
        </ul>
        <p><strong>Activities</strong></p>
        <p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Identification and assessment of street children and youth through mobile street work for eventual reintegration into families</li>
          <li>Formation of street teams engaged in innovative behaviour management, talent development through arts and sports initiatives</li>
          <li>Provision of tool kits in the form of trollies as an alternative opportunity for the street youths to employ themselves  </li>
        </ul>
        </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">FAMILIA BORA FOSTER CARE PROGRAMME</h2>
          <p>
            Through collaboration with the CFFK and DCS, we have supported the creation of awareness about Kenya’s National Care Reform Strategy (NCRS) that seeks to transition the nation’s care systems from over reliance on institutional care to a system where children and young people live safely, happily and sustainably in family and community-based care, and where their best interests are served. We have done this by advocating for care reform through the church, community networks and media platforms.
          </p>
          <p>
            The programme focuses on Kiambu County (Githunguri sub-county) through the L4C initiative and Kajiado County (kajiado North sub-county) through the Foster collaborative initiative.
          </p>
          <p>
            It aims to contribute to the promotion and protection of vulnerable children’s rights to family and community-based care in Kenya as per the UN Guidelines for the Alternative Care of Children, the Kenya Constitution 2010 and the new children Act 2022.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">C. COMMUNITY DEVELOPMENT – Empowerment through Health, Food Security and Environment Conservation</h2>
          <p>
            <strong>Health – Malaria control in Nyabondo of Kisumu County</strong>
          </p>
          <p>
            Malaria continues to be one of the most common diseases experienced in Nyabondo area as evidenced by the baseline survey conducted in the year 2013. Building on the achievement of previous years by our partners, the Nyabondo project was realized in collaboration with other partners i.e MOCON CBO, ICIPE and Karibu Afrika with an aim of improving on the impact of research activities in the target area.
          </p>
          <p><strong>Entomological activities</strong></p>
          <p>
            A functional insectary facility was established and equipped. Weekly larval sampling exercises were then undertaken on the mosquito habitats during project implementation. Surveillance studies were carried out; Malaria prevalence survey was conducted among school going children of age  12 years in ten schools from ten different villages within the project area where about 1000 school going children were tested for malarial parasites.
          </p>
          <p><strong>Fish farming</strong></p>
          <p>
            The project period experienced a prolonged drought session in the first year which led to the drying up of some fish ponds in our project area hence affecting the economic output of the initiative. However, normalcy returned with the onset of the rains in the second year which filled all the ponds with water. To ensure that such extreme situations are mitigated in future, a training is was organized for the sustainability of fish farming which is an effective means of killing mosquitoes lavae thus preventing malaria.
          </p>
          <p><strong>Community Mosquito day celebrations  </strong></p>
          <p>
            We managed to work together with the other organizational stakeholders to successfully conduct a community mosquito day in the month of March at Bodi market whereby there were over 800 people in attendance, we reached 1000 people with brochures and more through the radio. The event started with a procession using a giant puppet after which participants were offered free testing of malaria and HIV, education through poems, drama, songs and dances, speeches from guests as well as exhibition from groups and schools. Sports activities were also organized for community mobilization.
          </p>
          <p><strong>The Mocon Bulettin</strong></p>
          <p>
            This is a tool developed by community members as a space for the community to dialogue with itself. Through the facilitation of the project, community members use it as the primary source of information, education and communication on mosquito control in Nyabondo and for development as well even beyond the project period. It is to be published on quarterly basis ensuring that it becomes a voice of the people for the people.
          </p>
        </section>
      </main>

      {/* 🔹 FOOTER */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ECN Africa. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
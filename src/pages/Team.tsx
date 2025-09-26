import { motion } from "framer-motion";
import TeamBg from "../assets/TeamBackground.webp"; 
import vk from "../assets/vk.webp";
import mt from "../assets/mt.webp";
import nt from "../assets/nt.webp";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  role:
    | "Chairman"
    | "Director"
    | "Consultant"
    | "Manager"
    | "Coordinator"
    | "Country Coordinator";
  image?: string;
  avatar?: string;
}

const teamMembers: TeamMember[] = [
  // ---------------- Chairman ----------------
  {
    name: "Vinod Kumar Khandelwal",
    title: "Chairman, KECT Group of Companies",
    description:
      "BSc (USA), MBA (India). Visionary leader with global project experience, committed to innovation and excellence in infrastructure development across multiple countries.",
    role: "Chairman",
    image: vk,
    avatar: "VK",
  },

  // ---------------- Directors ----------------
  { name: "M. Jayaramchandran", title: "Director", description: "BA Econ, AIB (SL)", role: "Director", avatar: "MJ" },
  { name: "M. Thiyagaraja", title: "Director", description: "Attorney at Law, MBA, ACA, FCMA, AIB, AAAI, FIBM", role: "Director", image: mt, avatar: "MT" },
  { name: "Nalika Thilakarathne", title: "Director", description: "HNDC, HNDE - ISO", role: "Director", image: nt, avatar: "NT" },
  { name: "Ananda Emmanuel", title: "Director", description: "BBMS (UK) Diploma in Import & Export", role: "Director", avatar: "AE" },
  { name: "Chathurangani Amarthunge", title: "Director", description: "Attorney at Law, LL.B(Hons)", role: "Director", avatar: "CA" },
  { name: "A.D. Manjalika", title: "Director", description: "Former Manager (SLFEB)", role: "Director", avatar: "AM" },
  { name: "W.T.S. Fernando", title: "Director", description: "BA in International Relations, LL.B(Hons) Attorney at Law", role: "Director", avatar: "WF" },
  { name: "Chandani Ekanayake", title: "Director", description: "PQ HRM (CIPM), Masters in Public Management (SLIDA)", role: "Director", avatar: "CE" },
  { name: "Methmini Balasooriya", title: "Director", description: "BSc. (Special) in Accounting, AAT", role: "Director", avatar: "MB" },

  // ---------------- Consultants ----------------
  { name: "R. Perera", title: "Consultant", description: "ISO 9001/14000/45001", role: "Consultant", avatar: "RP" },
  { name: "Minal Senarathne", title: "Consultant", description: "ISO 9001/14000/22000", role: "Consultant", avatar: "MS" },
  { name: "Manori Godagama", title: "Consultant", description: "MSc. in Food Science and Technology", role: "Consultant", avatar: "MG" },

  // ---------------- Managers ----------------
  { name: "Egodage Shyamani Kanthi Lanka", title: "Manager", description: "Bachelor of Science Management", role: "Manager", avatar: "ES" },
  { name: "Goyumi Sathsarani Gunarathna Abhayawardana", title: "Manager", description: "BMg. Strategic Management (UG), BSc(Hons) Psychology, HRM", role: "Manager", avatar: "GA" },
  { name: "Anusha Perera", title: "Manager", description: "Dip in MIS", role: "Manager", avatar: "AP" },
  { name: "Rumeshika Gunasekara", title: "Manager", description: "Masters in Buddhist Counseling", role: "Manager", avatar: "RG" },
  { name: "B.H.N.C. Premathilake", title: "Manager", description: "MBA in Sales Development & Entrepreneurship", role: "Manager", avatar: "BP" },

  // ---------------- Coordinators ----------------
  { name: "T.M. Prasadi Sandunika Thambavita", title: "Coordinator", description: "BA (Hons) in Psychology", role: "Coordinator", avatar: "PT" },
  { name: "B.A. Madhuri Navodya Balasooriya", title: "Coordinator", description: "BTech in Food Process Technology", role: "Coordinator", avatar: "MB" },
  { name: "K.A. Pavani Bhagya", title: "Coordinator", description: "BSc in Business Management", role: "Coordinator", avatar: "PB" },
  { name: "Piyumika Karunadeera", title: "Coordinator", description: "Dip in Psychology (University of Kelaniya)", role: "Coordinator", avatar: "PK" },
  { name: "Sithy Sharmila Rahim", title: "Coordinator", description: "Dip in Graphic Designing", role: "Coordinator", avatar: "SR" },

  // ---------------- Country Coordinators ----------------
  { name: "Shanthani Sugunakumar", title: "Country Coordinator - Bahrain", description: "HND Software Engineering, Dip. in Business Management", role: "Country Coordinator", avatar: "SS" },
  { name: "Mayuranga Thillindalal", title: "Country Coordinator - Cyprus", description: "Cert. in Graphic Designing, Hardware Engineering, Banking & Finance", role: "Country Coordinator", avatar: "MT" },
  { name: "Vindiyani Irosha", title: "Country Coordinator - Czech Republic", description: "Dip. in Business Management, IT & Finance UG", role: "Country Coordinator", avatar: "VI" },
  { name: "Ameesha Fernando", title: "Country Coordinator - Germany", description: "BSc. (Hons) Network and Cyber Security", role: "Country Coordinator", avatar: "AF" },
  { name: "Dahamese Kasthuriarachchi", title: "Country Coordinator - Israel", description: "BSc (Hons) Business Information Systems", role: "Country Coordinator", avatar: "DK" },
  { name: "Mohomad Rafeek Noorul Nawar", title: "Country Coordinator - Japan", description: "Dip. in English, Degree in Computer Science", role: "Country Coordinator", avatar: "MN" },
  { name: "Hemali Sakunthala Kumari", title: "Country Coordinator - KSA", description: "BA (Hons) Leadership & Management", role: "Country Coordinator", avatar: "HK" },
  { name: "Semira Kavishwara", title: "Country Coordinator - Kuwait", description: "AVL", role: "Country Coordinator", avatar: "SK" },
];

export default function Team() {
  // Group members by role
  const grouped = {
    Chairman: teamMembers.filter((m) => m.role === "Chairman"),
    Directors: teamMembers.filter((m) => m.role === "Director"),
    Consultants: teamMembers.filter((m) => m.role === "Consultant"),
    Managers: teamMembers.filter((m) => m.role === "Manager"),
    Coordinators: teamMembers.filter((m) => m.role === "Coordinator"),
    CountryCoordinators: teamMembers.filter((m) => m.role === "Country Coordinator"),
  };

  const renderSection = (title: string, members: TeamMember[]) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center transform transition duration-300 hover:scale-105">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-bold text-xl">{member.avatar}</span>
              )}
            </div>
            <h4 className="text-lg font-semibold text-blue-900">{member.name}</h4>
            <p className="text-blue-700 font-medium">{member.title}</p>
            <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${TeamBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium my-8">
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Meet Our Team</h2>
          <p className="text-lg mt-6 md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200">
            Dedicated professionals from around the world, leading KECT with expertise and passion.
          </p>
        </motion.div>

        {/* Chairman Centered */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Chairman</h3>
          {grouped.Chairman.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto bg-white bg-opacity-90 rounded-xl p-8 shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-xl bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center transform transition duration-300 hover:scale-105">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-bold text-2xl">{member.avatar}</span>
                )}
              </div>
              <h4 className="text-xl font-bold text-blue-900">{member.name}</h4>
              <p className="text-blue-700 font-medium">{member.title}</p>
              <p className="text-gray-600 mt-4 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Other Sections */}
        {renderSection("Directors", grouped.Directors)}
        {renderSection("Consultants", grouped.Consultants)}
        {renderSection("Managers", grouped.Managers)}
        {renderSection("Coordinators", grouped.Coordinators)}
        {renderSection("Country Coordinators", grouped.CountryCoordinators)}
      </div>
    </section>
  );
}

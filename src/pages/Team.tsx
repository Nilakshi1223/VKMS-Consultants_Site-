import React from "react";
import { motion } from "framer-motion";
import TeamBg from "../assets/TeamBackground.webp"; // optional background image

interface TeamMember {
  name: string;
  title: string;
  description: string;
  role: "Chairman" | "Director" | "Consultant" | "Manager";
  avatar?: string; // can be initials or URL
}

const teamMembers: TeamMember[] = [
  {
    name: "Vinod Kumar Khandelwal",
    title: "Chairman, KECT Group of Companies",
    description:
      "Visionary leader with global project experience, committed to innovation and excellence in infrastructure development across multiple countries.",
    role: "Chairman",
    avatar: "VK",
  },
  {
    name: "M. Thiyagaraja",
    title: "Director",
    description: "Attorney at Law, MBA, ACA, FCMA, AIB, AAAI, FIBM",
    role: "Director",
    avatar: "MT",
  },
  {
    name: "Nalika Thilakarathne",
    title: "Director",
    description: "HNDC, HNDE - ISO",
    role: "Director",
    avatar: "NT",
  },
  {
    name: "Chandani Ekanayake",
    title: "Director",
    description: "PQ HRM (CIPM), MPM (SLIDA)",
    role: "Director",
    avatar: "CE",
  },
  {
    name: "Fazil Uwais",
    title: "Director",
    description: "Dedicated professional driving success across departments.",
    role: "Director",
    avatar: "FU",
  },
  // You can add Consultants and Managers here similarly
];

export default function Team() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${TeamBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium my-8">
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Our Leadership Team
          </h2>
          <p className="text-lg mt-6 md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200">Our leadership is driven by excellence, passion, and decades of global industry experience.</p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow">
                {member.avatar}
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
              <p className="text-blue-700 font-medium">{member.title}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

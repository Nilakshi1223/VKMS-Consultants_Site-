import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import glpImg from "../../assets/services/glp.webp";
import gmpImg from "../../assets/services/gmp.webp";
import haccpImg from "../../assets/services/haccp.webp";

// Service type
type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  page: string;
};

// Services with images and navigation path
const regulatoryServices: Service[] = [
  { id: 1, title: "GLP", description: "Good Laboratory Practices", image: glpImg, page: "/glp" },
  { id: 2, title: "GMP", description: "Good Manufacturing Practices", image: gmpImg, page: "/gmp" },
  { id: 3, title: "HACCP", description: "Hazard Analysis & Critical Control Points", image: haccpImg, page: "/haccp" },
];

export default function RegulatoryPractice() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredServices = regulatoryServices.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Regulatory Practice Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert guidance on compliance, operations, and business strategies to strengthen your organization.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search regulatory services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div
                onClick={() => navigate(service.page)}
                className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{service.description}</p>
                  <button
                    onClick={() => navigate(service.page)}
                    className="mt-4 inline-block px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results */}
        {filteredServices.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            No matching services found.
          </motion.p>
        )}
      </div>
    </section>
  );
}

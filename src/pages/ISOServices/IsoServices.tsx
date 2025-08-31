import  { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import iso9001 from "../../assets/services/iso9001.webp";
import iso13485 from "../../assets/services/iso13485.webp";
import iso14001 from "../../assets/services/iso14001.webp";
import iso15189 from "../../assets/services/iso15189.webp";
import iso17025 from "../../assets/services/iso17025.webp";
import iso20001 from "../../assets/services/iso20001.webp";
import iso22000 from "../../assets/services/iso22000.webp";
import iso22301 from "../../assets/services/iso22301.webp";
import iso27001 from "../../assets/services/iso27001.webp";
import iso37001 from "../../assets/services/iso37001.webp";
import iso45001 from "../../assets/services/iso45001.webp";
import iso50001 from "../../assets/services/iso50001.webp";

// ✅ ISO Services with images and navigation path
const isoServices = [
  { id: 1, title: "ISO 9001 : 2015", description: "Quality Management Systems", image: iso9001, page: "/iso9001" },
  { id: 2, title: "ISO 13485 : 2016", description: "Medical Device QMS", image: iso13485, page: "/iso13485" },
  { id: 3, title: "ISO 14001 : 2015", description: "Environmental Management Systems", image: iso14001, page: "/iso14001" },
  { id: 4, title: "ISO 15189 : 2022", description: "Medical Laboratories", image: iso15189, page: "/iso15189" },
  { id: 5, title: "ISO/IEC 17025 : 2017", description: "Testing & Calibration Labs", image: iso17025, page: "/iso17025" },
  { id: 6, title: "ISO 2000-1 : 2018", description: "IT Service Management", image: iso20001, page: "/iso20001" },
  { id: 7, title: "ISO 22000 : 2018", description: "Food Safety Management", image: iso22000, page: "/iso22000" },
  { id: 8, title: "ISO 22301 : 2019", description: "Business Continuity", image: iso22301, page: "/iso22301" },
  { id: 9, title: "ISO 27001 : 2013", description: "Information Security", image: iso27001, page: "/iso27001" },
  { id: 10, title: "ISO 37001 : 2019", description: "Anti-bribery", image: iso37001, page: "/iso37001" },
  { id: 11, title: "ISO 45001 : 2018", description: "Occupational Health & Safety", image: iso45001, page: "/iso45001" },
  { id: 12, title: "ISO 50001 : 2018", description: "Energy Management", image: iso50001, page: "/iso50001" },
];

export default function IsoServices() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ✅ Filter services by search term
  const filteredServices = isoServices.filter(
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
          <h2 className="text-4xl font-bold text-gray-900">ISO Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our certification services that help your business grow with global recognition.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search ISO services..."
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
                {/* Service Image */}
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

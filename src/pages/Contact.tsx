import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User } from "lucide-react";
import ContactBg from "../assets/ContactBackground.webp";

export default function Contact() {
  return (
    <section
      className="relative py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ContactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Top Title */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Small Badge with Background */}
          <div className="inline-block px-4 mt-8 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium shadow-md">
            Contact Us
          </div>

          {/* Gradient Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-50 to-blue-100 text-transparent bg-clip-text">
            Get In Touch
          </h2>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-200 bg-black/50 p-10 rounded-2xl text-lg max-w-2xl mx-auto">
            Reach out to us for consultancy inquiries, ISO certification
            support, or professional guidance. Our team is here to support
            your business growth.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Office Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start space-x-4 bg-white bg-opacity-80 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">Head Office</h4>
              <p className="text-gray-600">
                No. 110/1A, Cotta Road, Colombo 08, Sri Lanka
              </p>
            </div>
          </motion.div>

          {/* Office Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-start space-x-4 bg-white bg-opacity-80 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow">
              <Phone size={22} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">Contact Number</h4>
              <p className="text-gray-600">070 533 9370</p>
            </div>
          </motion.div>

          {/* Chairman
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-start space-x-4 bg-white bg-opacity-80 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow">
              <User size={22} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">Chairman</h4>
              <p className="text-gray-600">077 296 9370 / 070 533 9370</p>
            </div>
          </motion.div> */}

          {/* Director */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex items-start space-x-4 bg-white bg-opacity-80 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow">
              <User size={22} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">
                Director – Nalika Thilakarathne
              </h4>
              <p className="text-gray-600">076 978 0984</p>
            </div>
          </motion.div>

          {/* General Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-start space-x-4 bg-white bg-opacity-80 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow">
              <Mail size={22} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">
                General Email
              </h4>
              <p className="text-gray-600">vkms@kectholdings.com</p>
            </div>
          </motion.div>

          {/* Director Email
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="flex items-start space-x-4 bg-white bg-opacity-80 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow">
              <Mail size={22} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">
                Director – Nalika Thilakarathne
              </h4>
              <p className="text-gray-600">nalika@kectholdings.com</p>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

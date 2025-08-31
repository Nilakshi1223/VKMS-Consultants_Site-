import React from "react";
import iso17025 from "../../assets/services/iso17025.webp";
import { motion } from "framer-motion";

export default function Iso17025() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">ISO/IEC 17025 : 2017</h1>
          <p className="mt-4 text-lg text-gray-600">
            Testing and Calibration Laboratories certification ensures competence, consistency, and reliability of laboratory results worldwide.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img
            src={iso17025}
            alt="ISO 17025"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-700"
        >
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            ISO/IEC 17025:2017 specifies requirements for the competence of testing and calibration laboratories. It ensures laboratories produce precise, accurate, and reliable results, improving trust and credibility.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures accuracy and reliability of lab results</li>
            <li>Improves customer confidence in laboratory services</li>
            <li>Supports international recognition and compliance</li>
            <li>Enhances operational efficiency and consistency</li>
            <li>Reduces errors and risks in testing and calibration</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 17025 involves establishing procedures, documenting testing and calibration processes, training staff, conducting internal audits, and maintaining records. Certification is achieved after an external audit by an accredited body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

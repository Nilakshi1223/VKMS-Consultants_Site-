import React from "react";
import iso45001 from "../../assets/services/iso45001.webp";
import { motion } from "framer-motion";

export default function Iso45001() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 45001 : 2018</h1>
          <p className="mt-4 text-lg text-gray-600">
            Occupational Health & Safety Management certification helps organizations create safe workplaces, reduce work-related risks, and improve employee well-being.
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
            src={iso45001}
            alt="ISO 45001"
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
            ISO 45001:2018 specifies requirements for an Occupational Health & Safety Management System (OHSMS). It helps organizations proactively improve workplace safety, prevent injuries, and comply with occupational health regulations.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduces workplace accidents and incidents</li>
            <li>Enhances employee health, safety, and well-being</li>
            <li>Supports compliance with legal and regulatory requirements</li>
            <li>Improves organizational reputation and trust</li>
            <li>Encourages a proactive safety culture</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 45001 involves identifying workplace hazards, establishing safety policies, training employees, monitoring performance, and conducting internal audits. Certification is granted after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

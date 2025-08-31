import React from "react";
import iso14001 from "../../assets/services/iso14001.webp";
import { motion } from "framer-motion";

export default function Iso14001() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 14001 : 2015</h1>
          <p className="mt-4 text-lg text-gray-600">
            Environmental Management Systems certification helps organizations minimize environmental impact and comply with environmental regulations.
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
            src={iso14001}
            alt="ISO 14001"
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
            ISO 14001:2015 provides a framework for organizations to establish an effective Environmental Management System (EMS) that reduces environmental risks, improves resource efficiency, and ensures compliance with regulations.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimizes environmental impact and pollution</li>
            <li>Enhances compliance with environmental laws and regulations</li>
            <li>Improves operational efficiency and reduces waste</li>
            <li>Builds credibility with stakeholders and customers</li>
            <li>Supports sustainable business practices</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 14001 involves identifying environmental aspects, setting objectives, documenting processes, training employees, monitoring performance, and conducting internal audits. Certification is granted after a successful external audit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

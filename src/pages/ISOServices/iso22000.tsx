import React from "react";
import iso22000 from "../../assets/services/iso22000.webp";
import { motion } from "framer-motion";

export default function Iso22000() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 22000 : 2018</h1>
          <p className="mt-4 text-lg text-gray-600">
            Food Safety Management certification ensures organizations consistently provide safe food products, reducing risks throughout the supply chain.
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
            src={iso22000}
            alt="ISO 22000"
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
            ISO 22000:2018 provides a framework for a Food Safety Management System (FSMS) that ensures the safety of food products from production to consumption, managing hazards and regulatory compliance effectively.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures food safety across the supply chain</li>
            <li>Reduces risk of contamination and recalls</li>
            <li>Enhances customer confidence and brand reputation</li>
            <li>Supports compliance with international food safety regulations</li>
            <li>Improves operational efficiency and risk management</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 22000 involves defining food safety policies, documenting processes, training staff, monitoring hazards, and conducting audits. Certification is obtained after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

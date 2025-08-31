import React from "react";
import haccpImage from "../../assets/services/haccp.webp"; // Replace with your HACCP image path
import { motion } from "framer-motion";

export default function HACCP() {
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
          <h1 className="text-4xl font-bold text-gray-900">HACCP Certification</h1>
          <p className="mt-4 text-lg text-gray-600">
            HACCP certification ensures food safety by identifying, evaluating, and controlling hazards throughout the food production process.
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
            src={haccpImage}
            alt="HACCP"
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
            HACCP (Hazard Analysis and Critical Control Points) is a systematic approach to food safety that identifies biological, chemical, and physical hazards in production processes and establishes critical control points to prevent contamination.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures food safety and hygiene throughout production</li>
            <li>Reduces risk of foodborne illnesses and contamination</li>
            <li>Supports compliance with national and international regulations</li>
            <li>Enhances customer confidence and brand reputation</li>
            <li>Facilitates international trade and market access</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing HACCP involves conducting hazard analysis, identifying critical control points, establishing monitoring procedures, taking corrective actions, and maintaining records. Certification is granted after a successful audit by an accredited body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

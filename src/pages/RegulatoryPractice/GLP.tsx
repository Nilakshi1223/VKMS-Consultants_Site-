
import glpImage from "../../assets/services/glp.webp"; // Replace with your GLP image path
import { motion } from "framer-motion";

export default function GLP() {
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
          <h1 className="text-4xl font-bold text-gray-900">Good Laboratory Practice (GLP)</h1>
          <p className="mt-4 text-lg text-gray-600">
            GLP certification ensures laboratory studies are conducted with quality, consistency, and reliability, supporting regulatory compliance and scientific integrity.
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
            src={glpImage}
            alt="GLP"
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
            Good Laboratory Practice (GLP) is a quality system concerned with the organizational process and conditions under which laboratory studies are planned, performed, monitored, recorded, and reported. It ensures reliability and integrity of data submitted to regulatory authorities.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures quality, consistency, and integrity of laboratory results</li>
            <li>Supports regulatory compliance for studies submitted to authorities</li>
            <li>Improves laboratory management and operational procedures</li>
            <li>Increases credibility and confidence in data</li>
            <li>Facilitates international recognition of laboratory studies</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing GLP involves defining standard operating procedures (SOPs), training personnel, maintaining equipment, documenting all laboratory processes, conducting audits, and ensuring traceability of all data. Compliance is verified through internal and external inspections.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

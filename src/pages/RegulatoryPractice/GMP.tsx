
import gmpImage from "../../assets/services/gmp.webp"; // Replace with your GMP image path
import { motion } from "framer-motion";

export default function GMP() {
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
          <h1 className="text-4xl font-bold text-gray-900">Good Manufacturing Practice (GMP)</h1>
          <p className="mt-4 text-lg text-gray-600">
            GMP certification ensures that products are consistently produced and controlled according to quality standards, ensuring safety and efficacy for consumers.
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
            src={gmpImage}
            alt="GMP"
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
            Good Manufacturing Practice (GMP) is a system for ensuring that products are consistently produced and controlled according to quality standards. It covers all aspects of production, from raw materials to training of staff and hygiene.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures product safety, quality, and efficacy</li>
            <li>Reduces risks of contamination, errors, and defects</li>
            <li>Supports regulatory compliance and international recognition</li>
            <li>Improves production processes and operational efficiency</li>
            <li>Enhances consumer confidence and brand reputation</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing GMP involves establishing documented procedures, training personnel, maintaining clean and controlled environments, monitoring production processes, and conducting audits. Certification is achieved after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


import iso37001 from "../../assets/services/iso37001.webp";
import { motion } from "framer-motion";

export default function Iso37001() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 37001 : 2019</h1>
          <p className="mt-4 text-lg text-gray-600">
            Anti-Bribery Management System certification helps organizations prevent, detect, and address bribery, ensuring ethical business practices.
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
            src={iso37001}
            alt="ISO 37001"
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
            ISO 37001:2019 provides a framework for implementing an Anti-Bribery Management System (ABMS). It helps organizations prevent, detect, and respond to bribery risks, promoting transparency and ethical behavior.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduces risks of bribery and corruption</li>
            <li>Promotes ethical business practices and transparency</li>
            <li>Enhances trust with clients, partners, and regulators</li>
            <li>Supports compliance with anti-bribery laws</li>
            <li>Improves corporate governance and risk management</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 37001 involves defining anti-bribery policies, conducting risk assessments, training employees, establishing controls, and monitoring compliance. Certification is achieved after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

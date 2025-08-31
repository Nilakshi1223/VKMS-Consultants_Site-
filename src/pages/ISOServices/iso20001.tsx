
import iso20001 from "../../assets/services/iso20001.webp";
import { motion } from "framer-motion";

export default function Iso20001() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 20000-1 : 2018</h1>
          <p className="mt-4 text-lg text-gray-600">
            IT Service Management certification ensures organizations deliver high-quality IT services aligned with business needs and industry best practices.
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
            src={iso20001}
            alt="ISO 20000-1"
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
            ISO 20000-1:2018 provides requirements for an IT Service Management System (ITSMS) to ensure the effective planning, delivery, and improvement of IT services. It helps organizations align IT services with business objectives.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improves IT service delivery and quality</li>
            <li>Aligns IT services with business goals</li>
            <li>Enhances customer satisfaction and trust</li>
            <li>Supports continual service improvement</li>
            <li>Ensures compliance with industry best practices</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 20000-1 involves defining IT service processes, documenting procedures, training staff, monitoring service performance, and conducting internal audits. Certification is achieved after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

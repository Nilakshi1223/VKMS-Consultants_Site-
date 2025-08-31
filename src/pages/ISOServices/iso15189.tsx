
import iso15189 from "../../assets/services/iso15189.webp";
import { motion } from "framer-motion";

export default function Iso15189() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 15189 : 2022</h1>
          <p className="mt-4 text-lg text-gray-600">
            Medical Laboratories Quality Management System certification ensures accurate, reliable, and safe laboratory testing and results.
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
            src={iso15189}
            alt="ISO 15189"
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
            ISO 15189:2022 specifies requirements for quality and competence in medical laboratories. It ensures that laboratories produce accurate and reliable results to support patient care and clinical decision-making.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improves accuracy and reliability of lab results</li>
            <li>Ensures patient safety and quality of care</li>
            <li>Supports compliance with regulatory and accreditation requirements</li>
            <li>Enhances laboratory efficiency and process standardization</li>
            <li>Builds trust with healthcare providers and patients</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 15189 involves establishing a quality management system, defining laboratory procedures, training staff, conducting internal audits, and maintaining accurate records. Certification is granted after a successful audit by an accredited body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

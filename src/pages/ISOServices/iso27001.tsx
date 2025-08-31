
import iso27001 from "../../assets/services/iso27001.webp";
import { motion } from "framer-motion";

export default function Iso27001() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 27001 : 2013</h1>
          <p className="mt-4 text-lg text-gray-600">
            Information Security Management certification helps organizations protect sensitive data, mitigate risks, and ensure business continuity.
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
            src={iso27001}
            alt="ISO 27001"
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
            ISO 27001:2013 specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It helps organizations manage information security risks effectively.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Protects sensitive and confidential information</li>
            <li>Mitigates risks of data breaches and cyber threats</li>
            <li>Enhances customer and stakeholder confidence</li>
            <li>Supports compliance with legal and regulatory requirements</li>
            <li>Improves overall information security governance</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 27001 involves defining security policies, conducting risk assessments, establishing controls, training staff, and monitoring performance. Certification is granted after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

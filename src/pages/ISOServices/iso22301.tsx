
import iso22301 from "../../assets/services/iso22301.webp";
import { motion } from "framer-motion";

export default function Iso22301() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 22301 : 2019</h1>
          <p className="mt-4 text-lg text-gray-600">
            Business Continuity Management certification helps organizations prepare for, respond to, and recover from disruptive incidents effectively.
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
            src={iso22301}
            alt="ISO 22301"
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
            ISO 22301:2019 specifies requirements for a Business Continuity Management System (BCMS) to help organizations identify potential threats, ensure continuity of critical operations, and reduce the impact of disruptions.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures continuity of critical business operations</li>
            <li>Reduces the impact of disruptions and emergencies</li>
            <li>Enhances organizational resilience and risk management</li>
            <li>Builds confidence with stakeholders, clients, and regulators</li>
            <li>Supports regulatory compliance and business reputation</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 22301 involves identifying key business processes, assessing risks, developing continuity plans, training staff, and conducting exercises and audits. Certification is granted after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

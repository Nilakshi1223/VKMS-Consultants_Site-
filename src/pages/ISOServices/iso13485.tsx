
import iso13485 from "../../assets/services/iso13485.webp";
import { motion } from "framer-motion";

export default function Iso13485() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 13485 : 2016</h1>
          <p className="mt-4 text-lg text-gray-600">
            Medical Device Quality Management Systems certification ensures consistent design, development, production, and delivery of safe medical devices worldwide.
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
            src={iso13485}
            alt="ISO 13485"
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
            ISO 13485:2016 specifies requirements for a Quality Management System (QMS) where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and regulatory requirements.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures consistent quality and safety of medical devices</li>
            <li>Supports compliance with regulatory requirements globally</li>
            <li>Improves operational efficiency in design and production</li>
            <li>Reduces risks of product recalls or failures</li>
            <li>Enhances trust and credibility with clients and stakeholders</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 13485 involves defining processes across design, production, and post-market activities, documenting procedures, training staff, and maintaining records. Certification is achieved after an audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

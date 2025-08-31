
import iso9001 from "../../assets/services/iso9001.webp";
import { motion } from "framer-motion";

export default function Iso9001() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 9001 : 2015</h1>
          <p className="mt-4 text-lg text-gray-600">
            Quality Management Systems certification helps organizations ensure consistent quality in products and services, improving customer satisfaction and operational efficiency.
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
            src={iso9001}
            alt="ISO 9001"
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
            ISO 9001:2015 is an internationally recognized standard for Quality Management Systems (QMS). It provides a framework for organizations to consistently meet customer and regulatory requirements while improving processes and efficiency.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhances customer satisfaction and loyalty</li>
            <li>Improves process efficiency and operational performance</li>
            <li>Helps meet regulatory and statutory requirements</li>
            <li>Supports continuous improvement initiatives</li>
            <li>Boosts company reputation and global recognition</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 9001 involves defining processes, documenting procedures, training staff, and continuously monitoring and improving the QMS. Certification is granted after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

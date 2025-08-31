
import iso50001 from "../../assets/services/iso50001.webp";
import { motion } from "framer-motion";

export default function Iso50001() {
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
          <h1 className="text-4xl font-bold text-gray-900">ISO 50001 : 2018</h1>
          <p className="mt-4 text-lg text-gray-600">
            Energy Management System certification helps organizations improve energy efficiency, reduce costs, and lower environmental impact.
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
            src={iso50001}
            alt="ISO 50001"
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
            ISO 50001:2018 provides a framework for establishing, implementing, and improving an Energy Management System (EnMS). It helps organizations monitor and optimize energy use, reduce greenhouse gas emissions, and cut energy costs.
          </p>

          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improves energy efficiency and reduces energy consumption</li>
            <li>Lowers operational costs and energy expenses</li>
            <li>Reduces greenhouse gas emissions and environmental impact</li>
            <li>Supports compliance with energy regulations</li>
            <li>Promotes a culture of sustainable energy management</li>
          </ul>

          <h2 className="text-2xl font-semibold">Implementation</h2>
          <p>
            Implementing ISO 50001 involves establishing energy policies, measuring energy performance, setting objectives, training staff, and conducting audits. Certification is granted after a successful audit by an accredited certification body.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import iso14001 from "../../assets/services/iso14001.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso9001() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
            ISO 14001 : 2015
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Environmental Management Systems certification helps organizations
            minimize environmental impact and comply with environmental regulations.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img
            src={iso14001}
            alt="ISO 14001"
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Overview & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12 text-gray-700"
        >
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 14001:2015 provides a framework for organizations to establish an
              effective Environmental Management System (EMS) that reduces
              environmental risks, improves resource efficiency, and ensures
              compliance with regulations. It helps companies adopt sustainable
              practices while improving efficiency.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Minimizes environmental impact and pollution",
                "Enhances compliance with environmental laws and regulations",
                "Improves operational efficiency and reduces waste",
                "Builds credibility with stakeholders and customers",
                "Supports sustainable business practices",
                "Promotes continuous environmental improvement",
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Implementation Steps */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Implementation Process
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 leading-relaxed">
              <li>Identify environmental aspects and impacts of organizational activities.</li>
              <li>Set environmental objectives and targets for improvement.</li>
              <li>Document processes and operational procedures for EMS.</li>
              <li>Train employees and raise environmental awareness.</li>
              <li>Monitor, measure, and audit environmental performance.</li>
              <li>Engage accredited certification bodies for audit and certification.</li>
            </ol>
          </div>

          {/* Who Should Adopt ISO 14001 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 14001
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 14001 is suitable for organizations of all sizes and industries
              aiming to manage their environmental responsibilities, reduce
              ecological impact, and ensure regulatory compliance. Ideal for
              manufacturing, service, and production companies seeking sustainability.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 14001 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

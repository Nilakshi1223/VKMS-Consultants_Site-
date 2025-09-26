import iso22000 from "../../assets/services/iso22000.webp";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Iso22000() {
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
            ISO 22000 : 2018
          </h1>
          <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto">
            Food Safety Management certification ensures organizations consistently provide safe food products, reducing risks throughout the supply chain.
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
            src={iso22000}
            alt="ISO 22000"
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Details Section */}
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
              ISO 22000:2018 provides a framework for a Food Safety Management System (FSMS) that ensures the safety of food products from production to consumption, managing hazards and regulatory compliance effectively. It integrates principles of HACCP (Hazard Analysis & Critical Control Points) to prevent food safety issues.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures food safety across the supply chain",
                "Reduces risk of contamination and recalls",
                "Enhances customer confidence and brand reputation",
                "Supports compliance with international food safety regulations",
                "Improves operational efficiency and risk management",
                "Facilitates continuous improvement in food safety processes"
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
              <li>Define food safety policies and objectives.</li>
              <li>Identify hazards and critical control points (HACCP).</li>
              <li>Document FSMS processes and procedures.</li>
              <li>Train employees on food safety standards.</li>
              <li>Monitor, measure, and audit food safety performance.</li>
              <li>Obtain certification through an accredited audit.</li>
            </ol>
          </div>

          {/* Who Should Adopt ISO 22000 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who Should Adopt ISO 22000
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ISO 22000 is ideal for food manufacturers, processors, packaging companies, distributors, and organizations in the entire food supply chain seeking to ensure safe food, improve compliance, and enhance consumer trust.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get ISO 22000 Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

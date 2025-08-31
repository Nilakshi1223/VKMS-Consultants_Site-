
import { motion } from "framer-motion";
import QFSLogo from "../assets/qfs-logo.webp";
import PacificLogo from "../assets/pacific-logo.webp";
import AccreditedPartnersBackground from "../assets/AccreditedPartnersBackground.webp";

export default function AccreditedPartners() {
  return (
    <motion.section
          id="accreditedpartners"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-t from-blue-50 to-blue-300"
        >
    <section
      className="relative bg-gray-50 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${AccreditedPartnersBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 "></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
            Trusted partners
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-50">
            Accredited Partners
          </h2>
        </div>
        </motion.h2>

        {/* Pacific Certifications */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center md:justify-start ">
            <img
              src={PacificLogo}
              alt="Pacific Certifications Logo"
              className="w-40 md:w-56"
            />
          </div>
          <div className="md:col-span-2 space-y-6  bg-white/80 p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 ">
              Pacific Certifications
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Pacific Certifications is a leading independent and impartial
              certification body, accredited by ABIS & IAF for ISO
              Certifications (ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO
              27001 and more), Product Certifications (CE Marking, HACCP, GMP),
              and specialized training programs.
            </p>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Comprehensive ISO Certification Services
              </h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  End-to-end ISO certification services, from gap analysis to
                  final certification assessments.
                </li>
                <li>
                  Specialized expertise in ISO 9001, ISO 14001, ISO 27001, and
                  more.
                </li>
                <li>
                  Expert advisers providing documentation support, compliance
                  management, and training.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                ISO Inspection & Training
              </h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Internal audits and compliance assessments to ensure readiness.
                </li>
                <li>
                  Specialized training on ISO implementation, risk management,
                  and audit preparedness.
                </li>
                <li>
                  Industry-specific auditor training programs.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Why Choose Pacific Certifications?
              </h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Globally recognized and accredited.</li>
                <li>
                  Expertise across industries (manufacturing, IT, healthcare,
                  logistics).
                </li>
                <li>Transparent and structured certification process.</li>
                <li>Client-focused support and efficient timelines.</li>
                <li>Comprehensive ISO training support.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* QFS Management Systems */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center md:justify-start">
            <img
              src={QFSLogo}
              alt="QFS Management Systems Logo"
              className="w-40 md:w-56"
            />
          </div>
          <div className="md:col-span-2 space-y-6 bg-white/80 p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900">
              QFS Management Systems
            </h3>
            <p className="text-gray-700 leading-relaxed">
              QFS Management Systems LLP, established in 2006, is a globally
              recognized certification registrar accredited by IAS (USA) under
              IAF. Renowned as a supreme-level provider of Management and
              Certification Services, QFS empowers businesses worldwide with
              internationally recognized certifications.
            </p>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                Equipping clients with knowledge and tools to unlock their full
                potential and achieve business aspirations through international
                standards.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                Delivering professional assessment services with a partnership
                approach, fostering supportive relationships and enabling
                effective implementation of global standards.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Why Choose QFS?
              </h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Highly capable staff ensuring global recognition through
                  quality management systems.
                </li>
                <li>
                  Commitment to client satisfaction with timely certification
                  (within 90 days).
                </li>
                <li>
                  Accreditation activities aligned with ISO/IEC 17021-1:2015.
                </li>
                <li>
                  Over 14 years of expertise across quality, information
                  security, business continuity, and HSE certifications.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </motion.section>
  );
}

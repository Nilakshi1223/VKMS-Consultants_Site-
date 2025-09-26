import ProcessImage from "../assets/process.webp";
import { motion } from "framer-motion";
import {
  FaUserEdit,
  FaFileAlt,
  FaTimesCircle,
  FaInfoCircle,
  FaClipboardCheck,
  FaUsers,
  FaSearch,
  FaTools,
  FaBuilding,
  FaBan,
  FaThumbsUp,
  FaAward,
  FaEye,
  FaRedo,
} from "react-icons/fa";

const steps = [
  {
    title: "Applicant",
    desc: "Organization or individual initiates the ISO certification request.",
    status: "info",
    icon: <FaUserEdit />,
  },
  {
    title: "Submission of Application",
    desc: "Application form and required documents are formally submitted.",
    status: "info",
    icon: <FaFileAlt />,
  },
  {
    title: "Rejection of Application",
    desc: "If the application fails requirements, the applicant is notified.",
    status: "error",
    icon: <FaTimesCircle />,
  },
  {
    title: "Need More Information",
    desc: "Additional clarifications, corrections, or documents may be requested.",
    status: "warning",
    icon: <FaInfoCircle />,
  },
  {
    title: "Contract Review",
    desc: "The certification body verifies eligibility and approves the application.",
    status: "info",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Audit Team Appointment",
    desc: "Qualified auditors are assigned to perform the certification audit.",
    status: "info",
    icon: <FaUsers />,
  },
  {
    title: "Stage I Audit",
    desc: "Initial audit checks documentation, preparedness, and compliance gaps.",
    status: "process",
    icon: <FaSearch />,
  },
  {
    title: "Nonconformity Closure",
    desc: "Any issues identified must be resolved and improvements documented.",
    status: "warning",
    icon: <FaTools />,
  },
  {
    title: "Stage II Audit",
    desc: "On-site audit evaluating processes, systems, and compliance in detail.",
    status: "process",
    icon: <FaBuilding />,
  },
  {
    title: "Corrective Actions",
    desc: "Nonconformities addressed with corrective measures. Failure = rejection.",
    status: "error",
    icon: <FaBan />,
  },
  {
    title: "Certification Recommendation",
    desc: "Auditors recommend certification after successful compliance check.",
    status: "success",
    icon: <FaThumbsUp />,
  },
  {
    title: "Award of Certification",
    desc: "The ISO certificate is officially awarded to the organization.",
    status: "success",
    icon: <FaAward />,
  },
  {
    title: "Surveillance (Year 1 & 2)",
    desc: "Annual audits conducted to ensure ongoing compliance.",
    status: "process",
    icon: <FaEye />,
  },
  {
    title: "Re-Certification",
    desc: "Certification renewed after the validity period with a full review.",
    status: "success",
    icon: <FaRedo />,
  },
];

export default function Process() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${ProcessImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-white">
        {/* Header */}

        <div id="process" className="relative z-10 text-center pb-10 px-6 md:px-20">
        <div  className="inline-block my-8 px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
          Certification Process
        </div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ISO Certification Journey
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your roadmap from initial application to certification and beyond. Each
          step ensures clarity, compliance, and trust.
        </motion.p>
      </div>

        {/* Process Map */}
        <div className="mt-16 relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-400 via-cyan-400 to-green-400 animate-pulse"></div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center group ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Connector Dot with Icon */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-white/40 shadow-lg transition duration-500 group-hover:scale-125 group-hover:shadow-2xl
                    ${
                      step.status === "success"
                        ? "bg-green-600 shadow-green-400/60"
                        : step.status === "error"
                        ? "bg-red-600 shadow-red-400/60"
                        : step.status === "warning"
                        ? "bg-yellow-500 shadow-yellow-300/60"
                        : step.status === "process"
                        ? "bg-blue-500 shadow-blue-400/60"
                        : "bg-gray-600 shadow-gray-400/60"
                    }`}
                >
                  {step.icon}
                </div>

                {/* Step Card */}
                <div
                  className={`relative w-5/12 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 transition-transform duration-500 transform group-hover:scale-105 group-hover:shadow-2xl
                    ${index % 2 === 0 ? "mr-auto text-left" : "ml-auto text-ellipsis"}
                  `}
                >
                  <span
                    className={`absolute top-3 px-3 py-1 text-xs rounded-full font-semibold shadow-md
                      ${
                        step.status === "success"
                          ? "bg-green-500/20 text-green-300 border border-green-400/40"
                          : step.status === "error"
                          ? "bg-red-500/20 text-red-300 border border-red-400/40"
                          : step.status === "warning"
                          ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/40"
                          : step.status === "process"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-400/40"
                          : "bg-gray-500/20 text-gray-300 border border-gray-400/40"
                      }
                    `}
                  >
                    Step {index + 1}
                  </span>
                  <h3 className="mt-8 text-2xl font-bold tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-200">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

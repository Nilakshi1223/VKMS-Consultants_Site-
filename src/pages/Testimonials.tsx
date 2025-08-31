import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  rating: number;
  avatar: string; // Can be initials or an emoji placeholder
}

const testimonials: Testimonial[] = [
  {
    quote:
      "VKMS helped our company achieve ISO certification efficiently. Their guidance was professional and clear.",
    author: "Jenney",
    title: "Operations Manager",
    rating: 5,
    avatar: "J",
  },
  {
    quote:
      "The consultancy team at VKMS provided invaluable support for our compliance audits. Highly recommended.",
    author: "Rameena",
    title: "Quality Head",
    rating: 5,
    avatar: "R",
  },
  {
    quote:
      "VKMS’s training sessions empowered our staff to implement management systems confidently. Excellent service!",
    author: "Chamali",
    title: "HR Director",
    rating: 5,
    avatar: "C",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-t from-blue-50 to-blue-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Lives Transformed Daily
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our clients who achieved compliance, growth, and operational excellence with VKMS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow p-8 rounded-xl space-y-6"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 justify-center">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic leading-relaxed text-center">
                "{t.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {t.avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{t.author}</div>
                  {/* <div className="text-sm text-gray-600">{t.title}</div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

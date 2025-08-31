import React from "react";
import ProcessImage from "../assets/process.webp";

export default function Process() {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: `url(${ProcessImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:px-8 text-center text-white">
        {/* Header */}
        <h2 className="text-4xl font-bold">Certification Process</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Follow our streamlined process to achieve ISO certification efficiently.
        </p>
      </div>
    </section>
  );
}

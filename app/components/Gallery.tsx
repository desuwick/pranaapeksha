"use client";
import { motion } from "framer-motion";

const images = [
  "/gallery/donation1.jpg",
  "/gallery/donation2.jpg",
  "/gallery/donation3.jpg",
  "/gallery/donation4.jpg",
  "/gallery/donation5.jpg",
  "/gallery/donation6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

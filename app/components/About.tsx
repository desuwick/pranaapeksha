"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-2xl mx-auto px-6 py-20 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        The <span className="font-semibold">Prana Apeksha Foundation</span>, 
        organized by Wickrama Hardware Stores Pvt Ltd in Embilipitiya, is dedicated 
        to supporting cancer patients at Maharagama Apeksha Hospital.
      </motion.p>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        We provide essential donations such as{" "}
        <span className="text-primary font-semibold">
          king coconuts, pomegranates, and medicines
        </span>{" "}
        to patients in need, with the belief that good nutrition and care play a vital role in recovery.
      </motion.p>

      <motion.div
        className="bg-gradient-to-r from-primary/90 to-accent/90 text-white rounded-2xl shadow-lg p-6 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <p className="text-xl font-semibold">
          Our mission is simple: bring hope, healing, and support to those who need it the most.
        </p>
      </motion.div>
    </section>
  );
}

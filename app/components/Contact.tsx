"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have questions, want to partner with us, or wish to support our mission? Reach out to us anytime.
      </motion.p>

      {/* ✅ Contact Info */}
      <motion.div
        className="mb-8 space-y-3 text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p><span className="font-semibold">Address:</span> Wickrama Hardware Stores Pvt Ltd, Embilipitiya, Sri Lanka</p>
        <p><span className="font-semibold">Phone:</span> +94 71 5400 247</p>
        <p><span className="font-semibold">Email:</span> contact@pranaapeksha.org-</p>
      </motion.div>

      {/* ✅ Contact Form */}
      <motion.form
        className="bg-white shadow rounded-2xl p-6 space-y-4 text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg shadow hover:scale-105 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}

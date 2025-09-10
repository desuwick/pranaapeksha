"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 text-gray-600 text-center py-6 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p>
        © {new Date().getFullYear()} Prana Apeksha Foundation. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        Designed with ❤️ by Wickrama Hardware Stores Pvt Ltd
      </p>

      {/* ✅ Social Media Links */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition"
        >
          <img src="/icons/tiktok.svg" alt="TikTok" className="w-6 h-6" />
        </a>
      </div>
    </motion.footer>
  );
}

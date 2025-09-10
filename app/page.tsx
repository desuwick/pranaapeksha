"use client";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Stats from "./components/Stats"; // ✅ import stats

export default function Home() {
  return (
    <main>
      {/* ✅ Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary to-accent text-white text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Prana Apeksha Foundation 🌿
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Supporting cancer patients at Maharagama Apeksha Hospital with care,
          donations, and hope — powered by Wickrama Hardware Stores Pvt Ltd.
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-white text-primary font-semibold rounded-2xl shadow-lg hover:brightness-110 hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Donate Now
        </motion.button>
      </section>

      {/* Divider */}
      <Divider />

      {/* ✅ About Section */}
      <About />

      {/* Divider */}
      <Divider />

      {/* ✅ Stats Section */}
      <Stats />

      {/* Divider */}
      <Divider />

      {/* ✅ Projects Section */}
      <Projects />

      {/* Divider */}
      <Divider />

      {/* ✅ Gallery Section */}
      <Gallery />

      {/* Divider */}
      <Divider />

      {/* ✅ Contact Section */}
      <Contact />

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}

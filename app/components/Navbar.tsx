"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ hamburger + close icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* ✅ Logo / Foundation Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // replace with your actual logo
            alt="Prana Apeksha Foundation"
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg text-textDark">
            Prana Apeksha
          </span>
        </div>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-textDark">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#gallery" className="hover:text-primary transition">Gallery</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* ✅ Donate Button (always visible on desktop) */}
        <div className="hidden md:block">
          <a
            href="#donate"
            className="px-5 py-2 bg-primary text-white rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Donate
          </a>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-textDark"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4 text-sm font-medium text-textDark">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a
              href="#donate"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 bg-primary text-white rounded-full font-semibold text-center shadow hover:scale-105 transition"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

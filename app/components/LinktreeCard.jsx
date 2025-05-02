"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { BsSun, BsMoon } from "react-icons/bs";
import Image from "next/image";
import logo from "./logo.png";

const LinktreeCard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-3 py-5 bg-gradient-custom dark:bg-dark-bg transition-colors duration-300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, when: "beforeChildren" },
          },
        }}
        className="w-full max-w-sm p-4 sm:p-6 rounded-2xl shadow-lg space-y-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-all"
        whileHover={{
          scale: 1.01,
          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Dark Mode Toggle */}
        <div className="flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          >
            {isDarkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>

        {/* Logo */}
        <motion.div
          className="flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 10 },
            },
          }}
        >
          <div className="rounded-full p-1 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900">
            <Image
              src={logo}
              alt="DryAura Logo"
              width={80}
              height={80}
              className="rounded-full border-2 border-white shadow-md sm:w-[100px] sm:h-[100px]"
            />
          </div>
        </motion.div>

        {/* Brand Info */}
        <motion.div className="space-y-1 text-center" variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}>
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
            Let's Connect With Us
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Premium, eco-friendly dry fruits—hand-picked for your health and taste.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div className="space-y-2">
          {[
            {
              icon: <FaInstagram />,
              text: "Instagram",
              href: "https://instagram.com/dryaura",
              desc: "Follow for inspiration",
            },
            {
              icon: <FaFacebook />,
              text: "Facebook",
              href: "https://facebook.com/dryaura",
              desc: "Join our community",
            },
            {
              icon: <FaWhatsapp />,
              text: "WhatsApp",
              href: "https://wa.me/yournumber",
              desc: "Chat for orders",
            },
            {
              icon: <FiExternalLink />,
              text: "Website",
              href: "https://dryaura.in",
              desc: "Visit our store",
            },
            {
              icon: <IoMdMail />,
              text: "Contact Us",
              href: "mailto:contact@dryaura.com",
              desc: "Reach out anytime",
            },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                },
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg text-gray-700 dark:text-gray-100">
                  {link.icon}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                    {link.text}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {link.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-700 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} DryAura. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
};

export default LinktreeCard;

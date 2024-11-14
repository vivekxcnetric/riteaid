import React from "react";
import { motion } from "framer-motion";
import { FaPrescriptionBottle, FaStore, FaMobileAlt, FaPhone, FaAssistiveListeningSystems, FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const iconHoverEffect = {
    whileHover: { scale: 1.1 },
  };

  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container flex flex-col mx-auto px-4 ">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-10">
          {/* Refill Prescriptions */}
          <motion.div
            className="flex flex-col items-center text-center space-y-2 p-4 border border-white rounded-lg"
            {...iconHoverEffect}
          >
            <FaPrescriptionBottle className="text-4xl" />
            <p className="font-semibold">Refill Prescriptions</p>
          </motion.div>

          {/* Shop by Department */}
          <motion.div
            className="flex flex-col items-center text-center space-y-2 p-4 border border-white rounded-lg"
            {...iconHoverEffect}
          >
            <FaStore className="text-4xl" />
            <p className="font-semibold">Shop by Department</p>
          </motion.div>

          {/* Mobile App */}
          <motion.div
            className="flex flex-col items-center text-center space-y-2 p-4 border border-white rounded-lg"
            {...iconHoverEffect}
          >
            <FaMobileAlt className="text-4xl" />
            <p className="font-semibold">Mobile App</p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center space-y-2 mb-10 text-center">
          <motion.div {...iconHoverEffect} className="flex items-center space-x-2">
            <FaPhone className="text-xl" />
            <p>Call Us: 1-800-RITE-AID (1-800-748-3243)</p>
          </motion.div>
          <motion.div {...iconHoverEffect} className="flex items-center space-x-2 text-center">
            <FaAssistiveListeningSystems className="text-xl" />
            <p>Hearing or Speech Disabled Dial 711 to reach us thru National Telecommunications Relay</p>
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center md:text-left mb-10">
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <ul className="space-y-1">
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Our Story</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Careers</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Store List</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Corporate</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Legal Information</a></motion.li>
            </ul>
          </div>

          {/* Rite Aid Rewards */}
          <div>
            <h3 className="font-bold mb-3">Rite Aid Rewards</h3>
            <ul className="space-y-1">
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Rite Aid Rewards 65+</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Rite Aid Rewards Articles</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">KidCents</a></motion.li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-3">Help</h3>
            <ul className="space-y-1">
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Customer Care</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Contact Us</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">FAQs</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Request Records</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Policies</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Feedback</a></motion.li>
              <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Order Status & Returns</a></motion.li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <motion.a href="#" {...iconHoverEffect}><FaYoutube /></motion.a>
          <motion.a href="#" {...iconHoverEffect}><FaFacebookF /></motion.a>
          <motion.a href="#" {...iconHoverEffect}><FaTwitter /></motion.a>
          <motion.a href="#" {...iconHoverEffect}><FaInstagram /></motion.a>
          <motion.a href="#" {...iconHoverEffect}><FaPinterest /></motion.a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-white pt-4">
          <p className="text-sm mb-2">
            © 2024 Rite Aid Corp. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <a href="#" className="hover:underline">Terms And Conditions</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Patient Privacy</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Your Privacy Choices</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

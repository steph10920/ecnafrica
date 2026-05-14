import { motion } from "framer-motion";
import bannerImg from "../assets/banners/international-day-of-families.jpg";

export default function HighlightBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute top-6 right-6 z-20"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md"
      >
        <img
          src={bannerImg}
          alt="International Day of Families"
          className="w-56 sm:w-64 md:w-80 h-auto object-cover"
        />

        {/* subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </motion.div>
    </motion.div>
  );
}
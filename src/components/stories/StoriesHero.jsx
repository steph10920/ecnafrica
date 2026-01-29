import { motion } from "framer-motion";

const StoriesHero = ({ years, yearFilter, onYearChange }) => {
  return (
    <header className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-green-800"
          >
            Stories of Impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-700 max-w-xl"
          >
            Real journeys from learners, mentors, and communities transformed by
            ECN Africa.
          </motion.p>

          {/* Year Filter */}
          <div className="mt-6 flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">
              Filter by year:
            </label>
            <select
              value={yearFilter}
              onChange={(e) => onYearChange(e.target.value)}
              className="border rounded-full px-3 py-1 text-gray-700"
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StoriesHero;

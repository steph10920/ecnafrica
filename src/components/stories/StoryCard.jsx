import { motion } from "framer-motion";

const StoryCard = ({ story, onReadMore }) => (
  <motion.article
    whileHover={{ y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }}
    className="bg-white rounded-2xl shadow border border-green-100 overflow-hidden flex flex-col"
  >
    <div className="h-48 relative overflow-hidden bg-gray-100">
      {story.video ? (
        <video
          src={story.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={story.img}
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>

    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <div className="text-sm text-green-700 font-semibold">
          {story.category}
        </div>
        <h4 className="mt-2 font-bold text-gray-900 text-lg">
          {story.title}
        </h4>
        <p className="mt-2 text-gray-600 text-sm">{story.excerpt}</p>
      </div>

      <button
        onClick={() => onReadMore(story)}
        className="mt-4 text-green-700 font-medium text-left"
      >
        <strong>Read more</strong>
      </button>
    </div>
  </motion.article>
);

export default StoryCard;

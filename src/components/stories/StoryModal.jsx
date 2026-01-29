import { motion, AnimatePresence } from "framer-motion";

const StoryModal = ({ modal, onClose, onSupport }) => {
  if (!modal.open) return null;

  const { story } = modal;

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />

        <motion.div className="bg-white rounded-2xl max-w-4xl w-full z-50 overflow-auto max-h-[90vh]">
          {story.video ? (
            <video controls className="w-full h-64 object-contain">
              <source src={story.video} type="video/mp4" />
            </video>
          ) : (
            <img src={story.img} alt={story.title} />
          )}

          <div className="p-6">
            <h3 className="text-2xl font-semibold">{story.title}</h3>
            <p className="mt-4 text-gray-700">{story.body}</p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={onSupport}
                className="bg-green-700 text-white px-4 py-2 rounded-full"
              >
                Support ECN
              </button>
              <button
                onClick={onClose}
                className="border px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryModal;

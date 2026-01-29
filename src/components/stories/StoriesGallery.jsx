import { ArrowLeft, ArrowRight } from "lucide-react";

const StoriesGallery = ({ stories, onSelect, onPrev, onNext }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 border border-green-100">
      <h6 className="text-sm font-semibold text-gray-800 mb-3">
        Gallery
      </h6>

      <div className="grid grid-cols-2 gap-2">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => onSelect(story)}
            className="overflow-hidden rounded-lg h-32 transition-transform hover:scale-105"
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-full"
        >
          <ArrowLeft size={16} /> Prev
        </button>

        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-full"
        >
          Next <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default StoriesGallery;

const FeaturedStory = ({ story, paused, onRead, onTogglePause }) => {
  if (!story) return null;

  return (
    <div className="bg-white rounded-3xl shadow p-6 border border-green-100">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800">
            Featured Story
          </h3>

          <p className="text-sm text-green-700 font-medium mt-1">
            {story.category}
          </p>

          <p className="mt-4 text-gray-700">{story.excerpt}</p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <button
              onClick={() => onRead(story)}
              className="px-4 py-2 bg-green-700 text-white rounded-full"
            >
              Read Full Story
            </button>

            <button
              onClick={onTogglePause}
              className="px-4 py-2 border rounded-full text-green-700"
            >
              {paused ? "Resume" : "Pause"}
            </button>
          </div>
        </div>

        {story.img && (
          <div className="w-full md:w-40">
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-28 object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedStory;

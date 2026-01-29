import StoryCard from "./StoryCard";

const StoriesGrid = ({ stories, onReadMore }) => {
  if (!stories?.length)
    return <p className="text-center text-gray-500">No stories found.</p>;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} onReadMore={onReadMore} />
      ))}
    </div>
  );
};

export default StoriesGrid;

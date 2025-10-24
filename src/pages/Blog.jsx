import { Suspense, lazy } from "react";

const Footer = lazy(() => import("../components/Footer"));

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Empowering Communities Through Education",
      date: "October 10, 2025",
      image: "https://source.unsplash.com/800x400/?education,children",
      excerpt: "Learn how ECN Africa is helping marginalized children access quality education.",
    },
    {
      id: 2,
      title: "Green Future: Environmental Awareness Program",
      date: "September 22, 2025",
      image: "https://source.unsplash.com/800x400/?environment,trees",
      excerpt: "Our environmental campaigns inspire communities to protect their natural resources.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Latest News & Updates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

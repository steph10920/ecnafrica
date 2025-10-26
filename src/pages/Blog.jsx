import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

const Footer = lazy(() => import("../components/Footer"));

export default function Blog() {
  const featured = {
    id: "featured",
    title: "Building Brighter Futures Through Learning",
    date: "October 20, 2025",
    image: "https://source.unsplash.com/1600x800/?students,education",
    excerpt:
      "At ECN Africa, education is more than a right — it’s a pathway to empowerment. Discover how our community programs are transforming lives and inspiring hope for generations to come.",
  };

  const posts = [
    {
      id: 1,
      title: "Empowering Communities Through Education",
      date: "October 10, 2025",
      image: "https://source.unsplash.com/800x400/?education,children",
      excerpt:
        "Discover how ECN Africa is transforming lives by ensuring that marginalized children gain access to quality education and lifelong learning opportunities.",
    },
    {
      id: 2,
      title: "Green Future: Environmental Awareness Program",
      date: "September 22, 2025",
      image: "https://source.unsplash.com/800x400/?environment,trees",
      excerpt:
        "Our environmental initiatives mobilize communities to safeguard natural resources and embrace sustainable practices for a cleaner, healthier future.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* 🌟 Featured Story Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={featured.image}
          alt={featured.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            {featured.title}
          </h1>
          <p className="text-green-200 text-lg mb-2 italic">{featured.date}</p>
          <p className="max-w-3xl text-white text-lg leading-relaxed mb-6">
            {featured.excerpt}
          </p>
          <Link
            to={`/blog/${featured.id}`}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Read Full Story
          </Link>
        </div>
      </section>

      {/* 📰 Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex-1">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Latest News & Updates
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1 border border-green-100"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-60 object-cover"
              />
              <div className="p-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic">{post.date}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 🔗 Source Attribution */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">
            Source Reference:{" "}
            <a
              href="https://share.google/qz9Mieg8XUyQZeHp5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              Amref Health Africa
            </a>
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-6 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

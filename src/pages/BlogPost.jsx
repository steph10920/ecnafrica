<title>Elimu Community Network | ECN Africa</title>
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet

export default function BlogPost() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Add Helmet here */}
      <Helmet>
        <title>Elimu Community Network | ECN Africa</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa), our mission, vision, and how we empower communities through education, innovation, and sustainable programs."
        />
      </Helmet>
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Blog Post #{id}
      </h1>
      <p className="text-gray-700 leading-relaxed">
        This is a placeholder for your detailed blog post content.  
        You can fetch data from your backend or a CMS based on the ID from the URL.
      </p>
    </div>
    </div>
  );
}

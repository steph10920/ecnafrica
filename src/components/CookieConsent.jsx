import React, { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ecnafrica_cookie_consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ecnafrica_cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-700 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        <p className="text-sm md:text-base">
          This website uses cookies to ensure you get the best experience on our website.{" "}
          <a
            href="/privacy-policy"
            className="underline text-white hover:text-green-200"
          >
            Learn more
          </a>
        </p>

        <button
          onClick={handleAccept}
          className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}

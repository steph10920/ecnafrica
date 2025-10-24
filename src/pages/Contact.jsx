import React, { Suspense, lazy } from "react";

const Footer = lazy(() => import("../components/Footer"));

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-center">
          You can reach us at: <strong>elimu.communitynetwork@gmail.com</strong>
        </p>
      </main>

      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

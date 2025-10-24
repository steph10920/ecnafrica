import React, { Suspense, lazy } from "react";

const Footer = lazy(() => import("../components/Footer"));

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Where We Work</h1>
        <p>We reach across Kenya through regional hubs that reflect the diversity and vibrancy of our people</p>
        <br></br>
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Regions</h2>
        <ul className="text-gray-700 list-disc list-inside mb-4">
          <li>Nairobi region: Nairobi, Kajiado, Machakos, Kiambu</li>
          <li>Coastal region: Mombasa, Kilifi, Kwale, Tana River</li>
          <li>Western region: Busia, Kakamega, Vihiga, Kisumu</li>
        </ul>
        <br></br>

        <div className="text-gray-700 space-y-2">
          <p><strong>ECN - EDUCATION AFRICA</strong></p>
          <p>P.O BOX 1234-00200, Nairobi, Kenya</p>
          <p>Tel: +254 724178817 / +254 720576794</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@elimucommunitynet.org"
              className="text-green-600 hover:underline"
            >
              info@elimucommunitynet.org
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://elimucommunitynet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              elimucommunitynet.org
            </a>
          </p>
        </div>
      </main>

      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

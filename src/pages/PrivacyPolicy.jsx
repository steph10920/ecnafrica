import React from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-20 px-6">
      <Helmet>
        <title>Privacy Policy | ECN Africa</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">1. Introduction</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          ECN Education Africa (“ECN”, “we”, “our”, or “us”) is committed to protecting
          the privacy of all visitors, supporters, beneficiaries, and partners who
          interact with our website <strong>ecnafrica.org</strong>. This Privacy
          Policy explains how we collect, use, and protect your information.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          2. Information We Collect
        </h2>

        <h3 className="text-xl font-semibold text-green-600 mt-4">
          2.1 Personal Information You Provide
        </h3>
        <p className="text-gray-700 mt-2">
          When contacting us, subscribing, applying for programs, or donating, you may
          provide details such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Message or inquiry details</li>
          <li>Any additional voluntary information you submit</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-600 mt-5">
          2.2 Automatically Collected Information (Cookies & Analytics)
        </h3>
        <p className="text-gray-700 mt-2">
          We collect anonymous usage data to improve our website experience, such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          <li>IP address</li>
          <li>Browser type and device</li>
          <li>Pages visited and time spent</li>
          <li>Approximate location (city/country)</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          3. How We Use Your Information
        </h2>
        <p className="text-gray-700 mt-3">
          We use your information to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          <li>Respond to messages and inquiries</li>
          <li>Improve website functionality</li>
          <li>Send newsletters (only with your consent)</li>
          <li>Process volunteer or job applications</li>
          <li>Manage donations and communication</li>
        </ul>

        {/* SECTION 4 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          4. Legal Basis for Processing
        </h2>
        <p className="text-gray-700 mt-3">
          We process data based on consent, legitimate interest, or compliance with
          Kenya’s Data Protection Act (KDPA).
        </p>

        {/* SECTION 5 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          5. Sharing Your Information
        </h2>
        <p className="text-gray-700 mt-3">
          We do <strong>not</strong> sell or trade personal data. Information may only be
          shared with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          <li>Trusted service providers (e.g., email, analytics)</li>
          <li>Legal authorities, when required by law</li>
          <li>Donors or partners (in anonymous or aggregated form)</li>
        </ul>

        {/* SECTION 6 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          6. Data Security
        </h2>
        <p className="text-gray-700 mt-3">
          We use secure servers, encryption (HTTPS), limited staff access, and follow
          strict data protection guidelines to keep your information safe.
        </p>

        {/* SECTION 7 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">7. Your Rights</h2>
        <p className="text-gray-700 mt-3">
          You may request:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          <li>Access to your data</li>
          <li>Correction or deletion</li>
          <li>Withdrawal of consent</li>
          <li>Restriction of processing</li>
        </ul>

        <p className="text-gray-700 mt-3">
          Contact us anytime at:{" "}
          <a href="mailto:info@ecnafrica.org" className="text-green-600 underline">
            info@ecnafrica.org
          </a>
        </p>

        {/* SECTION 8 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">8. Cookies</h2>
        <p className="text-gray-700 mt-3">
          We use cookies to enhance your browsing experience and analyze website
          performance. You can accept or decline cookies anytime.
        </p>

        {/* SECTION 9 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          9. External Links
        </h2>
        <p className="text-gray-700 mt-3">
          Our website may contain links to external websites. ECN is not responsible for
          their privacy practices or content.
        </p>

        {/* SECTION 10 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          10. Updates to This Policy
        </h2>
        <p className="text-gray-700 mt-3">
          We may update this Privacy Policy periodically. The updated version will always
          be posted on this page.
        </p>

        {/* SECTION 11 */}
        <h2 className="text-2xl font-bold text-green-700 mt-8">
          11. Contact Us
        </h2>
        <p className="text-gray-700 mt-3">
          For questions, requests, or complaints regarding your data, please contact:
        </p>
        <p className="text-gray-700 font-semibold mt-1">
          📧 Email: <a href="mailto:info@ecnafrica.org" className="underline text-green-600">info@ecnafrica.org</a>
        </p>
        <p className="text-gray-700 mt-1">
          🌍 Website: https://ecnafrica.org
        </p>

        <p className="text-gray-700 mt-8 italic">
          Thank you for trusting ECN Education Africa.
        </p>
      </div>
    </div>
  );
}

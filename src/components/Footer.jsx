export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-3 md:space-y-0">

        {/* LEFT */}
        <div className="flex items-center space-x-2">
          <span>© {new Date().getFullYear()} ECN Africa.</span>
          <a
            href="/privacy-policy"
            className="text-green-300 hover:text-green-200 underline"
          >
            Privacy Policy
          </a>
        </div>

        {/* CENTER */}
        <span className="text-center">Developed by ECN Africa</span>

        {/* RIGHT */}
        <div className="flex items-center space-x-4">
          <a
            href="https://share.google/AAnf7YeukphQ5GaHa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

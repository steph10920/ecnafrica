export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} ECN Africa. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
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

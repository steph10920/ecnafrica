// components/WhatsAppButton.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "254724178817"; // country code without +
  const message = "Hello ECN Africa, I would like to learn more about your programs.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105">
        <MessageCircle size={20} />
        <span className="hidden md:block text-sm font-medium">Chat with us</span>
      </div>
    </a>
  );
}
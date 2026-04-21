import React from "react";

export default function FloatingButton({ onClick }) {
  return (
    <button
      title="Report an item"
      aria-label="Report an item"
      onClick={onClick}
      className="fixed right-6 bottom-24 md:bottom-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 hover:from-blue-700 hover:to-indigo-700 group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
      <span className="text-3xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300">+</span>
      <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
    </button>
  );
}

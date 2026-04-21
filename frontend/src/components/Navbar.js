import React from "react";

export default function Navbar({ active, onNavigate }) {
  const navItems = [
    { id: "dashboard", label: "HQ", icon: "🏠" },
    { id: "lost", label: "LOST", icon: "🔍" },
    { id: "found", label: "FOUND", icon: "💎" },
    { id: "profile", label: "ID", icon: "👤" },
  ];

  return (
    <nav className="fixed bottom-6 inset-x-0 mx-auto w-[90%] md:hidden z-[100]">
      <div className="bg-black border-4 border-black rounded-full p-2 flex justify-between items-center shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex-1 flex flex-col items-center py-2 rounded-full transition-all ${
              active === item.id 
                ? "bg-yellow-400 text-black scale-110" 
                : "text-white hover:text-yellow-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[8px] font-black italic uppercase tracking-tighter">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
import React from "react";

const Sidebar = ({ active, onNavigate }) => {
  const menu = [
    { id: 'dashboard', label: 'DATABASE', icon: '💾' },
    { id: 'lost', label: 'THE_LOST', icon: '🔍' },
    { id: 'found', label: 'RECOVERED', icon: '💎' },
    { id: 'profile', label: 'USER_ID', icon: '👤' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-black p-8 text-white">
      <div className="mb-16 transform -rotate-3">
        <h1 className="text-5xl font-black tracking-tighter italic">FINDIT<span className="text-[#CCFF00]">!</span></h1>
        <div className="h-2 w-full bg-[#CCFF00] mt-1"></div>
      </div>

      <nav className="space-y-6">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-4 px-6 py-4 manga-border rounded-xl font-black italic tracking-widest transition-all ${
              active === item.id ? "bg-[#CCFF00] text-black manga-shadow translate-x-2" : "text-white hover:text-[#CCFF00]"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
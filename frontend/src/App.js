import React, { useState, useContext } from "react";
import Dashboard from "./pages/Dashboard";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import AddItemModal from "./components/AddItemModal";
import { AuthContext } from './context/AuthContext';

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [showAddModal, setShowAddModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const { token, loading } = useContext(AuthContext);

  if (!token && !loading) return <Landing />;

  return (
    <div className="min-h-screen pb-24">
      {/* TACTICAL HEADER */}
      <header className="sticky top-0 z-50 px-4 md:px-10 pt-6">
        <div className="bg-black border-[5px] border-black rounded-full px-8 py-3 flex justify-between items-center shadow-[8px_8px_0px_black]">
          <div className="flex items-center gap-3 transform -rotate-1">
            <div className="w-9 h-9 bg-yellow-400 border-2 border-white rounded-lg flex items-center justify-center rotate-6 shadow-md">
              <span className="text-black font-black text-xl italic">F</span>
            </div>
            <h1 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">
              FindIt <span className="text-yellow-400 text-[10px] ml-1">システム</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-2">
              {['dashboard', 'lost', 'found', 'profile'].map(page => (
                <button 
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`px-4 py-1 rounded-full text-[10px] font-black italic uppercase transition-all ${
                    activePage === page ? 'bg-yellow-400 text-black' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white border-2 border-black"
            >
              + REPORT_INTEL
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-6 pt-12">
        {activePage === "dashboard" && <Dashboard refreshKey={refreshKey} />}
        {activePage === "lost" && <Lost refreshKey={refreshKey} />}
        {activePage === "found" && <Found refreshKey={refreshKey} />}
        {activePage === "profile" && <Profile />}
      </main>

      {/* MOBILE NAV */}
      <nav className="fixed bottom-6 inset-x-0 mx-auto w-[90%] md:hidden z-50">
        <div className="bg-black border-4 border-black rounded-full p-2 flex justify-around shadow-2xl">
          {['dashboard', 'lost', 'found', 'profile'].map((p) => (
            <button key={p} onClick={() => setActivePage(p)} className={`p-3 rounded-full ${activePage === p ? 'bg-yellow-400' : 'text-white'}`}>
               <span className="text-[10px] font-black uppercase italic">{p.charAt(0)}</span>
            </button>
          ))}
        </div>
      </nav>

      <AddItemModal 
        open={showAddModal} 
        onClose={() => setShowAddModal(false)} 
        onSuccess={() => setRefreshKey(k => k + 1)} 
      />
    </div>
  );
}

export default App;
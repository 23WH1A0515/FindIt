import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="bg-white border-[5px] border-black rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_0px_black] text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-[2rem] mx-auto mb-8 flex items-center justify-center border-[6px] border-yellow-400 shadow-xl">
           <span className="text-white text-6xl md:text-7xl font-black italic">{user.name?.charAt(0)}</span>
        </div>
        <h2 className="text-4xl md:text-5xl speed-text mb-2 truncate">{user.name}</h2>
        <p className="bg-black text-yellow-400 px-4 py-1 text-[10px] font-black italic inline-block mb-10 tracking-widest">{user.email}</p>
        
        <button onClick={logout} className="w-full py-4 bg-black text-white font-black italic uppercase rounded-2xl border-4 border-black shadow-[6px_6px_0px_#facc15] hover:bg-red-600 transition-colors">
          LOGOUT_TERMINATE
        </button>
      </div>
    </div>
  );
}
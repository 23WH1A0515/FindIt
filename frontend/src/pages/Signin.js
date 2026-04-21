import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Signin({ onSwitchToSignup }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This will now look for the 'login' function we added above
      await login(formData.email, formData.password);
    } catch (err) {
      alert("AUTH_FAILURE: Check credentials.");
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md bg-white border-[6px] border-black rounded-[2.5rem] p-10 shadow-[15px_15px_0px_#facc15] rotate-1">
      <div className="text-center mb-8 transform -rotate-1">
        <h1 className="text-4xl font-[950] italic uppercase tracking-tighter underline decoration-yellow-400 decoration-4">Login_Init</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <span className="absolute -top-2 left-4 px-2 bg-white text-[9px] font-black italic z-10 border-x-2 border-black">EMAIL_ID</span>
          <input
            required
            type="email"
            className="w-full p-4 border-4 border-black rounded-xl font-black italic outline-none focus:bg-yellow-50 text-sm"
            placeholder="agent@findit.sys"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="relative">
          <span className="absolute -top-2 left-4 px-2 bg-white text-[9px] font-black italic z-10 border-x-2 border-black">ACCESS_PASS</span>
          <input
            required
            type="password"
            className="w-full p-4 border-4 border-black rounded-xl font-black italic outline-none focus:bg-yellow-50 text-sm"
            placeholder="••••••••"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        {/* Type must be submit for handleSubmit to trigger */}
        <button type="submit" className="w-full py-4 bg-black text-white rounded-2xl font-black italic uppercase text-sm border-4 border-black shadow-[6px_6px_0px_black] hover:bg-yellow-400 hover:text-black transition-all">
          Execute_Auth
        </button>
      </form>

      <div className="mt-8 text-center transform -rotate-1">
        <button onClick={onSwitchToSignup} className="text-[10px] font-black italic uppercase text-slate-400 hover:text-black">
          Need Clearance? Register Here [+]
        </button>
      </div>
    </div>
  );
}
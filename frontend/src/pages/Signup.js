import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Signup({ onSwitchToSignin }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData.name, formData.email, formData.password);
    } catch (err) {
      console.error("Signup Error", err);
    }
  };

  return (
    <div className="w-full max-w-md bg-white border-[6px] border-black rounded-[2.5rem] p-10 shadow-[15px_15px_0px_black] -rotate-1">
      <div className="mb-8 transform rotate-1">
        <h2 className="text-4xl font-[950] italic uppercase tracking-tighter underline decoration-yellow-400 decoration-4">Agent_Reg</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <span className="absolute -top-2 left-4 px-2 bg-white text-[9px] font-black italic z-10 border-x-2 border-black">CALLSIGN</span>
          <input 
            required
            className="w-full p-4 border-4 border-black rounded-xl font-black italic outline-none text-sm" 
            placeholder="Ghost_Operator"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="relative">
          <span className="absolute -top-2 left-4 px-2 bg-white text-[9px] font-black italic z-10 border-x-2 border-black">EMAIL</span>
          <input 
            required
            type="email"
            className="w-full p-4 border-4 border-black rounded-xl font-black italic outline-none text-sm" 
            placeholder="agent@sector.net"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="relative">
          <span className="absolute -top-2 left-4 px-2 bg-white text-[9px] font-black italic z-10 border-x-2 border-black">SECURE_KEY</span>
          <input 
            required
            type="password"
            className="w-full p-4 border-4 border-black rounded-xl font-black italic outline-none text-sm" 
            placeholder="••••••••"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit" className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-black italic uppercase border-4 border-black shadow-[6px_6px_0px_black] hover:bg-black hover:text-white transition-all">
          Deploy_Profile
        </button>
      </form>

      <div className="mt-8 text-center transform rotate-1">
        <button onClick={onSwitchToSignin} className="text-[10px] font-black italic uppercase text-slate-400 hover:text-black">
          Authenticated? Sign-In
        </button>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import api from '../utils/api';

export default function AddItemModal({ open, onClose, onSuccess }) {
  const [form, setForm] = useState({ title: '', description: '', location: '', type: 'lost' });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData();
    Object.keys(form).forEach(key => fd.append(key, form[key]));
    if (file) fd.append('image', file);

    try {
      await api.post('/items', fd);
      onSuccess();
      onClose();
    } catch (err) { alert("DATA_LINK_FAILURE"); }
    finally { setSubmitting(false); }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      {/* Added max-height and overflow-y-auto to prevent screen cutoff */}
      <div className="bg-white border-[5px] border-black w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-6 md:p-10 relative shadow-[12px_12px_0px_#facc15] rotate-1">
        
        <div className="flex justify-between items-center mb-8 transform -rotate-1">
          <h2 className="text-3xl md:text-4xl speed-text leading-none">New_Intel</h2>
          <button 
            onClick={onClose} 
            className="h-10 w-10 rounded-full border-4 border-black font-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_black]"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-1">
            <span className="text-[9px] font-black italic ml-2">OBJECT_NAME</span>
            <input 
              required
              className="w-full p-4 border-2 border-black rounded-xl font-black italic outline-none text-sm"
              placeholder="e.g. SILVER WATCH"
              onChange={e => setForm({...form, title: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-[9px] font-black italic ml-2">LOCATION</span>
              <input 
                required
                className="w-full p-4 border-2 border-black rounded-xl font-black italic outline-none text-sm"
                placeholder="Sector..."
                onChange={e => setForm({...form, location: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-black italic ml-2">TYPE</span>
              <select 
                className="w-full p-4 border-2 border-black rounded-xl font-black italic uppercase bg-white text-sm"
                onChange={e => setForm({...form, type: e.target.value})}
              >
                <option value="lost">LOST</option>
                <option value="found">FOUND</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-black italic ml-2">DESCRIPTION</span>
            <textarea 
              className="w-full p-4 border-2 border-black rounded-xl font-black italic h-24 outline-none text-sm"
              placeholder="Details..."
              onChange={e => setForm({...form, description: e.target.value})}
            />
          </div>
          
          <div className="border-2 border-dashed border-black rounded-xl p-4 bg-slate-50">
             <input type="file" onChange={e => setFile(e.target.files[0])} className="text-[10px] font-black uppercase" />
          </div>
          
          <button className="w-full py-5 bg-black text-white rounded-2xl font-black italic text-xl uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all border-[3px] border-black shadow-[6px_6px_0px_black]">
            {submitting ? 'SENDING...' : 'PUBLISH'}
          </button>
        </form>
      </div>
    </div>
  );
}
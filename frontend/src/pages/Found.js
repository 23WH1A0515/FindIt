import { useEffect, useState, useCallback } from 'react';
import ItemCard from "../components/ItemCard";
import api from '../utils/api';

export default function Found({ refreshKey }) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState({ keyword: '', location: '' });

  const fetchItems = useCallback(async () => {
    try {
      const res = await api.get('/items', { params: { type: 'found', ...search } });
      setItems(res.data.data || []);
    } catch (err) { console.error("Archive Error:", err); }
  }, [search]);

  useEffect(() => { fetchItems(); }, [refreshKey, fetchItems]);

  return (
    <div className="max-w-full overflow-hidden px-2 md:px-0 space-y-8 animate-in fade-in duration-500">
      {/* Search Module - Flexible Padding */}
      <div className="bg-white text-black p-6 md:p-10 rounded-[2rem] border-[4px] border-black shadow-[8px_8px_0px_black] transform rotate-1">
        <h2 className="text-3xl md:text-5xl speed-text mb-6">Found_Archives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input 
            className="w-full p-4 rounded-xl border-2 border-black bg-slate-50 text-black font-black italic outline-none text-sm focus:bg-yellow-400/10" 
            placeholder="Search Recovered..." 
            onChange={e => setSearch(prev => ({...prev, keyword: e.target.value}))}
          />
          <input 
            className="w-full p-4 rounded-xl border-2 border-black bg-slate-50 text-black font-black italic outline-none text-sm focus:bg-yellow-400/10" 
            placeholder="Sector/Location..." 
            onChange={e => setSearch(prev => ({...prev, location: e.target.value}))}
          />
        </div>
      </div>

      {/* Fluid Grid - Prevents Overflow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-10">
        {items.length > 0 ? (
          items.map(it => <ItemCard key={it._id} {...it} />)
        ) : (
          <div className="col-span-full py-20 text-center border-4 border-dashed border-slate-300 rounded-[2rem]">
             <p className="text-2xl font-black text-slate-300 italic uppercase">Archives Empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
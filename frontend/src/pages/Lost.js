import { useEffect, useState, useCallback } from 'react';
import ItemCard from "../components/ItemCard";
import api from '../utils/api';

export default function Lost({ refreshKey }) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState({ keyword: '', location: '' });
  const [status, setStatus] = useState("");

  // ✅ FIXED: include status in dependency
  const fetchItems = useCallback(async () => {
    try {
      const res = await api.get("/items", {
        params: {
          type: "lost",
          status: status
        }
      });

      setItems(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  }, [status]); // ✅ FIX HERE

  // ✅ clean dependency
  useEffect(() => {
    fetchItems();
  }, [refreshKey, fetchItems]);

  return (
    <div className="max-w-full overflow-hidden px-2 md:px-0 space-y-8 animate-in fade-in duration-500">

      {/* SEARCH BOX */}
      <div className="bg-black text-white p-6 md:p-10 rounded-[2rem] border-[4px] border-black shadow-[8px_8px_0px_#facc15] transform -rotate-1">
        <h2 className="text-3xl md:text-5xl speed-text text-yellow-400 mb-6">
          Lost_Search
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="w-full p-4 rounded-xl border-2 border-white/20 bg-white/5 text-white font-black italic outline-none text-sm focus:border-yellow-400"
            placeholder="Search Target..."
            onChange={e =>
              setSearch(prev => ({ ...prev, keyword: e.target.value }))
            }
          />

          <input
            className="w-full p-4 rounded-xl border-2 border-white/20 bg-white/5 text-white font-black italic outline-none text-sm focus:border-yellow-400"
            placeholder="Location..."
            onChange={e =>
              setSearch(prev => ({ ...prev, location: e.target.value }))
            }
          />
        </div>
      </div>

      {/* ✅ FILTER (correct placement) */}
      <div className="flex items-center gap-3 px-2">
        <span className="text-sm font-black text-black">STATUS:</span>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 rounded-lg border-2 border-black bg-white text-black font-black"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="returned">Returned</option>
        </select>
      </div>

      {/* ✅ GRID (THIS WAS MISSING) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-10">
        {items.map(it => (
          <ItemCard
            key={it._id}
            {...it}
            _id={it._id}
            status={it.status}
          />
        ))}
      </div>

    </div>
  );
}
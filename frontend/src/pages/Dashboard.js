import { useEffect, useState, useContext, useCallback } from 'react';
import ItemCard from "../components/ItemCard";
import api from '../utils/api';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard({ refreshKey }) {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const markReturned = async (id) => {
  await api.put(`/items/${id}/return`);
  fetchMyItems(); // refresh data
};

  const fetchMyItems = useCallback(async () => {
    if (!user) return;
    try {
      const res = await api.get('/items/me');
      setItems(res.data.data || []);
    } catch (err) { console.error(err); }
  }, [user]);

  useEffect(() => { fetchMyItems(); }, [refreshKey, fetchMyItems]);

  return (
    <div className="max-w-full px-2 md:px-0 space-y-10 animate-in slide-in-from-bottom-4 duration-500">
      <section className="bg-black p-8 md:p-12 rounded-[2.5rem] border-[5px] border-black shadow-[10px_10px_0px_#facc15] transform rotate-1">
        <h2 className="text-4xl md:text-6xl speed-text text-white mb-8">Agent_Intel</h2>
        <div className="flex gap-4 md:gap-8">
          <div className="bg-white border-[3px] border-black p-4 md:p-6 rounded-2xl flex-1 text-center">
            <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 mb-1">Reports</p>
            <p className="text-3xl md:text-5xl font-black italic">{items.length}</p>
          </div>
          <div className="bg-yellow-400 border-[3px] border-black p-4 md:p-6 rounded-2xl flex-1 text-center">
            <p className="text-[8px] md:text-[10px] font-black uppercase text-black mb-1">Status</p>
            <p className="text-3xl md:text-5xl font-black italic">ACTIVE</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-10">
        {items.map((it) => (
  <ItemCard
    key={it._id}
    {...it}
    _id={it._id}
    status={it.status}
    onMarkReturned={markReturned}
  />
))}
      </div>
    </div>
  );
}
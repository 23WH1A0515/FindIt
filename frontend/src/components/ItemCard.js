import React from 'react';
import { buildImageUrl } from '../utils/api';

export default function ItemCard({ title, location, image, type, description, _id, status, onMarkReturned }) {
  const src = buildImageUrl(image);
  const isLost = type === 'lost';

  return (
    <article className="manga-card-enhanced rounded-[1.5rem] md:rounded-[2rem] group">
      {/* Header - Scaled down */}
      <div className="flex justify-between items-center px-4 py-2 border-b-2 border-black bg-gray-50">
        <span className="text-[8px] font-black italic text-slate-400 uppercase tracking-tighter">ID_{Math.floor(Math.random() * 900)}</span>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
      </div>

      {/* Image Area - Responsive Height */}
      <div className="h-40 md:h-48 relative border-b-[3px] border-black overflow-hidden bg-slate-900">
        <div className={`absolute top-0 right-0 z-20 px-3 py-1 font-black italic text-[9px] ${isLost ? 'bg-red-600 text-white' : 'bg-yellow-400 text-black'} border-l-2 border-b-2 border-black`}>
          {isLost ? 'LOST' : 'FOUND'}
        </div>
        {src ? (
          <img src={src} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/10 italic text-[10px] font-black opacity-20 uppercase">No_Img</div>
        )}
      </div>

      {/* Content Area - Optimized Padding */}
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl speed-text mb-1 truncate leading-tight">
  {title}
</h3>

<span
  className={`inline-block mb-2 px-2 py-1 text-[9px] font-black rounded-full ${
    status === "returned"
      ? "bg-green-200 text-green-800"
      : "bg-yellow-200 text-yellow-800"
  }`}
>
  {status === "returned" ? "RETURNED" : "PENDING"}
</span>
        
        <div className="flex items-center gap-1 mb-3">
           <span className="text-[9px] font-black uppercase italic text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-black/10">📍 {location}</span>
        </div>

        <p className="text-[10px] font-bold text-slate-500 italic line-clamp-2 mb-4 leading-relaxed">
          {description || "No tactical intel provided."}
        </p>
        
        {status !== "returned" ? (
  <button
    onClick={() => onMarkReturned(_id)}
    className="mt-auto w-full py-3 bg-green-500 text-white rounded-xl font-black italic uppercase text-[9px] tracking-widest hover:bg-green-600 transition-all border-2 border-black"
  >
    MARK RETURNED
  </button>
) : (
  <button
    disabled
    className="mt-auto w-full py-3 bg-gray-300 text-gray-600 rounded-xl font-black italic uppercase text-[9px] tracking-widest border-2 border-black"
  >
    COMPLETED
  </button>
)}
      </div>
    </article>
  );
}
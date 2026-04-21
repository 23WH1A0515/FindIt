import React from 'react';

export default function ConsoleShell({ children, title = 'Dashboard', subtitle, actions }) {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-soft backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.24em] uppercase text-indigo-500/80">FindIt workspace</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">{title}</h1>
            {subtitle && <p className="mt-3 text-base text-slate-600">{subtitle}</p>}
          </div>
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

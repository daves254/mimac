import React from 'react'

export default function DashboardPreview(){
  return (
    <section id="dashboard" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
        <div className="col-span-2 rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
          <h3 className="font-semibold text-xl">Client Dashboard (Preview)</h3>
          <p className="text-slate-300 mt-2">Monitor your project's progress, milestones, payments, and request change orders from anywhere.</p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="rounded-lg p-4 bg-slate-800/50">Milestone 1<br/><span className="text-xs text-slate-400">Design</span></div>
            <div className="rounded-lg p-4 bg-slate-800/50">Milestone 2<br/><span className="text-xs text-slate-400">Foundation</span></div>
            <div className="rounded-lg p-4 bg-slate-800/50">Milestone 3<br/><span className="text-xs text-slate-400">Structure</span></div>
          </div>
        </div>
        <aside className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
          <h4 className="font-semibold">Payments</h4>
          <p className="text-slate-300 text-sm mt-2">Make small deposits over time — you don’t need the full capital up front.</p>
          <ul className="mt-3 text-sm text-slate-300 space-y-2">
            <li>• Track what’s next on your project</li>
            <li>• Request checkpoint changes</li>
            <li>• View materials being sourced</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
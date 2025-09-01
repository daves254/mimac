import React, { useState, useEffect } from 'react'

export default function ChangeOrderModal({ open, onClose, project }: any){
  const [note, setNote] = useState('Change order example: switch next checkpoint from "install tiles" to "install electrical".')

  useEffect(()=>{
    if(project) setNote(`Change order example: for ${project.name}, change next checkpoint from "install tiles" to "install electrical".`)
  },[project])

  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 max-w-xl w-full rounded-2xl bg-slate-900/95 border border-slate-800 p-6">
        <h3 className="text-lg font-semibold">Request Change Order</h3>
        <p className="text-sm text-slate-300 mt-2">Project: {project?.name}</p>
        <textarea className="w-full mt-4 min-h-[120px] rounded-xl bg-slate-800/80 p-3" value={note} onChange={(e) => setNote(e.target.value)} />
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-4 py-2 rounded-lg bg-white/10" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 rounded-lg bg-brand-500" onClick={() => { alert('Change order submitted:\n' + note); onClose(); }}>Submit</button>
        </div>
      </div>
    </div>
  )
}
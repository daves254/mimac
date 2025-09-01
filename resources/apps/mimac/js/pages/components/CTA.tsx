import React from 'react'

export default function CTA(){
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to build with confidence?</h2>
          <p className="text-slate-300 mt-4">We manage your construction from start to finish, supply materials cheaply by cutting middlemen, and give you a dashboard to monitor progress.</p>
          <ul className="mt-6 space-y-2 text-slate-300 text-sm">
            <li>• Small deposits accepted — pay as you go</li>
            <li>• Dashboard access — track milestones & payments</li>
            <li>• Change orders — modify next checkpoint easily</li>
          </ul>
        </div>
        <form className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — we will reach out!')}}>
          <input placeholder="Full name" required className="w-full px-4 py-3 rounded-xl bg-slate-800/80" />
          <input placeholder="Email address" required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-800/80" />
          <input placeholder="Project (optional)" className="w-full px-4 py-3 rounded-xl bg-slate-800/80" />
          <textarea placeholder="Tell us about your project" className="w-full min-h-[120px] px-4 py-3 rounded-xl bg-slate-800/80" />
          <button className="w-full px-5 py-3 rounded-2xl bg-brand-500">Request Quote</button>
        </form>
      </div>
    </section>
  )
}
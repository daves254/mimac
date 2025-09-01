import React from 'react'

const items = [
  { title: 'Design & Planning', desc: 'Architectural design, permitting, and cost engineering.' },
  { title: 'General Contracting', desc: 'End-to-end execution with quality assurance and safety.' },
  { title: 'Materials Supply', desc: 'We supply quality materials at lower cost — no middlemen markup.' },
  { title: 'Project Management', desc: 'Monitoring, milestones, and client dashboard access.' },
]

export default function Services(){
  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">What we offer</h2>
        <p className="text-slate-300 mt-3">Comprehensive construction services with transparent pricing and real-time tracking.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(it => (
            <div key={it.title} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-brand-400/40 hover:shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-brand-300 mb-4" />
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
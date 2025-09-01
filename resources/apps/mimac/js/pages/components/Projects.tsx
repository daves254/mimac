/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const projects = [
  { id: 'p1', name: 'Riverside Offices', tag: 'Commercial', img: '/src/assets/project1.svg', summary: 'Modern office complex with smart systems.' },
  { id: 'p2', name: 'Summit Residences', tag: 'Residential', img: '/src/assets/project2.svg', summary: 'Luxury residential development with green features.' },
  { id: 'p3', name: 'Green Hub Center', tag: 'Industrial', img: '/src/assets/project3.svg', summary: 'Sustainable warehouse & logistics center.' },
]

export default function Projects(){

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="text-slate-300 mt-2">We provide materials at much cheaper prices because we cut out middlemen — savings we pass to clients.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.id} className="group rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{p.tag}</p>
                  <p className="text-xs text-slate-300 mt-2">{p.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  )
}

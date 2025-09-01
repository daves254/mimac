import React from 'react'
import { SITE } from '../config'
import { usePage} from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Navbar(){
        const { auth } = usePage<SharedData>().props;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 shadow-soft">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={SITE.logo} alt={SITE.name} className="w-8 h-8 rounded-md object-contain" />
        </a>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#services" className="hover:text-brand-300">Services</a>
          <a href="#projects" className="hover:text-brand-300">Projects</a>
          <a href="#contact" className="hover:text-brand-300">Contact</a>
        </div>
                <div className="md:flex gap-8 text-sm">
{auth.user ? (
                            <a
                                href={route('dashboard')}
                                className="inline-flex items-center rounded-2xl bg-brand-500 hover:bg-brand-400 px-4 py-2 text-sm font-medium shadow-soft"
                            >
                                Dashboard
                            </a>
                        ) : (
                            <>
                                <a
                                    href='#contact'
                                    className="inline-flex items-center rounded-2xl bg-brand-500 hover:bg-brand-400 px-4 py-2 text-sm font-medium shadow-soft"
                                >
                                    Request Quote
                                </a>
                            </>
                        )}
                    </div>
        {//<a href="#contact" className="inline-flex items-center rounded-2xl bg-brand-500 hover:bg-brand-400 px-4 py-2 text-sm font-medium shadow-soft">Get a Quote</a>
        }
      </nav>
    </header>
  )
}

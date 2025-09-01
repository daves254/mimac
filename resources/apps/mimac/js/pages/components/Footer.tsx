import React from 'react'
export default function Footer(){
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Keystone BuildCo. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Careers</a>
        </div>
      </div>
    </footer>
  )
}
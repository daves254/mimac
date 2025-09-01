import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'
export default function Welcome() {

    return (<div>
      <Navbar />
      <main className="relative pt-16">
        <Hero />
        <Services />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>);
}

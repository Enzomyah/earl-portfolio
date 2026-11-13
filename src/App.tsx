import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const RESUME_PDF = '/CIPRES,EARL LAWRENCE C._RESUME.pdf';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar resumeHref={RESUME_PDF} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero resumeHref={RESUME_PDF} />

        {/* 2. About Me */}
        <About />

        {/* 3. Technologies & Skills */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects />

        {/* 5. Experience & Achievements */}
        <Experience />

        {/* 6. Contact */}
        <Contact resumeHref={RESUME_PDF} />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;


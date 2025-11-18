import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import UseCases from './components/UseCases';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <UseCases />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-400 border-t border-white/5">
        © {new Date().getFullYear()} Pulse Automations — AI systems for operations & marketing
      </footer>
    </div>
  );
}

export default App;
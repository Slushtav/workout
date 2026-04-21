/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Flame, 
  Clock, 
  ChevronRight, 
  Play, 
  Trophy, 
  Users, 
  Calendar,
  Zap,
  Target,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b editorial-border ${isScrolled ? 'bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="editorial-tag border-primary text-primary">Live Now</div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase">PulseDaily</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#routine" className="hover:text-primary transition-colors">Schedule</a>
          <a href="#stats" className="hover:text-primary transition-colors">Analytics</a>
          <a href="#workouts" className="hover:text-primary transition-colors">Library</a>
          <button className="bg-white text-dark px-6 py-2 uppercase font-black tracking-widest hover:bg-primary hover:text-white transition-all active:scale-95">
            Join
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark border-b border-neutral-800 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6 uppercase font-black tracking-widest text-center text-sm">
              <a href="#routine" onClick={() => setIsMenuOpen(false)}>Schedule</a>
              <a href="#stats" onClick={() => setIsMenuOpen(false)}>Analytics</a>
              <a href="#workouts" onClick={() => setIsMenuOpen(false)}>Library</a>
              <button className="bg-primary text-white py-4 mt-2">Join Club</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-0 overflow-hidden min-h-[90vh] flex flex-col border-b editorial-border">
      <div className="max-w-7xl mx-auto w-full px-6 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="editorial-tag mb-8">KINETIC SERIES 2026</div>
              <h1 className="font-display text-[15vw] md:text-[12rem] leading-[0.8] font-black uppercase tracking-tighter mb-8">
                PULSE<br />
                <span className="text-primary italic">CORE.</span>
              </h1>
            </motion.div>
          </div>
          <div className="md:col-span-4 pb-4">
             <div className="flex flex-col gap-6">
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  Discipline is the bridge between goals and accomplishment. Track every movement, master every breath.
                </p>
                <div className="flex gap-3">
                  <span className="editorial-tag">POWER</span>
                  <span className="editorial-tag">FOCUS</span>
                </div>
                <div className="pt-8">
                   <button className="bg-white text-dark px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all w-full md:w-auto">
                    Start Routine
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Editorial Grid Detail */}
      <div className="hidden md:grid grid-cols-4 h-20 border-t editorial-border w-full mt-20">
         <div className="border-r editorial-border flex items-center px-6 text-[10px] uppercase tracking-widest font-bold opacity-40">Section 01 / Intro</div>
         <div className="border-r editorial-border flex items-center px-6 text-[10px] uppercase tracking-widest font-bold opacity-40">System Active</div>
         <div className="border-r editorial-border flex items-center px-6 text-[10px] uppercase tracking-widest font-bold opacity-40">Performance Ready</div>
         <div className="flex items-center px-6 text-[10px] uppercase tracking-widest font-bold opacity-40 italic">Pulsedaily Collectif</div>
      </div>
    </section>
  );
};

const RoutineSection = () => {
  const activities = [
    { id: '01', title: 'Power Yoga', duration: '45m', type: 'Mind', active: false },
    { id: '02', title: 'HIIT SPRINT', duration: '30m', type: 'Cardio', active: true },
    { id: '03', title: 'Strength Core', duration: '60m', type: 'Force', active: false },
    { id: '04', title: 'Heavy Lifting', duration: '90m', type: 'Force', active: false },
  ];

  return (
    <section id="routine" className="border-b editorial-border">
      <div className="grid grid-cols-1 md:grid-cols-4 bg-neutral-850 gap-px">
        <div className="bg-dark p-12 flex flex-col justify-between min-h-[400px]">
           <div>
              <div className="vertical-label mb-8">Schedule / 24H</div>
              <h3 className="text-4xl font-display font-black uppercase leading-none">DAILY<br />FLOW</h3>
           </div>
           <div className="text-xs uppercase tracking-widest opacity-40 font-bold">Today's Pulse</div>
        </div>
        
        {activities.map((act, i) => (
          <div key={i} className={`p-10 flex flex-col justify-between min-h-[400px] transition-colors relative group ${act.active ? 'bg-primary text-white' : 'bg-dark hover:bg-neutral-900'}`}>
            <div className="flex justify-between items-start">
              <span className="text-4xl font-display font-black opacity-20">{act.id}</span>
              <div className={`editorial-tag ${act.active ? 'border-white text-white' : ''}`}>{act.type}</div>
            </div>
            <div>
              <h4 className="text-3xl font-display font-black uppercase mb-4 leading-none">{act.title}</h4>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60">
                <Clock className="w-4 h-4" /> {act.duration}
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const StatsBoard = () => {
  return (
    <section id="stats" className="border-b editorial-border">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-850 gap-px">
        {/* Left Side: Massive Metric */}
        <div className="bg-dark p-16 flex flex-col justify-between min-h-[600px] border-r editorial-border">
           <div>
              <div className="flex justify-between items-start mb-20">
                 <div className="editorial-tag">Metrics / Session</div>
                 <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Current Load</div>
                    <div className="text-lg font-bold uppercase italic">Peak Performance</div>
                 </div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-4">Total Energy Burned</div>
              <div className="text-[12rem] font-display font-black leading-none text-primary italic tracking-tighter">12k</div>
              <div className="text-sm uppercase tracking-widest font-bold mt-4 opacity-60">Kilocalories / Monthly Avg</div>
           </div>
        </div>

        {/* Right Side: Grid of Details */}
        <div className="grid grid-rows-2">
           <div className="grid grid-cols-2 bg-neutral-850 gap-px border-b editorial-border">
              <div className="bg-dark p-12 flex flex-col justify-between">
                 <div className="vertical-label">Streak Status</div>
                 <div>
                    <div className="text-6xl font-display font-bold leading-none mb-2">12</div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-40">Active Days</div>
                 </div>
              </div>
              <div className="bg-neutral-900 p-12 flex flex-col justify-between">
                 <div className="flex justify-end">
                    <Users className="w-8 h-8 text-primary" />
                 </div>
                 <div>
                    <div className="text-6xl font-display font-bold leading-none mb-2">+43</div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-40">Collective Members</div>
                 </div>
              </div>
           </div>
           <div className="bg-dark p-12 flex flex-col justify-center">
              <div className="max-w-md">
                 <div className="text-xs uppercase tracking-widest opacity-40 mb-6 font-bold">Daily Performance Goal</div>
                 <div className="w-full bg-neutral-800 h-2 mb-4">
                    <div className="bg-primary h-full w-3/4"></div>
                 </div>
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-60 italic">
                    <span>75% Reached</span>
                    <span>Target: 60 MIN</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const WorkoutsSection = () => {
  const workouts = [
    { title: 'Full Body Inferno', image: 'https://picsum.photos/seed/fitness1/800/600', level: 'Advanced', time: '45m' },
    { title: 'Morning Mobility', image: 'https://picsum.photos/seed/fitness2/800/600', level: 'Intro', time: '15m' },
    { title: 'Explosive Power', image: 'https://picsum.photos/seed/fitness3/800/600', level: 'Elite', time: '60m' },
  ];

  return (
    <section id="workouts" className="border-b editorial-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tight italic">LIBRARY.</h2>
          <div className="vertical-label hidden md:block">Resource / Catalog</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {workouts.map((w, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden relative mb-8 border editorial-border p-2 bg-neutral-900/20">
                <img 
                  src={w.image} 
                  alt={w.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <div className="editorial-tag bg-white text-dark border-white">{w.level}</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                     <Play className="text-white fill-white w-6 h-6 ml-1" />
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                 <div>
                    <h4 className="text-2xl font-display font-bold uppercase mb-2">{w.title}</h4>
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                       <Clock className="w-4 h-4" /> {w.time}
                    </div>
                 </div>
                 <div className="text-xs font-black opacity-20 italic">v.1.0</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="border-b editorial-border overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-850 gap-px">
         <div className="bg-primary p-20 flex flex-col justify-center items-center text-center">
            <h2 className="text-dark font-display text-5xl md:text-8xl font-black uppercase italic leading-[0.85] mb-10">
              JOIN THE<br />TRIBE.
            </h2>
            <button className="bg-dark text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform active:scale-95">
              Claim Your Spot
            </button>
         </div>
         <div className="bg-dark p-20 flex flex-col justify-center">
             <div className="max-w-sm mx-auto">
                <div className="vertical-label mb-8">Access / Global</div>
                <p className="text-2xl font-display font-bold uppercase mb-8 leading-tight">
                   Unlock elite performance metrics and community support.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-[10px] uppercase font-bold opacity-40 italic underline-offset-1">Members Active</span>
                      <span className="text-sm font-black">52,480</span>
                   </div>
                   <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-[10px] uppercase font-bold opacity-40 italic underline-offset-1">Region / Status</span>
                      <span className="text-sm font-black">Online / Global</span>
                   </div>
                </div>
             </div>
         </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex items-center gap-4">
             <div className="editorial-tag border-primary text-primary">Est. 2026</div>
             <span className="font-display font-bold text-3xl tracking-tighter uppercase italic">PulseDaily</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            <a href="#" className="hover:text-primary transition-colors italic">Privacy Protocol</a>
            <a href="#" className="hover:text-primary transition-colors italic">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors italic">Contact / Support</a>
          </div>
        </div>
        <div className="text-center">
           <div className="text-[10px] uppercase font-bold tracking-[0.8em] text-neutral-800 mb-4 italic">
             Kinetic Performance Systems / Powered by PulseDaily Tribe
           </div>
           <div className="text-[8px] uppercase tracking-widest text-neutral-900 font-bold">
              All Rights Reserved.
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <RoutineSection />
      <StatsBoard />
      <WorkoutsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

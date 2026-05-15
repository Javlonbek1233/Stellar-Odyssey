/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Rocket, 
  Telescope, 
  Map, 
  Info, 
  ArrowRight, 
  Box, 
  Zap, 
  Globe, 
  Navigation
} from "lucide-react";
import { useState, useEffect } from "react";

const COSMIC_BACKGROUND = "https://images.unsplash.com/photo-1464802686167-b939a67e06a1?auto=format&fit=crop&q=80&w=2048";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0502] text-white font-sans overflow-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0">
        <img
          src={COSMIC_BACKGROUND}
          alt="Cosmic Universe"
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_30%] from-transparent via-[#0a0502]/60 to-[#0a0502]" />
        
        {/* Animated Particles Simulation (Simple CSS) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{ 
                y: [null, (Math.random() * -20) + "%"],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            />
          ))}
        </div>
      </div>

      {/* Main UI Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between px-8 py-6 backdrop-blur-md border-b border-white/5 bg-black/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-light tracking-[0.2em] uppercase">Stellar Odyssey</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/60">
            <a href="#" className="hover:text-white transition-colors">Galaxies</a>
            <a href="#" className="hover:text-white transition-colors">Exoplanets</a>
            <a href="#" className="hover:text-white transition-colors">Nebulae</a>
            <a href="#" className="hover:text-white transition-colors">Black Holes</a>
          </div>

          <button className="px-6 py-2 rounded-full border border-white/30 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Launch Mission
          </button>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center px-12 md:px-24 py-12">
          <AnimatePresence>
            {isLoaded && (
              <div className="max-w-4xl space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">
                    <span className="w-8 h-[1px] bg-white/20" />
                    Deep Space Exploration
                  </div>
                  <h1 className="text-6xl md:text-8xl font-light leading-none tracking-tighter">
                    Beyond the <br />
                    <span className="italic font-serif opacity-80 text-[#ff4e00]/90">Known Horizon</span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed"
                >
                  Embark on a digital journey through the vast reaches of our universe. 
                  Discover celestial wonders, chart unexplored star systems, and witness 
                  the birth and death of stars in high-definition cosmic fidelity.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group flex items-center gap-3 px-8 py-4 bg-[#ff4e00] rounded-none text-black font-bold uppercase tracking-widest hover:bg-white transition-all">
                    Initialize Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-none text-white font-medium uppercase tracking-widest hover:bg-white/5 transition-all">
                    View Galactic Map
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer Stats / Credits */}
        <footer className="px-12 py-12 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 bg-black/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 flex-1">
            <Stat label="Active Missions" value="1,248" />
            <Stat label="Stars Charted" value="48.2B" />
            <Stat label="Exoplanets Found" value="5,903" />
            <Stat label="Data Processed" value="4.2 PB" />
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
              <IconCircle icon={Rocket} />
              <IconCircle icon={Telescope} />
              <IconCircle icon={Globe} />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/20">
              Project Alpha &bull; Deep Space Initiative &bull; 2026
            </p>
          </div>
        </footer>
      </div>

      {/* Decorative Overlays */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-[#ff4e00]/5 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      {/* Corner Labels (Brutalist Touch) */}
      <div className="fixed top-24 right-8 writing-vertical-rl text-[10px] uppercase tracking-[0.5em] text-white/10 rotate-180 select-none">
        Galaxy Sector 7G-Alpha
      </div>
      <div className="fixed bottom-8 left-8 text-[10px] uppercase tracking-[0.5em] text-white/10 select-none">
        0.02341 - 42.1192 - SPACE_T
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-[10px] uppercase tracking-widest text-[#ff4e00]/60 font-bold">{label}</div>
      <div className="text-3xl font-light font-mono tracking-tighter">{value}</div>
    </div>
  );
}

function IconCircle({ icon: Icon }: { icon: any }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
      <Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
    </div>
  );
}


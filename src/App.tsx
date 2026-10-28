/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import About from './components/About';
import Segments from './components/Segments';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import { getWhatsAppLink } from './data';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function App() {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin at application level
    gsap.registerPlugin(ScrollTrigger);

    // Configure Lenis smooth scrolling options
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.15,
    });

    // Ensure ScrollTrigger updates position coordinates in response to Lenis wheel inputs
    lenis.on('scroll', ScrollTrigger.update);

    // Keep GSAP ticker and Lenis rendering clock on identical render frame loop
    const updateTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTick);
    gsap.ticker.lagSmoothing(0);

    // Make lenis accessible globally for other button transitions (like Hero CTA)
    (window as any).lenisInstance = lenis;

    // Elegant override for local anchor scrolls to use Lenis scrollTo transition
    const handleSmoothAnchorScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        // Handle in-page anchors smoothly
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const element = document.querySelector(href) as HTMLElement | null;
          if (element) {
            lenis.scrollTo(element, {
              offset: -85, // Respect floating navbar height offset
              duration: 1.4,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              immediate: false,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothAnchorScroll);

    return () => {
      document.removeEventListener('click', handleSmoothAnchorScroll);
      gsap.ticker.remove(updateTick);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-amber-500 selection:text-white relative">
      <Header />
      
      <main id="main-content">
        <Hero />
        <Benefits />
        <Gallery />
        <About />
        <Segments />
        <CtaFinal />
      </main>

      <Footer />

      {/* Persistent Pulsing WhatsApp Floating Beacon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
      >
        {/* Tooltip text */}
        <div className="hidden sm:block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 text-xs font-semibold rounded-sm whitespace-nowrap shadow-xl border border-white/10">
          Olá! Gostaria de um Orçamento?
        </div>
        
        {/* Pulsing button container */}
        <div className="relative h-14 w-14 flex-shrink-0">
          {/* Pulsing Backlight Ring */}
          <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-30 z-0" />
          
          {/* Actual Trigger Button */}
          <a
            href={getWhatsAppLink('Olá! Estou navegando no site da marcenaria de móveis planejados e gostaria de agendar uma consultoria de orçamento sob medida.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar conosco no WhatsApp"
            className="relative flex items-center justify-center h-14 w-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer z-10"
          >
            <Phone size={24} fill="currentColor" className="animate-pulse" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}


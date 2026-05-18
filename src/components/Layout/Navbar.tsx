import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Consultancy', path: '/consultancy' },
  { name: 'Courses', path: '/courses' },
  { name: 'Outreach', path: '/outreach' },
  { name: 'Blog', path: '/blog' },
  { name: 'Testimonials', path: '/testimonials' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0',
        scrolled ? 'bg-surface/80 backdrop-blur-md py-3 shadow-sm border-b border-outline-variant/20' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div 
            className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/20"
          >
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-on-surface">
            S.H.E Hub <span className="text-primary">Academy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative group',
                location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                location.pathname === link.path ? "w-full" : ""
              )} />
            </Link>
          ))}
          
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm transform active:scale-95">
            Book a Session
          </Link>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="p-2 text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">S</div>
                <span className="font-display font-bold text-xl tracking-tight text-on-surface">S.H.E Hub</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 bg-surface rounded-full text-on-surface-variant hover:bg-outline-variant/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto px-6 py-10 flex flex-col">
              <div className="space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'text-3xl font-display font-bold py-4 flex items-center justify-between transition-all group',
                        location.pathname === link.path ? 'text-primary' : 'text-on-surface'
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={28} className={cn("transition-transform group-hover:translate-x-1", location.pathname === link.path ? "opacity-100" : "opacity-0")} />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-auto pt-10 border-t border-outline-variant/10">
                <Link 
                  to="/contact" 
                  className="btn-primary py-5 w-full text-xl shadow-2xl shadow-primary/20"
                >
                  Book a Session
                </Link>
                <div className="flex justify-center gap-8 mt-10 text-on-surface-variant text-sm font-medium">
                  <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

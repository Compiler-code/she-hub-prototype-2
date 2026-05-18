import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Send } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-on-surface text-surface py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">S</div>
              <span className="font-display font-bold text-xl tracking-tight">
                S.H.E Hub <span className="text-secondary-container">Academy</span>
              </span>
            </Link>
            <p className="text-surface-dim text-sm leading-relaxed">
              Empowering the next generation of leaders through personalized mentorship, modern education, and community impact.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors duration-200">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-surface-dim">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/consultancy" className="hover:text-primary transition-colors">Consultancy Services</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Available Courses</Link></li>
              <li><Link to="/outreach" className="hover:text-primary transition-colors">Outreach Programs</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-surface-dim">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Innovation Way, Suite 100, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+234 800 SHE HUB</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@shehubacademy.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-surface-dim text-sm mb-6">Join our community and get updates on new courses and outreach events.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                id="newsletter-email"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 p-1.5 bg-primary rounded-md hover:bg-primary-container transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <p>© {currentYear} S.H.E Hub Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-surface transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-surface transition-colors">Terms of Service</Link>
            <button className="hover:text-surface transition-colors">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/calendar', label: 'Events Calendar' },
    { path: '/donate', label: 'Support Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-900/95 via-teal-900/95 to-slate-900/95 backdrop-blur-sm border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Heart className="w-8 h-8 text-coral-400 fill-coral-400 transform group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 blur-lg bg-coral-400/30 animate-pulse"></div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-coral-300 via-amber-300 to-teal-300 bg-clip-text text-transparent">
                Austin Movement Alliance
              </div>
              <div className="text-xs text-teal-300/80 tracking-wider">Nurturing Unity Through Dance</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all relative group ${
                  isActive(link.path)
                    ? 'text-coral-300'
                    : 'text-teal-100/80 hover:text-coral-300'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-coral-400 to-amber-400 transition-all ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-teal-100 hover:text-coral-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-teal-500/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-coral-300'
                    : 'text-teal-100/80 hover:text-coral-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

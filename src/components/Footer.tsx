import { Heart, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-coral-400 fill-coral-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-coral-300 to-amber-300 bg-clip-text text-transparent">
                Austin Movement Alliance
              </span>
            </div>
            <p className="text-teal-100/60 text-sm leading-relaxed">
              Cultivating unity and vibrancy through movement. We believe art runs through the collective soul, blossoming where passion meets community.
            </p>
          </div>

          <div>
            <h3 className="text-coral-300 font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/calendar" className="block text-teal-100/70 hover:text-coral-300 text-sm transition-colors">
                Events Calendar
              </Link>
              <Link to="/donate" className="block text-teal-100/70 hover:text-coral-300 text-sm transition-colors">
                Support Our Mission
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-coral-300 font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-teal-100/70 text-sm">
                <MapPin className="w-4 h-4 text-coral-400" />
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-center space-x-2 text-teal-100/70 text-sm">
                <Mail className="w-4 h-4 text-coral-400" />
                <span>hello@atxmovement.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-500/10 text-center text-teal-100/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Austin Movement Alliance. Nurturing vibrancy through unity.</p>
        </div>
      </div>
    </footer>
  );
}

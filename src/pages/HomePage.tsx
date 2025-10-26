import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Users, Calendar, ArrowRight } from 'lucide-react';
import { supabase, Event } from '../lib/supabase';
import EventCard from '../components/EventCard';

export default function HomePage() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('is_featured', true)
        .order('date', { ascending: true })
        .limit(3);

      if (!error && data) {
        setFeaturedEvents(data);
      }
      setLoading(false);
    };

    fetchFeaturedEvents();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900"></div>

        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Heart className="w-20 h-20 text-coral-400 fill-coral-400 animate-pulse" />
              <div className="absolute inset-0 blur-2xl bg-coral-400/40 animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-coral-300 via-amber-300 to-teal-300 bg-clip-text text-transparent">
              Where Movement
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-coral-300 to-amber-300 bg-clip-text text-transparent">
              Meets Community
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-teal-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            We cultivate unity through dance, nurturing the vibrancy of Austin's movement arts community.
            Our roots run through the collective soul—blossoming where passion meets wild abandon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calendar"
              className="group px-8 py-4 bg-gradient-to-r from-coral-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-coral-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/donate"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-teal-100 rounded-full font-semibold border-2 border-teal-300/30 hover:border-coral-300 hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>Support Our Mission</span>
            </Link>
          </div>
        </div>


        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-300/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-coral-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-teal-500/20 hover:border-coral-400/40 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-coral-500/20 to-amber-500/20 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-coral-400" />
              </div>
              <h3 className="text-2xl font-bold text-coral-300 mb-4">Unity</h3>
              <p className="text-teal-100/70 leading-relaxed">
                We bring together dancers, artists, and movement enthusiasts to create a thriving, connected community.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-teal-500/20 hover:border-coral-400/40 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-teal-300 mb-4">Vibrancy</h3>
              <p className="text-teal-100/70 leading-relaxed">
                Like vines creeping into derelict systems, we dare to blossom—making the world more beautiful through movement.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-teal-500/20 hover:border-coral-400/40 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-amber-400 fill-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Passion</h3>
              <p className="text-teal-100/70 leading-relaxed">
                We throw ourselves into passion projects with wild abandon—art's roots run through the collective soul.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-coral-300 to-amber-300 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
            <p className="text-teal-100/70 text-lg max-w-2xl mx-auto">
              Join us for classes, socials, and celebrations that nurture connection and artistic expression
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-teal-400/30 border-t-coral-400 rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/calendar"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all hover:scale-105"
                >
                  <span>View Full Calendar</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coral-500 via-transparent to-teal-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl text-teal-100/90 leading-relaxed italic mb-6">
            "The way I see it, one of the artists main roles is to make the world a little bit more beautiful, by creeping into derelict systems like vines and daring to blossom there."
          </blockquote>
          <p className="text-teal-100/60">— Our Collective Vision</p>
        </div>
      </section>
    </div>
  );
}

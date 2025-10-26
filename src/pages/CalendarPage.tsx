import { useEffect, useState } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { supabase, Event } from '../lib/supabase';
import EventCard from '../components/EventCard';

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (!error && data) {
        setEvents(data);
        setFilteredEvents(data);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events;

    if (selectedType !== 'all') {
      filtered = filtered.filter(event => event.event_type === selectedType);
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(event => event.level === selectedLevel);
    }

    setFilteredEvents(filtered);
  }, [selectedType, selectedLevel, events]);

  const eventTypes = ['all', 'class', 'social', 'party', 'special'];
  const levels = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-coral-500/20 to-teal-500/20 mb-6">
            <Calendar className="w-8 h-8 text-coral-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-coral-300 via-amber-300 to-teal-300 bg-clip-text text-transparent">
              Events Calendar
            </span>
          </h1>
          <p className="text-xl text-teal-100/70 max-w-3xl mx-auto leading-relaxed">
            Discover classes, socials, and special events that bring our community together through movement and connection
          </p>
        </div>

        <div className="mb-12 p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl border border-teal-500/20">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-coral-400" />
            <h2 className="text-lg font-semibold text-teal-100">Filter Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-teal-100/80 mb-2">Event Type</label>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedType === type
                        ? 'bg-gradient-to-r from-coral-500 to-amber-500 text-white shadow-lg'
                        : 'bg-slate-700/50 text-teal-100/70 hover:bg-slate-700 border border-teal-500/20'
                    }`}
                  >
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-100/80 mb-2">Skill Level</label>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedLevel === level
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-slate-700/50 text-teal-100/70 hover:bg-slate-700 border border-teal-500/20'
                    }`}
                  >
                    {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-24">
            <div className="inline-block w-16 h-16 border-4 border-teal-400/30 border-t-coral-400 rounded-full animate-spin"></div>
            <p className="mt-4 text-teal-100/60">Loading events...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-24">
            <Calendar className="w-16 h-16 text-teal-400/40 mx-auto mb-4" />
            <p className="text-xl text-teal-100/60">No events match your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, DollarSign, ArrowLeft, ExternalLink, Heart } from 'lucide-react';
import { supabase, Event } from '../lib/supabase';

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchEvent = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (!error && data) {
        setEvent(data);
      }
      setLoading(false);
    };

    fetchEvent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-teal-400/30 border-t-coral-400 rounded-full animate-spin"></div>
          <p className="mt-4 text-teal-100/60">Loading event details...</p>
        </div>
      </div>
    );
  }

    if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-teal-100/60 mb-6">Event not found</p>
          <Link
            to="/calendar"
            className="inline-flex items-center space-x-2 text-coral-400 hover:text-coral-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Calendar</span>
          </Link>
        </div>
      </div>
    );
  }


  const formatDate = (date: string | null) => {
    if (!date) return 'Date TBA';
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time: string | null) => {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

    const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'intermediate':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'advanced':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default:
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/calendar"
          className="inline-flex items-center space-x-2 text-teal-300 hover:text-coral-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Calendar</span>
        </Link>

        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl overflow-hidden border border-teal-500/20 shadow-2xl">
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-teal-900/30 via-slate-800/50 to-coral-900/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coral-500/30 via-transparent to-teal-500/30"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(event.level)}`}>
                  {event.level}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-800/80 text-teal-300 border border-teal-500/30 backdrop-blur-sm">
                  {event.event_type}
                </span>
                {event.is_recurring && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
                    Every {event.recurrence_pattern}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {event.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-4">
                {event.date && (
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral-500/20 to-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-coral-400" />
                    </div>
                    <div>
                      <div className="text-sm text-teal-100/60 mb-1">Date</div>
                      <div className="text-lg text-teal-100 font-medium">{formatDate(event.date)}</div>
                    </div>
                  </div>
                )}

                {event.start_time && (
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-sm text-teal-100/60 mb-1">Time</div>
                      <div className="text-lg text-teal-100 font-medium">
                        {formatTime(event.start_time)}
                        {event.end_time && ` - ${formatTime(event.end_time)}`}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-teal-100/60 mb-1">Location</div>
                    <div className="text-lg text-teal-100 font-medium">{event.location}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-teal-100/60 mb-1">Price</div>
                    <div className="text-lg text-amber-300 font-bold">{event.price}</div>
                  </div>
                </div>
              </div>
            </div>

                        <div className="border-t border-teal-500/20 pt-8">
              <h2 className="text-2xl font-bold text-coral-300 mb-4">About This Event</h2>
              <p className="text-teal-100/80 text-lg leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>

            {event.external_link && (
              <div className="mt-8 pt-8 border-t border-teal-500/20">
                <a
                  href={event.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-coral-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-coral-500/50 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Full Event Details</span>
                </a>
              </div>
            )}

            <div className="mt-12 p-6 bg-gradient-to-br from-teal-900/20 to-slate-800/20 rounded-2xl border border-teal-500/20">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-coral-400 fill-coral-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-coral-300 mb-2">Support Our Community</h3>
                  <p className="text-teal-100/70 mb-4">
                    Help us continue nurturing Austin's movement arts community. Your support makes events like this possible.
                  </p>
                  <Link
                    to="/donate"
                    className="inline-flex items-center space-x-2 text-amber-300 hover:text-amber-200 font-medium transition-colors"
                  >
                    <span>Learn More About Supporting Us</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

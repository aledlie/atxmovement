import { Calendar, Clock, MapPin, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../lib/supabase';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (date: string | null) => {
    if (!date) return 'TBA';
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
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
    <Link
      to={`/event/${event.slug}`}
      className="group block bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl overflow-hidden border border-teal-500/20 hover:border-coral-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-coral-500/10 hover:scale-[1.02]"
    >
      <div className="relative h-48 bg-gradient-to-br from-teal-900/30 via-slate-800/50 to-coral-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coral-500/20 via-transparent to-teal-500/20 animate-pulse"></div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-coral-300 transition-colors">
            {event.title}
          </h3>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(event.level)}`}>
              {event.level}
            </span>
            {event.is_recurring && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {event.recurrence_pattern}s
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <p className="text-teal-100/70 text-sm line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-2 pt-2">
          {event.date && (
            <div className="flex items-center space-x-2 text-sm text-teal-100/80">
              <Calendar className="w-4 h-4 text-coral-400" />
              <span>{formatDate(event.date)}</span>
            </div>
          )}

          {event.start_time && (
            <div className="flex items-center space-x-2 text-sm text-teal-100/80">
              <Clock className="w-4 h-4 text-coral-400" />
              <span>
                {formatTime(event.start_time)}
                {event.end_time && ` - ${formatTime(event.end_time)}`}
              </span>
            </div>
          )}

          <div className="flex items-center space-x-2 text-sm text-teal-100/80">
            <MapPin className="w-4 h-4 text-coral-400" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm font-medium text-amber-300">
            <DollarSign className="w-4 h-4" />
            <span>{event.price}</span>
          </div>
        </div>

        <div className="pt-4 flex items-center text-coral-300 text-sm font-medium group-hover:translate-x-2 transition-transform">
          <span>Learn More</span>
          <TrendingUp className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
}

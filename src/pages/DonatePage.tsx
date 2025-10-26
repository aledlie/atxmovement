import { Heart, Sparkles, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-coral-500/20 to-amber-500/20 mb-6">
            <Heart className="w-10 h-10 text-coral-400 fill-coral-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-coral-300 via-amber-300 to-teal-300 bg-clip-text text-transparent">
              Support Our Mission
            </span>
          </h1>
          <p className="text-xl text-teal-100/70 max-w-3xl mx-auto leading-relaxed">
            Help us nurture Austin's movement arts community and create spaces where passion, unity, and artistry can flourish
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 md:p-12 border border-teal-500/20 shadow-2xl mb-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-coral-300 mb-4">Our Vision</h2>
            <p className="text-teal-100/80 text-lg leading-relaxed mb-6">
              Austin Movement Alliance was founded to support movement-based events and artists in Austin, Texas.
              We believe that art runs through the collective soul—its roots cannot be pulled out. We're committed
              to creating spaces where artists and dancers can throw themselves into passion projects with wild abandon.
            </p>
            <div className="bg-gradient-to-br from-teal-900/20 to-slate-800/20 rounded-2xl p-6 border border-teal-500/20">
              <p className="text-teal-100/80 italic text-lg leading-relaxed">
                "The way I see it, one of the artists main roles is to make the world a little bit more beautiful,
                by creeping into derelict systems like vines and daring to blossom there."
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-300 mb-6">How Your Support Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-teal-500/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral-500/20 to-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-coral-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-coral-300 mb-2">Community Events</h3>
                  <p className="text-teal-100/70">
                    Free and accessible classes, socials, and gatherings that bring dancers together
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-teal-500/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-300 mb-2">Artist Support</h3>
                  <p className="text-teal-100/70">
                    Resources and opportunities for local movement artists and instructors
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-teal-500/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-400 fill-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Venue Access</h3>
                  <p className="text-teal-100/70">

                                      Securing beautiful spaces where our community can dance and connect
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-teal-500/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-300 mb-2">Special Events</h3>
                  <p className="text-teal-100/70">
                    Unique experiences and festivals that celebrate movement and creativity
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-500/20 pt-12">
            <h2 className="text-3xl font-bold text-teal-300 mb-6 text-center">Ways to Contribute</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gradient-to-br from-coral-900/20 to-slate-800/20 rounded-2xl p-8 border border-coral-500/20">
                <h3 className="text-2xl font-bold text-coral-300 mb-4">One-Time Donation</h3>
                <p className="text-teal-100/70 mb-6 leading-relaxed">
                  Make a one-time contribution to support our upcoming events and initiatives. Every donation,
                  no matter the size, helps us nurture the vibrancy of Austin's movement community.
                </p>

                <div className="text-teal-100/60 text-sm">
                  Donation portal coming soon. For immediate contributions, please contact us at{' '}
                  <a href="mailto:hello@atxmovement.com" className="text-coral-400 hover:text-coral-300 underline">
                    hello@atxmovement.com
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-900/20 to-slate-800/20 rounded-2xl p-8 border border-teal-500/20">
                <h3 className="text-2xl font-bold text-teal-300 mb-4">Monthly Support</h3>
                <p className="text-teal-100/70 mb-6 leading-relaxed">
                  Become a sustaining supporter and help us plan for the future. Monthly contributions provide
                  stable funding for our regular classes, weekly socials, and community-building efforts.
                </p>
                <div className="text-teal-100/60 text-sm">
                  Monthly giving program details coming soon. Interested in becoming a sustaining supporter?
                  Email us at{' '}
                  <a href="mailto:hello@atxmovement.com" className="text-teal-400 hover:text-teal-300 underline">
                    hello@atxmovement.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/20 to-slate-800/20 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Other Ways to Support</h3>
              <ul className="space-y-3 text-teal-100/70">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Attend our events and bring friends to grow our community</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Volunteer at events to help with setup, coordination, or hospitality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Share our events on social media and help spread the word</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Connect us with venues, sponsors, or collaborators</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Offer your skills in areas like photography, marketing, or event production</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-teal-100/60 mb-6">
            Questions about supporting Austin Movement Alliance?
          </p>
          <a
            href="mailto:hello@atxmovement.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-coral-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-coral-500/50 transition-all hover:scale-105"
          >
            <Heart className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
          <div className="mt-8">
            <Link
              to="/"
              className="text-teal-300 hover:text-coral-300 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
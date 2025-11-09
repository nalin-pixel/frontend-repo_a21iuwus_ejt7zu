import React from 'react';
import { Search, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.15),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Find your stay, <span className="text-blue-600">stress-free</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Brokerage-free PGs near VIT Chennai. Verified listings, student reviews, and direct owner contacts.
            </p>

            <div className="mt-8 bg-white/80 backdrop-blur rounded-xl border border-slate-200 p-4 shadow-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onExplore?.();
                }}
                className="grid md:grid-cols-4 gap-3"
              >
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-slate-600">Location</label>
                  <input
                    type="text"
                    placeholder="Near VIT Gate, Kelambakkam, OMR..."
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">Rent Range</label>
                  <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>₹5k - ₹7k</option>
                    <option>₹7k - ₹10k</option>
                    <option>₹10k - ₹15k</option>
                    <option>₹15k+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Search PGs
                  </button>
                </div>
              </form>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                All listings are verified by our team
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={onExplore} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#list" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                List Your PG
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
              alt="PG Rooms near VIT"
              className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-lg border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

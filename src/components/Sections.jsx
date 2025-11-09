import React from 'react';
import { Filter, Wifi, GaugeCircle, Soup, BadgeCheck, Phone, MapPin, ShieldCheck, Stars } from 'lucide-react';

export function Steps() {
  const steps = [
    { title: 'Search', desc: 'Use filters for rent, distance, and amenities to narrow your options.' },
    { title: 'Compare', desc: 'Browse verified photos, ratings and distance from VIT at a glance.' },
    { title: 'Contact Owner', desc: 'Reach out directly. No brokers, no extra fees.' },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinderSection() {
  return (
    <section id="find" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <aside className="lg:col-span-1 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-slate-800 font-medium mb-3"><Filter className="w-4 h-4" /> Filters</div>
              <label className="text-xs text-slate-600">Rent (₹)</label>
              <input type="range" min="5000" max="15000" className="w-full" />

              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> <Wifi className="w-4 h-4" /> Wi‑Fi</label>
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> <Soup className="w-4 h-4" /> Food</label>
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> <GaugeCircle className="w-4 h-4" /> AC</label>
              </div>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <div className="text-sm text-blue-800">Boost your listing</div>
              <div className="font-semibold text-blue-900">Top PG near VIT – ₹499</div>
              <p className="text-xs text-blue-900/70 mt-1">Get more views with a highlighted card.</p>
            </div>
          </aside>

          <div className="lg:col-span-2 space-y-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="grid sm:grid-cols-3 gap-4">
                  <img src={`https://images.unsplash.com/photo-15${i}6953416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop`} alt="PG" className="w-full h-36 object-cover rounded-lg sm:col-span-1" />
                  <div className="sm:col-span-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Cozy PG #{i}</h3>
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs"><BadgeCheck className="w-3.5 h-3.5" /> Verified</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-600 flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> 1.{i} km from VIT</div>
                    <div className="mt-2 font-semibold text-slate-900">₹{7000 + i * 500}/month</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                      <span className="px-2 py-1 rounded-full bg-slate-100">Wi‑Fi</span>
                      <span className="px-2 py-1 rounded-full bg-slate-100">Food</span>
                      <span className="px-2 py-1 rounded-full bg-slate-100">AC</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 overflow-hidden">
          <div className="aspect-[16/7] w-full">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.898818442772!2d80.22890897507722!3d12.913414887394627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c8dc0c0b1e5%3A0x3e3f0f3f6e9b8a1!2sVIT%20Chennai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ListYourPG() {
  return (
    <section id="list" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">List Your PG</h3>
          <p className="mt-1 text-sm text-slate-600">Add details, photos, rent and amenities. We verify all submissions.</p>

          <form className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-600">Property Name</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Blue Nest Residency" />
              </div>
              <div>
                <label className="text-xs text-slate-600">Monthly Rent (₹)</label>
                <input type="number" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="9000" />
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-600">Location</label>
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Near VIT Gate, Kelambakkam" />
            </div>
            <div>
              <label className="text-xs text-slate-600">Amenities</label>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> Wi‑Fi</label>
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> Food</label>
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> AC</label>
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> Laundry</label>
                <label className="inline-flex items-center gap-2"><input type="checkbox" /> Housekeeping</label>
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-600">Photos</label>
              <input type="file" multiple className="mt-1 w-full text-sm" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" /> Highlight as Top PG (₹499)</label>
              <button type="button" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">Submit Listing</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function AboutContact() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">About Us</h3>
          <p className="mt-2 text-slate-600 text-sm leading-6">
            We are a student-first platform helping VIT Chennai students discover clean, safe and affordable PGs near campus. All listings are verified and reviewed by students like you.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Listings</li>
            <li className="flex items-center gap-2"><Stars className="w-4 h-4 text-amber-500" /> Student Reviews</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Distance from VIT</li>
          </ul>
        </div>
        <div id="contact" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-slate-900">Contact Us</h4>
          <p className="mt-1 text-sm text-slate-600">Email us or reach out on social.</p>
          <form className="mt-4 grid gap-3">
            <input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Your name" />
            <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Email" />
            <textarea className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" rows="4" placeholder="Message" />
            <button type="button" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"><Phone className="w-4 h-4" /> Send</button>
          </form>
          <div className="mt-4 text-sm text-slate-600">
            <a className="text-blue-600 hover:underline" href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp</a> ·
            <a className="text-blue-600 hover:underline ml-1" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> ·
            <a className="text-blue-600 hover:underline ml-1" href="mailto:support@studentpgfinder.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Star, MapPin } from 'lucide-react';

const sampleListings = [
  {
    id: 'pg1',
    name: 'Blue Nest Residency',
    rent: 8500,
    distanceKm: 1.2,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1600585154340-1e16fa6c41c6?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'pg2',
    name: 'Kelambakkam Comfort PG',
    rent: 7000,
    distanceKm: 2.0,
    rating: 4.3,
    img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'pg3',
    name: 'VIT View Homes',
    rent: 11000,
    distanceKm: 0.8,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop',
  },
];

function Card({ item }) {
  return (
    <a href={`#pg-${item.id}`} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-44">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        <div className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded-md flex items-center gap-1 shadow">
          <MapPin className="w-3.5 h-3.5 text-blue-600" />
          {item.distanceKm} km from VIT
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-slate-900">{item.name}</h3>
          <div className="flex items-center gap-1 text-amber-500 text-sm">
            <Star className="w-4 h-4 fill-current" /> {item.rating}
          </div>
        </div>
        <div className="mt-2 text-sm text-slate-600">₹{item.rent.toLocaleString()}/month</div>
      </div>
    </a>
  );
}

export default function FeaturedCarousel() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Featured PGs near VIT</h2>
          <a href="#find" className="text-sm text-blue-600 hover:underline">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleListings.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

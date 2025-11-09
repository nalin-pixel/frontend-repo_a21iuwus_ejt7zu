import React from 'react';
import { Home, MapPin, PlusCircle, Info, Phone } from 'lucide-react';

const NavItem = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">PG</div>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">Student PG Finder</div>
              <div className="text-xs text-slate-500">VIT Chennai</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavItem icon={Home} label="Home" href="#home" />
            <NavItem icon={MapPin} label="Find PGs" href="#find" />
            <NavItem icon={PlusCircle} label="List Your PG" href="#list" />
            <NavItem icon={Info} label="About" href="#about" />
            <NavItem icon={Phone} label="Contact" href="#contact" />
          </nav>

          <div className="flex items-center gap-2">
            <a href="#list" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              <PlusCircle className="w-4 h-4" />
              List Your PG
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

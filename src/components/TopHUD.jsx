import React, { useEffect, useState } from 'react';
import { Battery, Cpu, Wifi, Mic, Clock } from 'lucide-react';

const NeonPill = ({ children }) => (
  <div className="px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.35)] text-cyan-100/90 text-xs tracking-wider backdrop-blur-md">
    {children}
  </div>
);

export default function TopHUD({ micActive }) {
  const [time, setTime] = useState(new Date());
  const [battery, setBattery] = useState(null);
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (navigator.getBattery) {
      navigator.getBattery().then((b) => {
        const update = () => setBattery({ level: Math.round(b.level * 100), charging: b.charging });
        update();
        b.addEventListener('levelchange', update);
        b.addEventListener('chargingchange', update);
      }).catch(() => setBattery(null));
    }
    return () => {
      clearInterval(t);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-3">
        <div className="text-cyan-300/90 font-semibold tracking-[0.2em] uppercase text-sm drop-shadow-[0_0_12px_rgba(0,255,255,0.45)]">SARAH AI CONSOLE</div>
        <div className="h-px w-16 bg-gradient-to-r from-cyan-400/60 to-blue-500/60" />
        <NeonPill>
          <div className="flex items-center gap-1.5"><Clock size={14} /><span>{time.toLocaleTimeString()}</span></div>
        </NeonPill>
      </div>
      <div className="flex items-center gap-2">
        <NeonPill>
          <div className="flex items-center gap-1.5"><Wifi size={14} />{online ? 'Online' : 'Offline'}</div>
        </NeonPill>
        <NeonPill>
          <div className="flex items-center gap-1.5"><Cpu size={14} />CPU: <span className="text-cyan-300">Active</span></div>
        </NeonPill>
        <NeonPill>
          <div className="flex items-center gap-1.5"><Battery size={14} />{battery ? `${battery.level}%${battery.charging ? ' ⚡' : ''}` : 'Battery'}</div>
        </NeonPill>
        <NeonPill>
          <div className={`flex items-center gap-1.5 ${micActive ? 'text-cyan-300' : ''}`}><Mic size={14} />{micActive ? 'Mic: Live' : 'Mic: Idle'}</div>
        </NeonPill>
      </div>
    </div>
  );
}

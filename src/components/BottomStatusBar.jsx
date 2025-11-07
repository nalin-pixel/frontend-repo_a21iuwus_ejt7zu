import React from 'react';

const ModeDot = ({ active, color = 'bg-cyan-400' }) => (
  <span className={`inline-block w-2 h-2 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)] ${active ? color : 'bg-white/20'}`} />
);

export default function BottomStatusBar({ mode = 'Idle' }) {
  const modes = ['Listening', 'Processing', 'Executing'];
  return (
    <div className="w-full px-6 py-3 flex items-center justify-between">
      <div className="text-xs uppercase tracking-[0.35em] text-cyan-200/80 drop-shadow-[0_0_12px_rgba(0,255,255,0.45)]">System Status</div>
      <div className="flex items-center gap-6">
        {modes.map((m) => (
          <div key={m} className={`flex items-center gap-2 text-sm ${mode === m ? 'text-cyan-300' : 'text-cyan-100/60'}`}>
            <ModeDot active={mode === m} />
            <span>{m}</span>
          </div>
        ))}
      </div>
      <div className="text-cyan-300/80 text-xs">v1.0 • SARAH Core</div>
    </div>
  );
}

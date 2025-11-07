import React from 'react';

function Panel({ title, children }) {
  return (
    <div className="relative rounded-xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.15)]">
      <div className="px-4 py-3 border-b border-cyan-400/20 text-cyan-200/90 tracking-wider uppercase text-xs flex items-center justify-between">
        <span>{title}</span>
        <span className="text-[10px] text-cyan-300/70">LIVE</span>
      </div>
      <div className="p-4 space-y-2 max-h-[40vh] overflow-auto custom-scroll">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyan-300/10 shadow-[inset_0_0_25px_rgba(0,255,255,0.06)]" />
    </div>
  );
}

export default function ConsolePanels({ logs = [], responses = [] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <Panel title="User Command Logs">
        {logs.length === 0 ? (
          <div className="text-cyan-100/50 text-sm">Waiting for commands…</div>
        ) : (
          logs.map((l, idx) => (
            <div key={idx} className="text-cyan-100/90 text-sm flex items-start gap-2">
              <span className="text-cyan-400">›</span>
              <span className="drop-shadow-[0_0_8px_rgba(0,153,255,0.55)]">{l}</span>
            </div>
          ))
        )}
      </Panel>
      <Panel title="AI Responses">
        {responses.length === 0 ? (
          <div className="text-cyan-100/50 text-sm">Awaiting response…</div>
        ) : (
          responses.map((r, idx) => (
            <div key={idx} className="text-cyan-50 text-sm flex items-start gap-2">
              <span className="text-cyan-400">●</span>
              <span className="drop-shadow-[0_0_10px_rgba(0,255,255,0.65)]">{r}</span>
            </div>
          ))
        )}
      </Panel>
    </div>
  );
}

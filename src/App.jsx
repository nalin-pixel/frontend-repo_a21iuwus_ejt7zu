import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TopHUD from './components/TopHUD';
import BottomStatusBar from './components/BottomStatusBar';
import ConsolePanels from './components/ConsolePanels';
import VoiceHub from './components/VoiceHub';

export default function App() {
  const [micActive, setMicActive] = useState(false);
  const [mode, setMode] = useState('Listening');
  const [logs, setLogs] = useState([]);
  const [responses, setResponses] = useState([]);

  const backgroundStyle = useMemo(() => ({
    background: 'radial-gradient(1200px 800px at 50% 10%, rgba(0,153,255,0.12), rgba(0,0,0,0)), linear-gradient(180deg, #0b0e15 0%, #08101a 100%)'
  }), []);

  useEffect(() => {
    let t;
    if (micActive) {
      setMode('Listening');
    } else {
      setMode('Idle');
    }
    return () => clearTimeout(t);
  }, [micActive]);

  const onToggle = useCallback(() => setMicActive((s) => !s), []);

  const mockBackendCall = useCallback(async (last) => {
    setMode('Processing');
    await new Promise(r => setTimeout(r, 900));
    const reply = `Acknowledged: ${last.toLowerCase().replace(/^[a-z]/, c => c.toUpperCase())}`;
    setResponses((r) => [reply, ...r].slice(0, 50));
    setMode('Listening');
  }, []);

  const onSpoke = useCallback(() => {
    // Simulated recognized phrase for demo. In real case, hook to backend.
    const examples = ['Open Chrome', 'Play synthwave', 'Show system status', 'Set a reminder at 5 PM'];
    const phrase = examples[Math.floor(Math.random() * examples.length)];
    setLogs((l) => [phrase, ...l].slice(0, 50));
    mockBackendCall(phrase);
  }, [mockBackendCall]);

  return (
    <div className="min-h-screen w-full text-white" style={backgroundStyle}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-500/10 to-transparent" />
      </div>

      <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
        <TopHUD micActive={micActive} />

        <main className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-8 px-6 py-6">
          <div className="order-2 xl:order-1 xl:col-span-1">
            <ConsolePanels logs={logs} responses={[]} />
          </div>
          <div className="order-1 xl:order-2 xl:col-span-1 flex items-center justify-center relative">
            <VoiceHub active={micActive} onToggle={onToggle} onSpoke={onSpoke} />
          </div>
          <div className="order-3 xl:order-3 xl:col-span-1">
            <ConsolePanels logs={[]} responses={responses} />
          </div>
        </main>

        <footer>
          <BottomStatusBar mode={mode} />
        </footer>
      </div>
    </div>
  );
}

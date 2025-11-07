import React, { useEffect, useRef, useState } from 'react';
import { Mic } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function VoiceHub({ active, onToggle, onSpoke }) {
  const [level, setLevel] = useState(0);
  const controls = useAnimation();
  const audioRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(rafRef.current);
      setLevel(0);
      if (audioRef.current) {
        const { stream, ctx } = audioRef.current;
        stream.getTracks().forEach(t => t.stop());
        ctx.close();
        audioRef.current = null;
        analyserRef.current = null;
      }
      return;
    }

    async function init() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 512;
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyserRef.current = { analyser, dataArray };
        audioRef.current = { stream, ctx };

        const sample = () => {
          analyser.getByteTimeDomainData(dataArray);
          // Compute rough RMS / amplitude for visualization
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            const v = (dataArray[i] - 128) / 128;
            sum += v * v;
          }
          const rms = Math.sqrt(sum / dataArray.length);
          const lvl = Math.min(1, rms * 4);
          setLevel(lvl);
          if (lvl > 0.09 && onSpoke) onSpoke();
          rafRef.current = requestAnimationFrame(sample);
        };
        sample();
      } catch (e) {
        console.error('Mic access error', e);
      }
    }

    init();
  }, [active, onSpoke]);

  useEffect(() => {
    controls.start({
      scale: active ? 1.06 : 1,
      transition: { type: 'spring', stiffness: 120, damping: 10 }
    });
  }, [active, controls]);

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Holographic Spline aura */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradient overlays that do not block pointer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 opacity-60 blur-3xl bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),rgba(0,0,0,0)_55%)]" />
      </div>

      {/* Central mic hub */}
      <motion.button
        onClick={onToggle}
        animate={controls}
        className="relative z-10 h-56 w-56 rounded-full flex items-center justify-center border border-cyan-400/40 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.35),inset_0_0_40px_rgba(0,255,255,0.12)] hover:shadow-[0_0_70px_rgba(0,255,255,0.6),inset_0_0_40px_rgba(0,255,255,0.2)] transition-shadow">
        <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(from_0deg,rgba(0,255,255,0.15),transparent_30%,rgba(0,153,255,0.25)_60%,transparent_85%,rgba(0,255,255,0.15))]" />
        <div className="absolute inset-3 rounded-full border border-cyan-300/30" />
        <div className="absolute inset-6 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-10 rounded-full border border-cyan-300/10" />
        <Mic size={48} className={`drop-shadow-[0_0_20px_rgba(0,255,255,0.75)] ${active ? 'text-cyan-300' : 'text-cyan-200/80'}`} />

        {/* Reactive rings */}
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border border-cyan-300/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: level > 0.05 ? 0.6 : 0.2, scale: 1 + level * (0.6 + i * 0.15) }}
            transition={{ type: 'tween', duration: 0.15 }}
            style={{ inset: `${14 + i * 18}px` }}
          />
        ))}

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(18)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-300/80 shadow-[0_0_8px_rgba(0,255,255,0.9)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? Math.max(0.2, level) : 0.1, x: Math.sin(i) * 60 * (1 + level), y: Math.cos(i) * 60 * (1 + level) }}
              transition={{ duration: 0.2 }}
              style={{ top: '50%', left: '50%' }}
            />
          ))}
        </div>

        {/* Waveform visualization arcs */}
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          {[...Array(24)].map((_, i) => {
            const amp = level * 8;
            const len = 40 + (i % 6) * 2 + amp * 2;
            const angle = (i / 24) * Math.PI * 2;
            const x1 = 50 + Math.cos(angle) * 28;
            const y1 = 50 + Math.sin(angle) * 28;
            const x2 = 50 + Math.cos(angle) * (28 + len / 10);
            const y2 = 50 + Math.sin(angle) * (28 + len / 10);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`rgba(0,255,255,${0.15 + level * 0.6})`} strokeWidth={0.4} />
            );
          })}
        </svg>
      </motion.button>

      {/* Activate button */}
      <button
        onClick={onToggle}
        className="z-10 mt-6 absolute top-[calc(50%+180px)] px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-100 hover:bg-cyan-500/30 shadow-[0_0_20px_rgba(0,255,255,0.45)] backdrop-blur-md transition-transform hover:scale-[1.02]"
      >
        {active ? 'Deactivate Voice Mode' : 'Activate Voice Mode'}
      </button>
    </div>
  );
}

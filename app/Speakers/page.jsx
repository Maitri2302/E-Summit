"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const speakers = [
  {
    name: "Dr. Binod Kumar Dubey",
    badge: "Guest of Honour",
    role: "ISDS Director, MSDE, DGoT",
    image: "/team/bkdubey.webp",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "Mr. Siddharth Rai",
    badge: "Guest of Honour",
    role: "Additional Director, STPI Ranchi-Deoghar",
    image: "/team/sidrai.webp",
    color: "from-indigo-600 via-purple-500 to-blue-500",
  },
  {
    name: "Mr. Sumit Kumar",
    badge: "Speaker",
    role: "Chairman, JEA | Founder & CEO, Visapen",
    image: "/team/sumit.webp",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "Mr. Ravi Ranjan Singh",
    badge: "Speaker",
    role: "President, Jharkhand Entrepreneurs Association",
    image: "/team/raviranjan.webp",
    color: "from-fuchsia-600 via-purple-500 to-blue-500",
  },
  {
    name: "Mr. Abhik Chatterjee",
    badge: "Speaker",
    role: "Hub Director, WiN COE IIT ISM Dhanbad",
    image: "/team/abhik.webp",
    color: "from-purple-600 via-blue-500 to-fuchsia-500",
  },
];

/* ================= CARD ================= */

const SpeakerCard = ({ speaker }) => {
  const cardRef = useRef(null);
  const isHonour = speaker.badge === "Guest of Honour";

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale(1.04)`;
    };
    const handleLeave = () => {
      el.style.transform =
        "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
    };
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transition: "transform 0.15s ease-out" }}
      className="relative w-full h-auto rounded-3xl overflow-hidden
        bg-gradient-to-br from-[#09000f] to-[#040008]
        border border-purple-500/20
        shadow-[0_0_40px_rgba(168,85,247,0.15)]
        flex flex-col items-center text-center p-6
        group cursor-pointer"
    >
      {/* Bottom glow */}
      <div
        className={`absolute bottom-0 left-0 w-full h-24
          bg-gradient-to-t ${speaker.color}
          blur-2xl opacity-30 group-hover:opacity-55 transition-opacity duration-500`}
      />

      {/* Top edge shimmer */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent z-20" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-purple-500/40 rounded-tl-3xl z-20" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500/40 rounded-br-3xl z-20" />

      {/* Square Photo — bigger, portrait proportion */}
      <div className="relative z-10 w-48 h-56 mb-4 rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_24px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_36px_rgba(168,85,247,0.45)] transition-shadow duration-500">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Badge — between photo and name */}
      <div
        className={`z-10 mb-4 px-4 py-[3px] rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border
          ${
            isHonour
              ? "bg-purple-500/10 border-purple-400/40 text-purple-300"
              : "bg-blue-500/10 border-blue-400/40 text-blue-300"
          }`}
      >
        {speaker.badge}
      </div>

      {/* Name */}
      <h3 className="z-10 text-lg font-semibold text-white leading-snug group-hover:text-purple-300 transition-colors duration-300 mb-3">
        {speaker.name}
      </h3>

      {/* Divider */}
      <div className="z-10 w-10 h-px bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 mb-3 opacity-70" />

      {/* Role */}
      <p className="z-10 text-gray-400 text-sm leading-relaxed">
        {speaker.role}
      </p>
    </div>
  );
};

/* ================= MAIN PAGE ================= */

const Speakers = () => {
  const topRow = speakers.slice(0, 3);
  const bottomRow = speakers.slice(3, 5);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .s-fade { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; opacity: 0; }

        @keyframes waveBar {
          0%, 100% { transform: scaleY(0.4); }
          50%       { transform: scaleY(1); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50%       { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .wave-bar { animation: waveBar 1.2s ease-in-out infinite; transform-origin: bottom; }
        .float-dot { animation: floatDot 3s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen bg-[#02000a] text-white">

        {/* ── Hero Section ── */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-20">

          {/* ── SVG Speaker-themed background ── */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="55%" r="45%">
                <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.09" />
                <stop offset="100%" stopColor="#02000a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="leftGlow" cx="10%" cy="80%" r="35%">
                <stop offset="0%"   stopColor="#9333ea" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#02000a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rightGlow" cx="90%" cy="20%" r="35%">
                <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#02000a" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background glow fills */}
            <rect width="1440" height="600" fill="url(#centerGlow)" />
            <rect width="1440" height="600" fill="url(#leftGlow)" />
            <rect width="1440" height="600" fill="url(#rightGlow)" />

            {/* ── MICROPHONE — left side ── */}
            <g transform="translate(180, 110)" opacity="0.09">
              {/* mic body */}
              <rect x="22" y="0" width="36" height="70" rx="18" fill="none" stroke="#a855f7" strokeWidth="2.5"/>
              {/* mic stand neck */}
              <line x1="40" y1="70" x2="40" y2="105" stroke="#a855f7" strokeWidth="2.5"/>
              {/* mic base arc */}
              <path d="M20 90 Q40 115 60 90" fill="none" stroke="#a855f7" strokeWidth="2.5"/>
              {/* grille lines */}
              <line x1="27" y1="22" x2="53" y2="22" stroke="#a855f7" strokeWidth="1.2" opacity="0.7"/>
              <line x1="27" y1="32" x2="53" y2="32" stroke="#a855f7" strokeWidth="1.2" opacity="0.7"/>
              <line x1="27" y1="42" x2="53" y2="42" stroke="#a855f7" strokeWidth="1.2" opacity="0.7"/>
              {/* Pulse rings */}
              <circle cx="40" cy="35" r="28" fill="none" stroke="#a855f7" strokeWidth="1"
                style={{ animation: "pulseRing 2.5s ease-out infinite" }} />
              <circle cx="40" cy="35" r="28" fill="none" stroke="#a855f7" strokeWidth="1"
                style={{ animation: "pulseRing 2.5s ease-out infinite", animationDelay: "1.2s" }} />
            </g>

            {/* ── PODIUM / LECTERN — center-left ── */}
            <g transform="translate(310, 310)" opacity="0.07">
              <polygon points="0,120 20,0 100,0 120,120" fill="none" stroke="#7c3aed" strokeWidth="2"/>
              <rect x="0" y="0" width="120" height="18" rx="3" fill="none" stroke="#7c3aed" strokeWidth="2"/>
              {/* mic on podium */}
              <line x1="60" y1="0" x2="60" y2="-24" stroke="#7c3aed" strokeWidth="2"/>
              <circle cx="60" cy="-30" r="8" fill="none" stroke="#7c3aed" strokeWidth="2"/>
            </g>

            {/* ── SOUND WAVE BARS — right side ── */}
            <g transform="translate(1140, 200)">
              {[0,1,2,3,4,5,6,7].map((i) => (
                <rect
                  key={i}
                  x={i * 22}
                  y={0}
                  width="12"
                  height={[40, 70, 55, 90, 65, 80, 45, 60][i]}
                  rx="6"
                  fill="#7c3aed"
                  opacity="0.12"
                  className="wave-bar"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </g>

            {/* ── SPEECH BUBBLE — top right ── */}
            <g transform="translate(1050, 60)" opacity="0.07">
              <rect x="0" y="0" width="130" height="60" rx="14" fill="none" stroke="#a855f7" strokeWidth="2"/>
              <polygon points="20,60 10,80 40,60" fill="none" stroke="#a855f7" strokeWidth="2"/>
              <line x1="16" y1="22" x2="114" y2="22" stroke="#a855f7" strokeWidth="2" opacity="0.8"/>
              <line x1="16" y1="38" x2="90"  y2="38" stroke="#a855f7" strokeWidth="2" opacity="0.6"/>
            </g>

            {/* ── SPOTLIGHT CONES — top ── */}
            <g opacity="0.04">
              <polygon points="360,0 300,300 420,300" fill="url(#centerGlow)" stroke="#a855f7" strokeWidth="1"/>
              <polygon points="720,0 640,300 800,300" fill="url(#centerGlow)" stroke="#a855f7" strokeWidth="1"/>
              <polygon points="1080,0 1000,300 1160,300" fill="url(#centerGlow)" stroke="#a855f7" strokeWidth="1"/>
            </g>

            {/* ── FLOATING DOTS — scattered ── */}
            {[
              [130,80],[400,480],[680,60],[900,500],[1200,150],[1350,420],[250,320],[1050,340],
            ].map(([cx,cy],i) => (
              <circle
                key={i} cx={cx} cy={cy} r="3"
                fill="#a855f7" opacity="0.18"
                className="float-dot"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}

            {/* ── CONNECTING GRID LINES — subtle ── */}
            {[100,200,300,400,500].map((y,i) => (
              <line key={i} x1="0" y1={y} x2="1440" y2={y}
                stroke="#7c3aed" strokeWidth="0.4" opacity="0.07" strokeDasharray="6 18"/>
            ))}
            {[180,360,540,720,900,1080,1260].map((x,i) => (
              <line key={i} x1={x} y1="0" x2={x} y2="600"
                stroke="#7c3aed" strokeWidth="0.4" opacity="0.06" strokeDasharray="6 18"/>
            ))}

            {/* ── QUOTE MARKS — left decorative ── */}
            <text x="60" y="300" fontSize="160" fill="#7c3aed" opacity="0.03"
              fontFamily="Georgia, serif" fontWeight="bold">"</text>
            <text x="1300" y="420" fontSize="160" fill="#7c3aed" opacity="0.03"
              fontFamily="Georgia, serif" fontWeight="bold">"</text>
          </svg>

          {/* Fade-to-page gradient — stronger top + bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02000a] via-[#02000a]/30 to-[#02000a]/60" />

          {/* Ambient glows */}
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Heading */}
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-24 s-fade">
            {/* <p className="text-xs font-semibold tracking-[0.35em] uppercase text-purple-400/70 mb-3">
              E — Summit '26
            </p> */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
              OUR <span style={{ color: "#a855f7" }}>SPEAKERS</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base">
              Meet the visionaries shaping the future of entrepreneurship.
            </p>

            {/* Decorative dots row */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" style={{ boxShadow: "0 0 8px #a855f7" }} />
              <div className="w-2 h-2 rounded-full bg-fuchsia-400" style={{ boxShadow: "0 0 10px #e879f9" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" style={{ boxShadow: "0 0 8px #60a5fa" }} />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-500/50" />
            </div>
          </div>
        </section>

        {/* ── Cards Grid ── */}
        <div className="relative max-w-6xl pb-20 mx-auto px-8">

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {topRow.map((speaker, i) => (
              <div
                key={i}
                className="s-fade"
                style={{ animationDelay: `${150 + i * 100}ms` }}
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="flex justify-center gap-8 flex-wrap">
            {bottomRow.map((speaker, i) => (
              <div
                key={i}
                className="s-fade"
                style={{
                  animationDelay: `${450 + i * 100}ms`,
                  width: "calc(33.333% - 16px)",
                  minWidth: "260px",
                }}
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;

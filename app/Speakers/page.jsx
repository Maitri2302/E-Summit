"use client";
import React, { useEffect, useRef } from "react";

const speakers = [
  {
    name: "Dr. Binod Kumar Dubey",
    badge: "Guest of Honour",
    role: "ISDS Director, MSDE, DGoT",
    image: "/team/bkdubey.webp",
  },
  {
    name: "Mr. Siddharth Rai",
    badge: "Guest of Honour",
    role: "Additional Director, STPI Ranchi-Deoghar",
    image: "/team/sidrai.webp",
  },
  {
    name: "Mr. Sumit Kumar",
    badge: "Speaker",
    role: "Chairman, JEA | Founder & CEO, Visapen",
    image: "/team/sumit.webp",
  },
  {
    name: "Mr. Ravi Ranjan Singh",
    badge: "Speaker",
    role: "President, Jharkhand Entrepreneurs Association",
    image: "/team/raviranjan.webp",
  },
  {
    name: "Mr. Abhik Chatterjee",
    badge: "Speaker",
    role: "Hub Director, WiN COE IIT ISM Dhanbad",
    image: "/team/abhik.webp",
  },
];

const SpeakerCard = ({ speaker }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`;
    };
    const handleLeave = () => {
      el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0px)";
    };
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const isHonour = speaker.badge === "Guest of Honour";

  return (
    <div
      ref={cardRef}
      style={{ transition: "transform 0.15s ease-out" }}
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Hover gradient border glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-blue-500/20 blur-xl pointer-events-none" />

      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent z-20" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-purple-500/40 rounded-tl-3xl z-20" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500/40 rounded-br-3xl z-20" />

      {/* Inner card */}
      <div className="relative bg-[#120022]/80 rounded-3xl p-6 h-full flex flex-col items-center z-10">

        {/* Badge */}
        <div className={`mb-5 px-4 py-[3px] rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border
          ${isHonour
            ? "bg-purple-500/10 border-purple-400/40 text-purple-300"
            : "bg-blue-500/10 border-blue-400/40 text-blue-300"
          }`}
        >
          {speaker.badge}
        </div>

        {/* Photo */}
        <div className="relative mb-6">
          {/* Spinning conic ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "-3px",
              background: "conic-gradient(from 0deg, #a855f7, #e879f9, #60a5fa, #a855f7)",
              animation: "spinRing 7s linear infinite",
              borderRadius: "9999px",
            }}
          />
          {/* Dark spacer */}
          <div
            className="absolute rounded-full bg-[#0f001f]"
            style={{ inset: "1px", borderRadius: "9999px" }}
          />
          {/* Image */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "152px",
              height: "152px",
              borderRadius: "9999px",
              zIndex: 2,
            }}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </div>
          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: "0 0 36px rgba(168,85,247,0.45)",
              borderRadius: "9999px",
              zIndex: 3,
            }}
          />
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-white text-center leading-snug group-hover:text-purple-300 transition-colors duration-300 mb-3">
          {speaker.name}
        </h3>

        {/* Divider */}
        <div className="w-10 h-px bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 mb-3 opacity-70" />

        {/* Role */}
        <p className="text-gray-400 text-sm text-center leading-relaxed">
          {speaker.role}
        </p>
      </div>
    </div>
  );
};

const Speakers = () => {
  const topRow = speakers.slice(0, 3);
  const bottomRow = speakers.slice(3, 5);

  return (
    <>
      <style>{`
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .s-fade { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; opacity: 0; }
        .shimmer-heading {
          background: linear-gradient(90deg, #c084fc, #e879f9, #818cf8, #c084fc);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <div className="relative min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-br from-[#0f001f] via-[#1a0033] to-[#000814]">

        {/* Background glows — matching original exactly */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[100px]" />

        {/* Heading */}
        <div className="relative z-10 text-center mb-20 s-fade" style={{ animationDelay: "0ms" }}>
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-purple-400/70 mb-3">
            E — Summit 2025
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            OUR{" "}
            <span className="shimmer-heading">SPEAKERS</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm tracking-wide">
            Meet the visionaries shaping the future.
          </p>

          {/* Decorative row */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" style={{ boxShadow: "0 0 8px #a855f7" }} />
            <div className="w-2 h-2 rounded-full bg-fuchsia-400" style={{ boxShadow: "0 0 10px #e879f9" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" style={{ boxShadow: "0 0 8px #60a5fa" }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {topRow.map((speaker, i) => (
              <div key={i} className="s-fade" style={{ animationDelay: `${150 + i * 100}ms` }}>
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="flex justify-center gap-6 flex-wrap">
            {bottomRow.map((speaker, i) => (
              <div
                key={i}
                className="s-fade"
                style={{
                  animationDelay: `${450 + i * 100}ms`,
                  width: "calc(33.333% - 12px)",
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

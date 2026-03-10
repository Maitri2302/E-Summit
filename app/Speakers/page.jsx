"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const speakers = [
  // {
  //   name: "Mr. Sunil Kumar (IAS)",
  //   badge: "Chief Guest",
  //   role: "Director, Department of Higher Technical Education (DHTE), Ranchi, Govt. of Jharkhand",
  //   image: "/team/sunilkumar.webp",
  //   color: "from-amber-500 via-orange-500 to-yellow-500", // Gold for Chief Guest
  // },
  {
    name: "Dr. D.K. Singh",
    badge: "Guest of Honor",
    role: "Vice Chancellor, Jharkhand University of Technology (JUT), Ranchi",
    image: "/team/dk.singh.jpeg",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "Ms. Alka Singh",
    badge: "Guest of Honor",
    role: "President, BIT Sindri Alumni Association Northern America (BITSAANA)",
    image: "/team/Alka.png",
    color: "from-indigo-600 via-purple-500 to-blue-500",
  },
  {
    name: "Smt. Sharmistha Dasgupta",
    badge: "Guest of Honor",
    role: "Deputy Director General Scientist-G, DDG & Head of Group, AI Division, NIC Headquarters, New Delhi",
    image: "/team/Sharmisthadasgupta.jpeg",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "Shri. Deepak Kumar",
    badge: "Guest of Honor",
    role: "State Investigation Officer & Deputy Director General, NIC, Jharkhand State Centre",
    image: "/team/Deepak.jpeg",
    color: "from-fuchsia-600 via-purple-500 to-blue-500",
  },
  {
    name: "Shri. Nagendra Nath Mishra",
    badge: "Guest of Honor",
    role: "Scientist-F & Sr. Director (I.T), HoD, MeitY, Govt. of India, NIC, Jharkhand State Centre",
    image: "/team/nagendranath.png",
    color: "from-purple-600 via-blue-500 to-fuchsia-500",
  },
  {
    name: "Mr. Siddharth Kumar Rai",
    badge: "Guest of Honor",
    role: "Additional Director, STPI – Ranchi Centre, Ministry of Elec. & IT., Govt. of India",
    image: "/team/sid-rai.png",
    color: "from-indigo-600 via-purple-500 to-blue-500",
  },
  {
    name: "Dr. Binod Dubey",
    badge: "Guest of Honor",
    role: "Director, MSDE, RDSDE Ranchi, Jharkhand",
    image: "/team/bkdubey.webp",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "Mr. Abhik Chatterjee",
    badge: "Guest of Honor",
    role: "Hub Director, WIN-COE, IIT ISM Dhanbad",
    image: "/team/abhik.webp",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "Mr. Sameer Sinha",
    badge: "Guest of Honor",
    role: "Director, Exogenous Technologies",
    image: "/team/Sameer.jpeg",
    color: "from-fuchsia-600 via-purple-500 to-blue-500",
  },
  {
    name: "Mr. Sumit Kumar",
    badge: "Guest of Honor ",
    role: "Chairman, Jharkhand Entrepreneurs Association",
    image: "/team/sumit.webp",
    color: "from-purple-600 via-blue-500 to-fuchsia-500",
  },
  {
    name: "Mr. Ravi Ranjan Singh",
    badge: "Guest of Honor ",
    role: "Founding Director, Jharkhand Entrepreneurs Association",
    image: "/team/raviranjan.webp",
    color: "from-indigo-600 via-purple-500 to-blue-500",
  },
  {
    name: "Dr. Lailesh Kumar",
    badge: "Guest of Honor ",
    role: "Chief Technical Officer, TEXMiN Hub, IIT ISM Dhanbad",
    image: "/team/Laileshkumar.jpeg",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "Mr. Devashish Chatterjee",
    badge: "Guest of Honor ",
    role: "Senior Manager, TEXMiN Hub, IIT ISM Dhanbad",
    image: "/team/devashish.jpeg",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "Mr. Indrajeet Yadav",
    badge: "Guest of Honor ",
    role: "Indian Enterprise Development Service (IEDS), Director, MSME Jharkhand",
    image: "/team/Indrajeetyadav.jpeg",
    color: "from-fuchsia-600 via-purple-500 to-blue-500",
  },
  {
    name: "Mr. Anmol Srivastava",
    badge: "Speaker",
    role: "Sr. Area Manager HRM, TATA Steel",
    image: "/team/anmol.jpeg",
    color: "from-purple-600 via-blue-500 to-fuchsia-500",
  },
];

/* ================= CARD ================= */

const SpeakerCard = ({ speaker }) => {
  const cardRef = useRef(null);

  // Dynamic badge styling based on the role
  const getBadgeStyles = (badge) => {
    if (badge.includes("Chief Guest")) {
      return "bg-amber-500/10 border-amber-400/40 text-amber-300";
    } else if (badge.includes("Jury") || badge.includes("Workshop")) {
      return "bg-blue-500/10 border-blue-400/40 text-blue-300";
    }
    return "bg-purple-500/10 border-purple-400/40 text-purple-300";
  };

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
      className="relative w-full h-full rounded-3xl overflow-hidden
        bg-gradient-to-br from-[#09000f] to-[#040008]
        border border-purple-500/20
        shadow-[0_0_40px_rgba(168,85,247,0.15)]
        flex flex-col group cursor-pointer"
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

      {/* Square Photo: Full Width Header */}
      <div className="relative w-full h-56 rounded-t-3xl overflow-hidden shadow-[0_0_24px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_36px_rgba(168,85,247,0.45)] transition-shadow duration-500">
        <div className="z-0">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-contain"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/300x400/1a0b2e/a855f7?text=Profile";
            }}
          />
        </div>
        <div className="absolute z-20 inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 grow">
        {/* Badge */}
        <div
          className={`z-10 mb-4 px-4 py-[3px] rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border ${getBadgeStyles(speaker.badge)}`}
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
    </div>
  );
};

/* ================= MAIN PAGE ================= */

const Speakers = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `,
        }}
      />

      <div className="min-h-screen bg-[#02000a] text-white">
        {/* ── Hero Section ── */}
        <section className="relative h-[60vh] flex items-center justify-center px-6 pt-20 overflow-hidden">
          <Image
            src="/images/event-hero.webp"
            alt="Event Background"
            fill
            priority
            className="object-cover opacity-30"
          />
          {/* Fades into the page background color at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02000a] via-[#02000a]/40 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
              OUR <span style={{ color: "#a855f7" }}>SPEAKERS</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Meet the visionaries, leaders, and jury members shaping the future
              of entrepreneurship.
            </p>
          </motion.div>
        </section>

        {/* ── Cards Grid ── */}
        <div className="relative max-w-[1400px] pb-20 mx-auto px-6 md:px-12">
          {/* Replaced the animating wrapper with a standard div */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 40 }}
                // Trigger animation only when the specific card enters the viewport
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} // Triggers slightly before the card hits the bottom of the screen
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  // Modulo 4 creates a nice left-to-right stagger effect for each row
                  delay: (index % 4) * 0.1,
                }}
              >
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;

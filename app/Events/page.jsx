"use client";

import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const eventCategories = ["All", "Competitions", "Workshops", "Networking"];

const events = [
  {
    id: 1,
    title: "TEXcelerate 2026",
    revealed: true,
    category: "Competitions",
    date: "April 17th",
    time: "12:00 PM",
    venue: "BIT Sindri Campus",
    description:
      "TEXcelerate 2026 is a flagship idea pitching and innovation challenge focused on scalable industry solutions.",
    image: "/images/tex.webp",
    detailsLink: "/DOCS/TEXcelerate.docx",
    registerLink:
      "https://unstop.com/o/TbwOScl?lb=pWzExtqd&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: 2,
    title: "UDAAN UG Fellowship",
    revealed: true,
    category: "Competitions",
    date: "April 18th",
    time: "03:30 AM",
    venue: "BIT Sindri Campus",
    description:
      "UDAAN UG Fellowship supports research-driven undergraduate innovation aligned with national priorities.",
    image: "/images/udaan.webp",
    detailsLink: "/DOCS/udaan.docx",
    registerLink:
      "https://unstop.com/o/AiSrQMP?lb=pWzExtqd&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: 3,
    title: "INNOVATHON 3.0",
    revealed: true,
    category: "Competitions",
    date: "April 17th",
    time: "11:00 PM",
    venue: "BIT Sindri Campus",
    description:
      "INNOVATHON 3.0 is a 36-hour innovation hackathon focused on real-world technology solutions.",
    image: "/images/inn.webp",
    detailsLink: "/DOCS/INNOVATHON.docx",
    registerLink:
      "https://unstop.com/o/0ODSsAv?lb=pWzExtqd&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: 4,
    title: "Being an Entrepreneur",
    revealed: true,
    category: "Competitions",
    date: "April 18th",
    time: "10:00 AM",
    venue: "BIT Sindri Campus",
    description:
      "Being an Entrepreneur is a case-based competition focused on real-world business strategy and decision-making.",
    image: "/images/BAE.webp",
    detailsLink: "/DOCS/entrepreneur.docx",
    registerLink:
      "https://unstop.com/o/DkbmFT6?lb=pWzExtqd&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: 5,
    title: "Equity Minds",
    revealed: true,
    category: "Competitions",
    date: "April 17th",
    time: "12:00 PM",
    venue: "BIT Sindri Campus",
    description:
      "Equity Minds is a virtual investment simulation where participants think and decide like venture capitalists.",
    image: "/images/eq.webp",
    detailsLink: "/DOCS/equityminds.docx",
    registerLink:
      "https://unstop.com/o/ASvD0tC?lb=pWzExtqd&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: 6,
    title: "BuildX Expo for College",
    revealed: true,
    category: "Competitions",
    date: "April 17th",
    time: "12:00 PM",
    venue: "BIT Sindri Campus",
    description:
      "A project exhibition platform for college students to present research-driven ideas, working prototypes, and technology-based solutions addressing real-world challenges.",
    image: "/images/collegeExp.webp",
    detailsLink: "/DOCS/Expo.pdf",
    registerLink: "https://forms.gle/26QTBdAxUTc589jk7",
  },
];

const EventCard = ({ event }) => (
  <div className="group relative bg-[#160021] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-accent-500/50 hover:-translate-y-3 hover:rotate-[0.5deg] hover:shadow-[0_25px_70px_rgba(168,85,247,0.2)]">
    <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-transparent via-accent-500/30 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition duration-700 pointer-events-none"></div>

    {!event.revealed && (
      <div className="absolute inset-0 bg-accent-100/10 h-full w-full backdrop-blur-sm text-center flex flex-col items-center justify-center font-kiona font-bold text-sm text-gray-300 z-20">
        Event details will be revealed soon! <br />
        Stay tuned for updates.
      </div>
    )}

    <div className="">
      <div className="relative w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          width={500}
          height={300}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            event.revealed && "group-hover:scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0c0014] via-transparent to-transparent"></div>
        {event.revealed && (
          <div className="absolute top-4 left-4">
            <span className="bg-accent-600/40 backdrop-blur-2xl border border-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {event.category}
            </span>
          </div>
        )}
      </div>

      <div className="px-4 py-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
          {event.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {event.description}
        </p>

        <div className="w-full px-4 py-2 mb-4 border border-white/10 rounded-lg flex justify-between">
          <p className="flex items-center gap-2 text-gray-300 text-xs">
            <Calendar size={16} className="text-accent-500" />
            {event.date}, {event.time}
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-xs">
            <MapPin size={16} className="text-accent-500" />
            {event.venue}
          </p>
        </div>

        <div className="flex gap-4">
          {event.detailsLink && (
            <a
              href={event.detailsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full block text-center py-2 rounded-lg border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              View Details
            </a>
          )}

          {event.registerLink && (
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full block text-center py-2 rounded-lg border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest hover:bg-accent-700 hover:text-white transition-all duration-300"
            >
              Register ➝
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function Page() {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen text-white pb-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 pt-20">
        <Image
          src="/images/event-hero.webp"
          alt="Event Background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0c0014] via-transparent to-transparent"></div>
        {/* Added the exact same Hero animation from the Speakers component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            THE <span className="text-accent-400">LINEUP</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover innovation challenges, competitions, and networking events
            designed to turn ideas into action.
          </p>
        </motion.div>
      </section>

      {/* Filter Navigation */}
      <div className="sticky top-0 z-40 bg-[#0c0014]/80 backdrop-blur-md border-y border-white/5 py-6 px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat
                  ? "bg-accent-900 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              // Triggers animation when card enters viewport
              whileInView={{ opacity: 1, y: 0 }}
              // once: false enables vice-versa. margin: "-50px" prevents bottom-page blinking
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                // Modulo 3 creates a perfect left-to-right stagger for a 3-column grid
                delay: (index % 3) * 0.1,
              }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl italic">
              Stay tuned! Events will be revealed soon :)
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

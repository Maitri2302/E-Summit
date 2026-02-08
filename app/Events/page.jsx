"use client";

import { MapPin } from "lucide-react";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const eventCategories = ["All", "Competitions", "Workshops", "Networking"];

const events = [
  {
    id: 1,
    title: "Ideathon 2026",
    category: "Competitions",
    date: "Feb 6th",
    time: "10:00 AM",
    venue: "A26, Admin Building",
    description:
      "Pitch your disruptive ideas to a panel of venture capitalists and industry experts for a chance to win from a ₹5 Lakh prize pool.",
    image: "/images/hero.png",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Startup Expo",
    category: "Networking",
    date: "Feb 7th",
    time: "11:00 AM",
    venue: "A26, Admin Building",
    description:
      "Showcase your product to thousands of attendees and connect with potential investors.",
    image: "/images/hero.png",
  },
  {
    id: 3,
    title: "The Unicorn Talk",
    category: "Workshops",
    date: "Feb 8th",
    time: "04:00 PM",
    venue: "A26, Admin Building",
    description:
      "Join the founder of India's newest unicorn as they share their journey from a dorm room to a billion-dollar valuation. Join the founder of India's newest unicorn as they share their journey from a dorm room to a billion-dollar valuation.",
    image: "/images/hero.png",
  },
];

const EventCard = ({ event }) => (
  <div className="group relative bg-[#160021] border border-white/5 rounded-xl overflow-hidden hover:border-accent-500/50 transition-all duration-500">
    <div className="aspect-video w-full overflow-hidden">
      <Image
        src={event.image}
        alt={event.title}
        width={200}
        height={200}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-accent-600/40 backdrop-blur-2xl border border-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {event.category}
        </span>
      </div>
      <div className="absolute hidden lg:block w-full h-1/2 mt-1 top-0 bg-linear-to-t from-[#160021] via-transparent to-transparent"></div>
    </div>

    <div className="px-2 py-6 md:p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
          {event.title}
        </h3>
        <div className="text-right">
          <p className="text-accent-400 font-bold text-xs"></p>
          <p className="text-gray-500 text-[10px]"></p>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
        {event.description}
      </p>
      <div className="w-full px-4 py-2 mb-2 border border-white/10 rounded-lg flex flex-wrap justify-between">
        <p className="flex items-center gap-2 text-gray-300 text-xs">
          <Calendar size={16} className="text-accent-500" />{" "}
          <span>
            {event.date}, {event.time}
          </span>
        </p>
        <p className="flex items-center gap-2 text-gray-300 text-xs">
          <MapPin size={16} className="text-accent-500" />{" "}
          <span>{event.venue}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <button className="w-full py-2 rounded-lg border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all duration-300">
          View Details
        </button>
        <button className="w-full py-2 rounded-lg border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:bg-accent-700  transition-all duration-300">
          Register ➝
        </button>
      </div>
    </div>
  </div>
);

const page = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen text-white font-sans pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0c0014] via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-t from-accent-600 via-accent-400 to-accent-400">
              LINEUP
            </span>
          </h1>
          <p className="text-gray-300 font-kiona text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto">
            Explore three days of high-octane competitions, inspiring talks, and
            networking opportunities at E-Summit '26.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <div className="sticky top-0 z-40 bg-[#0c0014]/80 backdrop-blur-md border-y border-white/5 py-6 px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap overflow-x-auto no-scrollbar space-x-4 justify-center">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
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
      <main className="max-w-11/12 mx-auto md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl italic">
              No events found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default page;

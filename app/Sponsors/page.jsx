"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ================= TOGGLE ================= */
// Change this to true if you want full page reveal
const showRevealPage = false;

/* ================= SPONSOR DATA ================= */
const mainPartners = [
  {
    name: "BITSAANA",
    type: "Title Sponsor",
    image: "/images/Bitsaana.jpg",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "National Informatics Centre (NIC)",
    type: "Digital Infrastructure Partner",
    image: "/images/nic.jpg",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "Jharkhand Entrepreneurs Association (JEA)",
    type: "Official Startup Co-Partner",
    image: "/images/jeasponser.webp",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "Jharkhand University of Technology (JUT), Ranchi",
    type: "Education Partner",
    image: "/images/jut.jpg",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "TEXMiN Hub IIT ISM Dhanbad",
    type: "Technical Partner",
    image: "/images/texmin.jpg",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "HDFC Bank",
    type: "Banking Partner",
    image: "/images/hdfcbank.avif",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "Custkart",
    type: "Merchandise Partner",
    image: "/images/custkart.jpeg",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
];

const foodPartners = [
  {
    name: "Pizza Hut",
    type: "Food Partner",
    image: "/images/pizzahut.png",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    name: "Spicy Bites",
    type: "Food Partner",
    image: "/images/spicybites.png",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "The Bonfire",
    type: "Food Partner",
    image: "/images/bonfire.png",
    color: "from-blue-600 via-indigo-500 to-purple-500",
  },
];

/* ================= CARD ================= */

const SponsorCard = ({ sponsor }) => {
  return (
    <div
      className="relative w-full h-80 rounded-3xl overflow-hidden
      bg-gradient-to-br from-[#140022] to-[#0c0016]
      border border-purple-500/20
      shadow-[0_0_40px_rgba(168,85,247,0.15)]
      flex flex-col items-center justify-center text-center p-6
      group transition-all duration-500 hover:scale-105 hover:shadow-purple-500/30"
    >
      {!sponsor.comingSoon && (
        <div
          className={`absolute bottom-0 left-0 w-full h-24
          bg-gradient-to-t ${sponsor.color}
          blur-2xl opacity-60 group-hover:opacity-90 transition`}
        ></div>
      )}

      {sponsor.comingSoon ? (
        <div className="z-10 flex flex-col items-center">
          <div className="text-purple-400 text-2xl font-semibold mb-4 tracking-widest animate-pulse">
            REVEALING SOON
          </div>
          <p className="text-purple-300/70 text-sm uppercase tracking-wider">
            {sponsor.type}
          </p>
        </div>
      ) : (
        <>
          <div className="relative w-48 h-28 mb-6 z-10">
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              fill
              className="object-contain"
              // Fallback placeholder just in case the image isn't in your folder yet
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/300x150/1a0b2e/a855f7?text=Logo";
              }}
            />
          </div>

          <h3 className="text-white text-xl font-semibold z-10">
            {sponsor.name}
          </h3>

          <p className="text-gray-400 text-sm mt-2 z-10 uppercase tracking-wider">
            {sponsor.type}
          </p>
        </>
      )}
    </div>
  );
};

/* ================= MAIN PAGE ================= */

export default function SponsorsPage() {
  if (showRevealPage) {
    // Assuming RevealPage is imported or defined elsewhere in your project
    return <RevealPage />;
  }

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

      <div className="min-h-screen bg-[#0b0014] text-white">
        {/* ── Hero Section ── */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 bg-cover opacity-30">
            <Image
              src="/images/sponsorhero.webp"
              alt="Team Background"
              priority
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0014] via-[#0b0014]/40 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center max-w-4xl w-full"
          >
            <div className="mx-auto mb-24">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                OUR <span className="text-accent-400">PARTNERS</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base">
                Meet the industry leaders, organizers, and partners supporting
                E-Summit '26.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Main Partners Grid ── */}
        <div className="max-w-[1400px] pb-20 mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
            {mainPartners.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: (index % 4) * 0.1, // Staggers row by row
                }}
              >
                <SponsorCard sponsor={sponsor} />
              </motion.div>
            ))}
          </div>

          {/* ── Food Partners Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
              FOOD <span className="text-purple-500">PARTNERS</span>
            </h2>
            {/* Subtle decorative divider */}
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full opacity-50"></div>
          </motion.div>

          {/* Restricted max width to center the 3 food partners nicely */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pb-12">
            {foodPartners.map((sponsor, index) => (
              <motion.div
                key={`food-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: (index % 3) * 0.1, // Max 3 columns for food partners
                }}
              >
                <SponsorCard sponsor={sponsor} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

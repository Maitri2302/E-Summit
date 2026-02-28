"use client";

import Image from "next/image";

/* ================= TOGGLE ================= */
// Change this to true if you want full page reveal
const showRevealPage = false;

/* ================= SPONSOR DATA ================= */

const sponsors = [
  {
    name: "Jharkhand Entrepreneurs Association",
    type: "Official Startup Co-Partner",
    image: "/images/jeasponser.webp",
    color: "from-indigo-600 via-purple-500 to-blue-500",
  },
  {
    name: "Unstop",
    type: "Platform Partner",
    image: "/images/Unstop.webp",
    color: "from-purple-600 via-fuchsia-500 to-indigo-500",
  },

  /* 🔥 COMING SOON SPONSORS */
  {
    name: "Revealing Soon",
    type: "Powered By",
    comingSoon: true,
  },
  {
    name: "Revealing Soon",
    type: "Co-powered By",
    comingSoon: true,
  },
  {
    name: "Revealing Soon",
    type: "Platinum Sponsor",
    comingSoon: true,
  },
  {
    name: "Revealing Soon",
    type: "Gold Sponsor",
    comingSoon: true,
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
          <div className="relative w-52 h-32 mb-6 z-10">
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              fill
              className="object-contain"
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
    return <RevealPage />;
  }

  return (
    <div className="min-h-screen bg-[#0b0014] text-white">
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
        <div className="absolute inset-0 bg-linear-to-t from-[#0c0014] via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
              OUR <span className="text-purple-500">PARTNERS</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base">
              Meet the industry leaders and partners supporting E-Summit '26.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl pb-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}
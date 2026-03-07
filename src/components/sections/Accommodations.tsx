"use client";

import Image from "next/image";

const insuranceBullets = [
  "Most PPO Plans Accepted",
  "Free Benefits Verification",
  "Streamlined Same-Day Admissions",
  "Individual Therapy",
  "Co-Occurring Mental Health Treatment",
  "Immediate Placement Available",
];

export default function Accommodations() {
  return (
    <section
      id="mental-health"
      className="py-20 md:py-28 scroll-mt-24"
      style={{ backgroundColor: "#0a1f35" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top heading + description */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4">
            Imagine Waking Up and Not Needing It Anymore
          </h2>
          <hr className="border-t-2 border-gold w-20 mb-6" />
          <p className="text-white/75 text-lg leading-relaxed">
            That life exists. It&rsquo;s being lived right now by people who once felt exactly the way you do. We bridge the distance between where you are today and a life free from addiction — with compassionate therapy, peer support, and clinical care that actually works.
          </p>
        </div>

        {/* Effective and Discreet — image + text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Image
            src="/images/gallery/therapy-1.jpg"
            alt="Effective and Discreet addiction treatment environment"
            width={960}
            height={640}
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg w-full h-auto object-cover"
          />
          <div>
            <h3 className="font-maistra text-2xl md:text-3xl text-white mb-6">
              Expert Care. Real Compassion. Zero Judgment.
            </h3>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Our therapists don&rsquo;t just treat symptoms — they get to know you. In a private, calming environment surrounded by people on the same path, you&rsquo;ll find that recovery isn&rsquo;t something that happens to you. It&rsquo;s something you build, with the right team beside you.
            </p>
            <a
              href="tel:+18669717393"
              className="inline-block px-8 py-4 text-center font-semibold rounded btn-primary transition"
            >
              Call for Immediate Admissions
              <br />
              <span className="text-sm font-normal">(866) 971-7393</span>
            </a>
          </div>
        </div>

        {/* Second image */}
        <div className="mb-16">
          <Image
            src="/images/gallery/therapy-2.jpg"
            alt="Rehabs that take insurance"
            width={960}
            height={640}
            quality={80}
            sizes="100vw"
            className="rounded-lg w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Insurance bullet list */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl text-white mb-4">
              Know What You&rsquo;re Covered For — Before You Ever Walk In.
            </h3>
            <p className="text-white/75 leading-relaxed">
              Most PPO plans cover more than people realize. We verify your benefits in minutes, fight for maximum coverage on your behalf, and handle every piece of paperwork — so cost is never the reason someone delays getting help.
            </p>
          </div>
          <ul className="space-y-3">
            {insuranceBullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-white text-lg"
              >
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

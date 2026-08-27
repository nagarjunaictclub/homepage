"use client";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";

export default function PresidentMessage() {
  const president = {
    name: "Sudeep K Mishra",
    title: "Founding President",
    organization: "ICT Club",
    image:
      "https://res.cloudinary.com/codewithsudeep/image/upload/v1689187551/sudeep_gjcnha.jpg",
    quote:
      "When we founded the ICT Club, our vision was simple yet ambitious: to build a vibrant ecosystem where curiosity drives innovation and technology serves as a tool for impact. We wanted to empower students to transition from mere consumers of technology to passionate creators and leaders. Today, seeing our community thrive through hackathons, workshops, and real-world projects fills me with immense pride. Technology is ever-evolving, but our commitment to learning, collaboration, and pushing boundaries remains timeless.",
    socialLinks: {
      facebook: "https://www.facebook.com/profile.php?id=100077945007632",
      linkedIn: "https://www.linkedin.com/in/sudeep-mishra-845938159/",
      github: "https://github.com/sudeepMi/",
      portal: "https://codewithsudeep.com/",
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50/70 dark:bg-[#0B0F29] relative overflow-hidden transition-colors">
      {/* Background Decorative Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 dark:bg-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow/10 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="Leadership Vision"
          title="Words from Our Founding President"
          paragraph="Hear from the founder who established the foundation of our ICT Club community."
          center
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white/90 dark:bg-[#131943]/90 backdrop-blur-xl p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Large Decorative Quote Icon */}
            <div className="absolute top-6 right-8 text-primary/10 dark:text-yellow/10 text-8xl sm:text-9xl font-serif select-none pointer-events-none">
              “
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* President Image & Details */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-yellow opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white dark:border-[#131943] shadow-lg">
                    <Image
                      src={president.image}
                      alt={president.name}
                      fill
                      sizes="(max-width: 768px) 160px, 192px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
                    {president.name}
                  </h3>
                  <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-yellow/10 dark:text-yellow border border-primary/20 dark:border-yellow/20">
                    <span>👑</span> {president.title}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-4">
                  {president.socialLinks.linkedIn && (
                    <Link
                      href={president.socialLinks.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-yellow dark:hover:text-black transition-all duration-200 shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 1.45 1.45A1.45 1.45 0 0 0 7.86 6.75Z" />
                      </svg>
                    </Link>
                  )}
                  {president.socialLinks.github && (
                    <Link
                      href={president.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-yellow dark:hover:text-black transition-all duration-200 shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                      </svg>
                    </Link>
                  )}
                  {president.socialLinks.facebook && (
                    <Link
                      href={president.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Profile"
                      className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-yellow dark:hover:text-black transition-all duration-200 shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12Z" />
                      </svg>
                    </Link>
                  )}
                  {president.socialLinks.portal && (
                    <Link
                      href={president.socialLinks.portal}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Personal Portfolio"
                      className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-yellow dark:hover:text-black transition-all duration-200 shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 fill-none stroke-current stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Quote & Text Body */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-primary dark:text-yellow">
                  <span className="w-8 h-[2px] bg-primary dark:bg-yellow inline-block rounded-full"></span>
                  Founder's Message
                </div>

                <p className="text-base sm:text-lg lg:text-xl italic text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                  "{president.quote}"
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Founded Tenure 1 Executive Committee
                  </div>
                  <Link
                    href="/members"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-yellow hover:underline transition-all"
                  >
                    View All Club Members &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

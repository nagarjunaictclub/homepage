"use client";

import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import { useEffect, useState } from "react";

const counters = [
  { label: "Active Members", end: 15 },
  { label: "Events Conducted", end: 40},
  { label: "Collaborations", end: 14 },
];

const values = [
  { title: "Innovation", desc: "We promote creativity in every corner of our club." },
  { title: "Teamwork", desc: "We value unity and collaborative success." },
  { title: "Growth", desc: "Learning and self-improvement is our daily goal." },
  { title: "Community", desc: "We contribute actively to tech and local society." },
];

const AboutSectionOne = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => (val < counters[i].end ? val + 1 : val))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gray-50/50 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Title */}
        <SectionTitle
          eyebrow="Who We Are"
          title="About Our Club"
          paragraph="We are a vibrant student-led tech community where innovation meets collaboration. Our club serves as a platform for students to explore, experiment, and execute ideas that matter. From hackathons to workshops, and open-source projects to tech talks — we foster a culture of continuous learning and community-driven development."
          center
        />

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mt-12">
          <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-yellow/10 text-primary dark:text-yellow font-bold mb-6">
              🎯
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-3">Our Mission</h3>
            <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
              To empower students through technical knowledge and hands-on project experience in a supportive environment.
              We aim to create an inclusive ecosystem where members can sharpen their skills through real-world challenges, mentorship programs, and collaborative opportunities.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-yellow/10 text-primary dark:text-yellow font-bold mb-6">
              🚀
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-3">Our Vision</h3>
            <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
              To become the most impactful and innovative ICT club in the region.
              Our vision is to be recognized as a leading force in shaping future tech leaders. We strive to build a community that inspires creativity, nurtures curiosity, and drives technological change.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-black dark:text-white mb-8">Our Core Values</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#131943] border border-gray-100 dark:border-white/10 p-6 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-primary dark:text-yellow mb-2">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-body-color dark:text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Counter Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          {counters.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#131943] border border-gray-100 dark:border-white/10 p-8 rounded-2xl shadow-card"
            >
              <h3 className="text-4xl font-extrabold text-primary dark:text-yellow mb-2">{counts[idx]}+</h3>
              <p className="text-sm font-semibold tracking-wide uppercase text-body-color dark:text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-yellow/10 dark:from-[#131943] dark:to-[#1a2356] border border-primary/10 dark:border-white/10 p-10 lg:p-14">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white mb-4">
            Ready to be part of something impactful?
          </h2>
          <p className="text-base text-body-color dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Join our journey of innovation, learning, and collaboration with fellow tech enthusiasts.
          </p>
          <a
            href="/events"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
          >
            Explore Events & Join
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

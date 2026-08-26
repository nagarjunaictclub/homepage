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
    <section className="py-16 mt-5 md:py-20 lg:py-28">
      <div className="container mx-auto">
        {/* Main About Title */}
        <SectionTitle
          title="About Our Club"
          paragraph="We are a vibrant student-led tech community where innovation meets collaboration. Our club serves as a platform for students to explore, experiment, and execute ideas that matter. From hackathons to workshops, and open-source projects to tech talks — we foster a culture of continuous learning and community-driven development. Whether you're a beginner or a pro, there's a place for you to shine and grow with us."
        />

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Mission</h3>
            <p className="text-body-color">
              To empower students through technical knowledge and hands-on project experience in a supportive environment.
              We aim to create an inclusive ecosystem where members can sharpen their skills through real-world challenges, mentorship programs, and collaborative opportunities. Our mission is to bridge the gap between classroom learning and industry expectations by encouraging exploration, innovation, and leadership.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Vision</h3>
            <p className="text-body-color">
              To become the most impactful and innovative ICT club in the region.
              Our vision is to be recognized as a leading force in shaping future tech leaders. We strive to build a community that inspires creativity, nurtures curiosity, and drives technological change — not only within our institution but also across the broader academic and local tech landscape.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-dark p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <h4 className="text-xl font-semibold text-primary mb-2">
                {value.title}
              </h4>
              <p className="text-body-color">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Counter Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          {counters.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-primary">{counts[idx]}+</h3>
              <p className="text-body-color">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Image with hover effect
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl hover:scale-105 transition duration-500 shadow-lg">
            <Image
              src="/images/about/about-creative.jpg"
              alt="About us creative"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to be part of something impactful?
          </h2>
          <p className="text-lg text-body-color mb-6">
            Join our journey of innovation and collaboration.
          </p>
          <a
            href="#"
            className="inline-block bg-primary px-6 py-3 text-white rounded-full hover:bg-opacity-90 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import PresidentMessage from "@/components/About/PresidentMessage";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Event from "@/components/Events";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Event />
      <div className="container mx-auto px-4 flex items-center justify-center pt-8 pb-16">
        <Link
          href={"/events"}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
        >
          See All Events →
        </Link>
      </div>
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <PresidentMessage />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

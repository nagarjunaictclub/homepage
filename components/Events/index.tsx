"use client";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleEvent from "./SingleEvent";
import eventData from "./eventData";
import { usePathname } from "next/navigation";

const Event = () => {
  const pathname = usePathname();
  let _eventData = eventData;
  console.log(pathname);
  return (
    <section id="events" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle title="Our Latest Events" paragraph="" center />
        <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {pathname === "/"
            ? _eventData
              .sort((a, b) => b.id - a.id)
              .slice(0, 3)
              .map((event) => {
                return (
                  <div key={event.id} className="w-full">
                    <SingleEvent event={event} />
                  </div>

                );
              })
            : _eventData
              .sort((a, b) => b.id - a.id)
              .map((event) => {
                return (
                  <div key={event.id} className="w-full">
                    <SingleEvent event={event} />
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Event;

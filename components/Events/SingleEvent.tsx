"use client";
import { Events } from "@/types/events";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import React from "react";

export default function SingleEvent({ event }: { event: Events }) {
  const {
    title,
    image,
    description,
    eventDate,
    winning_price,
    registrationLink,
    navigationPath,
  } = event;

  return (
    <>
    <div
      className="wow fadeInUp group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
      data-wow-delay=".1s"
    >
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {eventDate}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <h3 className="mb-3">
            <Link
              href={{
                pathname: `/events/${title.replaceAll(/\s/g, "")}`,
                query: event,
              }}
              target="_blank"
              className="text-xl font-bold tracking-tight text-black dark:text-white hover:text-primary dark:hover:text-yellow transition-colors line-clamp-2"
            >
              {title}
            </Link>
          </h3>

          {winning_price && (
            <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-yellow dark:text-yellow bg-yellow/10 px-2.5 py-1 rounded-md">
              <span>🏆 Prize Pool:</span> {winning_price}
            </div>
          )}

          <div
            className="mb-6 line-clamp-3 text-sm text-body-color dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
          <Link
            href={{
              pathname: `/events/${title.replaceAll(/\s/g, "")}`,
              query: event,
            }}
            target="_blank"
            className="w-full flex-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary/90 transition-all shadow-sm hover:shadow"
          >
            Read Details
          </Link>
          {moment(new Date(), "DO-MM-YYYY").isBefore(
            moment(new Date(eventDate), "DO-MM-YYYY").subtract(1, "day"),
            "day"
          ) && (
            <Link
              href={registrationLink}
              target="_blank"
              className="w-full flex-1 rounded-lg border border-primary text-primary dark:border-yellow dark:text-yellow hover:bg-primary hover:text-white dark:hover:bg-yellow dark:hover:text-black px-4 py-2.5 text-center text-sm font-semibold transition-all"
            >
              Register Now
            </Link>
          )}
        </div>
      </div>
    </div>
          {/* <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div> */}
    </>
  );
}

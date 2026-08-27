"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { Events } from "@/types/events";

interface EventDetailClientProps {
  matchedEvent?: Events;
  slug: string;
  fallbackSearchParams?: { [key: string]: any };
}

export default function EventDetailClient({
  matchedEvent,
  slug,
  fallbackSearchParams = {},
}: EventDetailClientProps) {
  const title =
    matchedEvent?.title ||
    fallbackSearchParams.title ||
    slug ||
    "Event Details";
  const eventDate =
    matchedEvent?.eventDate || fallbackSearchParams.eventDate || "TBA";
  const image =
    matchedEvent?.image ||
    fallbackSearchParams.image ||
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80";
  const description =
    matchedEvent?.description || fallbackSearchParams.description;
  const objective =
    matchedEvent?.objective || fallbackSearchParams.objective;
  const winning_price =
    matchedEvent?.winning_price || fallbackSearchParams.winning_price;
  const registrationLink =
    matchedEvent?.registrationLink || fallbackSearchParams.registrationLink;
  const giveaway =
    matchedEvent?.Giveaway || fallbackSearchParams.Giveaway;
  const extra =
    matchedEvent?.extra ||
    (Array.isArray(fallbackSearchParams.extra)
      ? fallbackSearchParams.extra
      : []);

  const formatList = (val: any) => {
    if (Array.isArray(val)) return val;
    if (typeof val === "string") return [val];
    return [];
  };

  const EntryFeeAndRegistration = formatList(
    matchedEvent?.EntryFeeAndRegistration ||
      fallbackSearchParams.EntryFeeAndRegistration
  );
  const ModeofOperation = formatList(
    matchedEvent?.ModeofOperation || fallbackSearchParams.ModeofOperation
  );
  const topicsCovered = formatList(matchedEvent?.topicsCovered);
  const workshopoutline = formatList(matchedEvent?.workshopoutline);
  const certificate = formatList(matchedEvent?.certificate);

  const instructorName = matchedEvent?.instructor_name;
  const instructorProfession = matchedEvent?.instructor_profession;
  const instructorEmail = matchedEvent?.instructor_email;

  const notify = (mode: string) => {
    if (mode === "success") {
      toast.success("Copied to clipboard!");
    } else {
      toast.error("Failed to copy");
    }
  };

  if (!matchedEvent && !fallbackSearchParams.title && !fallbackSearchParams.description) {
    return (
      <section className="px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-dark">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Event Not Found
        </h2>
        <p className="text-body-color dark:text-gray-300 mb-8 max-w-md">
          We couldn't find the event details for "{slug}".
        </p>
        <Link
          href="/events"
          className="rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
        >
          &larr; Back to All Events
        </Link>
      </section>
    );
  }

  return (
    <>
      <Breadcrumb
        pageName={title}
        description={
          description
            ? description.length > 150
              ? `${description.slice(0, 150)}...`
              : description
            : "Event details and registration guidelines."
        }
      />

      <section className="px-4 pb-20 pt-12 bg-gray-50/50 dark:bg-dark">
        <div className="container mx-auto max-w-6xl">
          {/* Quick Details Bar */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-2xl bg-white p-6 shadow-card dark:bg-[#131943] border border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-yellow/10 dark:text-yellow text-xl">
                📅
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-body-color dark:text-gray-400">
                  Event Date
                </h4>
                <p className="text-base font-bold text-black dark:text-white">
                  {eventDate}
                </p>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 dark:bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-yellow/10 dark:text-yellow text-xl">
                📍
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-body-color dark:text-gray-400">
                  Venue
                </h4>
                <p className="text-base font-bold text-black dark:text-white">
                  Nagarjuna College of IT, Lalitpur
                </p>
              </div>
            </div>

            {winning_price && (
              <>
                <div className="h-8 w-[1px] bg-gray-200 dark:bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow/10 text-yellow text-xl">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-body-color dark:text-gray-400">
                      Prize Pool
                    </h4>
                    <p className="text-base font-bold text-yellow">
                      {winning_price}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Area */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Event Overview & Objectives */}
              {(objective || description) && (
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-6 sm:p-8 shadow-card">
                  <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-4">
                    Overview & Objectives
                  </h3>
                  <div className="prose dark:prose-invert max-w-none text-body-color dark:text-gray-300 leading-relaxed">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: objective || description || "",
                      }}
                    />
                  </div>

                  {/* Extra Snippets / Code Blocks */}
                  {extra && extra.length > 0 && (
                    <div className="mt-6 flex flex-col gap-4">
                      {extra.map((data: string, key: number) => (
                        <div key={key} className="relative group">
                          <blockquote className="rounded-xl bg-gray-900 p-4 text-gray-100 overflow-x-auto font-mono text-sm border border-gray-800 pr-12">
                            <code>{data}</code>
                          </blockquote>
                          <button
                            onClick={() =>
                              navigator.clipboard
                                .writeText(data)
                                .then(() => notify("success"))
                                .catch(() => notify("failed"))
                            }
                            title="Copy code"
                            className="absolute right-3 top-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                          >
                            📋
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Topics Covered */}
              {topicsCovered && topicsCovered.length > 0 && (
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-6 sm:p-8 shadow-card">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {topicsCovered.map((topic: string, i: number) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 dark:bg-yellow/10 px-3.5 py-1.5 text-sm font-semibold text-primary dark:text-yellow"
                      >
                        ⚡ {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Workshop Outline */}
              {workshopoutline && workshopoutline.length > 0 && (
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-6 sm:p-8 shadow-card">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
                    Workshop Outline
                  </h3>
                  <ol className="space-y-3">
                    {workshopoutline.map((item: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-body-color dark:text-gray-300 text-base"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white dark:bg-yellow dark:text-black">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Entry Fee & Guidelines */}
              {EntryFeeAndRegistration && EntryFeeAndRegistration.length > 0 && (
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-6 sm:p-8 shadow-card">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
                    Registration & Guidelines
                  </h3>
                  <ul className="space-y-2.5">
                    {EntryFeeAndRegistration.map((entry: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-body-color dark:text-gray-300 text-base"
                      >
                        <span className="text-primary dark:text-yellow font-bold">
                          ✓
                        </span>
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modes of Operation */}
              {ModeofOperation && ModeofOperation.length > 0 && (
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-6 sm:p-8 shadow-card">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
                    Mode of Operation
                  </h3>
                  <ul className="space-y-2.5">
                    {ModeofOperation.map((mode: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-body-color dark:text-gray-300 text-base"
                      >
                        <span className="text-primary dark:text-yellow font-bold">
                          •
                        </span>
                        <span>{mode}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Giveaways */}
              {giveaway && (
                <div className="rounded-2xl border border-yellow/30 bg-yellow/5 p-6 shadow-card">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                    <span>🎁</span> Giveaways & Perks
                  </h3>
                  <p className="text-body-color dark:text-gray-300 text-base italic">
                    {giveaway}
                  </p>
                </div>
              )}

              {/* Certificate Information */}
              {certificate && certificate.length > 0 && (
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-6 sm:p-8 shadow-card">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
                    Certificates & Recognition
                  </h3>
                  <ul className="space-y-2.5">
                    {certificate.map((cert: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-body-color dark:text-gray-300 text-base"
                      >
                        <span className="text-yellow">📜</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructor Profile Card */}
              {instructorName && (
                <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-6 sm:p-8 shadow-card">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white mb-4">
                    Instructor Details
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-yellow/10 dark:text-yellow font-bold text-2xl">
                      👨‍💻
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black dark:text-white">
                        {instructorName}
                      </h4>
                      {instructorProfession && (
                        <p className="text-sm text-body-color dark:text-gray-300">
                          {instructorProfession}
                        </p>
                      )}
                      {instructorEmail && (
                        <p className="text-xs text-primary dark:text-yellow mt-1">
                          {instructorEmail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Event Image */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] shadow-card">
                <div className="relative h-[280px] sm:h-[360px] w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-3">
                    {title}
                  </h3>
                  {registrationLink ? (
                    <Link
                      href={registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-center text-base font-semibold text-white shadow-md hover:bg-primary/90 dark:bg-yellow dark:text-black dark:hover:bg-yellow/90 transition-all"
                    >
                      Register for Event &rarr;
                    </Link>
                  ) : (
                    <div className="mt-4 text-center text-sm font-semibold text-body-color dark:text-gray-400 bg-gray-100 dark:bg-white/5 py-3 rounded-xl">
                      Registration Closed / Offline
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify"

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string | any };
  searchParams?: { [key: string]: string | any };
}) {

  const notify = (mode:any) => {
    if (mode === "success") {
      toast.success("copied successfully")
    } else {
      toast.error("failed to copy")
    }
  }

  return (
    <>
      <Breadcrumb
        pageName={`${params.slug}`}
        description={`${searchParams.description}`}
      />
      <section className="px-4 pb-[120px] pt-[50px]">
        <div className="container">
          <div className="flex flex-col gap-16">
            <div className="wow m-[0_auto] flex w-fit items-center gap-10 rounded-md bg-white p-[16px_24px] shadow-one dark:bg-dark">
              <div className="flex items-center gap-4">
                <p className=" flex items-center justify-center rounded-[50%] bg-[#ccc] p-2 text-xl text-[#000]">
                  <i className="ri-calendar-line"></i>
                </p>
                <div className="flex flex-col gap-1">
                  <h3 className=" text-xl">{searchParams.eventDate}</h3>
                  <p className=" text-sm">Starts at 11:00 am</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className=" flex items-center justify-center rounded-[50%] bg-[#ccc] p-2 text-xl text-[#000]">
                  <i className="ri-map-pin-line"></i>
                </p>
                <div className="flex flex-col gap-1">
                  <h3 className=" text-xl">Lalitpur</h3>
                  <p className=" text-sm">
                    Nagarjuna College Of Information Technology
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className=" text-3xl">Objective</h3>
                  <div className="text-lg">
                    <div dangerouslySetInnerHTML={{ __html: searchParams.objective }}></div>
                    <div>{searchParams.extra && searchParams.extra.map((data: any, key: any) => {
                      return (<div key={key} className="relative">
                        <blockquote className="bg-white text-dark p-3 mt-4 w-full"><code className="text-xl block">{data}</code></blockquote>
                        <i className="ri-file-copy-line absolute right-1 top-2 text-[#000] cursor-pointer" onClick={() => navigator.clipboard.writeText(data).then((res) => {
                          console.log(res)
                          notify("success")
                        }).catch(() => {
                          notify("failed")
                        })}></i>
                      </div>)
                    })}</div>
                  </div>
                </div>
                {searchParams.EntryFeeAndRegistration && (
                  <div className="flex flex-col gap-1">
                    <h3 className=" text-3xl">Entry Fee and Registration</h3>
                    <ul style={{ listStylePosition: "inside" }}>
                      {searchParams.EntryFeeAndRegistration.map(
                        (entry: any) => {
                          return (
                            <li className="list-disc text-lg" key={entry}>
                              {entry}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                )}
                {searchParams?.ModeofOperation && (
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl">Modes of Operation</h3>
                    <ul style={{ listStylePosition: "inside" }}>
                      {searchParams.ModeofOperation.map((operation: any) => {
                        return (
                          <li key={operation} className=" list-disc text-lg">
                            {operation}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {searchParams.Giveaway && (
                  <div className="flex flex-col">
                    <h3 className=" text-3xl">Give Away</h3>
                    <p className=" text-lg">
                      {" "}
                      <em>{searchParams.Giveaway}</em>{" "}
                    </p>
                  </div>
                )}
              </div>
              <div className="grid justify-end">
                <Image
                  src={`${searchParams.image}`}
                  alt="event image"
                  width={500}
                  height={600}
                  className=" object-cover"
                />
              </div>
            </div>
            <div className="grid items-center justify-center">
              {/* <iframe
                src={searchParams.registrationform}
                width="500"
                height="600"
              >
                Loading…
              </iframe> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

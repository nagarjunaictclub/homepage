"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import { RandDTeamData } from "@/components/RandDTeam/RandDteamdata";
import Link from "next/link";

export default function MemberPage() {
  const [tabs, setTabs] = React.useState("Objective");
  const [showform, setShowForm] = React.useState(false);
  const iframeRef = React.useRef(null);

  return (
    <>
      {/* <Breadcrumb
        pageName="R&D Team Page"
        description="Our ICT Club's Research and Development (R&D) Team is at the forefront of innovation and exploration in the world of technology. Comprising dedicated and curious individuals, our R&D team is committed to pushing boundaries and driving the club's progress."
      /> */}
      <section className="px-4 pb-[30px] pt-[9rem]">
        <div className="container">
          <Link
            href={"/pdf"}
            className=" text-[18px] underline decoration-[#bebebe] underline-offset-4 transition hover:text-[#5b92f2]"
          >
            See Our <em>Research Papers and Report on various topics</em>
          </Link>
          <div className="flex gap-1 py-3 text-[18px]">
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSd-hGFeaQb9Lxr5UZMiR_ueVs3xD8Bdj9iklXtgJEDEGuyIOA/viewform"
              }
              target="_blank"
              className="w-fit  underline decoration-[#bebebe] underline-offset-4 transition hover:text-[#5b92f2]"
            >
              R&D Joining form
            </Link>
            or
            <p
              className=" cursor-pointer"
              onClick={() => setShowForm((prev) => !prev)}
            >
              <em> join here</em>
            </p>
          </div>
          {showform && (
            <div
              className={` items-center justify-center transition-[grid_template_rows_800ms_ease-in] md:grid md:grid-rows-[0fr] ${
                showform && "md:grid-rows-[1fr]"
              }`}
            >
              <div className="overflow-hidden py-3">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd-hGFeaQb9Lxr5UZMiR_ueVs3xD8Bdj9iklXtgJEDEGuyIOA/viewform"
                  frameBorder="0"
                  height={"600"}
                  className={`invisible my-3  w-full md:w-[650px]`}
                  ref={iframeRef}
                  onLoad={() =>
                    (iframeRef.current.style.visibility = "visible")
                  }
                ></iframe>
              </div>
            </div>
          )}

          <div className="tabs__container">
            <div className="flex items-center justify-center gap-3 overflow-x-auto pb-8 pt-5">
              <h3
                className={`cursor-pointer text-2xl ${
                  tabs === "Objective" && " text-[#5b92f2]"
                }`}
                onClick={() => setTabs("Objective")}
              >
                Objective
              </h3>{" "}
              |
              <h3
                className={`cursor-pointer text-2xl ${
                  tabs === "Mission" && " text-[#5b92f2]"
                }`}
                onClick={() => setTabs("Mission")}
              >
                Mission
              </h3>{" "}
              |
              <h3
                className={`cursor-pointer text-2xl ${
                  tabs === "Procedure" && " text-[#5b92f2]"
                }`}
                onClick={() => setTabs("Procedure")}
              >
                Procedure
              </h3>
            </div>
          </div>

          {tabs === "Objective" && (
            <>
              <h2 className=" text-3xl ">Objective</h2>
              <p className=" py-2 text-xl">
                We intend to drive innovation and contribute to the growth and
                success of the college ICT Club. We can follow the following
                steps to achieve our objectives.
              </p>
              <div className="flex flex-col gap-5 py-4">
                {RandDTeamData.map((r) => {
                  return r.objective.map((objective) => {
                    return (
                      <div
                        key={objective.title}
                        className="grid gap-2 lg:grid-cols-[1fr_4fr]"
                      >
                        <h3 className=" text-xl">{objective.title} :</h3>
                        <p className=" text-[17px]">
                          {" "}
                          <em>{objective.desp}</em>{" "}
                        </p>
                      </div>
                    );
                  });
                })}
              </div>
            </>
          )}

          {tabs === "Mission" && (
            <>
              <h2 className=" text-3xl">Mission</h2>
              <p className="py-2 text-xl">
                The mission of our Research and Development (R&D) team within
                the ICT club are:
              </p>
              <div className="flex flex-col gap-3 py-4">
                {RandDTeamData.map((r) => {
                  return r.mission.map((mission) => {
                    return (
                      <div
                        key={mission.title}
                        className="grid gap-2 lg:grid-cols-[1fr_4fr]"
                      >
                        <h3 className="text-xl">{mission.title}:</h3>
                        <p className="text-[17px]">
                          {" "}
                          <em>{mission.desp}</em>{" "}
                        </p>
                      </div>
                    );
                  });
                })}
              </div>
            </>
          )}

          {tabs === "Procedure" && (
            <>
              <h2 className=" text-3xl">Procedure</h2>
              <p className="py-2 text-xl">
                We intend to make the following procedures to accomplish the
                objective of the R and D team.
              </p>
              <div className="flex flex-col gap-3 py-4">
                {RandDTeamData.map((r) => {
                  return r.procedure.map((procedure) => {
                    return (
                      <div
                        key={procedure.title}
                        className="grid gap-2 lg:grid-cols-[1fr_4fr]"
                      >
                        <h3 className="text-xl">{procedure.title}:</h3>
                        <p className="text-[17px]">
                          {" "}
                          <em>{procedure.desp}</em>{" "}
                        </p>
                      </div>
                    );
                  });
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

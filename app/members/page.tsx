"use client";

import { useState } from "react";
import SingleMember from "@/components/Members/SingleMember";
import memberData from "@/components/Members/membersData";

export default function MemberPage() {
  const [selectedBatchIndex, setSelectedBatchIndex] = useState(
    memberData.length - 1
  );

  return (
    <section className="px-4 pt-[8rem] pb-[4rem] bg-gray-50 dark:bg-dark min-h-screen">
      {/* Responsive Tabs */}
      <div className="mb-12 flex justify-center items-center px-2">
        <div
          role="tablist"
          aria-label="Tenure Selection"
          className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-gray-200/80 dark:bg-white/10 backdrop-blur-md border border-gray-300/60 dark:border-white/10 shadow-inner max-w-full overflow-x-auto"
        >
          {memberData?.map((_, index) => {
            const batchIndex = memberData.length - 1 - index;
            const tenureNum = batchIndex + 1;
            const isActive = selectedBatchIndex === batchIndex;

            return (
              <button
                key={batchIndex}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedBatchIndex(batchIndex)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? "bg-primary text-white shadow-md dark:bg-yellow dark:text-black font-semibold scale-[1.02]"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10"
                }`}
              >
                Tenure {tenureNum}
              </button>
            );
          })}
        </div>
      </div>

      {/* Members Display */}
      <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 px-4">
        {memberData[selectedBatchIndex]?.map((member) => (
          <SingleMember member={member} key={`${selectedBatchIndex}-${member.id}`} />
        ))}
      </div>
    </section>
  );
}


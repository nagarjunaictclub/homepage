"use client";

import { useState } from "react";
import SingleMember from "@/components/Members/SingleMember";
import memberData from "@/components/Members/membersData";

export default function MemberPage() {
  const [selectedBatchIndex, setSelectedBatchIndex] = useState(memberData.length - 1);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBatchIndex(Number(e.target.value));
  };

  return (
    <section className="px-4 pt-[8rem] pb-[4rem] bg-gray-50 min-h-screen">
      {/* Dropdown */}
      <div className="mb-10 flex justify-center items-center">
        <label
          htmlFor="batch"
          className="mr-3 font-semibold text-lg text-gray-700"
        >
          Select Tenure:
        </label>
        <select
          id="batch"
          onChange={handleSelectChange}
          value={selectedBatchIndex}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          {memberData?.map((memberObject) => (
            <option
              key={memberData.indexOf(memberObject)}
              value={memberData.length - memberData.indexOf(memberObject) - 1}
            >
              Tenure {memberData.length - memberData.indexOf(memberObject)}
            </option>
          ))}
        </select>
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

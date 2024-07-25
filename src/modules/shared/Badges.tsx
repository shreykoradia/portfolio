import Image from "next/image";
import React from "react";
import Knife from "@/assets/icons/knife.svg"


interface BadgeProp {
  skill: String;
}

const Badges = ({skill}: BadgeProp) => {
  return (
    <>
      <div className="flex gap-2 items-center border px-4 py-2 rounded-full border-grey hover:bg-grey hover:bg-opacity-20 hover:transition hover:delay-300">
        <div className="h-6 w-6 rounded-full">
          <Image src={Knife} alt="skill" />
        </div>
        <div className="text-sm font-medium">
          <p>{skill}</p>
        </div>
      </div>
    </>
  );
};

export default Badges;

import Image from "next/image";
import React from "react";
import Hero from "@/assets/icons/a-random-sports-bike-and-a-sports-helmet.svg";
import { Stringifier } from "postcss";

interface BadgeProp {
  skill: String;
}

const Badges = ({skill}: BadgeProp) => {
  return (
    <>
      <div className="flex gap-4 items-center border px-4 py-2 rounded-full border-grey hover:bg-grey hover:bg-opacity-20 hover:transition hover:delay-300">
        <div className="bg-white h-6 w-6 rounded-full">
          <Image src={Hero} alt="skill" />
        </div>
        <div className="text-sm font-medium">
          <p>{skill}</p>
        </div>
      </div>
    </>
  );
};

export default Badges;

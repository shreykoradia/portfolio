import React from "react";
import { experienceData } from "./constants";

interface ExperienceSectionProp {
  title: string;
  points: string[];
}

const ExperienceSection = ({ title, points }: ExperienceSectionProp) => {
  return (
    <div>
      <h3 className="text-sm">{title}</h3>
      <ul className="px-4 py-2">
        {points.map((point, index) => (
          <li className="text-sm list-disc" key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => (
  <div className="text-grey">
    <div className="flex flex-col gap-8">
      {experienceData.map((item, index) => (
        <ExperienceSection
          title={item.title}
          points={item.points}
          key={index}
        />
      ))}
    </div>
  </div>
);

export default Experience;

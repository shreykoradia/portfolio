import React from "react";
import StoryCard from "../shared/StoryCard";
import {
  ExperienceBody,
  ExperienceFooter,
  ExperienceHeader,
  ExperienceIntro,
} from "../shared/constants";

const Experience = () => {
  return (
    <section>
      <h3 className="text-sm text-grey font-medium pb-4">Work Experience:</h3>
      <div className="flex flex-col gap-4 items-start justify-start">
        <StoryCard story={ExperienceIntro} />
        <StoryCard story={ExperienceHeader} />
        <StoryCard story={ExperienceBody} />
        <StoryCard story={ExperienceFooter} />
      </div>
    </section>
  );
};

export default Experience;

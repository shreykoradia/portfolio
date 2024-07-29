import React from "react";
import StoryCard from "../shared/Exprience";

const Experience = () => {
  return (
    <section>
      <h3 className="text-sm text-grey font-medium pb-4">Work Experience:</h3>
      <div className="flex flex-col gap-4 items-start justify-start">
        <StoryCard />
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import Badges from "../shared/Badges";

const Skills = () => {
  return (
    <section>
      <div className="pb-4 text-grey">Skills:</div>
      <div className="flex gap-4 items-center">
        <Badges />
        <Badges />
        <Badges />
      </div>
    </section>
  );
};

export default Skills;

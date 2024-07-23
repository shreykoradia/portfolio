import React from "react";
import Badges from "../shared/Badges";
import { skills } from "../shared/constants";

const Skills = () => {
  return (
    <section>
       <h3 className="text-sm text-grey font-medium pb-4">Skills:</h3>
      <div className="flex gap-4 items-center w-full flex-wrap">
       {skills.map((skill , index) => (
        <Badges skill={skill?.title} key={index} />
       ))}
      </div>
    </section>
  );
};

export default Skills;

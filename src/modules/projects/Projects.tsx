import React from "react";
import ProjectList from "../shared/ListCard";
import { projectLinks } from "../shared/constants";

const Projects = () => {
  return (
    <section>
      <h3 className="text-lg text-grey font-medium pb-4">Projects:</h3>
      {projectLinks.map((links, index) => (
        <ProjectList
          title={links?.title}
          description={links?.description}
          avatar={links?.avatar}
          link={links?.link}
          key={index}
        />
      ))}
    </section>
  );
};

export default Projects;

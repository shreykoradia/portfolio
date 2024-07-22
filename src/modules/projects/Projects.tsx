import React from "react";
import ProjectList from "../shared/ListCard";

const Projects = () => {
  return (
    <section>
      <h3 className="text-lg text-grey font-medium pb-4">Projects:</h3>
      <ProjectList />
      <ProjectList />
      <ProjectList />
    </section>
  );
};

export default Projects;

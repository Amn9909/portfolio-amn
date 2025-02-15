import React from "react";
import { RevilCard } from "./RevilCard";

export interface ProjectInterface {
  id : number,
  description: string;
  title: string;
}
interface ProjectsProps {
  projects: ProjectInterface[];
}

const ProjectsCards = ({ projects }: ProjectsProps) => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
      {projects.map((project) => (
        <RevilCard id={project?.id} title={project?.title} description={project.description} />
      ))}
    </div>
  );
};

export default ProjectsCards;

import React from "react";
import { Link } from "react-router-dom";
import Section from "../section";
import { projects } from "./../../../projects";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Image from "./../image";

const Projects = () => {
  return (
    <Section id="projects" className="mt-16 px-5 md:px-20 min-h-[50vh]">
      <div className="flex items-center text-3xl text-primary-100 justify-center font-bold gap-2 dark:text-gray-100">
        <AiOutlineFundProjectionScreen
          size={34}
          className="dark:text-dark-secondary"
        />
        My Projects
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3">
        {projects.map((project, i) => {
          return (
            <Link
              to={`/project/${i}`}
              className="block hover:scale-110 hover:z-10 cursor-pointer"
              key={i}
            >
              <Image src={project.image} />
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;

import { useParams } from "react-router-dom";
import { projects as project } from "../projects.js";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function Project() {
  const { id } = useParams();
  return (
    <div className="text-primary-100 dark:text-gray-100 pt-12 md:pt-16 pb-8 min-h-screen px-6 md:px-20">
      <div className="pt-12">
        <div className="flex justify-center p-5">
          <img src={project[id].image} className="rounded proj object-cover" />
        </div>
        <div className="mt-5 flex gap-3 justify-center">
          <a href={project[id].link}>
            <BiLinkExternal
              size={25}
              className="cursor-pointer hover:dark:text-dark-secondary"
            />
          </a>
          <a
            href={project[id.git]}
            className="cursor-pointer hover:dark:text-dark-secondary"
          >
            <FaGithub size={25} />
          </a>
        </div>
        <h1 className="text-center mt-5 text-lg">{project[id].name}</h1>
        <div className="text-center mt-5">{project[id].tech2.join(", ")}</div>
        <div className="text-center mt-5">{project[id].description}</div>
      </div>
    </div>
  );
}

export default Project;

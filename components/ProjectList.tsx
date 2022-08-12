import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import defaultImage from "../public/default.jpg";
import RenderLink from "./RenderLink";

interface Project {
    id: number;
    title: string;
    description: string;
    uri: string;
    github_uri: string;
}

interface Props {
    projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
    return (
        <section id="project" className="w-full">
            <div className="my-4 flex w-full flex-col items-center justify-center md:my-8 md:gap-8">
                {projects
                    .slice(0)
                    .reverse()
                    .map((project) => {
                        return (
                            <div
                                key={project.id}
                                className="flex h-80 flex-col justify-center items-center text-center bg-white dark:bg-neutral-900 my-4 rounded-lg p-4 drop-shadow-md md:m-0  w-full md:w-1/2"
                            >
                                <div className="my-2 px-4 transition delay-100 hover:text-green-400">
                                    <RenderLink uri={project.uri} mode="text">
                                        <h1 className="text-xl md:text-2xl">
                                            {project.title}
                                        </h1>
                                        <p className="mt-2">
                                            {project.description}
                                        </p>
                                    </RenderLink>
                                </div>

                                <div className="my-4 flex flex-row justify-center items-center gap-x-4">
                                    <RenderLink
                                        uri={project.github_uri}
                                        mode="icon"
                                    >
                                        <AiFillGithub className="w-5 h-5 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400" />
                                    </RenderLink>
                                    <RenderLink uri={project.uri} mode="icon">
                                        <FaExternalLinkAlt className="w-4 h-4 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400" />
                                    </RenderLink>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default ProjectList;

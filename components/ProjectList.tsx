import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import defaultImage from "../public/default.jpg";

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
                {projects.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className="flex h-4/5 flex-col border-2 justify-end items-center text-center my-4 md:h-80 rounded-lg p-4 drop-shadow-md md:m-0  w-full md:w-1/2"
                        >
                            <div className="flex-col items-center justify-end">
                                <div className="my-2 transition delay-100 hover:text-green-400">
                                    <a
                                        href={project.uri}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <h1 className="text-xl md:text-2xl">
                                            {project.title}
                                        </h1>
                                    </a>
                                    <p>{project.description}</p>
                                </div>

                                <div className="my-4 flex flex-row justify-center gap-x-4">
                                    <a
                                        href={project.github_uri}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <AiFillGithub className="w-4 h-4 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400" />
                                    </a>
                                    <a
                                        href={project.uri}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectList;

import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useImageUrl } from '../utils/useImageUrl';

const ProjectList = ({ projects }: any) => {
	return (
		<section id="project" className="w-full">
			<div className="my-4 flex w-full flex-col items-center justify-center md:my-8 md:gap-24">
				{projects.map((project: any) => {
					let imageUrl = useImageUrl(project.content);
					if (!imageUrl) {
						imageUrl = 'default.jpeg';
					}

					return (
						<div
							key={project.id}
							className="my-4 flex md:h-80 flex-col items-center justify-end rounded-lg p-4 text-white drop-shadow-md md:m-0  w-3/4 sm:w-1/2"
							style={{
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${imageUrl})`,
							}}
						>
							<div className="my-2 transition delay-100 hover:text-green-400">
								<a href={project.hrefExternal}>
									<h1 className="text-xl md:text-2xl">{project.title}</h1>
								</a>
							</div>

							<div className="mt-2 my-4 flex flex-row justify-center gap-x-4">
								<a href={project.href}>
									<AiFillGithub className="delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400" />
								</a>
								<a href={project.hrefExternal}>
									<FaExternalLinkAlt className="delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400" />
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectList;

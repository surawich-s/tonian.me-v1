import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import defaultImage from '../public/default.jpg';

const ProjectList = ({ projects }: any) => {
	return (
		<section id="project" className="w-full">
			<div className="my-4 flex w-full flex-col items-center justify-center md:my-8 lg:my-12 md:gap-24">
				{projects.map((project: any) => {
					const imageUrl = project.featuredImage?.node?.mediaItemUrl || defaultImage;
					return (
						<div
							key={project.id}
							className="relative flex h-auto flex-col justify-end items-center text-center my-4 md:h-80 rounded-lg p-4 text-white drop-shadow-md md:m-0  w-3/4 md:w-1/2"
						>
							<div className="w-64 h-32 z-0 overflow-hidden">
								<Image
									className="rounded-lg brightness-75"
									src={imageUrl}
									alt="project-image"
									layout="fill" // required
									objectFit="cover" // change to suit your needs
									priority={true}
								/>
							</div>

							<div className="flex-col items-center justify-end z-1 absolute">
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
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectList;

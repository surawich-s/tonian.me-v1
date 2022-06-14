import Image from 'next/image';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { generalData } from '../data/portfolio';

const Profile = () => {
	return (
		<section className="mx-8 my-4 flex w-9/12 flex-col items-center justify-center rounded-lg p-4">
			<div className="relative h-32 w-32 rounded-full">
				<Image
					className="rounded-full"
					src={generalData.profileImg}
					alt="project-image"
					layout="fill" // required
					objectFit="cover" // change to suit your needs
				/>
			</div>
			<div className="my-4 dark:text-white">
				<h1 className="text-2xl">{generalData.name}</h1>
				<div className="my-2 flex flex-col items-start justify-start">
					<a href="mailto:surawich.sit@gmail.com" target="_blank" rel="noreferrer">
						<div className="flex flex-row items-center transition delay-150 hover:text-green-700 dark:hover:text-green-400">
							<AiOutlineMail />

							<div className="ml-2 text-xl dark:text-white">{generalData.email}</div>
						</div>
					</a>
					<a href={generalData.githubLink} target="_blank" rel="noreferrer">
						<div className="flex flex-row items-center transition delay-150 hover:text-green-700 dark:hover:text-green-400">
							<AiFillGithub />
							<div className="ml-2 text-xl dark:text-white">{generalData.github}</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Profile;

import Image from 'next/image';
import { useParseHTMLStringToString } from '../utils/useParseHTMLStringToString';
import defaultImage from '../public/default.jpg';

const BlogList = ({ posts }: any) => {
	return (
		<section id="project" className="w-full">
			<ul className="my-4 flex w-full flex-row flex-wrap justify-center md:my-8 md:gap-8">
				{posts.map((post: any) => {
					return (
						<li
							className="my-4 mx-8 h-auto flex w-full flex-col items-center justify-center rounded-lg bg-gray-900 pb-4 text-white drop-shadow-md md:m-0 sm:w-1/2 md:w-1/3"
							key={post.id}
						>
							<div className="relative h-32 w-full">
								<Image
									className="rounded-t-lg"
									src={post.featuredImage?.node?.mediaItemUrl || defaultImage}
									alt="blog-image"
									layout="fill" // required
									objectFit="cover" // change to suit your needs
									priority={true}
								/>
							</div>

							<div className="w-full my-8 px-4 grow">
								<h3 className="text-xl font-bold">{post.title}</h3>

								<p className="text-sm">{useParseHTMLStringToString(post.excerpt)}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default BlogList;

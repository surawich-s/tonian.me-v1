import Image from 'next/image';
import { useParseHTMLStringToString } from '../utils/useParseHTMLStringToString';
import { useImageUrl } from '../utils/useImageUrl';

const BlogList = ({ posts }: any) => {
	return (
		<section id="project" className="w-full">
			<ul className="my-4 flex w-full flex-row flex-wrap justify-center md:my-8 md:gap-8">
				{posts.map((post: any) => {
					const imageUrl = useImageUrl(post.content);
					return (
						<li
							className="my-4 mx-8 h-auto flex w-full flex-col items-center justify-center rounded-lg bg-gray-900 pb-4 text-white drop-shadow-md md:m-0 sm:w-1/2 md:w-1/3"
							key={post.id}
						>
							<div className="relative h-32 w-full">
								<Image
									className=" rounded-t-lg"
									src={imageUrl || '/../public/default.jpeg'}
									alt="blog-image"
									layout="fill" // required
									objectFit="cover" // change to suit your needs
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

import Image from "next/image";
import { useParseHTMLStringToString } from "../utils/useParseHTMLStringToString";
import defaultImage from "../public/default.jpg";

const BlogList = ({ posts }: any) => {
    return (
        <section id="project" className="w-full">
            <ul className="my-4 flex w-full flex-col items-center justify-center md:my-8 md:gap-8">
                {posts.map((post: any) => {
                    return (
                        <li
                            className="overflow-hidden my-4 mx-8 h-auto flex w-full flex-col items-center justify-center rounded-lg bg-gray-900 pb-4 text-white drop-shadow-md md:m-0 md:w-1/2"
                            key={post.id}
                        >
                            <div className="relative block w-full h-48 z-0">
                                <Image
                                    className="relative w-full h-full rounded-t-lg hover:scale-110 ease-in duration-300"
                                    src={
                                        post.featuredImage?.node
                                            ?.mediaItemUrl || defaultImage
                                    }
                                    alt="blog-image"
                                    layout="fill" // required
                                    objectFit="cover" // change to suit your needs
                                    priority={true}
                                />
                            </div>

                            <div className="w-full my-8 px-4 grow basis-auto">
                                <h3 className="text-xl font-bold">
                                    {post.title}
                                </h3>

                                <p className="text-sm">
                                    {useParseHTMLStringToString(post.excerpt)}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default BlogList;

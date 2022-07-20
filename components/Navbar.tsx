import Link from "next/link";

const Navbar = () => {
    const navigation = [
        { id: 1, name: "Blog", href: "/blog" },
        { id: 2, name: "Me", href: "/me" },
    ];

    return (
        <nav
            id="navbar"
            className="top-0 flex flex-col sm:flex-row items-center justify-center px-4 py-4 bg-neutral-900"
        >
            <Link href="/">
                <a className="dark:text-white flex-1 mx-auto mb-4 sm:mb-0 sm:mr-auto sm:ml-4 text-3xl">
                    <h1>tonian.me</h1>
                </a>
            </Link>

            <div className="gap-x-4 flex flex-row items-center justify-center">
                {navigation.map((item) => {
                    const { id, href, name } = item;
                    return (
                        <Link href={href} key={id}>
                            <a className="px-2 text-xl dark:text-white transition delay-150 duration-300 ease-in hover:scale-110  hover:text-green-700 dark:hover:text-green-400 md:text-2xl">
                                {name}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;

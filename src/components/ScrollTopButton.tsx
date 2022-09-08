import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const ScrollTopButton = () => {
    const [scrollY, setScrollY] = useState(0);
    const [outerHeight, setOuterHeight] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleHeight = () => {
            setOuterHeight(window.outerHeight);
        };

        handleScroll();
        handleHeight();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a href="#top">
            <div className={scrollY > outerHeight ? "flex" : "hidden"}>
                <button className="fixed bottom-0 right-0 z-50 mx-4 my-12 rounded-lg border-2  p-2 border-black dark:border-white transition delay-150 duration-300 hover:scale-110 hover:border-green-400 dark:hover:border-green-400 hover:text-green-400">
                    <AiOutlineArrowUp className="h-4 w-4" />
                </button>
            </div>
        </a>
    );
};

export default ScrollTopButton;

import ScrollTopButton from "./ScrollTopButton";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { theme, setTheme } = useTheme();
    return (
        <main className="w-full relative">
            <button className="absolute top-0 right-0 p-4">
                {theme === "dark" ? (
                    <MdOutlineDarkMode
                        className="w-8 h-8 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400"
                        onClick={() => setTheme("light")}
                    />
                ) : (
                    <MdOutlineLightMode
                        className="w-8 h-8 delay-50 transition duration-300 ease-in hover:scale-125 hover:text-green-400"
                        onClick={() => setTheme("dark")}
                    />
                )}
            </button>
            <div className="mx-auto flex flex-1 flex-col items-center text-center w-4/5 md:w-3/4">
                {children}
                <ScrollTopButton />
            </div>
        </main>
    );
};

export default Layout;

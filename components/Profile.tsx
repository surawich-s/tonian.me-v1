import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Profile = () => {
    return (
        <section className="mx-8 my-4 flex w-9/12 flex-col items-center justify-center rounded-lg p-4">
            <h1 className="text-6xl tracking-wide my-8 transition delay-150">
                Surawich Sittisarn
            </h1>
            <div className="my-2 flex flex-row gap-x-6 items-start justify-start">
                <a
                    href="mailto:surawich.sit@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="flex flex-row items-center transition delay-150 hover:text-green-700 dark:hover:text-green-400">
                        <AiOutlineMail className="w-8 h-8" />
                    </div>
                </a>
                <a
                    href="https://github.com/surawich-s"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="flex flex-row items-center transition delay-150 hover:text-green-700 dark:hover:text-green-400">
                        <AiFillGithub className="w-8 h-8" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Profile;

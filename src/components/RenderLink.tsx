interface RenderLinkProps {
    uri: string;
    children: React.ReactNode;
    mode: "text" | "icon";
}

const RenderLink = ({ uri, mode, children }: RenderLinkProps) => {
    if (uri.length === 0 && mode === "icon") {
        return <></>;
    } else if (uri.length === 0) {
        return <>{children}</>;
    }
    return (
        <a href={uri} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default RenderLink;

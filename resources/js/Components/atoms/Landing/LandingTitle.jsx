export default function LandingTitle({
    children,
    color = "text-black",
    align = "text-center",
}) {
    return (
        <h1
            className={`font-bold md:text-5xl text-3xl ${align} capitalize ${color}`}
        >
            {children}
        </h1>
    );
}

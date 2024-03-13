export default function LandingTitle({
    children,
    color = "text-black",
    align = "text-center",
}) {
    return (
        <h1 className={`font-bold text-5xl ${align} capitalize ${color}`}>
            {children}
        </h1>
    );
}

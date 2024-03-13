export default function Description({
    desc,
    size = "text-lg",
    align = "text-left",
    color = "text-gray-500",
}) {
    return <p className={`${size} ${align} ${color}`}>{desc}</p>;
}

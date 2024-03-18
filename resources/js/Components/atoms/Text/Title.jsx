export default function Title({
    title,
    size = "text-2xl",
    color = "text-black",
}) {
    return <h4 className={`font-semibold ${size} ${color}`}>{title}</h4>;
}

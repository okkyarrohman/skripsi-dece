export default function MateriTitle({
    number,
    title,
    size = "text-xl",
    numberSize = "text-2xl",
    numberContainer = "size-[3.25rem]",
}) {
    return (
        <div className="flex items-center gap-3">
            <div
                className={`p-2 bg-orange-200 rounded-2xl ${numberContainer} flex items-center justify-center`}
            >
                <p className={`${numberSize} font-semibold text-orange-500`}>
                    {number}
                </p>
            </div>
            <h1 className={`font-medium ${size}`}>{title}</h1>
        </div>
    );
}

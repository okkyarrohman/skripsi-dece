export default function Status({
    active = false,
    activeStatus,
    nonactiveStatus,
}) {
    return (
        <div
            className={`rounded-full w-fit py-1 px-5 mx-auto border flex items-center justify-center gap-2 ${
                active ? "border-green-500" : "border-red-500"
            }`}
        >
            {active ? (
                <div className="size-3 rounded-full bg-green-500"></div>
            ) : (
                <div className="size-3 rounded-full bg-red-500"></div>
            )}
            <span
                className={`${
                    active ? "text-green-500" : "text-red-500"
                } text-xs`}
            >
                {active ? activeStatus : nonactiveStatus}
            </span>
        </div>
    );
}

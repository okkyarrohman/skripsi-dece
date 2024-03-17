import { formattedNumber } from "@/utils/helper";

export default function StepIndex({ number, step, active = false }) {
    return (
        <div
            className={`${
                active && "bg-orange-500"
            } flex gap-2 p-3 rounded-xl w-fit max-w-60`}
        >
            <span
                className={`${
                    active
                        ? "text-orange-500 bg-orange-200"
                        : "text-gray-400 bg-gray-200"
                } w-14 md:w-16 text-2xl font-semibold p-3 rounded-xl flex items-center justify-center`}
            >
                {formattedNumber(number)}
            </span>
            <span
                className={`${active && "text-white"} text-lg md:block hidden`}
            >
                <p className="font-medium">Step {number}</p>
                <p className="font-semibold line-clamp-1">{step}</p>
            </span>
        </div>
    );
}

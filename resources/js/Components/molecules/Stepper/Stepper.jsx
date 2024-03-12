import { useState } from "react";

export default function Stepper({ step }) {
    return (
        <ul className="flex justify-between items-center">
            <li
                className={`${
                    step >= 1 && "bg-orange-500"
                } flex gap-2 p-3 rounded-xl max-w-60`}
            >
                <span
                    className={`${
                        step >= 1
                            ? "text-orange-500 bg-orange-200"
                            : "text-gray-400 bg-gray-200"
                    } w-14 md:w-16 text-2xl font-semibold p-3 rounded-xl flex items-center justify-center`}
                >
                    01
                </span>
                <span
                    className={`${
                        step >= 1 && "text-white"
                    } text-lg md:block hidden`}
                >
                    <p className="font-medium">Step 1</p>
                    <p className="font-semibold line-clamp-1">
                        Deskripsi Tugas
                    </p>
                </span>
            </li>
            <li
                className={`${
                    step >= 2 ? "bg-orange-500" : "bg-gray-400"
                } h-0.5 w-1/5 mx-4 md:block hidden`}
            ></li>
            <li
                className={`${
                    step >= 2 && "bg-orange-500"
                } flex gap-2 p-3 rounded-xl max-w-60`}
            >
                <span
                    className={`${
                        step >= 2
                            ? "text-orange-500 bg-orange-200"
                            : "text-gray-400 bg-gray-200"
                    } w-14 md:w-16 text-2xl font-semibold p-3 rounded-xl flex items-center justify-center`}
                >
                    02
                </span>
                <span
                    className={`${
                        step >= 2 && "text-white"
                    } text-lg md:block hidden`}
                >
                    <p className="font-medium">Step 2</p>
                    <p className="font-semibold line-clamp-1">
                        Perencanaan Tugas
                    </p>
                </span>
            </li>
            <li
                className={`${
                    step == 3 ? "bg-orange-500" : "bg-gray-400"
                } h-0.5 w-1/5 mx-4 md:block hidden`}
            ></li>
            <li
                className={`${
                    step == 3 && "bg-orange-500"
                } flex gap-2 p-3 rounded-xl max-w-60`}
            >
                <span
                    className={`${
                        step == 3
                            ? "text-orange-500 bg-orange-200"
                            : "text-gray-400 bg-gray-200"
                    } w-14 md:w-16 text-2xl font-semibold p-3 rounded-xl flex items-center justify-center`}
                >
                    03
                </span>
                <span
                    className={`${
                        step == 3 && "text-white"
                    } text-lg md:block hidden`}
                >
                    <p className="font-medium">Step 3</p>
                    <p className="font-semibold line-clamp-1">
                        Pembuatan Tugas
                    </p>
                </span>
            </li>
        </ul>
    );
}

import StepIndex from "@/Components/atoms/Stepper/StepIndex";
import { useState } from "react";

export default function Stepper({ step }) {
    return (
        <ul className="flex justify-between items-center">
            <StepIndex active={step >= 1} number={1} step="Deskripsi Tugas" />
            <li
                className={`${
                    step >= 2 ? "bg-orange-500" : "bg-gray-400"
                } h-0.5 w-1/5 mx-4 md:block hidden`}
            ></li>
            <StepIndex active={step >= 2} number={2} step="Perencanaan Tugas" />
            <li
                className={`${
                    step == 3 ? "bg-orange-500" : "bg-gray-400"
                } h-0.5 w-1/5 mx-4 md:block hidden`}
            ></li>
            <StepIndex active={step >= 3} number={3} step="Pembuatan Tugas" />
        </ul>
    );
}

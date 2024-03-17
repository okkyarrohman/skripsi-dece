import { useState } from "react";

export default function DropdownContainer({
    onClick,
    selectedOption,
    unselectedOption,
    opened,
    children,
}) {
    return (
        <div className="relative">
            <button
                type="button"
                onClick={onClick}
                className={`bg-gray-50 border border-gray-400 rounded-lg focus:ring-orange-500 focus:border-2 focus:border-orange-500 flex items-center justify-between w-full px-3 py-2.5 text-left ${
                    selectedOption ? "text-black" : "text-gray-500"
                }`}
            >
                {selectedOption ? selectedOption : unselectedOption}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M12 16.7999C11.3 16.7999 10.6 16.5299 10.07 15.9999L3.55002 9.47989C3.26002 9.18989 3.26002 8.70989 3.55002 8.41989C3.84002 8.12989 4.32002 8.12989 4.61002 8.41989L11.13 14.9399C11.61 15.4199 12.39 15.4199 12.87 14.9399L19.39 8.41989C19.68 8.12989 20.16 8.12989 20.45 8.41989C20.74 8.70989 20.74 9.18989 20.45 9.47989L13.93 15.9999C13.4 16.5299 12.7 16.7999 12 16.7999Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            {opened && (
                <ul className="relative mt-1 max-h-40 w-full rounded-lg border border-gray-400 bg-gray-50 *:px-3 *:py-2.5 hover:border-2 hover:border-orange-500 overflow-hidden overflow-y-auto">
                    {children}
                </ul>
            )}
        </div>
    );
}

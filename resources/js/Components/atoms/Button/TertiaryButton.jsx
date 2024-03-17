import { Link } from "@inertiajs/react";

export default function TertiaryButton({
    full = false,
    size = "text-base",
    bgColor = "bg-orange-300",
    style = "normal",
    children,
    disabled,
    type,
    onClick,
    className = "",
    ...props
}) {
    let buttonStyle;
    switch (style) {
        case "small":
            buttonStyle = "py-2 px-5";
            break;
        case "normal":
            buttonStyle = "py-4 px-8";
            break;
        default:
            buttonStyle = "py-4 px-8";
            break;
    }

    return (
        <button
            {...props}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={
                `w-${full ? "full" : "fit"} ${size} ${bgColor} ${buttonStyle} ${
                    disabled ? "bg-opacity-50" : ""
                } font-medium text-black flex items-center justify-center gap-2 rounded-xl ` +
                className
            }
        >
            {children}
        </button>
    );
}

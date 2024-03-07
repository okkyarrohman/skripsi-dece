import { Link } from "@inertiajs/react";

export default function SecondaryButton({
    full = false,
    size = "text-base",
    borderColor = "border-orange-500",
    fontColor = "text-orange-500",
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
                `w-${
                    full ? "full" : "fit"
                } ${size} ${borderColor} ${fontColor} ${buttonStyle} ${
                    disabled ? "bg-opacity-50" : ""
                } font-medium bg-white flex items-center justify-center gap-2 rounded-xl border-2 ` +
                className
            }
        >
            {children}
        </button>
    );
}

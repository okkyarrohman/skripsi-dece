export default function InputText({
    name,
    placeholder,
    icon = false,
    autoFocus = false,
    type = "text",
    value,
    disabled = false,
    onChange,
    children,
}) {
    return (
        <div className="relative">
            {icon && (
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {children}
                </div>
            )}
            <input
                type={type}
                id={name}
                name={name}
                autoFocus={autoFocus}
                value={value}
                disabled={disabled}
                className={`bg-gray-50 border rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ${
                    icon ? "ps-12 pe-3" : "px-3"
                } ${
                    disabled
                        ? "border-gray-300 text-gray-400"
                        : "border-gray-400"
                } py-2.5`}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

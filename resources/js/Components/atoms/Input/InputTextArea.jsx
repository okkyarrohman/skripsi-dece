export default function InputTextArea({
    name,
    placeholder,
    icon = false,
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
            <textarea
                id={name}
                name={name}
                rows="7"
                disabled={disabled}
                className={`bg-gray-50 border border-gray-400 rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ${
                    icon ? "ps-12" : "px-3"
                } pe-3 py-2.5`}
                placeholder={placeholder}
                onChange={onChange}
            >
                {value}
            </textarea>
        </div>
    );
}

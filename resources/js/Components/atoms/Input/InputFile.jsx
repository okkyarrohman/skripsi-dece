export default function InputFile({
    name,
    icon = false,
    file,
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
                type="file"
                id={name}
                name={name}
                className={`bg-gray-50 border border-gray-400 rounded-lg focus:ring-orange-500 focus:border-orange-500 focus:outline-orange-500 block w-full file:font-medium file:rounded file:border-none file:mr-4 file:bg-gray-200 ${
                    icon ? "ps-12" : "px-3"
                } pe-3 py-2.5`}
                onChange={onChange}
            />
            <span>
                File : {file == null ? "Belum Ada Yang Diupload" : file}
            </span>
        </div>
    );
}

export default function MateriTitle({ number, title }) {
    return (
        <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-200 rounded-2xl size-[3.25rem] flex items-center justify-center">
                <p className="text-2xl font-semibold text-orange-500">
                    {number}
                </p>
            </div>
            <h1 className="font-medium text-xl">{title}</h1>
        </div>
    );
}

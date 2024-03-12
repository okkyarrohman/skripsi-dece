import Title from "@/Components/atoms/Text/Title";

export default function IconTitle({ size = "text-xl", title, children }) {
    return (
        <div className="flex md:flex-row flex-col items-center gap-2">
            <div className="size-8 rounded-xl bg-orange-200 flex items-center justify-center">
                {children}
            </div>
            <Title size={size} title={title} />
        </div>
    );
}

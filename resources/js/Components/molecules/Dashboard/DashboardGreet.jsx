import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";

export default function DashboardGreet({ userLogin, desc, icon = false }) {
    return (
        <div className="p-6 rounded-md bg-gray-50 w-full flex justify-between items-center">
            <div className="space-y-4">
                <div className="line-clamp-2">
                    <Title
                        title={`Hai ${userLogin.name}`}
                        color="text-orange-500"
                        size="text-[2rem]"
                    />
                </div>
                <Description desc={desc} />
            </div>
            {icon && (
                <img
                    src="/assets/greet-icon.png"
                    alt="Icon"
                    className="size-32"
                />
            )}
        </div>
    );
}

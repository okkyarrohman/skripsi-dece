import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";

export default function DashboardGreet({ userLogin }) {
    return (
        <div className="p-6 rounded-md bg-gray-50 space-y-4 w-full">
            <div className="line-clamp-2">
                <Title
                    title={`Hai ${userLogin.name}`}
                    color="text-orange-500"
                    size="text-[2rem]"
                />
            </div>
            <Description desc="Semoga hari belajarmu menyenangkan!" />
        </div>
    );
}

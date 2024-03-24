import DashboardGreet from "@/Components/molecules/Dashboard/DashboardGreet";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout title="Dashboard" userLogin={auth.user}>
            <div className="space-y-6">
                <DashboardGreet
                    icon
                    userLogin={auth.user}
                    desc="Siap menginspirasi murid-murid anda hari ini?"
                />
                <div className="p-6 rounded-xl space-y-6 bg-gray-50 h-[40rem]"></div>
            </div>
        </AuthenticatedLayout>
    );
}

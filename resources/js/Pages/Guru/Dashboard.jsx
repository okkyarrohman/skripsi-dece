import DashboardGreet from "@/Components/molecules/Dashboard/DashboardGreet";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const { kelompoks } = usePage().props;

    console.log(kelompoks);

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

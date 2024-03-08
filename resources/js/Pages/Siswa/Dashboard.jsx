import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout title="Dashboard" userLogin={auth.user}>
            <h1>Dashboard</h1>
        </AuthenticatedLayout>
    );
}

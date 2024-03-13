import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout userLogin={auth.user}>
            Dashboard
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriIndex({ auth }) {
    return (
        <AuthenticatedLayout title="Materi" userLogin={auth.user}>
            Materi
        </AuthenticatedLayout>
    );
}

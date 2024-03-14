import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AbsenIndex({ auth }) {
    return (
        <AuthenticatedLayout title="Absen" userLogin={auth.user}>
            Absen
        </AuthenticatedLayout>
    );
}

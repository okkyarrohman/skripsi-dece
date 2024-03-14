import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function KelompokIndex({ auth }) {
    return (
        <AuthenticatedLayout title="Kelompok" userLogin={auth.user}>
            Kelompok
        </AuthenticatedLayout>
    );
}

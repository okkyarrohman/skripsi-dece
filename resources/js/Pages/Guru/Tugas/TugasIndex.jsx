import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TugasIndex({ auth }) {
    return (
        <AuthenticatedLayout title="Tugas Kelompok" userLogin={auth.user}>
            Tugas Kelompok
        </AuthenticatedLayout>
    );
}

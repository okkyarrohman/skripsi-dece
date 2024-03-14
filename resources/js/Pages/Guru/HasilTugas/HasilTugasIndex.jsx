import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function HasilTugasIndex({ auth }) {
    return (
        <AuthenticatedLayout title="Hasil Tugas" userLogin={auth.user}>
            Hasil Tugas
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ReferensiIndex({ auth }) {
    return (
        <AuthenticatedLayout title="Referensi" userLogin={auth.user}>
            Referensi
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ReferensiIndex({ auth }) {
    return (
        <AuthenticatedLayout userLogin={auth.user} title="Referensi">
            Index
        </AuthenticatedLayout>
    );
}

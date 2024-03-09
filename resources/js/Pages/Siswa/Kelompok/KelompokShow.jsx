import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function KelompokShow({ auth }) {
    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            Kelompok Show
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ReferensiShow({ auth }) {
    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            Show
        </AuthenticatedLayout>
    );
}

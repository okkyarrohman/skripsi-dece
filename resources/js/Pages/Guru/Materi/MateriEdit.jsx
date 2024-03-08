import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriEdit({ auth }) {
    return (
        <AuthenticatedLayout userLogin={auth.user}>Edit</AuthenticatedLayout>
    );
}

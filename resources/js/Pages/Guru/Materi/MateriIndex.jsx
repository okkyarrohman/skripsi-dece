import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriIndex({ auth }) {
    return (
        <AuthenticatedLayout userLogin={auth.user}>Index</AuthenticatedLayout>
    );
}

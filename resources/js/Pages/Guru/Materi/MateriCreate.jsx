import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MateriCreate({ auth }) {
    return (
        <AuthenticatedLayout userLogin={auth.user}>Create</AuthenticatedLayout>
    );
}

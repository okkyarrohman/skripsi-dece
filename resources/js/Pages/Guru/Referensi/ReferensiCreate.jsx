import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ReferensiCreate({ auth }) {
    return (
        <AuthenticatedLayout userLogin={auth.user}>Create</AuthenticatedLayout>
    );
}

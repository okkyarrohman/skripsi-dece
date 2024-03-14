import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ReferensiEdit({ auth }) {
    return (
        <AuthenticatedLayout userLogin={auth.user}>Edit</AuthenticatedLayout>
    );
}

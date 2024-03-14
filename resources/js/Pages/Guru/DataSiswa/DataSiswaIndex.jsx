import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function DataSiswaIndex({ auth }) {
    return (
        <AuthenticatedLayout title="Data Siswa" userLogin={auth.user}>
            Data Siswa
        </AuthenticatedLayout>
    );
}

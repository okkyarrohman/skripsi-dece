import SiswaLayout from "@/Layouts/Siswa/SiswaLayout";

export default function Dashboard({ auth }) {
    return (
        <SiswaLayout title="Dashboard" userLogin={auth.user}>
            <h1>Dashboard</h1>
        </SiswaLayout>
    );
}

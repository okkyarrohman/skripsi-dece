import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function HasilTugasIndex({ auth }) {
    const { kelompoks } = usePage().props;

    const tableTitle = ["Nomor", "Nama Kelompok", "Total Tugas", "Action"];

    return (
        <AuthenticatedLayout title="Hasil Tugas" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50">
                <TableContainer>
                    <TableHead datas={tableTitle} />
                    <TableBody>
                        {kelompoks.map((kelompok, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData children={index + 1} />
                                    <TableData children={kelompok.name} />
                                    <TableData
                                        children={`${kelompok.tugases.length} Tugas`}
                                    />
                                    <TableData
                                        children={
                                            <PrimaryButton
                                                style="small"
                                                className="mx-auto"
                                            >
                                                Detail
                                            </PrimaryButton>
                                        }
                                    />
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </TableContainer>
            </div>
        </AuthenticatedLayout>
    );
}

import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import NoData from "@/Components/molecules/NoData/NoData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";

export default function TugasAnswerIndex({ auth }) {
    const { kelompoks } = usePage().props;

    const tableTitle = ["Nomor", "Nama Kelompok", "Total Tugas", "Action"];

    return (
        <AuthenticatedLayout title="Hasil Tugas" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50">
                {kelompoks.length == 0 ? (
                    <NoData
                        title="Belum Terdapat Kelompok Untuk Melihat Hasil Tugas"
                        desc="Tambahkan kelompk segera!"
                    />
                ) : (
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
                                                <Link
                                                    href={route(
                                                        "tugas-answer-guru.show",
                                                        kelompok.id
                                                    )}
                                                >
                                                    <PrimaryButton
                                                        style="small"
                                                        className="mx-auto"
                                                    >
                                                        Detail
                                                    </PrimaryButton>
                                                </Link>
                                            }
                                        />
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </TableContainer>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

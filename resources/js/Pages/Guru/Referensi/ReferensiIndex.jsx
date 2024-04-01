import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import ActionButton from "@/Components/molecules/Button/ActionButton";
import { Link, usePage } from "@inertiajs/react";
import { formattedDate } from "@/utils/helper";
import NoData from "@/Components/molecules/NoData/NoData";

export default function ReferensiIndex({ auth }) {
    const { referensis } = usePage().props;

    const tableTitle = ["Nomor", "Judul Referensi", "Tanggal Dibuat", "Action"];

    return (
        <AuthenticatedLayout title="Referensi" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                <Link href={route("referensi-guru.create")}>
                    <PrimaryButton className="ml-auto">
                        Tambah Referensi
                    </PrimaryButton>
                </Link>
                {referensis.length == 0 ? (
                    <NoData
                        title="Belum Terdapat Referensi"
                        desc="Tambahkan referensi segera!"
                    />
                ) : (
                    <TableContainer>
                        <TableHead datas={tableTitle} />
                        <TableBody>
                            {referensis.map((referensi, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableData children={index + 1} />
                                        <TableData
                                            children={referensi.name}
                                            align="text-left"
                                            nowrap
                                        />
                                        <TableData
                                            children={formattedDate(
                                                referensi.created_at
                                            )}
                                        />
                                        <TableData
                                            children={
                                                <ActionButton
                                                    onEdit={route(
                                                        "referensi-guru.edit",
                                                        referensi.id
                                                    )}
                                                    onDelete={route(
                                                        "referensi-guru.destroy",
                                                        referensi.id
                                                    )}
                                                />
                                            }
                                            nowrap
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

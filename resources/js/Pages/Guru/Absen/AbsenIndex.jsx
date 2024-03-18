import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import Status from "@/Components/atoms/Status/Status";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import ActionButton from "@/Components/molecules/Button/ActionButton";
import NoData from "@/Components/molecules/NoData/NoData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { Link, usePage } from "@inertiajs/react";

export default function AbsenIndex({ auth }) {
    const { absens } = usePage().props;

    const tableTitle = ["Nama", "Tanggal Dibuat", "Status", "Action"];

    return (
        <AuthenticatedLayout title="Absensi" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                <Link href={route("absen-guru.create")}>
                    <PrimaryButton className="ml-auto">
                        Tambah Absensi
                    </PrimaryButton>
                </Link>
                {absens.length == 0 ? (
                    <NoData
                        title="Belum Terdapat Absensi"
                        desc="Tambahkan absensi segera!"
                    />
                ) : (
                    <TableContainer>
                        <TableHead datas={tableTitle} />
                        <TableBody>
                            {absens.map((absen, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableData
                                            children={absen.name}
                                            align="text-left"
                                        />
                                        <TableData
                                            children={formattedDate(
                                                absen.created_at
                                            )}
                                        />
                                        <TableData
                                            children={
                                                <Status
                                                    active={
                                                        absen.is_active == "Y"
                                                    }
                                                    activeStatus="Aktif"
                                                    nonactiveStatus="Nonaktif"
                                                />
                                            }
                                        />
                                        <TableData
                                            children={
                                                <ActionButton
                                                    view
                                                    onEdit={route(
                                                        "absen-guru.edit",
                                                        absen.id
                                                    )}
                                                    onView={route(
                                                        "absen-guru.show",
                                                        absen.id
                                                    )}
                                                    onDelete={route(
                                                        "absen-guru.destroy",
                                                        absen.id
                                                    )}
                                                />
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

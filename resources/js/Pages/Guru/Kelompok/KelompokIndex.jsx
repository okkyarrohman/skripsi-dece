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
import { Link, usePage } from "@inertiajs/react";

export default function KelompokIndex({ auth }) {
    const { kelompoks } = usePage().props;

    const tableTitle = ["Nomor", "Nama Kelompok", "Status Kelompok", "Action"];

    return (
        <AuthenticatedLayout title="Kelompok" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                <Link href={route("kelompok-guru.create")}>
                    <PrimaryButton className="ml-auto">
                        Tambah Kelompok
                    </PrimaryButton>
                </Link>

                {kelompoks.length == 0 ? (
                    <NoData
                        title="Belum Terdapat Kelompok"
                        desc="Tambahkan kelompok segera!"
                    />
                ) : (
                    <TableContainer>
                        <TableHead datas={tableTitle} />
                        <TableBody>
                            {kelompoks.map((kelompok, index) => {
                                const memberOnline = kelompok.members.filter(
                                    (member) => member.session_login_at != null
                                );

                                return (
                                    <TableRow key={index}>
                                        <TableData children={index + 1} />
                                        <TableData
                                            children={kelompok.name}
                                            align="text-left"
                                        />
                                        <TableData
                                            children={
                                                <Status
                                                    active={
                                                        kelompok.is_active ==
                                                        "Y"
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
                                                        "kelompok-guru.edit",
                                                        kelompok.id
                                                    )}
                                                    onView={route(
                                                        "kelompok-guru.show",
                                                        kelompok.id
                                                    )}
                                                    onDelete={route(
                                                        "kelompok-guru.destroy",
                                                        kelompok.id
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

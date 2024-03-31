import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import Status from "@/Components/atoms/Status/Status";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import NoData from "@/Components/molecules/NoData/NoData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";

export default function DataSiswaIndex({ auth }) {
    const { users } = usePage().props;

    const sortedUsers = users.sort((a, b) => a.absen - b.absen);

    const tableTitle = ["Nomor Absen", "Nama", "Status Login", "Action"];

    return (
        <AuthenticatedLayout title="Data Siswa" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50">
                {users.length == 0 ? (
                    <NoData title="Belum Terdapat Siswa" />
                ) : (
                    <TableContainer>
                        <TableHead datas={tableTitle} />
                        <TableBody>
                            {sortedUsers.map((user, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableData children={user.absen} />
                                        <TableData
                                            children={user.name}
                                            align="text-left"
                                        />
                                        <TableData
                                            children={
                                                <Status
                                                    active={
                                                        user.session_login_at
                                                    }
                                                    activeStatus="Online"
                                                    nonactiveStatus="Offline"
                                                />
                                            }
                                        />
                                        <TableData
                                            children={
                                                <Link
                                                    href={route(
                                                        "data-siswa-guru.show",
                                                        user.id
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

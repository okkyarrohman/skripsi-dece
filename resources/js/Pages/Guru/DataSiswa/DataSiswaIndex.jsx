import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import Status from "@/Components/atoms/Status/Status";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function DataSiswaIndex({ auth }) {
    const { users } = usePage().props;

    console.log(users);

    const tableTitle = ["Nomor Absen", "Nama", "Status Login", "Action"];

    return (
        <AuthenticatedLayout title="Data Siswa" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50">
                <TableContainer>
                    <TableHead datas={tableTitle} />
                    <TableBody>
                        {users.map((user, index) => {
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
                                                active={user.session_login_at}
                                                activeStatus="Online"
                                                nonactiveStatus="Offline"
                                            />
                                        }
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

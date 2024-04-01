import Status from "@/Components/atoms/Status/Status";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { usePage } from "@inertiajs/react";

export default function AbsenShow({ auth }) {
    const { users, absens } = usePage().props;

    const tableTitle = [
        "Nomor",
        "Nama Siswa",
        "Nama Kelompok",
        "Status Absensi",
    ];

    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                <IconTitle
                    title={`Kehadiran ${formattedDate(absens.meet_date)}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <path
                            d="M9.00002 4.12723V15.7854C8.87638 15.7854 8.74548 15.7636 8.64366 15.7054L8.61457 15.6909C7.2182 14.9272 4.78184 14.1272 3.20366 13.9163L2.99275 13.8872C2.29457 13.8 1.72729 13.1454 1.72729 12.4472V3.66178C1.72729 2.79632 2.43275 2.14178 3.2982 2.21451C4.82548 2.33814 7.1382 3.10905 8.43275 3.91632L8.61457 4.02541C8.72366 4.09087 8.86184 4.12723 9.00002 4.12723Z"
                            fill="#FDAC74"
                        />
                        <path
                            d="M16.2727 3.66903V12.4472C16.2727 13.1454 15.7055 13.7999 15.0073 13.8872L14.7673 13.9163C13.1818 14.1272 10.7382 14.9345 9.34182 15.7054C9.24727 15.7636 9.13091 15.7854 9 15.7854V4.12722C9.13818 4.12722 9.27636 4.09085 9.38545 4.0254L9.50909 3.9454C10.8036 3.13085 13.1236 2.35267 14.6509 2.22176H14.6945C15.56 2.14903 16.2727 2.79631 16.2727 3.66903Z"
                            fill="#F97316"
                        />
                        <path
                            d="M5.90911 6.99276H4.27275C3.97457 6.99276 3.72729 6.74549 3.72729 6.44731C3.72729 6.14913 3.97457 5.90186 4.27275 5.90186H5.90911C6.20729 5.90186 6.45457 6.14913 6.45457 6.44731C6.45457 6.74549 6.20729 6.99276 5.90911 6.99276Z"
                            fill="#F97316"
                        />
                        <path
                            d="M6.45457 9.17453H4.27275C3.97457 9.17453 3.72729 8.92725 3.72729 8.62907C3.72729 8.33089 3.97457 8.08362 4.27275 8.08362H6.45457C6.75275 8.08362 7.00002 8.33089 7.00002 8.62907C7.00002 8.92725 6.75275 9.17453 6.45457 9.17453Z"
                            fill="#F97316"
                        />
                    </svg>
                </IconTitle>
                <TableContainer>
                    <TableHead datas={tableTitle} />
                    <TableBody>
                        {/* {absens.presents.map((user, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData children={index + 1} />
                                    <TableData
                                        children={user.users.name}
                                        align="text-left"
                                    />
                                    <TableData
                                        children={user.users.kelompoks.name}
                                    />
                                    <TableData
                                        children={
                                            <Status
                                                activeStatus="Hadir"
                                                nonactiveStatus="Tidak Hadir"
                                                active
                                            />
                                        }
                                    />
                                </TableRow>
                            );
                        })} */}
                        {users.map((user, index) => {
                            const userPresent = absens.presents.find(
                                (absen) => absen.user_id == user.id
                            );

                            return (
                                <TableRow key={index}>
                                    <TableData children={index + 1} />
                                    <TableData
                                        children={user.name}
                                        align="text-left"
                                    />
                                    <TableData
                                        children={
                                            user.kelompok_id
                                                ? user.kelompoks.name
                                                : "Belum Gabung Kelompok"
                                        }
                                    />
                                    <TableData
                                        children={
                                            <Status
                                                activeStatus="Hadir"
                                                nonactiveStatus="Tidak Hadir"
                                                active={userPresent}
                                            />
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

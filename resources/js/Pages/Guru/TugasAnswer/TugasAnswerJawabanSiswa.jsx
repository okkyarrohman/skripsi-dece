import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";

export default function TugasAnswerJawabanSiswa({ auth }) {
    const { kelompoks, answers } = usePage().props;

    const filteredKelompoks = kelompoks.find(
        (kelompok) => kelompok.id == answers[0].users.kelompok_id
    );

    const tableTitle = ["Nomor", "Nama", "Nilai", "Action"];

    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <IconTitle
                    title={`Hasil Tugas Kelompok ${filteredKelompoks.name}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <path
                            opacity="0.4"
                            d="M15.393 10.9641C14.5784 11.5095 13.4366 11.7131 12.3821 11.575C12.6584 10.9786 12.8039 10.3168 12.8112 9.61861C12.8112 8.89134 12.6512 8.20043 12.3457 7.59679C13.4221 7.45134 14.5639 7.65496 15.3857 8.20042C16.5348 8.95678 16.5348 10.2004 15.393 10.9641Z"
                            fill="#FFF4ED"
                        />
                        <path
                            opacity="0.4"
                            d="M4.95682 5.92391C5.00773 5.91663 5.05864 5.91663 5.10955 5.92391C6.23682 5.88754 7.13137 4.9639 7.13137 3.82936C7.13137 2.67299 6.19319 1.72754 5.02955 1.72754C3.87319 1.72754 2.92773 2.66572 2.92773 3.82936C2.93501 4.9639 3.82955 5.88754 4.95682 5.92391Z"
                            fill="#FFF4ED"
                        />
                        <path
                            opacity="0.4"
                            d="M5.03636 9.61826C5.03636 10.3237 5.18909 10.9928 5.46545 11.5964C4.44 11.7055 3.37091 11.4874 2.58545 10.971C1.43636 10.2074 1.43636 8.96371 2.58545 8.20007C3.36363 7.67643 4.46181 7.46553 5.49454 7.58189C5.19636 8.1928 5.03636 8.88371 5.03636 9.61826Z"
                            fill="#F97316"
                        />
                        <path
                            d="M9.08757 11.8147C9.02939 11.8074 8.96394 11.8074 8.89848 11.8147C7.5603 11.7711 6.49121 10.6729 6.49121 9.32018C6.49121 7.93836 7.60394 6.81836 8.99303 6.81836C10.3748 6.81836 11.4948 7.93836 11.4948 9.32018C11.4948 10.6729 10.433 11.7711 9.08757 11.8147Z"
                            fill="#F97316"
                        />
                        <path
                            d="M6.72403 13.3201C5.62585 14.0547 5.62585 15.262 6.72403 15.9892C7.97494 16.8256 10.0258 16.8256 11.2768 15.9892C12.3749 15.2547 12.3749 14.0474 11.2768 13.3201C10.0331 12.4838 7.98221 12.4838 6.72403 13.3201Z"
                            fill="#F97316"
                        />
                    </svg>
                </IconTitle>

                {/* Table */}
                <TableContainer>
                    <TableHead datas={tableTitle} />
                    <TableBody>
                        {answers.map((answer, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData children={index + 1} />
                                    <TableData
                                        children={answer.users.name}
                                        align="text-left"
                                    />
                                    <TableData
                                        children={
                                            answer.grade
                                                ? answer.grade
                                                : "Belum Dinilai"
                                        }
                                    />
                                    <TableData
                                        children={
                                            <Link
                                                href={route(
                                                    "tugas-answer-guru.edit",
                                                    answer.id
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
            </div>
        </AuthenticatedLayout>
    );
}

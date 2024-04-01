import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import Banner from "@/Components/molecules/Banner/Banner";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import CardTugas from "@/Components/organisms/Card/CardTugas";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { usePage } from "@inertiajs/react";

export default function KelompokShow({ auth }) {
    const { kelompoks: kelompok, users: user, tugases } = usePage().props;

    const filteredTugases = tugases.filter(
        (tugas) => tugas.is_active == "Y" && tugas.kelompok_id == kelompok.id
    );

    const tableTitle = ["Nomor Absen", "Nama Anggota", "Waktu Belajar"];

    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="space-y-5">
                <Banner
                    title={`Selamat Datang Di ${kelompok.name}, ${auth.user.name}`}
                    desc="Segera kerjakan tugas-tugas yang telah diberikan bersama anggota kelompok anda!"
                />
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <IconTitle title={`Anggota Kelompok ${kelompok.name}`}>
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
                            {kelompok.members.map((member, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableData children={member.absen} />
                                        <TableData children={member.name} />
                                        <TableData
                                            children={`${
                                                member.total_login_time
                                                    ? member.total_login_time
                                                    : 0
                                            } Menit`}
                                        />
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </TableContainer>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <IconTitle title="Tugas Kelompok">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M15.1822 7.6839H13.0804C11.3568 7.6839 9.95313 6.28027 9.95313 4.55663V2.45481C9.95313 2.05481 9.62585 1.72754 9.22585 1.72754H6.14222C3.90222 1.72754 2.09131 3.18208 2.09131 5.77845V12.2221C2.09131 14.8184 3.90222 16.273 6.14222 16.273H11.8586C14.0986 16.273 15.9095 14.8184 15.9095 12.2221V8.41117C15.9095 8.01117 15.5822 7.6839 15.1822 7.6839Z"
                                fill="#FB8A3C"
                            />
                            <path
                                d="M11.7638 1.88048C11.4656 1.5823 10.9492 1.78594 10.9492 2.20048V4.73866C10.9492 5.80048 11.851 6.68048 12.9492 6.68048C13.6401 6.68776 14.6001 6.68776 15.4219 6.68776C15.8365 6.68776 16.0547 6.20048 15.7638 5.90957C14.7165 4.85503 12.8401 2.95685 11.7638 1.88048Z"
                                fill="#FB8A3C"
                            />
                            <path
                                d="M10.0912 10.273H5.72758C5.4294 10.273 5.18213 10.0258 5.18213 9.72758C5.18213 9.4294 5.4294 9.18213 5.72758 9.18213H10.0912C10.3894 9.18213 10.6367 9.4294 10.6367 9.72758C10.6367 10.0258 10.3894 10.273 10.0912 10.273Z"
                                fill="white"
                            />
                            <path
                                d="M8.63667 13.1822H5.72758C5.4294 13.1822 5.18213 12.9349 5.18213 12.6368C5.18213 12.3386 5.4294 12.0913 5.72758 12.0913H8.63667C8.93486 12.0913 9.18213 12.3386 9.18213 12.6368C9.18213 12.9349 8.93486 13.1822 8.63667 13.1822Z"
                                fill="white"
                            />
                        </svg>
                    </IconTitle>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4">
                        {tugases.map((tugas, index) => {
                            const answeredTugas = tugas.answers.find(
                                (answer) =>
                                    answer.tugas_id == tugas.id &&
                                    answer.user_id == auth.user.id
                            );

                            return (
                                <CardTugas
                                    key={index}
                                    answered={answeredTugas}
                                    tugasId={
                                        answeredTugas
                                            ? answeredTugas.id
                                            : tugas.id
                                    }
                                    tugasName={tugas.name}
                                    tugasDesc={tugas.description}
                                    deadline={`${formattedDate(
                                        tugas.deadline_date
                                    )}, ${tugas.deadline_time} `}
                                    grade={
                                        answeredTugas
                                            ? answeredTugas.grade
                                                ? answeredTugas.grade
                                                : "Belum Dinilai"
                                            : "Belum Dinilai"
                                    }
                                    disabled={tugas.is_active == "N"}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

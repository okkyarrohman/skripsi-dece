import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import MateriTitle from "@/Components/atoms/Materi/MateriTitle";
import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import DashboardAbsensi from "@/Components/organisms/Dashboard/DashboardAbsensi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { Link, usePage } from "@inertiajs/react";
import QRCode from "react-qr-code";

export default function Dashboard({ auth }) {
    const { absens: absen, materis } = usePage().props;

    const currentAbsenByUserId = absen.presents.find(
        (userPresent) => userPresent.user_id == auth.user.id
    );

    return (
        <AuthenticatedLayout title="Dashboard" userLogin={auth.user}>
            <div className="grid grid-cols-10 gap-6">
                <div className="col-span-4 space-y-6">
                    <div className="p-6 rounded-md bg-gray-50 space-y-4 w-full">
                        <div className="line-clamp-2">
                            <Title
                                title={`Hai ${auth.user.name}`}
                                color="text-orange-500"
                                size="text-[2rem]"
                            />
                        </div>
                        <Description desc="Semoga hari belajarmu menyenangkan!" />
                    </div>
                    <DashboardAbsensi
                        name={absen.name}
                        date={absen.meet_date}
                        absenId={absen.id}
                        alreadyPresent={currentAbsenByUserId}
                    />
                    <div className="p-6 rounded-md bg-gray-50 space-y-4 w-full">
                        <IconTitle title="Materi Baru">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M15.1822 7.68366H13.0804C11.3568 7.68366 9.95313 6.28002 9.95313 4.55639V2.45457C9.95313 2.05457 9.62585 1.72729 9.22585 1.72729H6.14222C3.90222 1.72729 2.09131 3.18184 2.09131 5.7782V12.2218C2.09131 14.8182 3.90222 16.2727 6.14222 16.2727H11.8586C14.0986 16.2727 15.9095 14.8182 15.9095 12.2218V8.41093C15.9095 8.01093 15.5822 7.68366 15.1822 7.68366Z"
                                    fill="#FB8A3C"
                                />
                                <path
                                    d="M11.7638 1.88036C11.4656 1.58218 10.9492 1.78582 10.9492 2.20036V4.73854C10.9492 5.80036 11.851 6.68036 12.9492 6.68036C13.6401 6.68763 14.6001 6.68763 15.4219 6.68763C15.8365 6.68763 16.0547 6.20036 15.7638 5.90945C14.7165 4.85491 12.8401 2.95672 11.7638 1.88036Z"
                                    fill="#FB8A3C"
                                />
                                <path
                                    d="M10.0912 10.2727H5.72758C5.4294 10.2727 5.18213 10.0254 5.18213 9.72722C5.18213 9.42904 5.4294 9.18176 5.72758 9.18176H10.0912C10.3894 9.18176 10.6367 9.42904 10.6367 9.72722C10.6367 10.0254 10.3894 10.2727 10.0912 10.2727Z"
                                    fill="white"
                                />
                                <path
                                    d="M8.63667 13.1819H5.72758C5.4294 13.1819 5.18213 12.9346 5.18213 12.6364C5.18213 12.3382 5.4294 12.0909 5.72758 12.0909H8.63667C8.93486 12.0909 9.18213 12.3382 9.18213 12.6364C9.18213 12.9346 8.93486 13.1819 8.63667 13.1819Z"
                                    fill="white"
                                />
                            </svg>
                        </IconTitle>
                        {materis.map((materi, index) => {
                            return (
                                <Link
                                    method="POST"
                                    href={route("materi.markSeen", materi.id)}
                                    className="flex justify-between items-center"
                                >
                                    <MateriTitle
                                        size="text-base"
                                        numberSize="text-xl"
                                        numberContainer="size-10"
                                        number={index + 1}
                                        title={materi.name}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
                                            fill="#383A42"
                                        />
                                    </svg>
                                </Link>
                            );
                        })}
                        <Link href={route("materi.index")} className="block">
                            <PrimaryButton
                                style="small"
                                size="text-sm"
                                className="mx-auto"
                            >
                                Lihat Semua Materi
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="col-span-6"></div>
            </div>
        </AuthenticatedLayout>
    );
}

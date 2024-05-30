import DashboardGreet from "@/Components/molecules/Dashboard/DashboardGreet";
import KegiatanItem from "@/Components/molecules/Kegiatan/KegiatanItem";
import MateriItem from "@/Components/molecules/Materi.jsx/MateriItem";
import DashboardAbsensi from "@/Components/organisms/Dashboard/DashboardAbsensi";
import DashboardChartTotalLogin from "@/Components/organisms/Dashboard/DashboardChartTotalLogin";
import DashboardKegiatan from "@/Components/organisms/Dashboard/DashboardKegiatan";
import DashboardMateri from "@/Components/organisms/Dashboard/DashboardMateri";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import "react-calendar/dist/Calendar.css";

export default function Dashboard({ auth }) {
    const {
        absens: absen,
        materis,
        kegiatans,
        monthlyLogins,
        tugases,
        aktivitases,
    } = usePage().props;

    // const markedDates = kegiatans.map(
    //     (kegiatan) => new Date(kegiatan.date_start)
    // );

    console.log(aktivitases);
    console.log(kegiatans);

    const currentAbsenByUserId =
        absen &&
        absen.presents.find(
            (userPresent) => userPresent.user_id == auth.user.id
        );

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const data = {
        labels,
        datasets: [
            {
                data: monthlyLogins ? Object.values(monthlyLogins).slice(2) : 0,
                borderColor: "rgba(251, 138, 60, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <AuthenticatedLayout title="Dashboard" userLogin={auth.user}>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-0 md:gap-6 space-y-6 md:space-y-0">
                <div className="col-span-4 space-y-6">
                    <DashboardGreet
                        userLogin={auth.user}
                        desc="Semoga hari belajarmu menyenangkan!"
                    />
                    <DashboardAbsensi
                        absen={absen}
                        name={absen && absen.name}
                        date={absen && absen.meet_date}
                        absenId={absen && absen.id}
                        alreadyPresent={currentAbsenByUserId}
                    />
                    <DashboardMateri materi={materis.length != 0}>
                        {materis.map((materi, index) => {
                            return (
                                <MateriItem
                                    materiId={materi.id}
                                    number={index + 1}
                                    name={materi.name}
                                />
                            );
                        })}
                    </DashboardMateri>
                </div>
                <div className="col-span-6 space-y-6">
                    <DashboardChartTotalLogin data={data} />
                    <DashboardKegiatan tugases={tugases} kegiatan={kegiatans}>
                        {aktivitases.map((aktivitas, index) => {
                            return (
                                <KegiatanItem
                                    key={index}
                                    type={aktivitas.type}
                                    name={aktivitas.name}
                                    date={aktivitas.date}
                                    time={aktivitas.time}
                                />
                            );
                        })}
                    </DashboardKegiatan>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

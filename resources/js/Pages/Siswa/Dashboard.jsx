import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import DashboardGreet from "@/Components/molecules/Dashboard/DashboardGreet";
import KegiatanItem from "@/Components/molecules/Kegiatan/KegiatanItem";
import MateriItem from "@/Components/molecules/Materi.jsx/MateriItem";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import DashboardAbsensi from "@/Components/organisms/Dashboard/DashboardAbsensi";
import DashboardKegiatan from "@/Components/organisms/Dashboard/DashboardKegiatan";
import DashboardMateri from "@/Components/organisms/Dashboard/DashboardMateri";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Dashboard({ auth }) {
    const { absens: absen, materis, kegiatans } = usePage().props;

    const markedDates = kegiatans.map((kegiatan) => new Date(kegiatan.date));

    const currentAbsenByUserId =
        absen &&
        absen.presents.find(
            (userPresent) => userPresent.user_id == auth.user.id
        );

    return (
        <AuthenticatedLayout title="Dashboard" userLogin={auth.user}>
            <div className="grid grid-cols-10 gap-6">
                <div className="col-span-4 space-y-6">
                    <DashboardGreet userLogin={auth.user} />
                    <DashboardAbsensi
                        absen={absen}
                        name={absen && absen.name}
                        date={absen && absen.meet_date}
                        absenId={absen && absen.id}
                        alreadyPresent={currentAbsenByUserId}
                    />
                    <DashboardMateri>
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
                    <div className="p-6 rounded-xl bg-gray-50 w-full h-[36rem]"></div>
                    <DashboardKegiatan markedDates={markedDates}>
                        {kegiatans.map((kegiatan, index) => {
                            return (
                                <KegiatanItem
                                    key={index}
                                    name={kegiatan.name}
                                    date={kegiatan.date}
                                    time={kegiatan.time}
                                />
                            );
                        })}
                    </DashboardKegiatan>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

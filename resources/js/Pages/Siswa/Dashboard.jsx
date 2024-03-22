import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import MateriTitle from "@/Components/atoms/Materi/MateriTitle";
import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import DashboardGreet from "@/Components/molecules/Dashboard/DashboardGreet";
import MateriItem from "@/Components/molecules/Materi.jsx/MateriItem";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import DashboardAbsensi from "@/Components/organisms/Dashboard/DashboardAbsensi";
import DashboardMateri from "@/Components/organisms/Dashboard/DashboardMateri";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import Calendar from "react-calendar";
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
                    <DashboardGreet userLogin={auth.user} />
                    <DashboardAbsensi
                        name={absen.name}
                        date={absen.meet_date}
                        absenId={absen.id}
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
                    <div className="p-6 rounded-xl bg-gray-50 w-full"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

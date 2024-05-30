import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import Calendar from "react-calendar";

export default function DashboardKegiatan({ kegiatan, tugases, children }) {
    const [date, setDate] = useState(new Date());

    // Combine marked dates from both kegiatan and tugases
    const markedDates = [
        ...kegiatan.map(({ date_start }) => ({
            type: "kegiatan",
            date: new Date(date_start),
        })),
        ...tugases.map(({ deadline_date }) => ({
            type: "tugas",
            date: new Date(deadline_date),
        })),
    ];

    const tileContent = ({ date, view }) => {
        if (view === "month") {
            const isMarked = markedDates.filter((markedDate) => {
                // if (markedDate.type === "kegiatan") {
                //     return date == markedDate.date_start;
                // }
                return date.toDateString() === markedDate.date.toDateString();
            });

            return isMarked.map((markedDate, index) => (
                <div
                    key={index}
                    className={`${
                        markedDate.type === "kegiatan"
                            ? "bg-orange-500"
                            : "bg-blue-500"
                    } size-3 rounded-full mt-1 mx-auto`}
                ></div>
            ));
        }
    };

    return (
        <div className="p-6 rounded-xl bg-gray-50 w-full space-y-6">
            <Calendar
                onChange={setDate}
                value={date}
                tileContent={tileContent}
                className="rounded-lg mx-auto"
            />
            <div className="md:flex justify-between items-center md:space-y-0 space-y-4">
                <IconTitle title="Tugas dan Kegiatan">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                    >
                        <path
                            d="M10.4547 1.86188V0.727339C10.4547 0.429157 10.2074 0.181885 9.90921 0.181885C9.61102 0.181885 9.36375 0.429157 9.36375 0.727339V1.81825H4.63648V0.727339C4.63648 0.429157 4.38921 0.181885 4.09103 0.181885C3.79284 0.181885 3.54557 0.429157 3.54557 0.727339V1.86188C1.58193 2.0437 0.629213 3.21461 0.483759 4.95279C0.469213 5.1637 0.643759 5.33825 0.847395 5.33825H13.1528C13.3637 5.33825 13.5383 5.15643 13.5165 4.95279C13.371 3.21461 12.4183 2.0437 10.4547 1.86188Z"
                            fill="#FB8A3C"
                        />
                        <path
                            opacity="0.4"
                            d="M12.8182 6.4292C13.2182 6.4292 13.5455 6.75647 13.5455 7.15647V11.6365C13.5455 13.8183 12.4546 15.2728 9.90913 15.2728H4.09095C1.5455 15.2728 0.45459 13.8183 0.45459 11.6365V7.15647C0.45459 6.75647 0.781863 6.4292 1.18186 6.4292H12.8182Z"
                            fill="#FB8A3C"
                        />
                        <path
                            d="M9.06532 10.1746L8.70169 10.5455H8.69441L6.49077 12.7491C6.39623 12.8437 6.19987 12.9455 6.06168 12.96L5.07986 13.1055C4.7235 13.1564 4.47624 12.9019 4.52715 12.5528L4.66533 11.5637C4.68715 11.4255 4.78168 11.2364 4.87623 11.1346L7.08714 8.93095L7.45078 8.56004C7.69078 8.32004 7.95987 8.14551 8.25078 8.14551C8.49805 8.14551 8.76714 8.26185 9.06532 8.56004C9.71987 9.21458 9.50896 9.73095 9.06532 10.1746Z"
                            fill="white"
                        />
                    </svg>
                </IconTitle>
                <Link href={route("kegiatan.create")} className="block">
                    <PrimaryButton
                        style="small"
                        size="text-sm"
                        className="md:mx-0 mx-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                                fill="#F6F7F9"
                            />
                            <path
                                d="M10 15.125C9.96985 15.125 9.93857 15.1127 9.91293 15.0871C9.88728 15.0614 9.875 15.0301 9.875 15V5C9.875 4.96985 9.88728 4.93857 9.91293 4.91293C9.93857 4.88728 9.96985 4.875 10 4.875C10.0301 4.875 10.0614 4.88728 10.0871 4.91293C10.1127 4.93857 10.125 4.96985 10.125 5V15C10.125 15.0301 10.1127 15.0614 10.0871 15.0871C10.0614 15.1127 10.0301 15.125 10 15.125Z"
                                fill="#F6F7F9"
                                stroke="#F6F7F9"
                            />
                        </svg>
                        Tambah Kegiatan
                    </PrimaryButton>
                </Link>
            </div>
            {children}
            {kegiatan && (
                <Link href={route("kegiatan.index")} className="block">
                    <PrimaryButton
                        style="small"
                        size="text-sm"
                        className="mx-auto"
                    >
                        Lihat Semua Kegiatan
                    </PrimaryButton>
                </Link>
            )}
        </div>
    );
}

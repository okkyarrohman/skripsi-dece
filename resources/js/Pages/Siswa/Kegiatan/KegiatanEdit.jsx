import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import DropdownContainer from "@/Components/atoms/Dropdown/DropdownContainer";
import DropdownOption from "@/Components/atoms/Dropdown/DropdownOption";
import InputText from "@/Components/atoms/Input/InputText";
import Label from "@/Components/atoms/Label/Label";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function KegiatanEdit({ auth }) {
    const { kegiatans } = usePage().props;

    const [openStatus, setOpenStatus] = useState(false);
    const [selectedOptionStatus, setSelectedOptionStatus] = useState(
        kegiatans.is_active === "Y" ? "Aktif" : "Nonaktif"
    );

    const { data, setData, post, errors } = useForm({
        _method: "patch",
        name: kegiatans.name,
        date: kegiatans.date,
        time: kegiatans.time,
        is_active: kegiatans.is_active,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("kegiatan.update", kegiatans.id));
    };

    const handleDropdownStatusOnClick = () => {
        setOpenStatus(!openStatus);
    };

    const handleOptionStatusSelect = (option) => {
        if (option == "Y") {
            setSelectedOptionStatus("Aktif");
        } else {
            setSelectedOptionStatus("Nonaktif");
        }
        setData("is_active", option);
        setOpenStatus(!openStatus);
    };
    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                <IconTitle title="Edit Kegiatan">
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
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="name" text="Nama Kegiatan" />
                        <InputText
                            autoFocus
                            name="name"
                            placeholder="Nama Kegiatan..."
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="date" text="Tanggal Kegiatan" />
                        <InputText
                            type="date"
                            name="date"
                            placeholder="Tanggal Kegiatan..."
                            value={data.date}
                            onChange={(e) => setData("date", e.target.value)}
                        />
                        <InputError message={errors.date} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="time" text="Waktu Kegiatan" />
                        <InputText
                            type="time"
                            name="time"
                            placeholder="Waktu Kegiatan..."
                            value={data.time}
                            onChange={(e) => setData("time", e.target.value)}
                        />
                        <InputError message={errors.time} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="is_active" text="Status Kegiatan" />
                        <DropdownContainer
                            onClick={handleDropdownStatusOnClick}
                            opened={openStatus}
                            selectedOption={selectedOptionStatus}
                            unselectedOption="Pilih Status Tugas"
                        >
                            <DropdownOption
                                option="Aktif"
                                onSelect={() => handleOptionStatusSelect("Y")}
                            />
                            <DropdownOption
                                option="Nonaktif"
                                onSelect={() => handleOptionStatusSelect("N")}
                            />
                        </DropdownContainer>
                        <InputError
                            message={errors.is_active}
                            className="mt-2"
                        />
                    </div>
                    <PrimaryButton type="submit" className="ml-auto">
                        Update Kegiatan
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

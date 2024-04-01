import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import DropdownContainer from "@/Components/atoms/Dropdown/DropdownContainer";
import DropdownOption from "@/Components/atoms/Dropdown/DropdownOption";
import InputFile from "@/Components/atoms/Input/InputFile";
import InputText from "@/Components/atoms/Input/InputText";
import InputTextArea from "@/Components/atoms/Input/InputTextArea";
import Label from "@/Components/atoms/Label/Label";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function TugasCreate({ auth }) {
    const { kelompoks } = usePage().props;

    const filteredKelompoks = kelompoks.filter(
        (kelompok) => kelompok.is_active == "Y"
    );

    const [openKelompok, setOpenKelompok] = useState(false);
    const [selectedOptionKelompok, setSelectedOptionKelompok] = useState("");
    const [openStatus, setOpenStatus] = useState(false);
    const [selectedOptionStatus, setSelectedOptionStatus] = useState("");

    const { data, setData, post, errors } = useForm({
        kelompok_id: "",
        is_active: "",
        name: "",
        description: "",
        deadline_date: "",
        deadline_time: "",
        question_1: "",
        question_2: "",
        question_3: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("tugas-guru.store"));
    };

    const handleDropdownKelompokOnClick = () => {
        setOpenKelompok(!openKelompok);
    };

    const handleDropdownStatusOnClick = () => {
        setOpenStatus(!openStatus);
    };

    const handleOptionKelompokSelect = (option) => {
        const filteredKelompoks = kelompoks.find(
            (kelompok) => kelompok.id == option
        );
        setSelectedOptionKelompok(filteredKelompoks.name);
        setData("kelompok_id", option);
        setOpenKelompok(!openKelompok);
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
                <IconTitle title="Tambah Tugas Kelompok">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <path
                            d="M9.00027 4.12772V15.7859C8.87663 15.7859 8.74572 15.7641 8.6439 15.7059L8.61481 15.6914C7.21845 14.9277 4.78208 14.1277 3.2039 13.9168L2.99299 13.8877C2.29481 13.8004 1.72754 13.1459 1.72754 12.4477V3.66227C1.72754 2.79681 2.43299 2.14227 3.29845 2.21499C4.82572 2.33863 7.13845 3.10954 8.43299 3.91681L8.61481 4.0259C8.7239 4.09136 8.86208 4.12772 9.00027 4.12772Z"
                            fill="#FDAC74"
                        />
                        <path
                            d="M16.2727 3.66916V12.4473C16.2727 13.1455 15.7055 13.8001 15.0073 13.8873L14.7673 13.9164C13.1818 14.1273 10.7382 14.9346 9.34182 15.7055C9.24727 15.7637 9.13091 15.7855 9 15.7855V4.12734C9.13818 4.12734 9.27636 4.09097 9.38545 4.02552L9.50909 3.94552C10.8036 3.13097 13.1236 2.35279 14.6509 2.22188H14.6945C15.56 2.14916 16.2727 2.79643 16.2727 3.66916Z"
                            fill="#F97316"
                        />
                        <path
                            d="M5.90936 6.99276H4.27299C3.97481 6.99276 3.72754 6.74549 3.72754 6.44731C3.72754 6.14913 3.97481 5.90186 4.27299 5.90186H5.90936C6.20754 5.90186 6.45481 6.14913 6.45481 6.44731C6.45481 6.74549 6.20754 6.99276 5.90936 6.99276Z"
                            fill="#F97316"
                        />
                        <path
                            d="M6.45481 9.17489H4.27299C3.97481 9.17489 3.72754 8.92762 3.72754 8.62944C3.72754 8.33126 3.97481 8.08398 4.27299 8.08398H6.45481C6.75299 8.08398 7.00027 8.33126 7.00027 8.62944C7.00027 8.92762 6.75299 9.17489 6.45481 9.17489Z"
                            fill="#F97316"
                        />
                    </svg>
                </IconTitle>
                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="kelompok_id" text="Kelompok" />
                        <DropdownContainer
                            onClick={handleDropdownKelompokOnClick}
                            opened={openKelompok}
                            selectedOption={selectedOptionKelompok}
                            unselectedOption="Pilih Kelompok"
                        >
                            {filteredKelompoks.map((kelompok, index) => {
                                return (
                                    <DropdownOption
                                        key={index}
                                        option={kelompok.name}
                                        onSelect={() =>
                                            handleOptionKelompokSelect(
                                                kelompok.id
                                            )
                                        }
                                    />
                                );
                            })}
                        </DropdownContainer>
                        <InputError
                            message={errors.is_active}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="is_active" text="Status Tugas" />
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
                    <div>
                        <Label htmlFor="name" text="Nama Tugas" />
                        <InputText
                            autoFocus
                            name="name"
                            placeholder="Nama Tugas..."
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="flex items-center justify-between gap-6">
                        <div className="w-full">
                            <Label
                                htmlFor="deadline_date"
                                text="Tanggal Deadline Tugas"
                            />
                            <InputText
                                icon
                                type="date"
                                name="deadline_date"
                                placeholder="Tanggal Deadline Tugas..."
                                value={data.deadline_date}
                                onChange={(e) =>
                                    setData("deadline_date", e.target.value)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M8.5 14.5002C8.24 14.5002 7.98 14.3902 7.79 14.2102C7.61 14.0202 7.5 13.7702 7.5 13.5002C7.5 13.3702 7.53 13.2402 7.58 13.1202C7.63 13.0002 7.7 12.8902 7.79 12.7902C8.16 12.4202 8.83 12.4202 9.21 12.7902C9.39 12.9802 9.5 13.2402 9.5 13.5002C9.5 13.5602 9.49 13.6302 9.48 13.7002C9.47 13.7602 9.45 13.8202 9.42 13.8802C9.4 13.9402 9.37 14.0002 9.33 14.0602C9.29 14.1102 9.25 14.1602 9.21 14.2102C9.02 14.3902 8.76 14.5002 8.5 14.5002Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M12 14.5003C11.87 14.5003 11.74 14.4703 11.62 14.4203C11.49 14.3703 11.39 14.3003 11.29 14.2103C11.11 14.0203 11 13.7703 11 13.5003C11 13.3703 11.03 13.2403 11.08 13.1203C11.13 13.0003 11.2 12.8903 11.29 12.7903C11.39 12.7003 11.49 12.6303 11.62 12.5803C11.99 12.4303 12.43 12.5103 12.71 12.7903C12.89 12.9803 13 13.2403 13 13.5003C13 13.5603 12.99 13.6303 12.98 13.7003C12.97 13.7603 12.95 13.8203 12.92 13.8803C12.9 13.9403 12.87 14.0003 12.83 14.0603C12.8 14.1103 12.75 14.1603 12.71 14.2103C12.52 14.3903 12.26 14.5003 12 14.5003Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M8.5 17.9998C8.37 17.9998 8.24 17.9698 8.12 17.9198C7.99 17.8698 7.88 17.7998 7.79 17.7098C7.7 17.6198 7.63 17.5098 7.58 17.3798C7.53 17.2598 7.5 17.1298 7.5 16.9998C7.5 16.8698 7.53 16.7398 7.58 16.6198C7.63 16.4898 7.7 16.3798 7.79 16.2898C7.88 16.1998 7.99 16.1298 8.12 16.0798C8.36 15.9798 8.64 15.9698 8.88 16.0798C9.01 16.1298 9.12 16.1998 9.21 16.2898C9.3 16.3798 9.37 16.4898 9.42 16.6198C9.47 16.7398 9.5 16.8698 9.5 16.9998C9.5 17.1298 9.47 17.2598 9.42 17.3798C9.37 17.5098 9.3 17.6198 9.21 17.7098C9.12 17.7998 9.01 17.8698 8.88 17.9198C8.76 17.9698 8.63 17.9998 8.5 17.9998Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M18 23.75C16.83 23.75 15.72 23.33 14.87 22.56C14.51 22.26 14.19 21.88 13.93 21.44C13.49 20.72 13.25 19.87 13.25 19C13.25 16.38 15.38 14.25 18 14.25C19.36 14.25 20.66 14.84 21.56 15.86C22.33 16.74 22.75 17.85 22.75 19C22.75 19.87 22.51 20.72 22.06 21.45C21.22 22.87 19.66 23.75 18 23.75ZM18 15.75C16.21 15.75 14.75 17.21 14.75 19C14.75 19.59 14.91 20.17 15.22 20.67C15.39 20.97 15.61 21.22 15.85 21.43C16.45 21.97 17.2 22.25 18 22.25C19.15 22.25 20.19 21.66 20.78 20.68C21.09 20.17 21.25 19.6 21.25 19C21.25 18.22 20.96 17.46 20.44 16.85C19.82 16.15 18.93 15.75 18 15.75Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M17.4299 20.7396C17.2399 20.7396 17.0499 20.6695 16.8999 20.5195L15.9099 19.5296C15.6199 19.2396 15.6199 18.7596 15.9099 18.4696C16.1999 18.1796 16.6799 18.1796 16.9699 18.4696L17.4499 18.9496L19.0499 17.4696C19.3499 17.1896 19.8299 17.2096 20.1099 17.5096C20.3899 17.8096 20.3699 18.2896 20.0699 18.5696L17.9399 20.5396C17.7899 20.6696 17.6099 20.7396 17.4299 20.7396Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
                                        fill="#292D32"
                                    />
                                </svg>
                            </InputText>
                            <InputError
                                message={errors.deadline_date}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full">
                            <Label
                                htmlFor="deadline_time"
                                text="Waktu Deadline Tugas"
                            />
                            <InputText
                                icon
                                type="time"
                                name="deadline_time"
                                placeholder="Waktu Deadline Tugas..."
                                value={data.deadline_time}
                                onChange={(e) =>
                                    setData("deadline_time", e.target.value)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z"
                                        fill="#292D32"
                                    />
                                    <path
                                        d="M16.2096 15.9298C16.0796 15.9298 15.9496 15.8998 15.8296 15.8198L12.7296 13.9698C11.9596 13.5098 11.3896 12.4998 11.3896 11.6098V7.50977C11.3896 7.09977 11.7296 6.75977 12.1396 6.75977C12.5496 6.75977 12.8896 7.09977 12.8896 7.50977V11.6098C12.8896 11.9698 13.1896 12.4998 13.4996 12.6798L16.5996 14.5298C16.9596 14.7398 17.0696 15.1998 16.8596 15.5598C16.7096 15.7998 16.4596 15.9298 16.2096 15.9298Z"
                                        fill="#292D32"
                                    />
                                </svg>
                            </InputText>
                            <InputError
                                message={errors.deadline_time}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="description" text="Deskripsi Tugas" />
                        <InputTextArea
                            name="description"
                            placeholder="Deskripsi Tugas..."
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="question_1" text="Soal Pertama" />
                        <InputTextArea
                            name="question_1"
                            placeholder="Soal Pertama..."
                            value={data.question_1}
                            onChange={(e) =>
                                setData("question_1", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.question_1}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="question_2" text="Soal Kedua" />
                        <InputTextArea
                            name="question_2"
                            placeholder="Soal Kedua..."
                            value={data.question_2}
                            onChange={(e) =>
                                setData("question_2", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.question_2}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="question_3" text="Soal Ketiga" />
                        <InputTextArea
                            name="question_3"
                            placeholder="Soal Ketiga..."
                            value={data.question_3}
                            onChange={(e) =>
                                setData("question_3", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.question_3}
                            className="mt-2"
                        />
                    </div>
                    <PrimaryButton type="submit" className="ml-auto">
                        Tambah Tugas Kelompok
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

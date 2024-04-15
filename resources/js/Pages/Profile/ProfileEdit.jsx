import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import InputPassword from "@/Components/atoms/Input/InputPassword";
import InputText from "@/Components/atoms/Input/InputText";
import Label from "@/Components/atoms/Label/Label";
import Status from "@/Components/atoms/Status/Status";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function ProfileEdit({ auth }) {
    const { users } = usePage().props;

    const [previewPhoto, setPreviewPhoto] = useState(null);

    const { data, setData, post, errors } = useForm({
        _method: "patch",
        name: users.name,
        email: users.email,
        kelas: users.kelas,
        absen: users.absen,
        photo: users.photo,
        password: users.password,
    });

    const tableTitle = [
        "Tanggal Akun Dibuat",
        "Kelompok",
        "Status Login",
        "Total Waktu Login",
    ];

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("profile.update"));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("photo", file);
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewPhoto(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <AuthenticatedLayout back toDashboard userLogin={auth.user}>
            <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gray-50">
                    <form
                        onSubmit={handleOnSubmit}
                        className="space-y-6 md:flex justify-between items-start"
                    >
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={
                                    previewPhoto
                                        ? previewPhoto
                                        : data.photo
                                        ? `/storage/profile/${data.photo}`
                                        : `/assets/profile-icon.png`
                                }
                                alt="Profile Photo"
                                className="rounded-full size-48 object-cover"
                            />
                            <label
                                htmlFor="photo"
                                className="px-3 py-1.5 bg-orange-500 rounded-lg text-white w-fit"
                            >
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                Ubah Foto
                            </label>
                        </div>
                        <div className="space-y-6 w-full md:w-3/4">
                            <div>
                                <Label htmlFor="name" text="Nama" />
                                <InputText
                                    autoFocus
                                    name="name"
                                    placeholder="Nama..."
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label htmlFor="kelas" text="Kelas" />
                                <InputText
                                    name="kelas"
                                    placeholder="Kelas..."
                                    value={data.kelas}
                                    onChange={(e) =>
                                        setData("kelas", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.kelas}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label htmlFor="absen" text="No. Absen" />
                                <InputText
                                    name="absen"
                                    placeholder="No. Absen..."
                                    value={data.absen}
                                    onChange={(e) =>
                                        setData("absen", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.absen}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" text="Email" />
                                <InputText
                                    name="email"
                                    placeholder="Email..."
                                    value={data.email}
                                    // disabled
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" text="Password" />
                                <InputPassword
                                    name="password"
                                    placeholder="Password..."
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <PrimaryButton
                                type="submit"
                                className="mx-auto md:ml-auto"
                            >
                                Perbarui Profile
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                    <IconTitle title="Aktivitas Login">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M8.76727 11.4509C8.62909 11.4509 8.49091 11.4 8.38181 11.2909C8.17091 11.08 8.17091 10.7309 8.38181 10.52L9.85818 9.04364L8.38181 7.56727C8.17091 7.35637 8.17091 7.00727 8.38181 6.79637C8.59272 6.58546 8.94181 6.58546 9.15272 6.79637L11.0145 8.65818C11.2255 8.86909 11.2255 9.21818 11.0145 9.42909L9.15272 11.2909C9.05091 11.4 8.90545 11.4509 8.76727 11.4509Z"
                                fill="#FB8A3C"
                            />
                            <path
                                d="M10.5782 9.58896H3.18181C2.88363 9.58896 2.63635 9.34168 2.63635 9.0435C2.63635 8.74532 2.88363 8.49805 3.18181 8.49805H10.5782C10.8764 8.49805 11.1236 8.74532 11.1236 9.0435C11.1236 9.34168 10.8764 9.58896 10.5782 9.58896Z"
                                fill="#FB8A3C"
                            />
                            <path
                                d="M8.99992 15.3635C8.70174 15.3635 8.45447 15.1162 8.45447 14.818C8.45447 14.5199 8.70174 14.2726 8.99992 14.2726C12.1054 14.2726 14.2726 12.1053 14.2726 8.99987C14.2726 5.89441 12.1054 3.72714 8.99992 3.72714C8.70174 3.72714 8.45447 3.47987 8.45447 3.18168C8.45447 2.8835 8.70174 2.63623 8.99992 2.63623C12.7454 2.63623 15.3636 5.25441 15.3636 8.99987C15.3636 12.7453 12.7454 15.3635 8.99992 15.3635Z"
                                fill="#FB8A3C"
                            />
                        </svg>
                    </IconTitle>
                    <TableContainer>
                        <TableHead datas={tableTitle} />
                        <TableBody>
                            <TableRow>
                                <TableData
                                    children={formattedDate(users.created_at)}
                                />
                                <TableData
                                    children={
                                        users.kelompoks
                                            ? users.kelompoks.name
                                            : "Belum Gabung Kelompok"
                                    }
                                />
                                <TableData
                                    children={
                                        <Status
                                            activeStatus="Online"
                                            nonactiveStatus="Offline"
                                            active={users.session_login_at}
                                        />
                                    }
                                />
                                <TableData
                                    children={`${
                                        users.total_login_time
                                            ? users.total_login_time
                                            : 0
                                    } Menit`}
                                />
                            </TableRow>
                        </TableBody>
                    </TableContainer>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

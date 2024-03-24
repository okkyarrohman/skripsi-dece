import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import InputText from "@/Components/atoms/Input/InputText";
import Label from "@/Components/atoms/Label/Label";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
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

    console.log(data.photo);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("profile.update"));
        console.log("terperbarui");
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
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50">
                <form
                    onSubmit={handleOnSubmit}
                    className="flex justify-between items-start"
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
                    <div className="space-y-6 w-3/4">
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
                                disabled
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
                            <InputText
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
                        <PrimaryButton type="submit" className="ml-auto">
                            Perbarui Profile
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

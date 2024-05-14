import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import InputPassword from "@/Components/atoms/Input/InputPassword";
import InputText from "@/Components/atoms/Input/InputText";
import Label from "@/Components/atoms/Label/Label";
import AuthTemplate from "@/Components/templates/AuthTemplate/AuthTemplate";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        kelas: "",
        absen: "",
        password: "",
        password_confirmation: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <AuthTemplate
            register
            title="Register"
            desc="Daftar untuk memulai pembelajaran"
        >
            <form onSubmit={handleOnSubmit}>
                <div className="space-y-6">
                    <div>
                        <Label htmlFor="name" text="Nama Lengkap" />
                        <InputText
                            icon
                            autoFocus
                            name="name"
                            placeholder="Masukkan Nama Lengkap Anda"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </InputText>
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="email" text="Email" />
                        <InputText
                            icon
                            name="email"
                            type="email"
                            placeholder="Masukkan Email Anda"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M17 20H7C5.57665 20 4.4669 19.6441 3.71523 18.9461C2.97026 18.2543 2.5 17.1547 2.5 15.5V8.5C2.5 6.8453 2.97026 5.74565 3.71523 5.0539C4.4669 4.35591 5.57665 4 7 4H17C18.4234 4 19.5331 4.35591 20.2848 5.0539C21.0297 5.74565 21.5 6.8453 21.5 8.5V15.5C21.5 17.1547 21.0297 18.2543 20.2848 18.9461C19.5331 19.6441 18.4234 20 17 20Z"
                                    stroke="currentColor"
                                />
                                <path
                                    d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.58C6.20978 9.32 6.14978 8.85 6.40978 8.53C6.66978 8.21 7.13978 8.15 7.45978 8.41L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.41C16.8498 8.15 17.3298 8.2 17.5798 8.53C17.8398 8.85 17.7898 9.33 17.4598 9.58L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </InputText>
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <Label htmlFor="kelas" text="Kelas" />
                            <InputText
                                icon
                                name="kelas"
                                placeholder="Masukkan Kelas Anda"
                                value={data.kelas}
                                onChange={(e) =>
                                    setData("kelas", e.target.value)
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
                                        d="M12.0101 17C11.1601 17 10.3001 16.78 9.63007 16.35L3.61007 12.42C2.49007 11.69 1.82007 10.46 1.82007 9.12C1.82007 7.78 2.49007 6.55 3.61007 5.82L9.64007 1.9C10.9801 1.03 13.0701 1.03 14.4001 1.91L20.3901 5.84C21.5001 6.57 22.1701 7.8 22.1701 9.13C22.1701 10.46 21.5001 11.69 20.3901 12.42L14.4001 16.35C13.7301 16.79 12.8701 17 12.0101 17ZM12.0101 2.75C11.4401 2.75 10.8701 2.88 10.4601 3.16L4.44007 7.08C3.74007 7.54 3.33007 8.28 3.33007 9.12C3.33007 9.96 3.73007 10.7 4.44007 11.16L10.4601 15.09C11.2901 15.63 12.7501 15.63 13.5801 15.09L19.5701 11.16C20.2701 10.7 20.6701 9.96 20.6701 9.12C20.6701 8.28 20.2701 7.54 19.5701 7.08L13.5801 3.15C13.1601 2.89 12.5901 2.75 12.0101 2.75Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M11.9999 22.75C11.5599 22.75 11.1099 22.69 10.7499 22.57L7.55994 21.51C6.04994 21.01 4.85994 19.36 4.86994 17.77L4.87994 13.08C4.87994 12.67 5.21994 12.33 5.62994 12.33C6.03994 12.33 6.37994 12.67 6.37994 13.08L6.36994 17.77C6.36994 18.71 7.14994 19.79 8.03994 20.09L11.2299 21.15C11.6299 21.28 12.3699 21.28 12.7699 21.15L15.9599 20.09C16.8499 19.79 17.6299 18.71 17.6299 17.78V13.14C17.6299 12.73 17.9699 12.39 18.3799 12.39C18.7899 12.39 19.1299 12.73 19.1299 13.14V17.78C19.1299 19.37 17.9499 21.01 16.4399 21.52L13.2499 22.58C12.8899 22.69 12.4399 22.75 11.9999 22.75Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M21.3999 15.75C20.9899 15.75 20.6499 15.41 20.6499 15V9C20.6499 8.59 20.9899 8.25 21.3999 8.25C21.8099 8.25 22.1499 8.59 22.1499 9V15C22.1499 15.41 21.8099 15.75 21.3999 15.75Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </InputText>
                            <InputError
                                message={errors.kelas}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="absen" text="No. Absen" />
                            <InputText
                                icon
                                name="absen"
                                placeholder="Masukkan No. Absen Anda"
                                value={data.absen}
                                onChange={(e) =>
                                    setData("absen", e.target.value)
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
                                        d="M12.5101 17C11.6601 17 10.8001 16.78 10.1301 16.35L4.11007 12.42C2.99007 11.69 2.32007 10.46 2.32007 9.12C2.32007 7.78 2.99007 6.55 4.11007 5.82L10.1401 1.9C11.4801 1.03 13.5701 1.03 14.9001 1.91L20.8901 5.84C22.0001 6.57 22.6701 7.8 22.6701 9.13C22.6701 10.46 22.0001 11.69 20.8901 12.42L14.9001 16.35C14.2301 16.79 13.3701 17 12.5101 17ZM12.5101 2.75C11.9401 2.75 11.3701 2.88 10.9601 3.16L4.94007 7.08C4.24007 7.54 3.83007 8.28 3.83007 9.12C3.83007 9.96 4.23007 10.7 4.94007 11.16L10.9601 15.09C11.7901 15.63 13.2501 15.63 14.0801 15.09L20.0701 11.16C20.7701 10.7 21.1701 9.96 21.1701 9.12C21.1701 8.28 20.7701 7.54 20.0701 7.08L14.0801 3.15C13.6601 2.89 13.0901 2.75 12.5101 2.75Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M12.4999 22.75C12.0599 22.75 11.6099 22.69 11.2499 22.57L8.05994 21.51C6.54994 21.01 5.35994 19.36 5.36994 17.77L5.37994 13.08C5.37994 12.67 5.71994 12.33 6.12994 12.33C6.53994 12.33 6.87994 12.67 6.87994 13.08L6.86994 17.77C6.86994 18.71 7.64994 19.79 8.53994 20.09L11.7299 21.15C12.1299 21.28 12.8699 21.28 13.2699 21.15L16.4599 20.09C17.3499 19.79 18.1299 18.71 18.1299 17.78V13.14C18.1299 12.73 18.4699 12.39 18.8799 12.39C19.2899 12.39 19.6299 12.73 19.6299 13.14V17.78C19.6299 19.37 18.4499 21.01 16.9399 21.52L13.7499 22.58C13.3899 22.69 12.9399 22.75 12.4999 22.75Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M21.8999 15.75C21.4899 15.75 21.1499 15.41 21.1499 15V9C21.1499 8.59 21.4899 8.25 21.8999 8.25C22.3099 8.25 22.6499 8.59 22.6499 9V15C22.6499 15.41 22.3099 15.75 21.8999 15.75Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </InputText>
                            <InputError
                                message={errors.absen}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="password" text="Password" />
                        <InputPassword
                            name="password"
                            value={data.password}
                            placeholder="Masukkan Password Anda"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="password_confirmation"
                            text="Konfirmasi Password"
                        />
                        <InputPassword
                            name="password_confirmation"
                            value={data.password_confirmation}
                            placeholder="Masukkan Password Anda Lagi"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="mt-12">
                    <PrimaryButton full type="submit">
                        Registrasi
                    </PrimaryButton>
                </div>
            </form>
            <p className="text-lg text-center text-gray-600">
                Sudah Memiliki Akun?{" "}
                <Link href={route("login")} className="text-orange-500">
                    Masuk
                </Link>
            </p>
        </AuthTemplate>
    );
}

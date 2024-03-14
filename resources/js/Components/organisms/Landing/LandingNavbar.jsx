import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import LogoIcon from "@/Components/atoms/LogoIcon/LogoIcon";
import NavLink from "@/Components/atoms/Navbar/NavLink";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function LandingNavbar({ userLogin }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuOnClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="bg-gray-50 w-screen py-4 px-8 items-center justify-between fixed z-[99999] top-0 md:flex hidden">
                <LogoIcon width="w-40" />
                <div className="flex items-center justify-between w-[40rem]">
                    <NavLink link="#homeSection" text="Beranda" />
                    <NavLink link="#menuSection" text="Menu" />
                    <NavLink link="#aboutSection" text="Tentang" />
                    <div className="flex items-center gap-6">
                        {userLogin ? (
                            <Link
                                href={
                                    userLogin.role == "siswa"
                                        ? route("dashboard.siswa")
                                        : route("dashboard.guru")
                                }
                            >
                                <PrimaryButton>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.12 13.53C12.1 13.53 12.07 13.53 12.05 13.53C12.02 13.53 11.98 13.53 11.95 13.53C9.67998 13.46 7.97998 11.69 7.97998 9.50998C7.97998 7.28998 9.78998 5.47998 12.01 5.47998C14.23 5.47998 16.04 7.28998 16.04 9.50998C16.03 11.7 14.32 13.46 12.15 13.53C12.13 13.53 12.13 13.53 12.12 13.53ZM12 6.96998C10.6 6.96998 9.46998 8.10998 9.46998 9.49998C9.46998 10.87 10.54 11.98 11.9 12.03C11.93 12.02 12.03 12.02 12.13 12.03C13.47 11.96 14.52 10.86 14.53 9.49998C14.53 8.10998 13.4 6.96998 12 6.96998Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M12.0001 22.7499C9.31008 22.7499 6.74008 21.7499 4.75008 19.9299C4.57008 19.7699 4.49008 19.5299 4.51008 19.2999C4.64008 18.1099 5.38008 16.9999 6.61008 16.1799C9.59008 14.1999 14.4201 14.1999 17.3901 16.1799C18.6201 17.0099 19.3601 18.1099 19.4901 19.2999C19.5201 19.5399 19.4301 19.7699 19.2501 19.9299C17.2601 21.7499 14.6901 22.7499 12.0001 22.7499ZM6.08008 19.0999C7.74008 20.4899 9.83008 21.2499 12.0001 21.2499C14.1701 21.2499 16.2601 20.4899 17.9201 19.0999C17.7401 18.4899 17.2601 17.8999 16.5501 17.4199C14.0901 15.7799 9.92008 15.7799 7.44008 17.4199C6.73008 17.8999 6.26008 18.4899 6.08008 19.0999Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    {userLogin.name}
                                </PrimaryButton>
                            </Link>
                        ) : (
                            <>
                                <Link href={route("login")}>
                                    <PrimaryButton
                                        style="small"
                                        className="px-8"
                                    >
                                        Login
                                    </PrimaryButton>
                                </Link>
                                <Link href={route("register")}>
                                    <SecondaryButton
                                        style="small"
                                        className="px-8"
                                    >
                                        Signup
                                    </SecondaryButton>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile */}
            <div className="bg-gray-50 w-screen py-4 px-8 fixed z-[99999] top-0 md:hidden block">
                <div className="flex justify-between items-center">
                    <LogoIcon width="w-40" />
                    <button onClick={handleMenuOnClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
                                fill="currentColor"
                            />
                            <path
                                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
                                fill="currentColor"
                            />
                            <path
                                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                {showMenu && (
                    <div className="w-full h-full flex flex-col justify-center items-center py-8 space-y-6">
                        <NavLink link="#homeSection" text="Beranda" />
                        <NavLink link="#menuSection" text="Menu" />
                        <NavLink link="#aboutSection" text="Tentang" />
                        <div className="flex items-center gap-6">
                            {userLogin ? (
                                <Link
                                    href={
                                        userLogin.role == "siswa"
                                            ? route("dashboard.siswa")
                                            : route("dashboard.guru")
                                    }
                                >
                                    <PrimaryButton>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M12.12 13.53C12.1 13.53 12.07 13.53 12.05 13.53C12.02 13.53 11.98 13.53 11.95 13.53C9.67998 13.46 7.97998 11.69 7.97998 9.50998C7.97998 7.28998 9.78998 5.47998 12.01 5.47998C14.23 5.47998 16.04 7.28998 16.04 9.50998C16.03 11.7 14.32 13.46 12.15 13.53C12.13 13.53 12.13 13.53 12.12 13.53ZM12 6.96998C10.6 6.96998 9.46998 8.10998 9.46998 9.49998C9.46998 10.87 10.54 11.98 11.9 12.03C11.93 12.02 12.03 12.02 12.13 12.03C13.47 11.96 14.52 10.86 14.53 9.49998C14.53 8.10998 13.4 6.96998 12 6.96998Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12.0001 22.7499C9.31008 22.7499 6.74008 21.7499 4.75008 19.9299C4.57008 19.7699 4.49008 19.5299 4.51008 19.2999C4.64008 18.1099 5.38008 16.9999 6.61008 16.1799C9.59008 14.1999 14.4201 14.1999 17.3901 16.1799C18.6201 17.0099 19.3601 18.1099 19.4901 19.2999C19.5201 19.5399 19.4301 19.7699 19.2501 19.9299C17.2601 21.7499 14.6901 22.7499 12.0001 22.7499ZM6.08008 19.0999C7.74008 20.4899 9.83008 21.2499 12.0001 21.2499C14.1701 21.2499 16.2601 20.4899 17.9201 19.0999C17.7401 18.4899 17.2601 17.8999 16.5501 17.4199C14.0901 15.7799 9.92008 15.7799 7.44008 17.4199C6.73008 17.8999 6.26008 18.4899 6.08008 19.0999Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        {userLogin.name}
                                    </PrimaryButton>
                                </Link>
                            ) : (
                                <>
                                    <Link href={route("login")}>
                                        <PrimaryButton
                                            style="small"
                                            className="px-8"
                                        >
                                            Login
                                        </PrimaryButton>
                                    </Link>
                                    <Link href={route("register")}>
                                        <SecondaryButton
                                            style="small"
                                            className="px-8"
                                        >
                                            Signup
                                        </SecondaryButton>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

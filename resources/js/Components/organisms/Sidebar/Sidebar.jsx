import LogoIcon from "@/Components/atoms/LogoIcon/LogoIcon";
import SidebarLink from "@/Components/atoms/Sidebar/SidebarLink";
import { Link, usePage } from "@inertiajs/react";
import SidebarSiswa from "../../molecules/Sidebar/SidebarSiswa";
import SidebarGuru from "../../molecules/Sidebar/SidebarGuru";
import { useState } from "react";

export default function Sidebar({ userLogin }) {
    const { url } = usePage();

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuOnClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <aside className="w-72 h-screen fixed left-0 bg-gray-50 p-8 flex-col justify-between border-r border-r-gray-100 z-10 md:flex hidden">
                {/* Logo */}
                <Link href={route("landing")}>
                    <LogoIcon />
                </Link>

                {userLogin.role == "siswa" && <SidebarSiswa url={url} />}
                {userLogin.role == "guru" && <SidebarGuru url={url} />}
            </aside>

            {/* Small Screen */}
            <aside className="w-full py-4 bg-gray-50 relative z-[99999] md:hidden block">
                <button
                    onClick={handleMenuOnClick}
                    className="flex items-center justify-center gap-4 w-full font-medium"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    Menu
                </button>
                {showMenu && (
                    <div className="py-6">
                        {userLogin.role == "siswa" && (
                            <SidebarSiswa url={url} />
                        )}
                        {userLogin.role == "guru" && <SidebarGuru url={url} />}
                    </div>
                )}
            </aside>
        </>
    );
}

import LogoIcon from "@/Components/atoms/LogoIcon/LogoIcon";
import SidebarLink from "@/Components/atoms/Sidebar/SidebarLink";
import { Link, usePage } from "@inertiajs/react";
import SidebarSiswa from "../../molecules/Sidebar/SidebarSiswa";
import SidebarGuru from "../../molecules/Sidebar/SidebarGuru";

export default function Sidebar({ userLogin }) {
    const { url } = usePage();

    return (
        <aside className="w-72 h-screen fixed left-0 bg-gray-50 p-8 flex flex-col justify-between border-r border-r-gray-100 z-10">
            {/* Logo */}
            <Link href={route("landing")}>
                <LogoIcon />
            </Link>

            {userLogin.role == "siswa" && <SidebarSiswa url={url} />}
            {userLogin.role == "guru" && <SidebarGuru url={url} />}
        </aside>
    );
}

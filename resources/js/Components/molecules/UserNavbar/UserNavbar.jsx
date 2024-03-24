import NavIcon from "@/Components/atoms/Navbar/NavIcon";
import { Link } from "@inertiajs/react";

export default function UserNavbar({ userLogin, children }) {
    return (
        <nav className="h-24 bg-gray-50 relative md:fixed top-0 right-0 z-[999999] py-4 px-8 flex items-center justify-between w-full md:w-[calc(100%-18rem)]">
            {children}
            <Link
                href={route("profile.edit")}
                className="flex items-center gap-6"
            >
                <p className="hidden md:block">
                    {userLogin ? userLogin.name : "Guest"}
                </p>
                <NavIcon userLogin={userLogin} />
            </Link>
        </nav>
    );
}

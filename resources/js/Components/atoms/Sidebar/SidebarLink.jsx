import { Link } from "@inertiajs/react";

export default function SidebarLink({ children, link }) {
    return (
        <Link
            as="button"
            href={link}
            className="flex items-center p-3 rounded-lg text-xl font-medium gap-3 text-gray-500 hover:bg-orange-100 hover:text-orange-500 active:bg-orange-100 active:text-orange-500"
        >
            {children}
        </Link>
    );
}

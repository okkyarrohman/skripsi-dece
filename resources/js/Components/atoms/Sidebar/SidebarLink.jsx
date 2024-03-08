import { Link } from "@inertiajs/react";

export default function SidebarLink({ children, link, active, ...props }) {
    return (
        <Link
            {...props}
            as="button"
            href={link}
            className={`flex items-center p-3 rounded-lg text-lg font-medium gap-3 hover:bg-orange-100 hover:text-orange-500 text-left ${
                active ? "bg-orange-100 text-orange-500" : "text-gray-500"
            }`}
        >
            {children}
        </Link>
    );
}

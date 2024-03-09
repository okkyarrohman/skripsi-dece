import { Link } from "@inertiajs/react";

export default function NavLink({ link, text }) {
    return (
        <Link
            as="button"
            href={link}
            className="text-lg w-fit transition duration-300 ease-in-out hover:border-b-2 hover:border-b-orange-500"
        >
            {text}
        </Link>
    );
}

import NavIcon from "@/Components/atoms/Navbar/NavIcon";
import Title from "@/Components/atoms/Text/Title";

export default function UserNavbar({ userLogin, children }) {
    return (
        <nav
            className="h-24 bg-gray-50 fixed top-0 right-0 py-4 px-8 flex items-center justify-between"
            style={{ width: "calc(100vw - 18rem)" }}
        >
            {children}
            <div className="flex items-center gap-6">
                <p>{userLogin ? userLogin.name : "Guest"}</p>
                <NavIcon />
            </div>
        </nav>
    );
}

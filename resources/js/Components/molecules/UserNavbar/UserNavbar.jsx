import NavIcon from "@/Components/atoms/Navbar/NavIcon";

export default function UserNavbar({ userLogin, children }) {
    return (
        <nav
            className="h-24 bg-gray-50 relative md:fixed top-0 right-0 z-[999999] py-4 px-8 flex items-center justify-between w-full md:w-[calc(100%-18rem)]"
            // style={{ width: "calc(100vw - 18rem)" }}
        >
            {children}
            <div className="flex items-center gap-6">
                <p className="hidden md:block">
                    {userLogin ? userLogin.name : "Guest"}
                </p>
                <NavIcon />
            </div>
        </nav>
    );
}

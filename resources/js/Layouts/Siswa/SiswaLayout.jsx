import BackButton from "@/Components/atoms/Button/BackButton";
import Title from "@/Components/atoms/Text/Title";
import UserNavbar from "@/Components/molecules/UserNavbar/UserNavbar";
import Sidebar from "@/Components/molecules/Sidebar/Sidebar";

export default function SiswaLayout({
    userLogin,
    children,
    title,
    back = false,
}) {
    return (
        <>
            <Sidebar />
            <UserNavbar userLogin={userLogin}>
                {back ? <BackButton /> : <Title title={title} />}
            </UserNavbar>
            <div className="pl-72 pt-24">
                <div className="p-8 w-full h-full">{children}</div>
            </div>
        </>
    );
}

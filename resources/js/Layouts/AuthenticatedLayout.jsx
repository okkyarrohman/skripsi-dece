import BackButton from "@/Components/atoms/Button/BackButton";
import Title from "@/Components/atoms/Text/Title";
import UserNavbar from "@/Components/molecules/UserNavbar/UserNavbar";
import Sidebar from "@/Components/organisms/Sidebar/Sidebar";

export default function AuthenticatedLayout({
    userLogin,
    children,
    title,
    back = false,
}) {
    return (
        <>
            <Sidebar userLogin={userLogin} />
            <UserNavbar userLogin={userLogin}>
                {back ? <BackButton /> : <Title title={title} />}
            </UserNavbar>
            <div className="pl-72 pt-24">
                <div className="p-8 w-full h-full">{children}</div>
            </div>
        </>
    );
}

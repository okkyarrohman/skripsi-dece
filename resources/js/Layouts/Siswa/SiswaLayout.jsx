import BackButton from "@/Components/atoms/Button/BackButton";
import Title from "@/Components/atoms/Text/Title";
import AuthNavbar from "@/Components/molecules/AuthNavbar/AuthNavbar";
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
            <AuthNavbar userLogin={userLogin}>
                {back ? <BackButton /> : <Title title={title} />}
            </AuthNavbar>
            <div className="pl-72 pt-24">
                <div className="p-8 w-full h-full">{children}</div>
            </div>
        </>
    );
}

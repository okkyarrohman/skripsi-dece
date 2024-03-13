import Navbar from "@/Components/molecules/AuthNavbar/Navbar";
import Sidebar from "@/Components/molecules/Sidebar/Sidebar";

export default function MateriTemplate({ children }) {
    return (
        <>
            <Sidebar />
            <Navbar />
            <div className="pl-72 pt-24">
                <div className="p-8 w-full h-full">{children}</div>
            </div>
        </>
    );
}

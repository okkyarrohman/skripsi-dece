import Footer from "@/Components/atoms/Footer/Footer";
import LandingNavbar from "@/Components/organisms/Landing/LandingNavbar";

export default function LandingTemplate({ userLogin, children }) {
    return (
        <>
            <LandingNavbar userLogin={userLogin} />
            <main className="overflow-x-hidden">{children}</main>
            <Footer />
        </>
    );
}

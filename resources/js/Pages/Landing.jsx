import AboutSection from "@/Components/organisms/Landing/AboutSection";
import HeroSection from "@/Components/organisms/Landing/HeroSection";
import MenuSection from "@/Components/organisms/Landing/MenuSection";
import LandingTemplate from "@/Components/templates/LandingTemplate/LandingTemplate";

export default function Landing({ auth, laravelVersion, phpVersion }) {
    return (
        <LandingTemplate userLogin={auth.user}>
            <HeroSection userLogin={auth.user} />
            <MenuSection />
            <AboutSection userLogin={auth.user} />
        </LandingTemplate>
        // <h1>Landing</h1>
    );
}

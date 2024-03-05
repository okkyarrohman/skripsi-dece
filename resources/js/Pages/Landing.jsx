import AboutSection from "@/Components/organisms/Landing/AboutSection";
import HeroSection from "@/Components/organisms/Landing/HeroSection";
import MenuSection from "@/Components/organisms/Landing/MenuSection";
import LandingTemplate from "@/Components/templates/LandingTemplate/LandingTemplate";

export default function Landing({ auth, laravelVersion, phpVersion }) {
    console.log(auth);

    return (
        <LandingTemplate userLogin={auth}>
            <HeroSection userLogin={auth} />
            <MenuSection />
            <AboutSection userLogin={auth} />
        </LandingTemplate>
    );
}

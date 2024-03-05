import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import LandingHeroTitle from "@/Components/molecules/Landing/LandingHeroTitle";

export default function HeroSection({ userLogin }) {
    return (
        <section
            id="homeSection"
            className="h-screen w-screen bg-gray-50 flex flex-col items-center justify-center space-y-6 overflow-hidden relative"
        >
            <LandingHeroTitle />
            <div className="relative z-10">
                <PrimaryButton
                    href={
                        userLogin
                            ? userLogin.user.role == "siswa"
                                ? route("dashboard.siswa")
                                : route("dashboard.guru")
                            : route("login")
                    }
                >
                    Belajar Sekarang
                </PrimaryButton>
            </div>
            <img
                src="/assets/vector-hero.png"
                alt=""
                className="w-full h-fit absolute -bottom-6"
            />
        </section>
    );
}

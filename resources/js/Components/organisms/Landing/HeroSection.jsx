import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import LandingHeroTitle from "@/Components/molecules/Landing/LandingHeroTitle";
import { Link } from "@inertiajs/react";

export default function HeroSection({ userLogin }) {
    return (
        <section
            id="homeSection"
            className="h-screen w-screen bg-gray-50 flex flex-col items-center justify-center space-y-6 overflow-hidden relative md:px-0 px-6"
        >
            <LandingHeroTitle />
            <div className="relative z-10">
                <Link
                    href={
                        userLogin
                            ? userLogin.role == "siswa"
                                ? route("dashboard.siswa")
                                : route("dashboard.guru")
                            : route("login")
                    }
                >
                    <PrimaryButton>Belajar Sekarang</PrimaryButton>
                </Link>
            </div>
            <img
                src="/assets/vector-hero.png"
                alt=""
                className="w-full h-fit absolute -bottom-6"
            />
        </section>
    );
}

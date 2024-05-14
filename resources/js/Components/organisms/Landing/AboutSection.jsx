import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import LandingTitle from "@/Components/atoms/Landing/LandingTitle";
import Description from "@/Components/atoms/Text/Description";
import LandingAboutImage from "@/Components/molecules/Landing/LandingAboutImage";
import { Link } from "@inertiajs/react";

export default function AboutSection({ userLogin }) {
    return (
        <section
            id="aboutSection"
            className="min-h-screen w-screen md:py-0 py-10 bg-abu-50 flex flex-col justify-center items-center bg-gray-50 md:px-0 px-6"
        >
            <div className="flex md:flex-row flex-col items-center justify-center gap-16">
                <LandingAboutImage />
                <div className="md:w-1/2 w-full space-y-6">
                    <LandingTitle align="text-left">
                        Menyajikan{" "}
                        <span className="text-orange-500">
                            konten pembelajaran langsung
                        </span>{" "}
                        dari guru
                    </LandingTitle>
                    <Description
                        size="text-2xl"
                        desc="Nikmati fitur dimana guru dapat memberikan materi pembelajaran kepada siswanya yakni menggabungkan materi berupa text dan video."
                    />
                    <Link
                        href={
                            userLogin
                                ? userLogin.role == "siswa"
                                    ? route("dashboard.siswa")
                                    : route("dashboard.guru")
                                : route("login")
                        }
                        className="block"
                    >
                        <PrimaryButton className="w-fit">
                            Belajar Sekarang
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}

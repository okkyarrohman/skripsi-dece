import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import LandingTitle from "@/Components/atoms/Landing/LandingTitle";
import Description from "@/Components/atoms/Text/Description";
import LandingAboutImage from "@/Components/molecules/Landing/LandingAboutImage";

export default function AboutSection({ userLogin }) {
    return (
        <section
            id="aboutSection"
            className="min-h-screen w-screen bg-abu-50 flex flex-col justify-center items-center bg-gray-50"
        >
            <div className="flex items-center justify-center gap-16">
                <LandingAboutImage />
                <div className="w-1/2 space-y-6">
                    <LandingTitle align="text-left">
                        Menyajikan konten pembelajaran langsung dari guru
                    </LandingTitle>
                    <Description
                        size="text-2xl"
                        desc="Platform Inter memberikan fitur yang mana guru dapat memberikan materi pembelajaran kepada siswanya yakni menggabungkan materi berupa text dan video."
                    />
                    <PrimaryButton
                        href={
                            userLogin
                                ? userLogin.user.role == "siswa"
                                    ? route("dashboard.siswa")
                                    : route("dashboard.guru")
                                : route("login")
                        }
                        className="w-fit"
                    >
                        Belajar Sekarang
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
}

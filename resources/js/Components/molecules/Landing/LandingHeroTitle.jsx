import LandingTitle from "@/Components/atoms/Landing/LandingTitle";
import Description from "@/Components/atoms/Text/Description";

export default function LandingHeroTitle({ desc }) {
    return (
        <>
            <div className="md:w-3/5 w-full">
                <LandingTitle>
                    Belajar Bersama{" "}
                    <span className="text-orange-500">Joni</span> Untuk
                    Tingkatkan Skillmu
                </LandingTitle>
            </div>
            <div className="md:w-3/5 w-full">
                <Description
                    size="text-2xl"
                    align="text-center"
                    desc="Raih kemudahan belajar yang menyenangkan untuk membantumu memahami konsep-konsep dasar hingga teknik konfigurasi jaringan yang lebih kompleks"
                />
            </div>
        </>
    );
}

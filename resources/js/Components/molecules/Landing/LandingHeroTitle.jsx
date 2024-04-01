import LandingTitle from "@/Components/atoms/Landing/LandingTitle";
import Description from "@/Components/atoms/Text/Description";

export default function LandingHeroTitle({ desc }) {
    return (
        <>
            <div className="md:w-3/5 w-full">
                <LandingTitle>
                    Belajar Bersama{" "}
                    <span className="text-orange-500">Jarot</span> Untuk
                    Tingkatkan Skillmu
                </LandingTitle>
            </div>
            <div className="md:w-3/5 w-full">
                <Description
                    size="text-2xl"
                    align="text-center"
                    desc="Figma ipsum component variant main layer. Distribute horizontal polygon effect ipsum scale reesizing"
                />
            </div>
        </>
    );
}

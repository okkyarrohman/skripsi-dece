import LandingTitle from "@/Components/atoms/Landing/LandingTitle";
import Description from "@/Components/atoms/Text/Description";

export default function LandingHeroTitle({ desc }) {
    return (
        <>
            <div className="w-3/5">
                <LandingTitle>
                    Belajar Bersama{" "}
                    <span className="text-orange-500">Jarot</span> Untuk
                    Tingkatkan Skillmu
                </LandingTitle>
            </div>
            <div className="w-3/5">
                <Description
                    size="text-2xl"
                    align="text-center"
                    desc="Figma ipsum component variant main layer. Distribute horizontal polygon effect ipsum scale reesizing"
                />
            </div>
        </>
    );
}

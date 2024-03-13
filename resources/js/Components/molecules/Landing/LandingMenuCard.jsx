import LandingIcon from "@/Components/atoms/Landing/LandingIcon";
import Description from "@/Components/atoms/Text/Description";

export default function LandingMenuCard({ image, title, desc }) {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 max-w-96">
            <LandingIcon src={image} />
            <h4 className="font-bold text-3xl text-white">{title}</h4>
            <Description
                size="text-xl"
                align="text-center"
                color="text-white"
                desc={desc}
            />
        </div>
    );
}

import LogoIcon from "@/Components/atoms/LogoIcon/LogoIcon";
import Title from "@/Components/atoms/Text/Title";

export default function AuthHero() {
    return (
        <div className="w-4/5 space-y-16">
            <div className="space-y-6">
                <LogoIcon white width="w-28" />
                <div className="w-3/5">
                    <Title
                        size="text-[2rem]"
                        color="text-white"
                        title="Selamat Datang di Website Jarot"
                    />
                </div>
            </div>
            <img
                src="/assets/login-icon.png"
                alt="Login Icon"
                className="w-96 mx-auto"
            />
        </div>
    );
}

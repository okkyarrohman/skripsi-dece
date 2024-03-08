import AuthHeader from "@/Components/molecules/Auth/AuthHeader";
import AuthHero from "@/Components/molecules/Auth/AuthHero";
import { Link } from "@inertiajs/react";

export default function AuthTemplate({ title, desc, children }) {
    return (
        <section className="grid grid-cols-2 bg-gray-50">
            {/* Left */}
            <div className="bg-orange-500 w-1/2 h-screen flex items-center justify-center fixed left-0">
                <AuthHero />
            </div>

            {/* Empty Space */}
            <div></div>

            {/* Right */}
            <div className="bg-gray-50 w-full min-h-screen flex justify-center items-center">
                <div className="w-4/5 space-y-12 h-full flex flex-col justify-center py-10">
                    <AuthHeader title={title} desc={desc} />
                    {children}
                </div>
            </div>
        </section>
    );
}

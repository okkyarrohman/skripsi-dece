import LandingTitle from "@/Components/atoms/Landing/LandingTitle";
import LandingMenuCard from "@/Components/molecules/Landing/LandingMenuCard";

export default function MenuSection() {
    return (
        <section
            id="menuSection"
            className="w-screen min-h-screen md:py-0 py-10 bg-orange-500 flex flex-col justify-center items-center space-y-14"
        >
            <div className="md:w-3/5 w-full">
                <LandingTitle color="text-white">
                    Tingkatkan Pengalaman Belajar dengan{" "}
                    <span className="text-black">Fitur Terbaik</span> Joni
                </LandingTitle>
            </div>
            <div className="flex md:flex-row flex-col md:gap-0 gap-6 justify-evenly w-full">
                <LandingMenuCard
                    image="/assets/materi-icon.png"
                    title="Materi"
                    desc="Kemudahan Mengakses Materi Pembelajaran "
                />
                <LandingMenuCard
                    image="/assets/kelompok-icon.png"
                    title="Kelompok"
                    desc="Lebih Mudah Mengerjakan Tugas Bersama Teman-Teman"
                />
                <LandingMenuCard
                    image="/assets/referensi-icon.png"
                    title="Akses Realtime"
                    desc="Nikmati Akses Absensi hingga Penilaian Secara Realtime"
                />
            </div>
        </section>
    );
}

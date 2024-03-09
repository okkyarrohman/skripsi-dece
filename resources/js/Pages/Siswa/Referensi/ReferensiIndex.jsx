import Banner from "@/Components/molecules/Banner/Banner";
import CardReferensi from "@/Components/organisms/Card/CardReferensi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate } from "@/utils/helper";
import { Link, usePage } from "@inertiajs/react";

export default function ReferensiIndex({ auth }) {
    const { referensis } = usePage().props;

    return (
        <AuthenticatedLayout userLogin={auth.user} title="Referensi">
            <div className="space-y-5">
                {/* Banner */}
                <Banner
                    title="Ciptakan Pengetahuan, Baca Sekarang!"
                    desc="Berikut merupakan beberapa refrensi bacaan yang dapat digunakan untuk menambah materi yang ada"
                />

                {/* Items */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4">
                    {referensis.map((referensi, index) => {
                        return (
                            <CardReferensi
                                key={index}
                                uploadDate={formattedDate(referensi.created_at)}
                                seenTime={referensi.seen_time}
                                referensiId={referensi.id}
                                referensiName={referensi.name}
                                referensiDesc={referensi.slug}
                                referensiFile={referensi.file}
                            />
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

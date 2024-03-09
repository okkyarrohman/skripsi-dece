import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import BannerReferensi from "@/Components/molecules/Banner/BannerReferensi";
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
                <BannerReferensi />

                {/* Items */}
                <div className="grid grid-cols-3 gap-x-4 gap-y-4">
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

import MateriTitle from "@/Components/atoms/Materi/MateriTitle";
import Description from "@/Components/atoms/Text/Description";
import MateriCard from "@/Components/organisms/Materi/MateriCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate, formattedNumber } from "@/utils/helper";
import { usePage } from "@inertiajs/react";

export default function MateriIndex({ auth }) {
    const { materis } = usePage().props;

    console.log(materis);

    return (
        <AuthenticatedLayout userLogin={auth.user} title="Materi">
            <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                {materis.map((materi, index) => {
                    // const formattedIndex = String(index + 1).padStart(2, "0");

                    return (
                        <MateriCard
                            key={index}
                            uploadDate={formattedDate(materi.created_at)}
                            seenTime={materi.materi_seens.length}
                            materiId={materi.id}
                            materiFile={materi.file}
                        >
                            <MateriTitle
                                number={formattedNumber(index)}
                                title={materi.name}
                            />
                            <div className=" line-clamp-2">
                                <Description desc={materi.slug} />
                            </div>
                        </MateriCard>
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}

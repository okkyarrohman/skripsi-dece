import MateriTitle from "@/Components/atoms/Materi/MateriTitle";
import Description from "@/Components/atoms/Text/Description";
import MateriCard from "@/Components/organisms/Materi/MateriCard";
import SiswaLayout from "@/Layouts/Siswa/SiswaLayout";

export default function MateriIndex({ auth }) {
    return (
        <SiswaLayout userLogin={auth} title="Materi">
            <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                <MateriCard uploadDate="22/01/2023" seenTime="36">
                    <MateriTitle number="01" title="Apa Itu Jaringan?" />
                    <Description desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas rem, fuga" />
                </MateriCard>
            </div>
        </SiswaLayout>
    );
}

import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import PdfViewer from "@/Components/atoms/PdfViewer/PdfViewer";
import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Panduan({ auth }) {
    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="p-6 bg-gray-50 rounded-xl space-y-4">
                <Title title="Panduan Penggunaan Untuk Guru" />
                <PdfViewer src={`/assets/panduan-guru.pdf`} />
            </div>
        </AuthenticatedLayout>
    );
}

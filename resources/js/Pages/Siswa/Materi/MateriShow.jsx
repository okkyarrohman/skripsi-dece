import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import MateriTitle from "@/Components/atoms/Materi/MateriTitle";
import PdfViewer from "@/Components/atoms/PdfViewer/PdfViewer";
import Description from "@/Components/atoms/Text/Description";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function MateriShow({ auth }) {
    const { materis: materi } = usePage().props;

    console.log(materi);

    return (
        <AuthenticatedLayout back userLogin={auth.user} title="Materi">
            <div className="p-6 bg-gray-50 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                    <MateriTitle number="01" title={materi.name} />
                    <a
                        href={"/storage/materi/" + materi.file}
                        className="w-fit block"
                        download
                    >
                        <PrimaryButton>
                            Download Materi
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12.0001 21.2501C11.8101 21.2501 11.6201 21.1801 11.4701 21.0301L5.40012 14.9601C5.11012 14.6701 5.11012 14.1901 5.40012 13.9001C5.69012 13.6101 6.17012 13.6101 6.46012 13.9001L12.0001 19.4401L17.5401 13.9001C17.8301 13.6101 18.3101 13.6101 18.6001 13.9001C18.8901 14.1901 18.8901 14.6701 18.6001 14.9601L12.5301 21.0301C12.3801 21.1801 12.1901 21.2501 12.0001 21.2501Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </PrimaryButton>
                    </a>
                </div>
                <Description desc={materi.description} />
                <PdfViewer src={`/storage/materi/` + materi.file} />
            </div>
        </AuthenticatedLayout>
    );
}

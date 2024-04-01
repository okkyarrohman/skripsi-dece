import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import ActionButton from "@/Components/molecules/Button/ActionButton";
import NoData from "@/Components/molecules/NoData/NoData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";

export default function MateriIndex({ auth }) {
    const { materis } = usePage().props;

    const tableTitle = ["Nomor", "Judul Materi", "Slug", "Action"];

    return (
        <AuthenticatedLayout title="Materi" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                <Link href={route("materi-guru.create")}>
                    <PrimaryButton className="ml-auto">
                        Tambah Materi
                    </PrimaryButton>
                </Link>
                {materis.length == 0 ? (
                    <NoData
                        title="Belum Terdapat Materi"
                        desc="Tambahkan materi segera!"
                    />
                ) : (
                    <TableContainer>
                        <TableHead datas={tableTitle} />
                        <TableBody>
                            {materis.map((materi, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableData children={index + 1} />
                                        <TableData
                                            children={materi.name}
                                            align="text-left"
                                            nowrap
                                        />
                                        <TableData
                                            children={materi.slug}
                                            align="text-left"
                                        />
                                        <TableData
                                            children={
                                                <ActionButton
                                                    onEdit={route(
                                                        "materi-guru.edit",
                                                        materi.id
                                                    )}
                                                    onDelete={route(
                                                        "materi-guru.destroy",
                                                        materi.id
                                                    )}
                                                />
                                            }
                                            nowrap
                                        />
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </TableContainer>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

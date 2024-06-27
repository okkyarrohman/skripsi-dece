import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import DropdownContainer from "@/Components/atoms/Dropdown/DropdownContainer";
import DropdownOption from "@/Components/atoms/Dropdown/DropdownOption";
import InputText from "@/Components/atoms/Input/InputText";
import InputTextArea from "@/Components/atoms/Input/InputTextArea";
import Label from "@/Components/atoms/Label/Label";
import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import IconTitle from "@/Components/molecules/Text/IconTitle";
import CardTugasAnswer from "@/Components/molecules/Tugas/CardTugasAnswer";
import TugasAnswerGrade from "@/Components/organisms/TugasAnswer/TugasAnswerGrade";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { storageUrl } from "@/utils/helper";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function TugasAnswerEdit({ auth }) {
    const { answers: answer } = usePage().props;

    const { data, setData, post, errors } = useForm({
        _method: "patch",
        nilaiPersiapan: answer.nilaiPersiapan,
        nilaiProses: answer.nilaiProses,
        nilaiWaktu: answer.nilaiWaktu,
        nilaiHasil: answer.nilaiHasil,
        nilaiPenutup: answer.nilaiPenutup,
        grade_category: answer.grade_category,
        feedback: answer.feedback,
    });

    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        answer.grade_category ? answer.grade_category : ""
    );

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("tugas-answer-guru.update", answer.id));
    };

    const handleDropdownOnClick = () => {
        setOpen(!open);
    };

    const handleOptionSelect = (option) => {
        if (option == "A") {
            setSelectedOption("A");
        } else if (option == "B") {
            setSelectedOption("B");
        } else if (option == "C") {
            setSelectedOption("C");
        } else if (option == "D") {
            setSelectedOption("D");
        } else {
            setSelectedOption("E");
        }
        setData("grade_category", option);
        setOpen(!open);
    };

    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gray-50 space-y-4">
                    <Title title={answer.tugas.name} />
                    <Description desc={answer.tugas.description} />
                </div>
                <CardTugasAnswer
                    number={1}
                    step="Deskripsi Tugas"
                    question={answer.tugas.question_1}
                    answer={answer.answer_1}
                />
                <CardTugasAnswer
                    number={2}
                    step="Perencanaan Tugas"
                    question={answer.tugas.question_2}
                    answer={answer.answer_2}
                    fileAnswer
                    filePath={`${storageUrl}/tugas_answer/${answer.answer_2}`}
                />
                <CardTugasAnswer
                    number={3}
                    step="Pembuatan Tugas"
                    question={answer.tugas.question_3}
                    answer={answer.answer_3}
                    fileAnswer
                    filePath={`${storageUrl}/tugas_answer/${answer.answer_3}`}
                />
                <div className="p-6 rounded-xl bg-gray-50 space-y-4">
                    <IconTitle title="Penilaian dan Feedback">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M11.1818 16.8185H6.81813C2.86904 16.8185 1.18176 15.1312 1.18176 11.1821V6.81849C1.18176 2.8694 2.86904 1.18213 6.81813 1.18213H11.1818C15.1309 1.18213 16.8181 2.8694 16.8181 6.81849V11.1821C16.8181 15.1312 15.1309 16.8185 11.1818 16.8185ZM6.81813 2.27304C3.4654 2.27304 2.27267 3.46576 2.27267 6.81849V11.1821C2.27267 14.5349 3.4654 15.7276 6.81813 15.7276H11.1818C14.5345 15.7276 15.7272 14.5349 15.7272 11.1821V6.81849C15.7272 3.46576 14.5345 2.27304 11.1818 2.27304H6.81813Z"
                                fill="#FDAC74"
                            />
                            <path
                                d="M11.5454 14.273C10.44 14.273 9.54541 13.3784 9.54541 12.273V5.72754C9.54541 4.62208 10.44 3.72754 11.5454 3.72754C12.6509 3.72754 13.5454 4.62208 13.5454 5.72754V12.273C13.5454 13.3784 12.6509 14.273 11.5454 14.273ZM11.5454 4.81845C11.0436 4.81845 10.6363 5.22572 10.6363 5.72754V12.273C10.6363 12.7748 11.0436 13.1821 11.5454 13.1821C12.0472 13.1821 12.4545 12.7748 12.4545 12.273V5.72754C12.4545 5.22572 12.0472 4.81845 11.5454 4.81845Z"
                                fill="#F97316"
                            />
                            <path
                                d="M6.45447 14.273C5.34901 14.273 4.45447 13.3784 4.45447 12.273V9.72754C4.45447 8.62208 5.34901 7.72754 6.45447 7.72754C7.55992 7.72754 8.45447 8.62208 8.45447 9.72754V12.273C8.45447 13.3784 7.55992 14.273 6.45447 14.273ZM6.45447 8.81845C5.95265 8.81845 5.54538 9.22572 5.54538 9.72754V12.273C5.54538 12.7748 5.95265 13.1821 6.45447 13.1821C6.95629 13.1821 7.36356 12.7748 7.36356 12.273V9.72754C7.36356 9.22572 6.95629 8.81845 6.45447 8.81845Z"
                                fill="#F97316"
                            />
                        </svg>
                    </IconTitle>
                    <form onSubmit={handleOnSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="grade" text="Aspek Penilaian (1-5)" />
                            <InputText
                                autoFocus={data.grade == null}
                                name="nilaiPersiapan"
                                placeholder="Nilai Persiapan..."
                                value={data.nilaiPersiapan}
                                onChange={(e) =>
                                    setData("nilaiPersiapan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.grade}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="grade" text="Aspek Proses (1-5)" />
                            <InputText
                                autoFocus={data.grade == null}
                                name="nilaiProses"
                                placeholder="Nilai Proses..."
                                value={data.nilaiProses}
                                onChange={(e) =>
                                    setData("nilaiProses", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.grade}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="grade" text="Aspek Waktu (1-5)" />
                            <InputText
                                autoFocus={data.grade == null}
                                name="nilaiWaktu"
                                placeholder="Nilai Waktu..."
                                value={data.nilaiWaktu}
                                onChange={(e) =>
                                    setData("nilaiWaktu", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.grade}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="grade" text="Aspek Hasil (1-5)" />
                            <InputText
                                autoFocus={data.grade == null}
                                name="nilaiHasil"
                                placeholder="Nilai Hasil..."
                                value={data.nilaiHasil}
                                onChange={(e) =>
                                    setData("nilaiHasil", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.grade}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="grade" text="Aspek Penutup (1-5)" />
                            <InputText
                                autoFocus={data.grade == null}
                                name="nilaiPenutup"
                                placeholder="Nilai Penutup..."
                                value={data.nilaiPenutup}
                                onChange={(e) =>
                                    setData("nilaiPenutup", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.grade}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="grade" text="Total Nilai" />
                            <InputText
                                autoFocus={data.grade == null}
                                placeholder="Nilai Tugas..."
                                disabled
                                value={answer.grade}
                                onChange={(e) =>
                                    setData("grade", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.grade}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="grade_category"
                                text="Kategori Penilaian"
                            />
                            <DropdownContainer
                                onClick={handleDropdownOnClick}
                                opened={open}
                                selectedOption={selectedOption}
                                unselectedOption="Pilih Kategori Nilai"
                            >
                                <DropdownOption
                                    option="A (81-100)"
                                    onSelect={() => handleOptionSelect("A")}
                                />
                                <DropdownOption
                                    option="B (61-80)"
                                    onSelect={() => handleOptionSelect("B")}
                                />
                                <DropdownOption
                                    option="C (41-60)"
                                    onSelect={() => handleOptionSelect("C")}
                                />
                                <DropdownOption
                                    option="D (21-40)"
                                    onSelect={() => handleOptionSelect("D")}
                                />
                                <DropdownOption
                                    option="E (0-20)"
                                    onSelect={() => handleOptionSelect("E")}
                                />
                            </DropdownContainer>
                            <InputError
                                message={errors.grade_category}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="feedback" text="Feedback" />
                            <InputTextArea
                                name="feedback"
                                placeholder="Feedback Tugas..."
                                value={data.feedback}
                                onChange={(e) =>
                                    setData("feedback", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.feedback}
                                className="mt-2"
                            />
                        </div>
                        <PrimaryButton type="submit" className="ml-auto">
                            Simpan
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

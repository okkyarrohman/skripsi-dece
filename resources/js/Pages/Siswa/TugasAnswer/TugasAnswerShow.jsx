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
import { usePage } from "@inertiajs/react";

export default function TugasAnswerShow({ auth }) {
    const { answers: answer } = usePage().props;

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
                <TugasAnswerGrade
                    grade={answer.grade}
                    gradeCategory={answer.grade_category}
                    feedback={answer.feedback}
                />
            </div>
        </AuthenticatedLayout>
    );
}

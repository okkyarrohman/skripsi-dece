import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import InputFile from "@/Components/atoms/Input/InputFile";
import InputTextArea from "@/Components/atoms/Input/InputTextArea";
import Label from "@/Components/atoms/Label/Label";
import Description from "@/Components/atoms/Text/Description";
import Stepper from "@/Components/molecules/Stepper/Stepper";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { checkDeadlinePassed } from "@/utils/helper";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function TugasShow({ auth }) {
    const [isDisabled, setIsDisabled] = useState(true);

    const { tugases: tugas } = usePage().props;

    const { data, setData, post } = useForm({
        tugas_id: tugas.id,
        // kelompok_id: auth.user.kelompok_id,
        answer_1: "",
        answer_2: null,
        answer_3: null,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("tugas-answer.store"));
    };

    const [step, setStep] = useState(1);

    const handlePrevOnClick = () => {
        step == 1 ? setStep(step) : setStep(step - 1);
    };

    const handleNextOnClick = () => {
        step == 3 ? setStep(step) : setStep(step + 1);
    };

    useEffect(() => {
        const isAllAnswersFilled =
            data.answer_1 !== "" &&
            data.answer_2 !== null &&
            data.answer_3 !== null;
        setIsDisabled(!isAllAnswersFilled);
    }, [data.answer_1, data.answer_2, data.answer_3]);

    return (
        <AuthenticatedLayout back userLogin={auth.user}>
            <div className="p-6 bg-gray-50 rounded-xl space-y-6">
                {/* Stepper */}
                <Stepper step={step} />
                {/* Soal */}
                <Description
                    desc={
                        step == 1
                            ? tugas.question_1
                            : step == 2
                            ? tugas.question_2
                            : step == 3 && tugas.question_3
                    }
                />

                <form onSubmit={handleOnSubmit} className="space-y-6">
                    {/* Jawaban */}
                    <div>
                        <Label htmlFor="answer" text="Jawaban" />
                        {step == 1 && (
                            <InputTextArea
                                name="answer_1"
                                placeholder="Masukkan Jawaban"
                                value={data.answer_1}
                                onChange={(e) =>
                                    setData("answer_1", e.target.value)
                                }
                            />
                        )}
                        {step == 2 && (
                            <InputFile
                                name="answer_2"
                                file={data.answer_2 ? data.answer_2.name : null}
                                onChange={(e) =>
                                    setData("answer_2", e.target.files[0])
                                }
                            />
                        )}
                        {step == 3 && (
                            <InputFile
                                name="answer_3"
                                file={data.answer_3 ? data.answer_3.name : null}
                                onChange={(e) =>
                                    setData("answer_3", e.target.files[0])
                                }
                            />
                        )}
                    </div>

                    <div
                        className={`flex flex-col md:flex-row gap-4 ${
                            step == 1 ? "justify-end" : "justify-between"
                        }`}
                    >
                        {/* Prev Button */}
                        {step > 1 && (
                            <div className="w-full md:w-40">
                                <SecondaryButton
                                    type="button"
                                    full
                                    onClick={handlePrevOnClick}
                                >
                                    Sebelumnya
                                </SecondaryButton>
                            </div>
                        )}

                        {/* Next Button */}
                        {step < 3 && (
                            <div className="w-full md:w-40">
                                <PrimaryButton
                                    type="button"
                                    full
                                    onClick={handleNextOnClick}
                                >
                                    Selanjutnya
                                </PrimaryButton>
                            </div>
                        )}

                        {/* Submit Button */}
                        {step == 3 && (
                            <div className="w-full md:w-40">
                                <PrimaryButton
                                    full
                                    type="submit"
                                    disabled={
                                        isDisabled ||
                                        checkDeadlinePassed(
                                            tugas.deadline_date,
                                            tugas.deadline_time
                                        )
                                    }
                                >
                                    Kirim
                                </PrimaryButton>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

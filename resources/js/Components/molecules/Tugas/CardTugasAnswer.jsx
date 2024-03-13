import StepIndex from "@/Components/atoms/Stepper/StepIndex";
import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";

export default function CardTugasAnswer({
    number,
    step,
    question,
    answer,
    fileAnswer = false,
    filePath,
}) {
    return (
        <div className="p-6 rounded-xl bg-gray-50 space-y-4">
            <StepIndex active number={number} step={step} />
            <Title size="text-xl" title="Deskripsi Soal" />
            <Description desc={question} />
            <Title size="text-xl" title="Jawaban" />
            <div className="flex justify-between">
                <Description desc={answer} />
                {fileAnswer && (
                    <a
                        href={filePath}
                        target="_blank"
                        className="text-orange-500 underline"
                    >
                        Lihat Jawaban
                    </a>
                )}
            </div>
        </div>
    );
}

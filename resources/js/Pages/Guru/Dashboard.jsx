import DashboardGreet from "@/Components/molecules/Dashboard/DashboardGreet";
import DashboardChartAverageGrade from "@/Components/organisms/Dashboard/DashboardChartAverageGrade";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const { kelompoks, tugases, answers } = usePage().props;

    let averageGradePerKelompoks = kelompoks.map((kelompok) => {
        let answerFilterByTugas = kelompok.tugases.map((tugas) => {
            return answers.filter((answer) => {
                return answer.tugas_id === tugas.id;
            });
        });

        let totalGradesByTugas = answerFilterByTugas.map((answersForTugas) => {
            let totalGrade = answersForTugas.reduce((total, currentAnswer) => {
                return total + parseInt(currentAnswer.grade);
            }, 0);
            let averageGrade =
                answersForTugas.length > 0
                    ? totalGrade / answersForTugas.length
                    : 0;
            return isNaN(averageGrade) ? 0 : averageGrade;
        });

        let totalGradeSum = totalGradesByTugas.reduce(
            (total, grade) => total + grade,
            0
        );
        let averageTotalGrade =
            totalGradesByTugas.length > 0
                ? totalGradeSum / totalGradesByTugas.length
                : 0;

        return {
            kelompok_name: kelompok.name,
            average_grade: isNaN(averageTotalGrade)
                ? 0
                : parseFloat(averageTotalGrade.toFixed(2)),
        };
    });

    const labels = averageGradePerKelompoks.map(
        (kelompok) => kelompok.kelompok_name
    );

    const data = {
        labels,
        datasets: [
            {
                data: averageGradePerKelompoks.map(
                    (averageGrade) => averageGrade.average_grade
                ),
                backgroundColor: "rgba(251, 138, 60, 1)",
            },
        ],
    };

    return (
        <AuthenticatedLayout title="Dashboard" userLogin={auth.user}>
            <div className="space-y-6">
                <DashboardGreet
                    icon
                    userLogin={auth.user}
                    desc="Siap menginspirasi murid-murid anda hari ini?"
                />
                <DashboardChartAverageGrade data={data} />
            </div>
        </AuthenticatedLayout>
    );
}

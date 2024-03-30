import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import { Link } from "@inertiajs/react";

export default function CardTugas({
    tugasName,
    tugasDesc,
    grade,
    deadline,
    answered = false,
    tugasId,
    disabled = false,
}) {
    return (
        <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-orange-500">
            <div className="line-clamp-3">
                <Title size="text-xl" title={tugasName} />
            </div>
            <p className="text-red-500 text-sm">Deadline : {deadline}</p>
            <div className="w-full h-0.5 bg-orange-500"></div>
            <div className="line-clamp-2">
                <Description desc={tugasDesc} />
            </div>
            <p className="text-gray-500 font-medium">
                Nilai: <span className="font-normal">{grade}</span>
            </p>
            <div className="flex justify-between gap-4">
                <Link
                    href={
                        answered
                            ? route("tugas-answer.show", tugasId)
                            : route("tugas.show", tugasId)
                    }
                    className="w-full"
                >
                    {answered ? (
                        <SecondaryButton full style="small" size="text-sm">
                            Lihat Hasil
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 16.33C9.61004 16.33 7.67004 14.39 7.67004 12C7.67004 9.60998 9.61004 7.66998 12 7.66998C14.39 7.66998 16.33 9.60998 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.16998C10.44 9.16998 9.17004 10.44 9.17004 12C9.17004 13.56 10.44 14.83 12 14.83C13.56 14.83 14.83 13.56 14.83 12C14.83 10.44 13.56 9.16998 12 9.16998Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 21.02C8.23996 21.02 4.68996 18.82 2.24996 15C1.18996 13.35 1.18996 10.66 2.24996 8.99998C4.69996 5.17998 8.24996 2.97998 12 2.97998C15.75 2.97998 19.3 5.17998 21.74 8.99998C22.8 10.65 22.8 13.34 21.74 15C19.3 18.82 15.75 21.02 12 21.02ZM12 4.47998C8.76996 4.47998 5.67996 6.41998 3.51996 9.80998C2.76996 10.98 2.76996 13.02 3.51996 14.19C5.67996 17.58 8.76996 19.52 12 19.52C15.23 19.52 18.32 17.58 20.48 14.19C21.23 13.02 21.23 10.98 20.48 9.80998C18.32 6.41998 15.23 4.47998 12 4.47998Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </SecondaryButton>
                    ) : (
                        <PrimaryButton
                            full
                            style="small"
                            size="text-sm"
                            disabled={disabled}
                        >
                            Lihat Tugas
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 16.33C9.61004 16.33 7.67004 14.39 7.67004 12C7.67004 9.60998 9.61004 7.66998 12 7.66998C14.39 7.66998 16.33 9.60998 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.16998C10.44 9.16998 9.17004 10.44 9.17004 12C9.17004 13.56 10.44 14.83 12 14.83C13.56 14.83 14.83 13.56 14.83 12C14.83 10.44 13.56 9.16998 12 9.16998Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 21.02C8.23996 21.02 4.68996 18.82 2.24996 15C1.18996 13.35 1.18996 10.66 2.24996 8.99998C4.69996 5.17998 8.24996 2.97998 12 2.97998C15.75 2.97998 19.3 5.17998 21.74 8.99998C22.8 10.65 22.8 13.34 21.74 15C19.3 18.82 15.75 21.02 12 21.02ZM12 4.47998C8.76996 4.47998 5.67996 6.41998 3.51996 9.80998C2.76996 10.98 2.76996 13.02 3.51996 14.19C5.67996 17.58 8.76996 19.52 12 19.52C15.23 19.52 18.32 17.58 20.48 14.19C21.23 13.02 21.23 10.98 20.48 9.80998C18.32 6.41998 15.23 4.47998 12 4.47998Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </PrimaryButton>
                    )}
                </Link>
            </div>
        </div>
    );
}

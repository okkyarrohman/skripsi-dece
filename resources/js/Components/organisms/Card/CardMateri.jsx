import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import MateriTitle from "@/Components/atoms/Materi/MateriTitle";
import Description from "@/Components/atoms/Text/Description";
import { Link, useForm } from "@inertiajs/react";

export default function CardMateri({
    uploadDate,
    seenTime,
    materiId,
    materiNumber,
    materiName,
    materiDesc,
    materiFile,
}) {
    return (
        <div className="bg-gray-50 p-6 rounded-xl space-y-4">
            <MateriTitle number={materiNumber} title={materiName} />
            <div className="line-clamp-2">
                <Description desc={materiDesc} />
            </div>
            <div>
                <p className="text-gray-500 font-medium">
                    Diupload: <span className="font-normal">{uploadDate}</span>
                </p>
                <p className="text-gray-500 font-medium">
                    Dilihat:{" "}
                    <span className="font-normal">{seenTime} Kali</span>
                </p>
            </div>
            <Link
                as="button"
                method="post"
                href={route("materi.markSeen", materiId)}
                className="w-full"
            >
                <PrimaryButton full>
                    Lihat Materi
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
            </Link>
            <a
                href={"/storage/materi/" + materiFile}
                className="w-full block"
                download
            >
                <SecondaryButton full>
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
                </SecondaryButton>
            </a>
        </div>
    );
}

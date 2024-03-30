import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import { formattedDate } from "@/utils/helper";
import { Link } from "@inertiajs/react";

export default function AbsensiInfo({
    name,
    date,
    absenId,
    alreadyPresent = false,
}) {
    return (
        <div className="flex flex-col justify-between md:space-y-0 space-y-4">
            <div className="md:*:text-left *:text-center">
                <p className="text-lg text-orange-500 line-clamp-1">{name}</p>
                <p className="text-sm">{formattedDate(date)}</p>
            </div>
            <Link
                as="button"
                method="POST"
                href={route("absen-present.present", absenId)}
                className="block"
            >
                {alreadyPresent ? (
                    <SecondaryButton
                        style="small"
                        size="text-sm"
                        disabled
                        className="md:mx-0 mx-auto"
                    >
                        Sudah Absen
                    </SecondaryButton>
                ) : (
                    <PrimaryButton
                        style="small"
                        size="text-sm"
                        className="md:mx-0 mx-auto"
                    >
                        Saya Hadir
                    </PrimaryButton>
                )}
            </Link>
        </div>
    );
}

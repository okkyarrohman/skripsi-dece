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
        <div className="flex flex-col justify-between">
            <div>
                <p className="text-lg text-orange-500 line-clamp-1">{name}</p>
                <p className="text-sm">{formattedDate(date)}</p>
            </div>
            <Link
                as="button"
                method="POST"
                href={route("absen-present.present", absenId)}
            >
                {alreadyPresent ? (
                    <SecondaryButton style="small" size="text-sm" disabled>
                        Sudah Absen
                    </SecondaryButton>
                ) : (
                    <PrimaryButton style="small" size="text-sm">
                        Saya Hadir
                    </PrimaryButton>
                )}
            </Link>
        </div>
    );
}

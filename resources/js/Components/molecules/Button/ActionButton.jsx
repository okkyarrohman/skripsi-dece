import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import SecondaryButton from "@/Components/atoms/Button/SecondaryButton";
import TertiaryButton from "@/Components/atoms/Button/TertiaryButton";
import { Link } from "@inertiajs/react";

export default function ActionButton({
    view = false,
    onEdit,
    onView,
    onDelete,
    centered = true,
}) {
    return (
        <div
            className={`flex items-center gap-2 ${
                centered && "justify-center"
            }`}
        >
            <Link href={onEdit}>
                <PrimaryButton style="small">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                    >
                        <path
                            d="M4.488 14.6402C4.0305 14.6402 3.603 14.4827 3.2955 14.1902C2.9055 13.8227 2.718 13.2677 2.7855 12.6677L3.063 10.2377C3.1155 9.78016 3.393 9.17266 3.7155 8.84266L9.873 2.32516C11.4105 0.697659 13.0155 0.652659 14.643 2.19016C16.2705 3.72766 16.3155 5.33266 14.778 6.96016L8.6205 13.4777C8.3055 13.8152 7.7205 14.1302 7.263 14.2052L4.848 14.6177C4.7205 14.6252 4.608 14.6402 4.488 14.6402ZM12.2805 2.18266C11.703 2.18266 11.2005 2.54266 10.6905 3.08266L4.533 9.60766C4.383 9.76516 4.2105 10.1402 4.1805 10.3577L3.903 12.7877C3.873 13.0352 3.933 13.2377 4.068 13.3652C4.203 13.4927 4.4055 13.5377 4.653 13.5002L7.068 13.0877C7.2855 13.0502 7.6455 12.8552 7.7955 12.6977L13.953 6.18016C14.883 5.19016 15.2205 4.27516 13.863 3.00016C13.263 2.42266 12.7455 2.18266 12.2805 2.18266Z"
                            fill="#FBFBFB"
                        />
                        <path
                            d="M13.3378 8.21263C13.3228 8.21263 13.3003 8.21263 13.2853 8.21263C10.9453 7.98013 9.06285 6.20263 8.70285 3.87763C8.65785 3.57013 8.86785 3.28513 9.17535 3.23263C9.48285 3.18763 9.76785 3.39763 9.82035 3.70513C10.1053 5.52013 11.5753 6.91513 13.4053 7.09513C13.7128 7.12513 13.9378 7.40263 13.9078 7.71013C13.8703 7.99513 13.6228 8.21263 13.3378 8.21263Z"
                            fill="#FFF4ED"
                        />
                        <path
                            d="M16.083 17.0625H2.58301C2.27551 17.0625 2.02051 16.8075 2.02051 16.5C2.02051 16.1925 2.27551 15.9375 2.58301 15.9375H16.083C16.3905 15.9375 16.6455 16.1925 16.6455 16.5C16.6455 16.8075 16.3905 17.0625 16.083 17.0625Z"
                            fill="#FBFBFB"
                        />
                    </svg>
                </PrimaryButton>
            </Link>
            {view && (
                <Link href={onView}>
                    <TertiaryButton style="small">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M8.99994 12.2479C7.20744 12.2479 5.75244 10.7929 5.75244 9.00043C5.75244 7.20793 7.20744 5.75293 8.99994 5.75293C10.7924 5.75293 12.2474 7.20793 12.2474 9.00043C12.2474 10.7929 10.7924 12.2479 8.99994 12.2479ZM8.99994 6.87793C7.82994 6.87793 6.87744 7.83043 6.87744 9.00043C6.87744 10.1704 7.82994 11.1229 8.99994 11.1229C10.1699 11.1229 11.1224 10.1704 11.1224 9.00043C11.1224 7.83043 10.1699 6.87793 8.99994 6.87793Z"
                                fill="currentColor"
                            />
                            <path
                                d="M9.00006 15.7654C6.18006 15.7654 3.51756 14.1154 1.68756 11.2504C0.892559 10.0129 0.892559 7.99535 1.68756 6.75035C3.52506 3.88535 6.18756 2.23535 9.00006 2.23535C11.8126 2.23535 14.4751 3.88535 16.3051 6.75035C17.1001 7.98785 17.1001 10.0054 16.3051 11.2504C14.4751 14.1154 11.8126 15.7654 9.00006 15.7654ZM9.00006 3.36035C6.57756 3.36035 4.26006 4.81535 2.64006 7.35785C2.07756 8.23535 2.07756 9.76535 2.64006 10.6429C4.26006 13.1854 6.57756 14.6404 9.00006 14.6404C11.4226 14.6404 13.7401 13.1854 15.3601 10.6429C15.9226 9.76535 15.9226 8.23535 15.3601 7.35785C13.7401 4.81535 11.4226 3.36035 9.00006 3.36035Z"
                                fill="currentColor"
                            />
                        </svg>
                    </TertiaryButton>
                </Link>
            )}
            <Link method="DELETE" as="button" href={onDelete}>
                <SecondaryButton style="small">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                    >
                        <path
                            d="M16.0833 5.04736C16.0682 5.04736 16.0457 5.04736 16.0233 5.04736C12.0557 4.64986 8.09575 4.49986 4.17325 4.89736L2.64325 5.04736C2.32825 5.07736 2.05075 4.85236 2.02075 4.53736C1.99075 4.22236 2.21575 3.95236 2.52325 3.92236L4.05325 3.77236C8.04325 3.36736 12.0857 3.52486 16.1357 3.92236C16.4432 3.95236 16.6683 4.22986 16.6383 4.53736C16.6158 4.82986 16.3682 5.04736 16.0833 5.04736Z"
                            fill="#F97316"
                        />
                        <path
                            d="M6.70808 4.29C6.67808 4.29 6.64808 4.29 6.61058 4.2825C6.31058 4.23 6.10058 3.9375 6.15308 3.6375L6.31808 2.655C6.43808 1.935 6.60308 0.9375 8.35058 0.9375H10.3156C12.0706 0.9375 12.2356 1.9725 12.3481 2.6625L12.5131 3.6375C12.5656 3.945 12.3556 4.2375 12.0556 4.2825C11.7481 4.335 11.4556 4.125 11.4106 3.825L11.2456 2.85C11.1406 2.1975 11.1181 2.07 10.3231 2.07H8.35808C7.56308 2.07 7.54808 2.175 7.43558 2.8425L7.26308 3.8175C7.21808 4.095 6.97808 4.29 6.70808 4.29Z"
                            fill="#F97316"
                        />
                        <path
                            d="M11.7403 17.0627H6.92531C4.30781 17.0627 4.20281 15.6152 4.12031 14.4452L3.63281 6.89268C3.61031 6.58518 3.85031 6.31518 4.15781 6.29268C4.47281 6.27768 4.73531 6.51018 4.75781 6.81768L5.24531 14.3702C5.32781 15.5102 5.35781 15.9377 6.92531 15.9377H11.7403C13.3153 15.9377 13.3453 15.5102 13.4203 14.3702L13.9078 6.81768C13.9303 6.51018 14.2003 6.27768 14.5078 6.29268C14.8153 6.31518 15.0553 6.57768 15.0328 6.89268L14.5453 14.4452C14.4628 15.6152 14.3578 17.0627 11.7403 17.0627Z"
                            fill="#F97316"
                        />
                        <path
                            d="M10.5781 12.9375H8.08057C7.77307 12.9375 7.51807 12.6825 7.51807 12.375C7.51807 12.0675 7.77307 11.8125 8.08057 11.8125H10.5781C10.8856 11.8125 11.1406 12.0675 11.1406 12.375C11.1406 12.6825 10.8856 12.9375 10.5781 12.9375Z"
                            fill="#F97316"
                        />
                        <path
                            d="M11.208 9.9375H7.45801C7.15051 9.9375 6.89551 9.6825 6.89551 9.375C6.89551 9.0675 7.15051 8.8125 7.45801 8.8125H11.208C11.5155 8.8125 11.7705 9.0675 11.7705 9.375C11.7705 9.6825 11.5155 9.9375 11.208 9.9375Z"
                            fill="#F97316"
                        />
                    </svg>
                </SecondaryButton>
            </Link>
        </div>
    );
}

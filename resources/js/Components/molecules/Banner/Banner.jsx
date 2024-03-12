import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import IconTitle from "../Text/IconTitle";

export default function Banner({ title, desc }) {
    return (
        <div className="w-full bg-gray-50 rounded-xl p-6 flex justify-between items-center">
            <div className="space-y-4">
                <IconTitle title={title}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <path
                            d="M9.00027 4.12772V15.7859C8.87663 15.7859 8.74572 15.7641 8.6439 15.7059L8.61481 15.6914C7.21845 14.9277 4.78208 14.1277 3.2039 13.9168L2.99299 13.8877C2.29481 13.8004 1.72754 13.1459 1.72754 12.4477V3.66227C1.72754 2.79681 2.43299 2.14227 3.29845 2.21499C4.82572 2.33863 7.13845 3.10954 8.43299 3.91681L8.61481 4.0259C8.7239 4.09136 8.86208 4.12772 9.00027 4.12772Z"
                            fill="#FDAC74"
                        />
                        <path
                            d="M16.2727 3.66916V12.4473C16.2727 13.1455 15.7055 13.8001 15.0073 13.8873L14.7673 13.9164C13.1818 14.1273 10.7382 14.9346 9.34182 15.7055C9.24727 15.7637 9.13091 15.7855 9 15.7855V4.12734C9.13818 4.12734 9.27636 4.09097 9.38545 4.02552L9.50909 3.94552C10.8036 3.13097 13.1236 2.35279 14.6509 2.22188H14.6945C15.56 2.14916 16.2727 2.79643 16.2727 3.66916Z"
                            fill="#FB8A3C"
                        />
                        <path
                            d="M5.90936 6.99276H4.27299C3.97481 6.99276 3.72754 6.74549 3.72754 6.44731C3.72754 6.14913 3.97481 5.90186 4.27299 5.90186H5.90936C6.20754 5.90186 6.45481 6.14913 6.45481 6.44731C6.45481 6.74549 6.20754 6.99276 5.90936 6.99276Z"
                            fill="#FFF4ED"
                        />
                        <path
                            d="M6.45481 9.17489H4.27299C3.97481 9.17489 3.72754 8.92762 3.72754 8.62944C3.72754 8.33126 3.97481 8.08398 4.27299 8.08398H6.45481C6.75299 8.08398 7.00027 8.33126 7.00027 8.62944C7.00027 8.92762 6.75299 9.17489 6.45481 9.17489Z"
                            fill="#FFF4ED"
                        />
                    </svg>
                </IconTitle>
                <div className="md:w-2/5 w-full">
                    <Description size="text-base" desc={desc} />
                </div>
            </div>
            <img
                src="/assets/header-icon.png"
                alt="Icon"
                className="w-32 md:block hidden"
            />
        </div>
    );
}

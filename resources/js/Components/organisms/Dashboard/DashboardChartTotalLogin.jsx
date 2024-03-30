import IconTitle from "@/Components/molecules/Text/IconTitle";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function DashboardChartTotalLogin({ data }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip
    );

    const options = {
        responsive: true,
    };

    return (
        <div className="p-6 rounded-xl bg-gray-50 w-full space-y-4">
            <IconTitle title="Waktu Belajar Anda">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                >
                    <path
                        d="M15.1822 7.68366H13.0804C11.3568 7.68366 9.95313 6.28002 9.95313 4.55639V2.45457C9.95313 2.05457 9.62585 1.72729 9.22585 1.72729H6.14222C3.90222 1.72729 2.09131 3.18184 2.09131 5.7782V12.2218C2.09131 14.8182 3.90222 16.2727 6.14222 16.2727H11.8586C14.0986 16.2727 15.9095 14.8182 15.9095 12.2218V8.41093C15.9095 8.01093 15.5822 7.68366 15.1822 7.68366Z"
                        fill="#FB8A3C"
                    />
                    <path
                        d="M11.7638 1.88036C11.4656 1.58218 10.9492 1.78582 10.9492 2.20036V4.73854C10.9492 5.80036 11.851 6.68036 12.9492 6.68036C13.6401 6.68763 14.6001 6.68763 15.4219 6.68763C15.8365 6.68763 16.0547 6.20036 15.7638 5.90945C14.7165 4.85491 12.8401 2.95672 11.7638 1.88036Z"
                        fill="#FB8A3C"
                    />
                    <path
                        d="M10.0912 10.2727H5.72758C5.4294 10.2727 5.18213 10.0254 5.18213 9.72722C5.18213 9.42904 5.4294 9.18176 5.72758 9.18176H10.0912C10.3894 9.18176 10.6367 9.42904 10.6367 9.72722C10.6367 10.0254 10.3894 10.2727 10.0912 10.2727Z"
                        fill="white"
                    />
                    <path
                        d="M8.63667 13.1819H5.72758C5.4294 13.1819 5.18213 12.9346 5.18213 12.6364C5.18213 12.3382 5.4294 12.0909 5.72758 12.0909H8.63667C8.93486 12.0909 9.18213 12.3382 9.18213 12.6364C9.18213 12.9346 8.93486 13.1819 8.63667 13.1819Z"
                        fill="white"
                    />
                </svg>
            </IconTitle>
            <Line options={options} data={data} />
        </div>
    );
}

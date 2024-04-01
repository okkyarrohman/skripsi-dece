import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";

export default function NoData({ title, desc }) {
    return (
        <div className="w-fit h-fit mx-auto flex flex-col justify-center items-center">
            <img
                src="/assets/vector-nodata.png"
                alt="No Data"
                className="w-64"
            />
            <Title title={title} />
            <Description align="text-center" desc={desc} />
        </div>
    );
}

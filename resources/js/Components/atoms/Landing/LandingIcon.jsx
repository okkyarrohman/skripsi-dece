export default function LandingIcon({ src }) {
    return (
        <div className="bg-orange-50 p-6 rounded-md">
            <img
                src={src}
                alt="Icon"
                className="max-h-[3.25rem] max-w-[3.25rem]"
            />
        </div>
    );
}

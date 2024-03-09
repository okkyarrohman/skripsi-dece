export default function LandingAboutImage() {
    return (
        <div className="relative md:w-[28rem] w-[19rem] md:h-[25rem] h-64">
            <img
                src="/assets/about-icon.png"
                alt="About Icon"
                className="md:w-96 w-60 absolute left-5 z-[3]"
            />
            <div className="md:w-96 w-60 md:h-72 h-36 bg-orange-500 rounded-lg absolute bottom-8"></div>
            <div className="md:w-96 w-60 md:h-72 h-36 bg-transparent border border-orange-500 rounded-lg absolute bottom-0 right-3"></div>
        </div>
    );
}

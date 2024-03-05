export default function LandingAboutImage() {
    return (
        <div className="relative w-[28rem] h-[25rem]">
            <img
                src="/assets/about-icon-removebg.png"
                alt=""
                className="w-96 absolute left-5 z-[3]"
            />
            <div className="w-96 h-72 bg-orange-500 rounded-lg absolute bottom-8"></div>
            <div className="w-96 h-72 bg-transparent border border-orange-500 rounded-lg absolute bottom-0 right-3"></div>
        </div>
    );
}

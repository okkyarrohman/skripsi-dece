export default function TextGradient({ text }) {
    return (
        <p className="text-[2rem] font-bold bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
            {text}
        </p>
    );
}

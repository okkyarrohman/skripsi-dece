export default function Label({ htmlFor, text }) {
    return (
        <label
            htmlFor={htmlFor}
            className="text-lg font-medium capitalize block"
        >
            {text}
        </label>
    );
}

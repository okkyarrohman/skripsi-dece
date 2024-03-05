export default function PdfViewer({ src }) {
    return (
        <embed
            src={src}
            type="application/pdf"
            className="w-full h-[45rem] rounded-lg"
        />
    );
}

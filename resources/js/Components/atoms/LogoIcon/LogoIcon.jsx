export default function LogoIcon({ width = "w-32", white = false }) {
    return (
        <img
            src={white ? "/assets/logo.png" : "/assets/logo.png"}
            alt="Logo"
            className={`${width}`}
        />
    );
}

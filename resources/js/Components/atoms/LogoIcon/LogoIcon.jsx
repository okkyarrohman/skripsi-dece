export default function LogoIcon({ width = "w-32", white = false }) {
    return (
        <img
            src={white ? "/assets/logo-white.png" : "/assets/logo.png"}
            alt="Logo"
            className={`${width}`}
        />
    );
}

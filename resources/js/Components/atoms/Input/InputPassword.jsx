import { useState } from "react";

export default function InputPassword({ value, name, placeholder, onChange }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z"
                        fill="currentColor"
                    />
                    <path
                        d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z"
                        fill="currentColor"
                    />
                    <path
                        d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <input
                type={showPassword ? "text" : "password"}
                id={name}
                name={name}
                value={value}
                className={`bg-gray-50 border border-gray-400 rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-12 py-2.5`}
                placeholder={placeholder}
                onChange={onChange}
            />
            <button
                type="button"
                onClick={handleShowPassword}
                className="absolute inset-y-0 end-0 flex items-center pe-3.5"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M11.9999 16.33C9.60992 16.33 7.66992 14.39 7.66992 12C7.66992 9.61001 9.60992 7.67001 11.9999 7.67001C14.3899 7.67001 16.3299 9.61001 16.3299 12C16.3299 14.39 14.3899 16.33 11.9999 16.33ZM11.9999 9.17001C10.4399 9.17001 9.16992 10.44 9.16992 12C9.16992 13.56 10.4399 14.83 11.9999 14.83C13.5599 14.83 14.8299 13.56 14.8299 12C14.8299 10.44 13.5599 9.17001 11.9999 9.17001Z"
                        fill="currentColor"
                    />
                    <path
                        d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 9.00001C4.70008 5.18001 8.25008 2.98001 12.0001 2.98001C15.7501 2.98001 19.3001 5.18001 21.7401 9.00001C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.48001C8.77008 4.48001 5.68008 6.42001 3.52008 9.81001C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.81001C18.3201 6.42001 15.2301 4.48001 12.0001 4.48001Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>
    );
}

import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import InputPassword from "@/Components/atoms/Input/InputPassword";
import InputText from "@/Components/atoms/Input/InputText";
import Label from "@/Components/atoms/Label/Label";
import { useForm } from "@inertiajs/react";

export default function FormLogin({ data }) {
    return (
        <form>
            <div className="space-y-6">
                <div>
                    <Label htmlFor="email" text="Email" />
                    <InputText
                        icon
                        autoFocus
                        name="email"
                        placeholder="Masukkan Email Anda"
                        value={users.email}
                        onChange={(e) => setUsers("email", e.target.value)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M17 20H7C5.57665 20 4.4669 19.6441 3.71523 18.9461C2.97026 18.2543 2.5 17.1547 2.5 15.5V8.5C2.5 6.8453 2.97026 5.74565 3.71523 5.0539C4.4669 4.35591 5.57665 4 7 4H17C18.4234 4 19.5331 4.35591 20.2848 5.0539C21.0297 5.74565 21.5 6.8453 21.5 8.5V15.5C21.5 17.1547 21.0297 18.2543 20.2848 18.9461C19.5331 19.6441 18.4234 20 17 20Z"
                                stroke="currentColor"
                            />
                            <path
                                d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.58C6.20978 9.32 6.14978 8.85 6.40978 8.53C6.66978 8.21 7.13978 8.15 7.45978 8.41L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.41C16.8498 8.15 17.3298 8.2 17.5798 8.53C17.8398 8.85 17.7898 9.33 17.4598 9.58L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
                                fill="currentColor"
                            />
                        </svg>
                    </InputText>
                </div>
                <div>
                    <Label htmlFor="password" text="Password" />
                    <InputPassword
                        value={users.password}
                        onChange={(e) => setUsers("password", e.target.value)}
                    />
                </div>
            </div>
            <div className="mt-12">
                <PrimaryButton full onClick={handleOnSubmit}>
                    Login
                </PrimaryButton>
            </div>
        </form>
    );
}

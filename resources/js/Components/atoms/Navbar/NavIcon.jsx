export default function NavIcon({ userLogin }) {
    return (
        <div className="size-16 rounded-full overflow-hidden">
            <img
                src={
                    userLogin.photo
                        ? `/storage/profile/${userLogin.photo}`
                        : `/assets/profile-icon.png`
                }
                alt="Nav Icon"
                className="object-cover object-center w-full"
            />
        </div>
    );
}

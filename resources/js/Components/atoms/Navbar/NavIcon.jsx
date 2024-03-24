export default function NavIcon({ img }) {
    return (
        <div className="size-16 rounded-full overflow-hidden">
            <img
                src={
                    img ? `storage/profile/${img}` : `/assets/profile-icon.png`
                }
                alt="Nav Icon"
                className="object-cover object-center w-full"
            />
        </div>
    );
}

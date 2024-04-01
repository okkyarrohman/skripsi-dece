export default function DropdownOption({ onSelect, option }) {
    return (
        <li onClick={onSelect} className="hover:bg-orange-500 hover:text-white">
            {option}
        </li>
    );
}

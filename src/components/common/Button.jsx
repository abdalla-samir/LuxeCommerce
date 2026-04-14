export default function Button({ link, label }) {
    return (
        <button className=" bg-accent hover:bg-accent-hover w-50 py-2 rounded cursor-pointer text-white transition duration-200">
            {label}
        </button>
    );
}

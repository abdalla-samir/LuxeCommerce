export default function Button({ link, label }) {
    return (
        <button className=" bg-[#233348] hover:bg-bg-dark w-50 py-4 rounded cursor-pointer text-white transition duration-200">
            {label}
        </button>
    );
}

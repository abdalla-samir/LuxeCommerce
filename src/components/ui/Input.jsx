export default function Input({
    label,
    type,
    value,
    onChange,
    placeholder,
    name,
}) {
    return (
        <label className="flex-1 flex flex-col gap-2 ">
            <span className="uppercase text-secondary font-bold text-xs tracking-wider">
                {label}
            </span>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                className={`border border-border bg-[#EFF4FF] p-2 rounded outline-none text-sm`}
            />
        </label>
    );
}

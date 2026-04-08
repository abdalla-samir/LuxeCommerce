import { useState } from "react";
import SearchIcon from "/src/assets/icons/search.svg?react";

export default function Search({ placeHolder }) {
    const [input, setInput] = useState("");
    return (
        <label className="bg-bg-muted relative flex items-center text-text-secondary rounded text-xs">
            <SearchIcon width={17} className="text-text-muted ml-2" />
            <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                type="search"
                placeholder={placeHolder}
                className="outline-none p-2"
            />
        </label>
    );
}

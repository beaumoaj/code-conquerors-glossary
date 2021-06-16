import React from 'react';

export default function SearchButton({ search, setSearch }) {
    //  const [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.target.value);
    }
    return (
        <div>
            <form>
                <input type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Type words" />
                < button type="submit">Submit Button</button>
                {/* <button type="submit" onClick={handleSubmit}>Submit Button</button> */}
            </form>
        </div>
    )
}
import React from 'react';



export default function SearchButton({ search, setSearch }) {
    //  const [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.target.value);
    }
    return (
        <div className="Input">
            <form>
                <input type="text"
                name="search"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search..." />
                {/* < button type="submit">Submit Button</button> */}
                {/* <button type="submit" onClick={handleSubmit}>Submit Button</button> */}
            </form>
        </div>
    )
}
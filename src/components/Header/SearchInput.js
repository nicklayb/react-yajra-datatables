import React from 'react';

const SearchInput = ({ searchInput, setSearchInput }) => {
    const handleChange = (event) => setSearchInput(event.target.value);

    return (
        <div className="search">
            <label>Search</label>
            <input type="text" className="form-control input-sm" value={searchInput} onChange={handleChange}/>
        </div>
    );
};

export default SearchInput;

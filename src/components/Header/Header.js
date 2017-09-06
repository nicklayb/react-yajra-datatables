import React from 'react';
import EntriesSelect from './EntriesSelect';
import SearchInput from './SearchInput';

const Header = ({ entriesToShow, setEntriesToShow, searchInput, setSearchInput }) => (
    <div className="datatable-header">
        <EntriesSelect entriesToShow={entriesToShow} setEntriesToShow={setEntriesToShow}/>
        <SearchInput searchInput={searchInput} setSearchInput={setSearchInput}/>
    </div>
);

export default Header;

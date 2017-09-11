import React from 'react';
import styled from 'styled-components';
import EntriesSelect from './EntriesSelect';
import SearchInput from './SearchInput';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Header = ({ entriesToShow, setEntriesToShow, searchInput, setSearchInput }) => (
    <Wrapper>
        <EntriesSelect entriesToShow={entriesToShow} setEntriesToShow={setEntriesToShow}/>
        <SearchInput searchInput={searchInput} setSearchInput={setSearchInput}/>
    </Wrapper>
);

export default Header;

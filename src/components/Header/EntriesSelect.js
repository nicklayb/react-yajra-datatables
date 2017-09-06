import React from 'react';

const AVAILABLE_ENTRIES = [10, 25, 50, 100];

const EntriesSelect = ({ entriesToShow, setEntriesToShow }) => {
    const handleChange = (event) => setEntriesToShow(event.target.value);
    const renderEntriesSelect = () => {
        return AVAILABLE_ENTRIES.map((entry, index) => <option value={entry} key={index}>{entry}</option>);
    }
    return (
        <div className="entries">
            <label>Entries to show</label>
            <select className="form-control input-sm" value={entriesToShow} onChange={handleChange}>
                {renderEntriesSelect()}
            </select>
        </div>
    )
};

export default EntriesSelect;

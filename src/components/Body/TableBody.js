import React from 'react';

const TableBody = ({ columns, data }) => {
    const renderCells = (row) =>columns.map((column, index) => <td key={index}>{row[column.data]}</td>);
    const renderRows = () => data.map((row, index) => <tr key={index}>{renderCells(row)}</tr>);

    return (
        <tbody>
            {renderRows()}
        </tbody>
    );
};

export default TableBody;

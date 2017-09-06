import React from 'react';
import TableHeadCell from './TableHeadCell';

const TableHead = ({ columns, setOrderColumn, orderColumnIndex, orderColumnDirection }) => {
    const renderHeadCells = () => columns.map((column, index) =>
        <TableHeadCell
            orderColumnIndex={orderColumnIndex}
            orderColumnDirection={orderColumnDirection}
            column={column}
            index={index}
            setOrderColumn={setOrderColumn}
            key={index}/>
    );
    return (
        <thead>
            <tr>
                {renderHeadCells()}
            </tr>
        </thead>
    );
};

export default TableHead;

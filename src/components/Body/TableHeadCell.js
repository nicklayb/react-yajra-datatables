import React from 'react';

const TableHead = ({ column, index, orderColumnIndex, orderColumnDirection, setOrderColumn }) => {
    const getHeadClasses = () => ([
        (column.orderable) ? 'orderable' : '',
        (index === orderColumnIndex) ? 'ordered-' + orderColumnDirection.toLowerCase() : ''
    ].join(' '));

    const handleClick = () => setOrderColumn(index);

    return (
        <th className={getHeadClasses()} key={index} onClick={handleClick}>{column.name}</th>
    );
};

export default TableHead;

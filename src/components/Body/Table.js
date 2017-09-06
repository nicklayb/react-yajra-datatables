import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ columns, setOrderColumn, data, orderColumnDirection, orderColumnIndex }) => (
    <table className="table">
        <TableHead
            columns={columns}
            setOrderColumn={setOrderColumn}
            orderColumnDirection={orderColumnDirection}
            orderColumnIndex={orderColumnIndex}/>
        <TableBody columns={columns} data={data}/>
    </table>
);

export default Table;

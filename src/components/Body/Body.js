import React from 'react';
import Table from './Table';

const Body = ({ columns, data, setOrderColumn, orderColumnDirection, orderColumnIndex }) => (
    <div className="datatable-body">
        <Table
            columns={columns}
            data={data}
            setOrderColumn={setOrderColumn}
            orderColumnDirection={orderColumnDirection}
            orderColumnIndex={orderColumnIndex}/>
    </div>
);

export default Body;

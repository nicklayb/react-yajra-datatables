import React from 'react';
import styled from 'styled-components';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Wrapper = styled.table`
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
`;

const Table = ({ columns, setOrderColumn, data, orderColumnDirection, orderColumnIndex, styles }) => (
    <Wrapper {...styles}>
        <TableHead
            columns={columns}
            setOrderColumn={setOrderColumn}
            orderColumnDirection={orderColumnDirection}
            orderColumnIndex={orderColumnIndex}/>
        <TableBody columns={columns} data={data} styles={styles}/>
    </Wrapper>
);

export default Table;

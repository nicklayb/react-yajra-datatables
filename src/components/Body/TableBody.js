import React from 'react';
import styled from 'styled-components';
import * as constants from '../../services/constants';

const Wrapper = styled.tbody`
    td {
        padding: 5px;
        border-width: ${props => props.bordered ? constants.sizes.BORDER_SIZE : 0}px;
        border-style: solid;
        border-left-color: transparent;
        border-right-color: transparent;
        border-top-color: ${constants.colors.BORDER_COLOR};
        border-bottom-color: ${constants.colors.BORDER_COLOR};
    }
`;

const TableBody = ({ columns, data, styles }) => {
    const renderCell = (index, value) => <td key={index}>{value}</td>;

    const renderHtmlCell = (index, value) => <td key={index} dangerouslySetInnerHTML={{ __html: value }}></td>;

    const renderCells = (row) => columns.map((column, index) => (column.html) ? renderHtmlCell(index, row[column.data]) : renderCell(index, row[column.data]));

    const renderRows = () => data.map((row, index) => <tr key={index}>{renderCells(row)}</tr>);

    return (
        <Wrapper {...styles}>
            {renderRows()}
        </Wrapper>
    );
};

export default TableBody;

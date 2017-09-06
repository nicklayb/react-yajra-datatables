import React from 'react';
import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';
import StatusIndicator from './StatusIndicator';

const Footer = ({ currentPage, entriesToShow, refreshing, recordsFiltered, recordsTotal, dataLength, setPage }) => {
    const countPages = () => Math.ceil((recordsFiltered / entriesToShow));
    const getStart = () => ((currentPage * entriesToShow) + 1);
    return (
        <div className="datatable-footer">
            <StatusIndicator
                start={getStart()}
                dataLength={dataLength}
                recordsFiltered={recordsFiltered}
                recordsTotal={recordsTotal}/>
            <LoadingIndicator loading={refreshing}/>
            <Pagination currentPage={currentPage} pageCount={countPages()} setPage={setPage}/>
        </div>
    );
};

export default Footer;

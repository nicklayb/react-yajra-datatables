import React from 'react';
import PageItem from './PageItem';
import ChangePageButton from './ChangePageButton';

const PAGE_COLLAPSE_THRESHOLD = 8;
const PAGE_COLLAPSE_TO_SHOW = 6;

const Pagination = ({ currentPage, pageCount, setPage }) => {
    const renderPages = () => {
        const pages = [];
        const itemsToShow = (pageCount > PAGE_COLLAPSE_THRESHOLD) ? PAGE_COLLAPSE_TO_SHOW : pageCount;
        for (let i = 0; i < itemsToShow; i++) {
            pages.push(<PageItem number={(i + 1)} active={(currentPage === i)} key={i} setPage={setPage}/>);
        }
        if (itemsToShow < pageCount) {
            pages.push(<div className="dot-page" key={pageCount - 1}>...</div>);
            pages.push(<PageItem number={(pageCount)} active={(currentPage === pageCount)} key={pageCount} setPage={setPage}/>);
        }
        return pages;
    }
    return (
        <div className="page-row">
            <ChangePageButton
                currentPage={currentPage}
                pageCount={pageCount}
                setPage={setPage}
                increment={-1}/>
            {renderPages()}
            <ChangePageButton
                currentPage={currentPage}
                pageCount={pageCount}
                setPage={setPage}
                increment={1}/>
        </div>
    );
};

export default Pagination;

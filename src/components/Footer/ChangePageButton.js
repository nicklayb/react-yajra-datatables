import React from 'react';

const ChangePageButton = ({ increment, currentPage, pageCount, setPage }) => {
    const isClickable = () => {
        const newPage = currentPage + increment;
        return (newPage >= 0 && newPage < pageCount);
    };
    const handleClick = () => {
        const newPage = currentPage + increment;
        if (isClickable()) {
            setPage(newPage);
        }
    };
    const getClasses = () => ([
        'page',
        (!isClickable()) ? 'disabled' : ''
    ].join(' '));
    const renderContent = () => (increment > 0) ? '>' : '<';
    return (
        <div className={getClasses()} onClick={handleClick}>
            {renderContent()}
        </div>
    );
};

export default ChangePageButton;

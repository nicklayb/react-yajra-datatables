import React from 'react';

const LoadingIndicator = ({ loading }) => {
    const getClasses = () => ([
        'fa',
        (loading) ? 'fa-spinner faa-spin animated' : 'fa-check'
    ].join(' '));
    const renderText = () => (loading) ? 'Updating table' : 'Table updated';
    return (
        <div className="loading"><i className={getClasses()}/> {renderText()}</div>
    );
};

export default LoadingIndicator;

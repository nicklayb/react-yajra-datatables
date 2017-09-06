import React from 'react';

const LoadingIndicator = ({ start, dataLength, recordsTotal }) => (
    <div className="status">
        {`Showing ${start} to ${(start + dataLength - 1)} of ${recordsTotal}`}
    </div>
);

export default LoadingIndicator;

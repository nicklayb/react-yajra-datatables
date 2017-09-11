import React from 'react';
import ReactDOM from 'react-dom';
import Datatable from '../src';

const App = () => (
    <div>
        <Datatable
            url="http://localhost:8000/test"
            columns={[
                { name: 'Resource', data: 'Resource' },
                { name: 'Amount', data: 'Amount', html: true }
            ]}/>
    </div>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});

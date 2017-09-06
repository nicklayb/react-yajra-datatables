import React from 'react';
import ReactDOM from 'react-dom';
import Datatable from '../src';

const App = () => (
    <div>
        <Datatable
            url="https://datatables.yajrabox.com/eloquent/basic-object-data"
            columns={[
                { name: 'name', data: 'name' },
                { name: 'email', data: 'email' }
            ]}/>
    </div>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});

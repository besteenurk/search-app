import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import TestComponent from './components/test/test-component';
import SearchComponent from './components/search-component/search-component';
import SearchLayout from './layout/search-layout';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <SearchLayout />
    </React.StrictMode>
);

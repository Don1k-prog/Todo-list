import React from 'react';
import './app-header.css';

const AppHeader = ({ todo, done }) => {
    return (
        <div className="app-header mb-3">
            <h1>Todo List</h1>
            <h2 className="h5 text-muted">{ todo } more to do, { done } done</h2>
        </div>
    );
}

export default AppHeader;

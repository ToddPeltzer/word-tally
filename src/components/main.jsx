import React from 'react';
import './styles/main.css';
import { Link } from 'react-router-dom';


function main() {
    return (
        <div>
            MainPage
            <Link to="/">Home</Link>
            <Link to ="/count">Count</Link>
            <Link to="/test">Test</Link>
        </div>
    );
}

export default main;
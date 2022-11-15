import React from 'react';
import { Link } from 'react-router-dom';

function header(props) {
    return (
        <div>
            Header
            <Link to="/">Home</Link>
            <Link to ="/count">Count</Link>
            <Link to="/test">Test</Link>
        </div>
    );
}

export default header;
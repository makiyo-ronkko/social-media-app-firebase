import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="left">
            <Link to="/" className="brand-logo" style={{ marginLeft: '15px' }}>Logo</Link>
        </div>
    );
}

export default Logo;

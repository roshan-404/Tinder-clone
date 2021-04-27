import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header">
            <h2>i m header </h2>
            <PersonIcon fontsize='large' className="header__icon" />
        </div>
    )
}

export default Header

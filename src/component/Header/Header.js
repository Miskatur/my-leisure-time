import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 className='main-title'><FontAwesomeIcon icon={faBook} className="fa-book" /><span>My Leisure Time</span></h1>
            <h2>Select Your Todays Activity : </h2>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const depth02 = () => {
        document.querySelector('ul.depth02').classList.toggle('on');
    }

    const isMobile = window.screen.width <= 768;

    return (
        <div className='gnb'>
            {isMobile ? (
                <>
                    <ul className="mobile">
                        <li><Link to='/'><h1>박유안<span>의 포트폴리오</span></h1></Link></li>
                        <li className='menu'>
                            <FontAwesomeIcon icon={faBars} onClick={depth02} />
                        </li>
                    </ul>
                    <ul className="depth02">
                        <li><Link to='/contact'>CONTACT</Link></li>
                        <li><Link to='/skills'>SKILLS</Link></li>
                        <li><Link to='/designportfolio'>DESIGN</Link></li>
                        <li><Link to='/webdevportfolio'>WEB DEV</Link></li>
                    </ul>
                </>
            ) : (
                <ul className='pc'>
                    <li><Link to='/contact'>CONTACT</Link></li>
                    <li><Link to='/skills'>SKILLS</Link></li>
                    <li><Link to='/'><h1>박유안<span>의 포트폴리오</span></h1></Link></li>
                    <li><Link to='/designportfolio'>DESIGN</Link></li>
                    <li><Link to='/webdevportfolio'>WEB DEV</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
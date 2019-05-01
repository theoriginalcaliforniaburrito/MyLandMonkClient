import React from 'react';
import './Navigation.css';
// import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import TopNavLogo from './TopNavLogo/TopNavLogo';
import NavBar from './NavBar/NavBar';
// import PropertiesList from '../containers/Properties/PopertiesList/PropertiesList';




const navigation = (props) => {
    return (
        <div className="navigation-container">
            <div>
                <TopNavLogo />
            </div>
            <div>
                <NavBar />
            </div>
            <div></div>
        </div>
    )
}

export default navigation;
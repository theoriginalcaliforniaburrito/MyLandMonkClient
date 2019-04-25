import React, { Component } from 'react';
import "./NavBar.css";
import img from '../../../img/home.png';
import img2 from '../../../img/buildings.png';
import img3 from '../../../img/user.png';




class NavBar extends Component {
    render() {
        return (
            <div className="topbar-menu">
                <div className="container-fluid">
                    <div id="navigation" className="active">
                        <ul className="navigation-menu">
                            <li className="home"><img className="home-icon" src={img} alt="" height="18"/>Home</li>
                            <li className="properties"><img className="properties-icon" src={img2} alt="" height="18"/>Properties</li>
                            <li className="tenants"><img className="tenants-icon" src={img3} alt="" height="18"/>Tenants</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;

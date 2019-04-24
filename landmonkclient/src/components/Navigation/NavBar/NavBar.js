import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div className="topbar-menu">
                <div className="container-fluid">
                    <div id="navigation" className="active">
                        <ul className="navigation-menu">
                            <li className="tenants">Tenants</li>
                            <li className="property">Property</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;

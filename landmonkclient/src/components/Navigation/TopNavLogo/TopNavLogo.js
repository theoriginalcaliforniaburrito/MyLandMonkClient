import React, { Component } from 'react';
import img from '../../../img/logo-dark.png';
import "./TopNavLogo.css";

class TopNavLogo extends Component {
    render() {
        return (
            <div className="navbar-custom">
                <div className="container-fluid">
                    <div className="logo-box">
                        <a href="index.html" className="lolo text-center">
                            {/* <span className="logo-lg">
                                <img src={img} alt height="22" />
                            </span> */}
                            <span className="logo-sm">
                                <img src={img} alt="" height="24" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNavLogo;
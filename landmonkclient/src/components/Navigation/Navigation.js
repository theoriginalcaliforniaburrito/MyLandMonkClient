import React from 'react';
import { Link } from 'react-router-dom';
import TextLogo from '../../img/LandMonk-Text-Only-Logo.png';
import Home from '../../img/home.png';
import Buildings from '../../img/buildings.png';
import User from '../../img/user.png';


const Navigation = props =>
    <header id="topnav">

        {/* <!-- topbar --> */}
        <div className="navbar-custom">
            <div className="container-fluid">
                <div className="logo-box">
                    <Link to="/">
                        <span className="logo-lg">
                            <img src={TextLogo} alt="LandMonk" height="18" />
                        </span>
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="24" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        {/* <!-- end Topbar --> */}

        <div className="topbar-menu">
            <div className="container-fluid">
                <div id="navigation">
                    {/* <!-- Navigation Menu--> */}
                    <ul className="navigation-menu">

                        <li>
                            <Link to='/'>
                                <img src={Home} alt="Home" height="18"/> Home
                            </Link>
                        </li>

                        <li>
                            <Link to='/properties'>
                                <img src={Buildings} alt="Properties" height="18"/> Properties
                            </Link>
                        </li>

                        <li>
                            <Link to='/tenants'>
                                <img src={User} alt="Tenants" height="18"/> Tenants
                            </Link>
                        </li>

                        <li>
                            <Link to='/dashboard'>
                                <i className="fe-airplay"></i> Admin
                            </Link>
                        </li>

                        <li>
                            <Link to ="/loginForm">
                                <i className="fe-lock"></i> Login
                            </Link>
                        </li>
                        

                    </ul>
                    {/* <!-- End navigation menu --> */}

                    <div className="clearfix"></div>
                </div>
                {/* <!-- end #navigation --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
        {/* <!-- end navbar-custom --> */}

    </header>

export default Navigation
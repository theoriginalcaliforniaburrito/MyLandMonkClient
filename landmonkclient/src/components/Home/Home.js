import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../../img/LandMonk-Logo.jpg';
import './Home.css';

const home = (props) => {
    return (
        <div className="wrapper">
            <div className="container-fluid">

                <Row>
                    <Col md={12}>
                        <div className={'homeText'}>
                            Welcome! <br />
                            <img src={Logo} alt="LandMonk" height="400" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default home;
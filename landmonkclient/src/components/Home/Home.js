import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';

const home = (props) => {
    return (
        <div className="wrapper">
            <div className="container-fluid">

                <Row>
                    <Col md={12}>
                        <div className={'homeText'}>
                            Welcome to LandMonk Application!
                </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default home;
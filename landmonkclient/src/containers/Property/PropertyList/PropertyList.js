import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import './PropertiesList.css';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import Property from '../../../components/PropertyComponents/Property/Property';



class PropertiesList extends Component {
    componentDidMount = () => {
        let url = '/api/property';
        this.props.onGetData(url, { ...this.props });
    }


    render() {
        let properties = [];
        if (this.props.data && this.props.data.length > 0) {
            properties = this.props.data.map((property) => {
                return (
                    <Property key={property.id} property={property} {...this.props} />
                )
            })
        }

        return (
            <div className="wrapper">
                <div className="">
                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="properties-box">
                                <div className="page-title-right">
                                    <Link to='/createProperty'>
                                        <button className="add-property">Add Property</button>
                                    </Link>
                                </div>
                                <h4 className="properties-title">Properties</h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}
                    <div className="properties-List">
                        <Row>
                            <Col align="center">
                                <Table responsive striped>
                                    <thead>
                                        <tr>
                                            <th className="Property-name">Property Name</th>
                                            <th className="Address">Address</th>
                                            <th className="City">City</th>
                                            <th className="State">State</th>
                                            <th className="Zipcode">Zipcode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Aux>
                                            {properties}
                                        </Aux>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url,
            props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesList);
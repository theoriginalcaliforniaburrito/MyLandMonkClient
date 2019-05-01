import React, { Component } from 'react';
import { Button, Table, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { connect } from 'react-redux';
import * as repositoryActions from '../../store/actions/repositoryActions';
import Tenants from '../../components/TenantComponents/Tenants/Tenants';
// import Owner from '../../../components/OwnerComponents/Owner/Owner';

class TenantList extends Component {

    componentDidMount() {
        let url = '/api/tenant';
        this.props.onGetData(url, { ...this.props });
    }

    render() {
        let tenants;
        if (this.props.data && this.props.data.length > 0) {
            console.log('here')
            tenants = this.props.data.map((tenant) => {
                return (
                    <Tenants key={tenant.id} tenant={tenant} {...this.props} />
                )
            })
        }
        return (
            <Aux>
                <div className="wrapper">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <Link to='/createProperty'>
                                            <button className="btn btn-primary btn-sm">Add Tenant</button>
                                        </Link>
                                    </div>
                                    <h4 className="page-title">Tenants</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title">Your Tenants</h4>
                                        <table id="basic-datatable" className="table table-striped dt-responsive nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Cell Phone</th>
                                                </tr>
                                            </thead>


                                            <tbody>
                                                {tenants}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

               
            </Aux>

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
        onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantList);
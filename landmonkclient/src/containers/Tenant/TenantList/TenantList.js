import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tenant from '../../../components/TenantComponents/Tenant/Tenant'
import { connect } from 'react-redux'
import * as repositoryActions from '../../../store/actions/repositoryActions'

class TenantList extends Component {

    state = {
        tenantFilter: []
    }

    componentDidMount() {
        let url = '/api/tenant';
        this.props.onGetData(url, { ...this.props });
    }
    
   
    componentWillReceiveProps(nextProps) {
        this.setState({

            tenantFilter: nextProps.data

        })
    }

    handleChange = e => {

        let currentTenant = [];
        let newTenant = [];

        if (e.target.value.trim() !== '') {
            currentTenant = this.props.data;

            newTenant = currentTenant.filter(input => {
                const email = input.email.toLowerCase();
                const phone = input.cellPhone;
                const tenantName = input.firstName.toLowerCase() || input.lastName.toLowerCase();
                const fullName = input.firstName.toLowerCase() + " " + input.lastName.toLowerCase();

                const filter = e.target.value.toLowerCase().trim();
                
                return email.includes(filter) || phone.includes(filter)
                || tenantName.includes(filter) || fullName.includes(filter);

            });
        }
        else {
            newTenant = this.props.data; 
        }

        this.setState({
            tenantFilter: newTenant
        })
    }




    render() {
        let tenants = []; 
        if (this.state.tenantFilter && this.state.tenantFilter.length > 0) {
            tenants = this.state.tenantFilter.map((tenant) => {
                return (
                    <Tenant key ={tenant.id} tenant={tenant} {...this.props} />
                )
            })

        }


        // let tenants;
        // if (this.props.data && this.props.data.length > 0) {
        //     tenants = this.props.data.map((tenant) => {
        //         return (
        //             <Tenant key={tenant.id} tenant={tenant} {...this.props} />
        //         )
        //     })
        // }
        return (
            <div className="wrapper">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <Link to='/createTenant'>
                                        <button className="btn btn-primary">Add Tenant</button>
                                    </Link>
                                </div>
                                <div className="search">
                                <input type="text" className="searchBar" onChange={this.handleChange} placeholder="Search Tenants..." />
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
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.repository.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantList);
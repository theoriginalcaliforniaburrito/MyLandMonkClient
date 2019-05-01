import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import { connect } from 'react-redux';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

class DeleteTenant extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        let url = '/api/tenant/' + id;
        this.props.onGetTenantById(url, { ...this.props });
    }

    deleteTenant = (event) => {
        event.preventDefault();

        const url = '/api/tenant/' + this.props.data.id;
        this.props.onDeleteTenant(url, { ...this.props });
    }

    redirectToTenantList = () => {
        this.props.history.push('/tenant-list');
    }

    render() {
        let tenant = { ...this.props.data };

        return (
            <Aux>
                <div className="wrapper">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Delete a Tenant</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}

                        <div className="row">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title">Basic Information</h4>

                                        <form onSubmit={e => this.deleteTenant(e)}>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="tenantName" className="col-form-label">Tenant Name</label>
                                                    <input type="text"
                                                        value={tenant.tenantName} className="form-control" id="tenantName" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="address" className="col-form-label">Address</label>
                                                <input type="text" value={tenant.address} className="form-control" id="address" />
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="city" className="col-form-label">City</label>
                                                    <input type="text" value={tenant.city} className="form-control" id="city" />
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="state" className="col-form-label">State</label>
                                                    <input type="text" value={tenant.state} className="form-control" id="state" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="zipCode" className="col-form-label">Zip</label>
                                                    <input type="text" value={tenant.zipCode} className="form-control" id="zipCode" />
                                                </div>
                                            </div>

                                            <button className="btn btn-info waves-effect waves-light" onClick={this.redirectToTenantList}>Cancel</button>

                                            <button type="submit" className="btn btn-danger waves-effect waves-light">Delete</button>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div >

                        <SuccessModal show={this.props.showSuccessModal}
                            modalHeaderText={'Success message'}
                            modalBodyText={'Action completed successfully'}
                            okButtonText={'OK'}
                            successClick={() => this.props.onCloseSuccessModal('/tenants', { ...this.props })} />

                        <ErrorModal show={this.props.showErrorModal}
                            modalHeaderText={'Error message'}
                            modalBodyText={this.props.errorMessage.title || this.props.errorMessage}
                            okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal()} />
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.repository.data,
        showSuccessModal: state.repository.showSuccessModal,
        showErrorModal: state.errorHandler.showErrorModal,
        errorMessage: state.errorHandler.errorMessage
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onGetTenantById: (url, props) => dispatch(repositoryActions.getData(url, props)),
        onDeleteTenant: (url, props) => dispatch(repositoryActions.deleteData(url, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(DeleteTenant);
import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import { connect } from 'react-redux';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

class DeleteProperty extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        let url = '/api/property/' + id;
        this.props.onGetPropertyById(url, { ...this.props });
    }

    deleteProperty = (event) => {
        event.preventDefault();

        const url = '/api/property/' + this.props.data.id;
        this.props.onDeleteProperty(url, { ...this.props });
    }

    redirectToPropertyList = () => {
        this.props.history.push('/property-list');
    }

    render() {
        let property = { ...this.props.data };

        return (
            <Aux>
                <div className="wrapper">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Delete a Property</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}

                        <div className="row">
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title">Basic Information</h4>

                                        <form onSubmit={e => this.deleteProperty(e)}>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="propertyName" className="col-form-label">Property Name</label>
                                                    <input type="text"
                                                        value={property.propertyName} className="form-control" id="propertyName" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="address1" className="col-form-label">Address</label>
                                                <input type="text" value={property.address1} className="form-control" id="address1" />
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="city" className="col-form-label">City</label>
                                                    <input type="text" value={property.city} className="form-control" id="city" />
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="state" className="col-form-label">State</label>
                                                    <input type="text" value={property.state} className="form-control" id="state" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="zipCode" className="col-form-label">Zip</label>
                                                    <input type="text" value={property.zipCode} className="form-control" id="zipCode" />
                                                </div>
                                            </div>

                                            <button className="btn btn-info waves-effect waves-light" onClick={this.redirectToPropertyList}>Cancel</button>

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
                            successClick={() => this.props.onCloseSuccessModal('/properties', { ...this.props })} />

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
        onGetPropertyById: (url, props) => dispatch(repositoryActions.getData(url, props)),
        onDeleteProperty: (url, props) => dispatch(repositoryActions.deleteData(url, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(url, props)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(DeleteProperty);
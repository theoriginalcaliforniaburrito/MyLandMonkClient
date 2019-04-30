import React, { Component } from 'react';
import * as repositoryActions from '../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../store/actions/errorHandlerActions';
import SuccessModal from '../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../components/Modals/ErrorModal/ErrorModal';
import { connect } from 'react-redux';
import './CreateProperty.css';



class CreateProperty extends Component {
    state = {
        propertyForm: {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''
        }
    }

    handleChangeEvent = (e) => {
        let updatedForm = { ...this.state.propertyForm };
        updatedForm[e.target.id] = e.target.value
        
        this.setState({
            propertyForm : updatedForm
        });
    }

    createProperty = e => {
        e.preventDefault();

        const propertyToCreate = {
            propertyName: this.state.propertyForm.propertyName,
            address: this.state.propertyForm.address,
            city: this.state.propertyForm.city,
            state: this.state.propertyForm.state,
            zipCode: this.state.propertyForm.zipCode
        }

        const url = '/api/property/';
        this.props.onCreateProperty(url, propertyToCreate, {...this.props});
    }

    redirectToOwnerList = () => {
        this.props.history.push('/property-list');
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <h4 className="page-title">Add a Property</h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}


                    <div className="row">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="header-title">Basic Information</h4>

                                    <form onSubmit={e => this.createProperty(e)}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="propertyName" className="col-form-label">Property Name</label>
                                                <input type="text" required
                                                    value={this.state.propertyForm.propertyName} onChange={e => this.handleChangeEvent(e)} className="form-control" id="propertyName" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="address" className="col-form-label">Address</label>
                                            <input type="text" required value={this.state.propertyForm.address} onChange={e => this.handleChangeEvent(e)} className="form-control" id="address" />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="city" className="col-form-label">City</label>
                                                <input type="text" required value={this.state.propertyForm.city} onChange={e => this.handleChangeEvent(e)} className="form-control" id="city" />
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="state" className="col-form-label">State</label>
                                                <input type="text" required minLength="2" maxLength="2" value={this.state.propertyForm.state} onChange={e => this.handleChangeEvent(e)} className="form-control" id="state" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="zipCode" className="col-form-label">Zip</label>
                                                <input type="text" required value={this.state.propertyForm.zipCode} onChange={e => this.handleChangeEvent(e)} className="form-control" id="zipCode" />
                                            </div>
                                        </div>


                                        <button type="submit" className="btn btn-primary waves-effect waves-light">Submit</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div >

                    <SuccessModal show={this.props.showSuccessModal}
                        modalHeaderText={'Success'}
                        modalBodyText={'New property created'}
                        okButtonText={'OK'}
                        successClick={() => this.props.onCloseSuccessModal('/properties', { ...this.props })} />

                    <ErrorModal show={this.props.showErrorModal}
                        modalHeaderText={'Error message'}
                        modalBodyText={this.props.errorMessage.title || this.props.errorMessage}
                        okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal()} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showSuccessModal: state.repository.showSuccessModal,
        showErrorModal: state.errorHandler.showErrorModal,
        errorMessage: state.errorHandler.errorMessage
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onCreateProperty: (url, property, props) => dispatch(repositoryActions.postData(url, property, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(url, props)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(CreateProperty);
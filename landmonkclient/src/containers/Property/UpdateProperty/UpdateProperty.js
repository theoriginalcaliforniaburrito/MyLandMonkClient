import React, { Component } from 'react';

import { returnPropertyInputConfiguration } from '../../../Utility/PropertyInputConfiguration';


import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';


import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

import { connect } from 'react-redux';

class UpdateProperty extends Component {
    state = {  
        propertyForm: {},
        isFormValid: true
    }

    componentWillMount() {
        this.setState({ propertyForm: returnPropertyInputConfiguration() });
    }

    componentDidMount() {
        let id = this.props.match.params.id; 
        let url = 'api/property/' + id;
        this.props.onGetPropertyById(url, {...this.props});
    }

    handleChangeEvent = (event, value) => {
        const updatedPropertyForm = {...this.state.propertyForm};
        // updatedPropertyForm[id] = 
        this.setState({ 
            propertyForm: {
                ...this.state.propertyForm,
                [value]: event.target.value
            }
        });
    }

    componentWillReceiveProps = nextProps => {
        const updatedPropertyForm = { ...this.state.propertyForm };
        let propertyNameObject = { ...updatedPropertyForm.propertyName }; 
        let addressObject = { ...updatedPropertyForm.address }; 
        let cityObject = { ...updatedPropertyForm.city }; 
        let stateObject = { ...updatedPropertyForm.state }; 
        let zipCodeObject = { ...updatedPropertyForm.zipCode }; 

        propertyNameObject = nextProps.data.propertyName;
        addressObject = nextProps.data.address;
        cityObject = nextProps.data.city;
        stateObject = nextProps.data.state;
        zipCodeObject  = nextProps.data.zipCode;

        updatedPropertyForm['propertyName'] = propertyNameObject; 
        updatedPropertyForm['address'] = addressObject; 
        updatedPropertyForm['city'] = cityObject; 
        updatedPropertyForm['state'] = stateObject; 
        updatedPropertyForm['zipCode'] = zipCodeObject; 
        this.setState({ propertyForm: updatedPropertyForm });

    }

    updateProperty = event => {
        event.preventDefault();

        const propertyToUpdate = {
            propertyName: this.state.propertyForm.propertyName,
            address: this.state.propertyForm.address,
            city: this.state.propertyForm.city,
            state: this.state.propertyForm.state,
            zipCode: this.state.propertyForm.zipCode,
        }

        console.log(propertyToUpdate)
        const url = '/api/property/' + this.props.data.id; 
        this.props.onUpdateProperty(url, propertyToUpdate, {...this.props }); 
    }


    render() { 
        return (  
            <div className="wrapper">
            <div className="container-fluid">

                {/* <!-- start page title --> */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Edit a Property</h4>
                        </div>
                    </div>
                </div>
                {/* <!-- end page title --> */}


                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title">Basic Information</h4>

                                <form onSubmit={e => this.updateProperty(e)}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="propertyName" className="col-form-label">Property Name</label>
                                            <input type="text" required
                                                value={this.state.propertyForm.propertyName} onChange={e => this.handleChangeEvent(e, "propertyName")} className="form-control" id="propertyName" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address" className="col-form-label">Address</label>
                                        <input type="text" required value={this.state.propertyForm.address} onChange={e => this.handleChangeEvent(e, "address")} className="form-control" id="address" />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="city" className="col-form-label">City</label>
                                            <input type="text" required value={this.state.propertyForm.city} onChange={e => this.handleChangeEvent(e, "city")} className="form-control" id="city" />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="state" className="col-form-label">State</label>
                                            <input type="text" required minLength="2" maxLength="2" value={this.state.propertyForm.state} onChange={e => this.handleChangeEvent(e, "state")} className="form-control" id="state" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="zipCode" className="col-form-label">Zip</label>
                                            <input type="text" required value={this.state.propertyForm.zipCode} onChange={e => this.handleChangeEvent(e, "zipCode")} className="form-control" id="zipCode" />
                                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-primary waves-effect waves-light">Update</button>

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
        );
    }
}


const mapStateToProps = state => {
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
        onUpdateProperty: (url, property, props) => dispatch(repositoryActions.putData(url, property, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

 
export default connect(mapStateToProps, mapPropsToDispatch)(UpdateProperty);


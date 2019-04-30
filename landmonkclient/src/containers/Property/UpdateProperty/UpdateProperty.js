import React, { Component } from 'react';
import { connect } from 'react-redux';

import returnPropertyInputConfiguration from '../../../Utility/PropertyInputConfiguration'

import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';


import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';


class UpdateProperty extends Component {
    state = {  
        propertyForm: {},
        isFormValid: true
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
                                                value={this.state.propertyForm.propertyName} onChange={e => this.handleChangeEvent(e)} className="form-control" id="propertyName" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address1" className="col-form-label">Address</label>
                                        <input type="text" required value={this.state.propertyForm.address1} onChange={e => this.handleChangeEvent(e)} className="form-control" id="address1" />
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
                    modalBodyText={this.props.errorMessage || this.props.errorMessage}
                    okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal()} />
            </div>
        </div>
        );
    }
}
 
export default UpdateProperty;
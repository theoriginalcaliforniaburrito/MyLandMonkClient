import React, { Component } from 'react';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import { connect } from 'react-redux';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

class UpdateProperty extends Component {
    state = {
        propertyForm: {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        const url = '/api/property/' + id;
        this.props.onGetPropertyById(url, { ...this.props });
    }

    componentWillReceiveProps = (nextProps) => {
        const updatedPropertyForm = { ...this.state.propertyForm };

        updatedPropertyForm.propertyName = nextProps.data.propertyName;
        updatedPropertyForm.address = nextProps.data.address;
        updatedPropertyForm.city = nextProps.data.city;
        updatedPropertyForm.state = nextProps.data.state;
        updatedPropertyForm.zipCode = nextProps.data.zipCode;
        this.setState({ propertyForm: updatedPropertyForm });
    }

    handleChangeEvent = (event) => {
        const updatedPropertyForm = { ...this.state.propertyForm };
        updatedPropertyForm[event.target.id] = event.target.value;

        this.setState(
            {
                propertyForm: updatedPropertyForm
            }
        )
    }

    updateProperty = (event) => {
        event.preventDefault();

        const propertyToUpdate = {
            propertyName: this.state.propertyForm.propertyName,
            address: this.state.propertyForm.address,
            city: this.state.propertyForm.city,
            state: this.state.propertyForm.state,
            zipCode: this.state.propertyForm.zipCode,
        }

        const url = "/api/property/" + this.props.data.id;

        this.props.onUpdateProperty(url, propertyToUpdate, { ...this.props });
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


                                        <button type="submit" className="btn btn-primary waves-effect waves-light">Update</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div >

                    <SuccessModal show={this.props.showSuccessModal}
                        modalHeaderText={'Success!'}
                        modalBodyText={'Property updated'}
                        okButtonText={'OK'}
                        successClick={() => this.props.onCloseSuccessModal('/properties', { ...this.props })} />

                    <ErrorModal show={this.props.showErrorModal}
                        modalHeaderText={'Error message'}
                        modalBodyText={this.props.errorMessage.title || this.props.errorMessage}
                        okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal()} />
                </div>
            </div>

        )
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

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPropertyById: (url, props) => dispatch(repositoryActions.getData(url, props)),
        onUpdateProperty: (url, owner, props) => dispatch(repositoryActions.putData(url, owner, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProperty);
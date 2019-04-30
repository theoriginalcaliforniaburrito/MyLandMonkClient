import React, { Component } from 'react';


class UpdateTenant extends Component {
    state = {
        tenantForm: {
            firstName: '',
            lastName: '',
            email: '',
            cellPhone: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let url = '/api/tenant/' + id;
        this.props.onGetTenantById(url, { ...this.props });
    }

    handleChangeEvent = (event, id) => {
        const updatedTenantForm = { ...this.state.tenantForm };

        this.setState({});
    }

    updateTenant = (event) => {
        event.preventDefault();

        const tenantToUpdate = {
            firstName: this.state.tenantForm.firstName,
            lastName: this.state.tenantForm.lastName,
            email: this.state.tenantForm.email,
            cellPhone: this.state.tenantForm.cellPhone,
        }

        const url = '/api/tenant/' + this.props.data.id;
        this.props.onUpdateTenant(url, tenantToUpdate, { ...this.props });
    }

    redirectToOwnerList = () => {
        this.props.history.push('/tenant-list');
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <h4 className="page-title">Edit Tenant</h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}


                    <div className="row">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="header-title">Tenant Info</h4>

                                    <form onSubmit={e => this.updateTenant(e)}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="firstName" className="col-form-label">First Name</label>
                                                <input type="text" required
                                                    value={this.state.tenantForm.firstName} onChange={e => this.handleChangeEvent(e)} className="form-control" id="firstName" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="lastName" className="col-form-label">Last Name</label>
                                                <input type="text" required
                                                    value={this.state.tenantForm.lastName} onChange={e => this.handleChangeEvent(e)} className="form-control" id="lastName" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="email" className="col-form-label">email</label>
                                                <input type="text" required
                                                    value={this.state.tenantForm.email} onChange={e => this.handleChangeEvent(e)} className="form-control" id="email" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="cellPhone" className="col-form-label">Cell Phone</label>
                                                <input type="text" required
                                                    value={this.state.tenantForm.cellPhone} onChange={e => this.handleChangeEvent(e)} className="form-control" id="email" />
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
                        modalBodyText={'Tenant updated'}
                        okButtonText={'OK'}
                        successClick={() => this.props.onCloseSuccessModal('/properties', { ...this.props })} />

                    <ErrorModal show={this.props.showErrorModal}
                        modalHeaderText={'Error!'}
                        modalBodyText={this.props.errorMessage.title || this.props.errorMessage}
                        okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal()} />
                </div>
            </div>
        );
    }
}

export default UpdateTenant;
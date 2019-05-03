import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as repositoryActions from '../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../store/actions/errorHandlerActions';
import SuccessModal from '../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../components/Modals/ErrorModal/ErrorModal';
import { Redirect } from 'react-router-dom';


class SignUpForm extends Component {
    state = {
        signUpForm: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            isSignedUp: false
        }
    }

    handleChange = e => {
        const newSignUp = { ...this.state.signUpForm };
        newSignUp[e.target.id] = e.target.value;

        this.setState({
            signUpForm: newSignUp
        })
    }

    signUp = e => {
        e.preventDefault();

        const userToCreate = {
            firstName: this.state.signUpForm.firstName,
            lastName: this.state.signUpForm.lastName,
            email: this.state.signUpForm.email,
            username: this.state.signUpForm.username,
            password: this.state.signUpForm.password
        }

        const url = '/api/loginForm';
        this.props.onCreateUser(url, userToCreate, { ...this.props });
        
        this.setState({
            signUpForm: { ...this.state.signUpForm, isSignedUp: true}
        })
    }
    render() {
        if(this.state.signUpForm.isSignedUp === true){
            this.setState({
                isSignedUp: false
            })
            return <Redirect to='/' />
        }
        return (
            <div>
                <h1>Sign-Up</h1>
                <form onSubmit={this.signUp}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Fist Name"
                            value={this.state.signUpForm.firstName}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Last Name"
                            value={this.state.signUpForm.lastName}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={this.state.signUpForm.email}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="username"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            value={this.state.signUpForm.username}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={this.state.signUpForm.password}
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <SuccessModal show={this.props.showSuccessModal}
                        modalHeaderText={'Success!'}
                        modalBodyText={'New user created'}
                        okButtonText={'OK'}
                        successClick={() => this.props.onCloseSuccessModal('/loginForm', { ...this.props })} />

                    <ErrorModal show={this.props.showErrorModal}
                        modalHeaderText={'Error message'}
                        modalBodyText={this.props.errorMessage.title || this.props.errorMessage}
                        okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal()} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateUser: (url, user, props) => dispatch(repositoryActions.postData(url, user, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
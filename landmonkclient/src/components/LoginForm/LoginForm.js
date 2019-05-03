import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import SignUpForm from '../SignUpForm/SignUpForm';
import { connect } from 'react-redux';
import * as repositoryActions from '../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../store/actions/errorHandlerActions';
import SuccessModal from '../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../components/Modals/ErrorModal/ErrorModal';
import { Redirect } from 'react-router-dom';




class LoginForm extends Component {
    state = {
        loginForm: [
        {
            username: '',
            password: '',
            isLoggedIn: false
        }
    ]
    }

    handleChange = e => {
        const infoLoginForm = { ...this.state.loginForm };
        infoLoginForm[e.target.id] = e.target.value;

        this.setState({
            loginForm: infoLoginForm
        })
    }

    loginConfirmed = (e) =>{
        e.preventDefault();

        const info = { ...this.state.loginForm };
        if (info.username === this.props.data.username && info.password === this.props.data.password){
            
            info.isLoggedIn = true;
            info.username = '';
            info.password = '';
            console.log(info);
            this.setState({
                loginForm: info
            }) 
        }
        
    }
    render() {
        if(this.state.loginForm.isLoggedIn === true){
            this.setState({
                isLoggedIn: false
            })
            return <Redirect to='/' />
        }
        return (
            <div className="wrapper">
                <div className="container-fluid">
                    <Row>
                        <Col md={6}>
                        <h1>Login</h1>
                            <form >
                                <div className="form-group">
                                    <label>Username</label>
                                    <input 
                                        type="username" 
                                        className="form-control" 
                                        id="username" 
                                        placeholder="Enter Username" 
                                        value={this.state.loginForm.username}
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Enter Password" 
                                        value={this.state.loginForm.password}
                                        onChange={this.handleChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => this.loginConfirmed(e)}>Login</button>
                            </form>
                        </Col>
                        <Col>
                            <SignUpForm />
                        </Col>
                    </Row>
                    <SuccessModal show={this.props.showSuccessModal}
                        modalHeaderText={'Success!'}
                        modalBodyText={'Logged in'}
                        okButtonText={'OK'}
                        successClick={() => this.props.onCloseSuccessModal('/loginForm', { ...this.props })} />

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
        data: state.repository.data,
        showSuccessModal: state.repository.showSuccessModal,
        showErrorModal: state.errorHandler.showErrorModal,
        errorMessage: state.errorHandler.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
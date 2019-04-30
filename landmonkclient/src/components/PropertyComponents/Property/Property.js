import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { Button } from 'react-bootstrap';
import House from '../../../img/house.png';

const redirectToPropertyDetails = (id, history) => {
    history.push('/propertyDetails/' + id);
}

const redirectToUpdateProperty = (id, history) => {
    history.push('/updateProperty/' + id);
}

const redirectToDeleteProperty = (id, history) => {
    history.push('/deleteProperty/' + id);
}
 
const property = (props) => {
    return (
        <Aux>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card-box mb-2">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="media">
                                    <img className="d-flex align-self-center mr-3 rounded-circle" src={House} alt="House" height="64" />
                                    <div className="media-body">
                                        <h4 className="mt-0 mb-2 font-16">{props.property.propertyName}</h4>
                                        <p className="mb-1">Single-Family Home</p>
                                        <p className="mb-0">{`${props.property.address1}, ${props.property.city}, ${props.property.state} ${props.property.zipCode}`}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-right">
                                    <Button onClick={() => redirectToPropertyDetails(props.property.id, props.history)}>Details</Button>
                                    <Button variant="success" onClick={() => redirectToUpdateProperty(props.property.id, props.history)}>Edit</Button>
                                    <Button variant="danger" onClick={() => redirectToDeleteProperty(props.property.id, props.history)}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
}
 
export default property;
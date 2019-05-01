import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
// import Moment from 'react-moment';
import { Button } from 'react-bootstrap';


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
            <tr>
                <td>{props.property.propertyName}</td>
                <td>{props.property.address}</td>
                <td>{props.property.city}</td>
                <td>{props.property.state}</td>
                <td>{props.property.zipCode}</td>
                <td className="details"><Button className="details-btn" onClick={() => redirectToPropertyDetails(props.property.id, props.history)}>Details</Button>
                </td>
                <td className="update"><Button className="update-btn" bsStyle="success" onClick={() => redirectToUpdateProperty(props.property.id, props.history)}>Update</Button>
                </td>
                <td className="delete"><Button className="delete-btn" bsStyle="danger" onClick={() => redirectToDeleteProperty(props.property.id, props.history)}>Delete</Button>
                </td>
            </tr>
        </Aux>

    )
}
export default property;
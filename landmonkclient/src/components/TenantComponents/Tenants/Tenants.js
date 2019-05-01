import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

const redirectToTenantDetails = (id, history) => {
    history.push('/tenantDetails/' + id);
}

const redirectToUpdateTenant = (id, history) => {
    history.push('/updateTenant/' + id);
}

const redirectToDeleteTenant = (id, history) => {
    history.push('/deleteTenant/' + id);
}

const Tenants = (props) => {
    return (
        <Aux>

             <tr>
            <td>{`${props.tenant.firstName} ${props.tenant.lastName} `}</td>
            <td>{props.tenant.email}</td>
            <td>{props.tenant.cellPhone}</td>
            <td>
                <Button className="btn btn-success" onClick={() => redirectToUpdateTenant(props.tenant.id, props.history)}>Edit</Button>
            </td>
            <td>
                <Button className="btn btn-danger" onClick={() => redirectToDeleteTenant(props.tenant.id, props.history)}>Delete</Button>
            </td>
        </tr>
        </Aux>
    );
}

export default Tenants;
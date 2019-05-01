import React from 'react';
import { Button } from 'react-bootstrap';

const redirectToUpdateTenant = (id, history) => {
    history.push('/updateTenant/' + id);
}

const redirectToDeleteTenant = (id, history) => {
    history.push('/deleteTenant/' + id);
}

const Tenants = (props) => {
    return (
        <tr>
            <td>{`${props.tenant.firstName} ${props.tenant.lastName} `}</td>
            <td>{props.tenant.email}</td>
            <td>{props.tenant.cellPhone}</td>
            <td>
                <Button variant="success" onClick={() => redirectToUpdateTenant(props.tenant.id, props.history)}>Edit</Button>
            </td>
            <td>
                <Button variant="danger" onClick={() => redirectToDeleteTenant(props.tenant.id, props.history)}>Delete</Button>
            </td>
        </tr>
    );
}

export default Tenants;
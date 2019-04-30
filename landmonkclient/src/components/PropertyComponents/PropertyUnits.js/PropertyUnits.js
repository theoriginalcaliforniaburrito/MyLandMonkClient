import React from 'react';
import Moment from 'react-moment';

const propertyUnits = props => {
    let units = null;
    if (props.units) {
        units = props.units.map(unit => {
            return (
                <tr key={unit.id}>
                    <td>{unit.unitType}</td>
                    <td><Moment format="DD/MM/YYYY">{unit.dateCreated}</Moment></td>
                </tr>
            );
        })
    }
    return (
        <div className="col-lg-6">
            <div className="card-box">
                <h4 className="header-title">Unit Information</h4>

                <div className="table-responsive">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th>Unit Name</th>
                                <th>Beds</th>
                                <th>Baths</th>
                                <th>Sq Ft</th>
                            </tr>
                        </thead>
                        <tbody>
                            {units}
                        </tbody>
                    </table>
                </div>
                {/* <!-- end table-responsive--> */}
            </div>
            {/* <!-- end card-box --> */}
        </div>
    )
}

export default propertyUnits;
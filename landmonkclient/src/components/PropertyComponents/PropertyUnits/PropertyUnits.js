import React from 'react';

const propertyUnits = props => {
    let units = null;
    if (props.units) {
        units = props.units.map(unit => {
            return (
                <tr key={unit.id}>
                    <td>{unit.unitName}</td>
                    <td>{unit.bedroomCount}</td>
                    <td>{unit.bathroomCount}</td>
                    <td>{unit.squareFootage}</td>
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